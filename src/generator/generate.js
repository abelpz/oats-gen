import * as Eta from "Eta";
import path from "node:path";
import prettier from "prettier";
import camelCase from "camelcase";
import { dirname } from "path";
import { fileURLToPath } from "url";
import fs from "fs-extra";
import OpenAPIParser from "@readme/openapi-parser";
import { paramCase, pascalCase } from "change-case";
import {
  cleanText,
  safeType,
  getRefTarget,
  getRefs,
  safeJs,
  getArrayType,
} from "./utils.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const parser = new OpenAPIParser();
(async () => {
  const swaggerDoc = await import("../sources/dcs-swagger.mjs");
  const swagger = await parser.bundle(swaggerDoc.default);
  const utils = {
    camelCase,
    paramCase,
    safeJs,
    getRefs,
    getRefTarget,
    safeType,
    getArrayType,
    pascalCase,
  };
  const oaData = {
    ...swagger,
    global: {
      security: swagger.security,
      consumes: swagger.consumes,
      produces: swagger.produces,
    },
    models: {
      ...swagger.responses,
      ...swagger.definitions,
    },
    operations:
      swagger.swagger === "2.0"
        ? Object.keys(swagger.paths).reduce((operations, path) => {
            const currentPath = swagger.paths[path];
            Object.keys(currentPath).map((method) => {
              const operation = { ...currentPath[method], method, path };
              if (operation.tags) {
                const tag = operation.tags[0];
                if (!operations[tag]) operations[tag] = [];
                operations[tag].push(operation);
                // operation?.tags.forEach((tag) => {

                // });
              } else {
                if (!operations.others) operations.others = [];
                operations.others.push(operation);
              }
            });
            return operations;
          }, {})
        : {},
  };

  Eta.configure({
    views: path.join(__dirname, "templates"),
  });

  const getProperties = (schema) => {
    const properties = schema.properties;
    return properties
      ? Object.keys(properties)?.map((key) => {
          const property = properties[key];
          const { type, $ref, description } = property;
          return {
            name: key,
            required: !!schema.required?.includes(key),
            ...handleType(property),
            description: cleanText(description || ""),
          };
        })
      : [];
  };

  const handleType = (schema) => {
    const handlers = {
      object: () => ({
        type: schema.type,
        properties: getProperties(schema),
      }),
      array: () => ({ type: getArrayType(schema) }),
    };
    const handle = handlers[schema.type];
    return typeof handle === "function"
      ? handle()
      : {
          type:
            safeType(schema.type) ??
            (schema.$ref ? getRefTarget(schema.$ref) : "unknown"),
        };
  };

  function prepareModel(model) {
    const refs = getRefs(model);
    const kind = model.schema ? "response" : "definition";
    const template =
      model.type === "object" || model.schema?.type === "object"
        ? "interface"
        : "type";
    const preparedModel = {
      template,
      kind,
      ...handleType(kind === "response" ? model.schema : model),
      imports: refs.map((ref) => {
        const importName = getRefTarget(ref);
        return { name: importName, slug: paramCase(importName) };
      }),
    };
    return preparedModel;
  }

  async function createModel(preparedModel) {
    const modelFileContent = prettier.format(
      await Eta.renderFile("./model", {
        data: preparedModel,
        utils,
      }),
      { parser: "typescript" }
    );
    fs.outputFileSync(
      path.join(
        __dirname,
        "generated",
        "models",
        `${paramCase(preparedModel.name)}.ts`
      ),
      modelFileContent
    );
  }

  async function createModels(models) {
    const barrel = Object.keys(models)
      .map((key) => {
        const model = { ...models[key] };
        const preparedModel = {
          name: pascalCase(key),
          ...prepareModel(model),
          description: cleanText(model.description || model.title || ""),
        };
        createModel(preparedModel);
        return `export * from './${paramCase(preparedModel.name)}';\n`;
      })
      .join("");
    fs.outputFileSync(
      path.join(__dirname, "generated", "models", `index.ts`),
      barrel
    );
  }
  createModels(oaData.models);

  async function createFunction(operation, tagName) {
    const operationContent = prettier.format(
      await Eta.renderFile("./function", {
        data: { ...operation, tagName },
        utils,
        global: { ...oaData.global },
      }),
      { parser: "typescript" }
    );
    fs.outputFileSync(
      path.join(
        __dirname,
        "generated",
        paramCase(tagName),
        `${paramCase(operation.operationId)}.ts`
      ),
      operationContent
    );
  }

  async function createTagFunctions(tag, tagName) {
    const funcBarrel = tag.map((operation) => {
      createFunction(operation, tagName);
      const opName = operation.operationId;
      const opPath = `./${paramCase(opName)}`;
      let imports = `export { default as ${opName} } from '${opPath}';`;
      imports += `\nexport * from '${opPath}';\n\n`;
      return imports;
    });
    fs.outputFileSync(
      path.join(__dirname, "generated", paramCase(tagName), `index.ts`),
      funcBarrel.join("")
    );
  }

  async function createUtils() {
    const utilsContent = prettier.format(await Eta.renderFile("./utils"), {
      parser: "typescript",
    });
    fs.outputFileSync(
      path.join(__dirname, "generated", `utils.ts`),
      utilsContent
    );
  }

  async function createFunctions(data) {
    createUtils();
    const tagsBarrel = Object.keys(data).map((key) => {
      const tag = data[key];
      createTagFunctions(tag, key);
      return `export * from './${paramCase(key)}';\n\n`;
    });
    tagsBarrel.push(`export * from './models';\n`);
    fs.outputFileSync(
      path.join(__dirname, "generated", `index.ts`),
      tagsBarrel.join("")
    );
  }
  createFunctions(oaData.operations);
})();
