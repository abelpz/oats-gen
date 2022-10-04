export interface baseParams {
  auth?: auth;
  options?: {
    basePath?: string;
    headers?: { [key: string]: any };
    query?: { [key: string]: any };
  };
}

export type basic = { username?: string; password?: string };

export interface auth extends basic {
  [key: string]: string | undefined;
}

export interface RequestParams {
  method: string;
  body?: unknown;
  formData?: { [key: string]: any };
  query?: { [key: string]: any };
  path: string;
  basePath?: string;
  headers: HeadersInit;
  auth?: auth;
}

export async function request(params: RequestParams) {
  const { method, body, query, formData, path, basePath, headers, auth } =
    params;
  const { username, password }: basic = auth || {};
  const defaultPath = "https://git.door43.org/api/v1";
  const urlObj = new URL((basePath || defaultPath) + path);
  console.log(urlObj.pathname);
  const queryObj = new URLSearchParams(urlObj.search);
  const basicAuth =
    username && password
      ? { Authorization: "Basic " + btoa(username + ":" + password) }
      : undefined;

  for (const key in formData) {
    if (formData?.[key] !== undefined) queryObj.set(key, formData[key]);
  }

  for (const key in query) {
    if (query?.[key] !== undefined) queryObj.set(key, query[key]);
  }
  urlObj.search = new URLSearchParams(queryObj).toString();
  const url = urlObj.toString();

  const _body = typeof body === "string" ? body : JSON.stringify(body);

  const data = await fetch(url, {
    method,
    headers: { ...headers, ...basicAuth },
    body: formData instanceof FormData ? formData : _body,
  });
  return await data.json();
}
