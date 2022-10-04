export default {
  "consumes": ["application/json", "text/plain"],
  "produces": ["application/json", "text/html"],
  "schemes": ["http", "https"],
  "swagger": "2.0",
  "info": {
    "description": "This documentation describes the DCS (Gitea) API.",
    "title": "DCS (Gitea) API.",
    "license": {
      "name": "MIT",
      "url": "http://opensource.org/licenses/MIT"
    },
    "version": ""
  },
  "basePath": "/api/v1",
  "paths": {
    "/admin/cron": {
      "get": {
        "produces": ["application/json"],
        "tags": ["admin"],
        "summary": "List cron tasks",
        "operationId": "adminCronList",
        "parameters": [
          {
            "type": "integer",
            "description": "page number of results to return (1-based)",
            "name": "page",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page size of results",
            "name": "limit",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/CronList"
          },
          "403": {
            "$ref": "#/responses/forbidden"
          }
        }
      }
    },
    "/admin/cron/{task}": {
      "post": {
        "produces": ["application/json"],
        "tags": ["admin"],
        "summary": "Run cron task",
        "operationId": "adminCronRun",
        "parameters": [
          {
            "type": "string",
            "description": "task to run",
            "name": "task",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "204": {
            "$ref": "#/responses/empty"
          },
          "404": {
            "$ref": "#/responses/notFound"
          }
        }
      }
    },
    "/admin/orgs": {
      "get": {
        "produces": ["application/json"],
        "tags": ["admin"],
        "summary": "List all organizations",
        "operationId": "adminGetAllOrgs",
        "parameters": [
          {
            "type": "string",
            "description": "If the org has one or more repos with the given language(s), the org will be in the results. Multiple lang's are ORed.",
            "name": "lang",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page number of results to return (1-based)",
            "name": "page",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page size of results",
            "name": "limit",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/OrganizationList"
          },
          "403": {
            "$ref": "#/responses/forbidden"
          }
        }
      }
    },
    "/admin/unadopted": {
      "get": {
        "produces": ["application/json"],
        "tags": ["admin"],
        "summary": "List unadopted repositories",
        "operationId": "adminUnadoptedList",
        "parameters": [
          {
            "type": "integer",
            "description": "page number of results to return (1-based)",
            "name": "page",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page size of results",
            "name": "limit",
            "in": "query"
          },
          {
            "type": "string",
            "description": "pattern of repositories to search for",
            "name": "pattern",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/StringSlice"
          },
          "403": {
            "$ref": "#/responses/forbidden"
          }
        }
      }
    },
    "/admin/unadopted/{owner}/{repo}": {
      "post": {
        "produces": ["application/json"],
        "tags": ["admin"],
        "summary": "Adopt unadopted files as a repository",
        "operationId": "adminAdoptRepository",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "204": {
            "$ref": "#/responses/empty"
          },
          "403": {
            "$ref": "#/responses/forbidden"
          },
          "404": {
            "$ref": "#/responses/notFound"
          }
        }
      },
      "delete": {
        "produces": ["application/json"],
        "tags": ["admin"],
        "summary": "Delete unadopted files",
        "operationId": "adminDeleteUnadoptedRepository",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "204": {
            "$ref": "#/responses/empty"
          },
          "403": {
            "$ref": "#/responses/forbidden"
          }
        }
      }
    },
    "/admin/users": {
      "get": {
        "produces": ["application/json"],
        "tags": ["admin"],
        "summary": "List all users",
        "operationId": "adminGetAllUsers",
        "parameters": [
          {
            "type": "string",
            "description": "If the user has one or more repos with the given language(s), the org will be in the results. Multiple lang's are ORed.",
            "name": "lang",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page number of results to return (1-based)",
            "name": "page",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page size of results",
            "name": "limit",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/UserList"
          },
          "403": {
            "$ref": "#/responses/forbidden"
          }
        }
      },
      "post": {
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "tags": ["admin"],
        "summary": "Create a user",
        "operationId": "adminCreateUser",
        "parameters": [
          {
            "name": "body",
            "in": "body",
            "schema": {
              "$ref": "#/definitions/CreateUserOption"
            }
          }
        ],
        "responses": {
          "201": {
            "$ref": "#/responses/User"
          },
          "400": {
            "$ref": "#/responses/error"
          },
          "403": {
            "$ref": "#/responses/forbidden"
          },
          "422": {
            "$ref": "#/responses/validationError"
          }
        }
      }
    },
    "/admin/users/{username}": {
      "delete": {
        "produces": ["application/json"],
        "tags": ["admin"],
        "summary": "Delete a user",
        "operationId": "adminDeleteUser",
        "parameters": [
          {
            "type": "string",
            "description": "username of user to delete",
            "name": "username",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "204": {
            "$ref": "#/responses/empty"
          },
          "403": {
            "$ref": "#/responses/forbidden"
          },
          "422": {
            "$ref": "#/responses/validationError"
          }
        }
      },
      "patch": {
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "tags": ["admin"],
        "summary": "Edit an existing user",
        "operationId": "adminEditUser",
        "parameters": [
          {
            "type": "string",
            "description": "username of user to edit",
            "name": "username",
            "in": "path",
            "required": true
          },
          {
            "name": "body",
            "in": "body",
            "schema": {
              "$ref": "#/definitions/EditUserOption"
            }
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/User"
          },
          "403": {
            "$ref": "#/responses/forbidden"
          },
          "422": {
            "$ref": "#/responses/validationError"
          }
        }
      }
    },
    "/admin/users/{username}/keys": {
      "post": {
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "tags": ["admin"],
        "summary": "Add a public key on behalf of a user",
        "operationId": "adminCreatePublicKey",
        "parameters": [
          {
            "type": "string",
            "description": "username of the user",
            "name": "username",
            "in": "path",
            "required": true
          },
          {
            "name": "key",
            "in": "body",
            "schema": {
              "$ref": "#/definitions/CreateKeyOption"
            }
          }
        ],
        "responses": {
          "201": {
            "$ref": "#/responses/PublicKey"
          },
          "403": {
            "$ref": "#/responses/forbidden"
          },
          "422": {
            "$ref": "#/responses/validationError"
          }
        }
      }
    },
    "/admin/users/{username}/keys/{id}": {
      "delete": {
        "produces": ["application/json"],
        "tags": ["admin"],
        "summary": "Delete a user's public key",
        "operationId": "adminDeleteUserPublicKey",
        "parameters": [
          {
            "type": "string",
            "description": "username of user",
            "name": "username",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "id of the key to delete",
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "204": {
            "$ref": "#/responses/empty"
          },
          "403": {
            "$ref": "#/responses/forbidden"
          },
          "404": {
            "$ref": "#/responses/notFound"
          }
        }
      }
    },
    "/admin/users/{username}/orgs": {
      "post": {
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "tags": ["admin"],
        "summary": "Create an organization",
        "operationId": "adminCreateOrg",
        "parameters": [
          {
            "type": "string",
            "description": "username of the user that will own the created organization",
            "name": "username",
            "in": "path",
            "required": true
          },
          {
            "name": "organization",
            "in": "body",
            "required": true,
            "schema": {
              "$ref": "#/definitions/CreateOrgOption"
            }
          }
        ],
        "responses": {
          "201": {
            "$ref": "#/responses/Organization"
          },
          "403": {
            "$ref": "#/responses/forbidden"
          },
          "422": {
            "$ref": "#/responses/validationError"
          }
        }
      }
    },
    "/admin/users/{username}/repos": {
      "post": {
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "tags": ["admin"],
        "summary": "Create a repository on behalf of a user",
        "operationId": "adminCreateRepo",
        "parameters": [
          {
            "type": "string",
            "description": "username of the user. This user will own the created repository",
            "name": "username",
            "in": "path",
            "required": true
          },
          {
            "name": "repository",
            "in": "body",
            "required": true,
            "schema": {
              "$ref": "#/definitions/CreateRepoOption"
            }
          }
        ],
        "responses": {
          "201": {
            "$ref": "#/responses/Repository"
          },
          "403": {
            "$ref": "#/responses/forbidden"
          },
          "404": {
            "$ref": "#/responses/notFound"
          },
          "409": {
            "$ref": "#/responses/error"
          },
          "422": {
            "$ref": "#/responses/validationError"
          }
        }
      }
    },
    "/markdown": {
      "post": {
        "consumes": ["application/json"],
        "produces": ["text/html"],
        "tags": ["miscellaneous"],
        "summary": "Render a markdown document as HTML",
        "operationId": "renderMarkdown",
        "parameters": [
          {
            "name": "body",
            "in": "body",
            "schema": {
              "$ref": "#/definitions/MarkdownOption"
            }
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/MarkdownRender"
          },
          "422": {
            "$ref": "#/responses/validationError"
          }
        }
      }
    },
    "/markdown/raw": {
      "post": {
        "consumes": ["text/plain"],
        "produces": ["text/html"],
        "tags": ["miscellaneous"],
        "summary": "Render raw markdown as HTML",
        "operationId": "renderMarkdownRaw",
        "parameters": [
          {
            "description": "Request body to render",
            "name": "body",
            "in": "body",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/MarkdownRender"
          },
          "422": {
            "$ref": "#/responses/validationError"
          }
        }
      }
    },
    "/nodeinfo": {
      "get": {
        "produces": ["application/json"],
        "tags": ["miscellaneous"],
        "summary": "Returns the nodeinfo of the Gitea application",
        "operationId": "getNodeInfo",
        "responses": {
          "200": {
            "$ref": "#/responses/NodeInfo"
          }
        }
      }
    },
    "/notifications": {
      "get": {
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "tags": ["notification"],
        "summary": "List users's notification threads",
        "operationId": "notifyGetList",
        "parameters": [
          {
            "type": "boolean",
            "description": "If true, show notifications marked as read. Default value is false",
            "name": "all",
            "in": "query"
          },
          {
            "type": "array",
            "items": {
              "type": "string"
            },
            "collectionFormat": "multi",
            "description": "Show notifications with the provided status types. Options are: unread, read and/or pinned. Defaults to unread \u0026 pinned.",
            "name": "status-types",
            "in": "query"
          },
          {
            "type": "array",
            "items": {
              "enum": ["issue", "pull", "commit", "repository"],
              "type": "string"
            },
            "collectionFormat": "multi",
            "description": "filter notifications by subject type",
            "name": "subject-type",
            "in": "query"
          },
          {
            "type": "string",
            "format": "date-time",
            "description": "Only show notifications updated after the given time. This is a timestamp in RFC 3339 format",
            "name": "since",
            "in": "query"
          },
          {
            "type": "string",
            "format": "date-time",
            "description": "Only show notifications updated before the given time. This is a timestamp in RFC 3339 format",
            "name": "before",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page number of results to return (1-based)",
            "name": "page",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page size of results",
            "name": "limit",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/NotificationThreadList"
          }
        }
      },
      "put": {
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "tags": ["notification"],
        "summary": "Mark notification threads as read, pinned or unread",
        "operationId": "notifyReadList",
        "parameters": [
          {
            "type": "string",
            "format": "date-time",
            "description": "Describes the last point that notifications were checked. Anything updated since this time will not be updated.",
            "name": "last_read_at",
            "in": "query"
          },
          {
            "type": "string",
            "description": "If true, mark all notifications on this repo. Default value is false",
            "name": "all",
            "in": "query"
          },
          {
            "type": "array",
            "items": {
              "type": "string"
            },
            "collectionFormat": "multi",
            "description": "Mark notifications with the provided status types. Options are: unread, read and/or pinned. Defaults to unread.",
            "name": "status-types",
            "in": "query"
          },
          {
            "type": "string",
            "description": "Status to mark notifications as, Defaults to read.",
            "name": "to-status",
            "in": "query"
          }
        ],
        "responses": {
          "205": {
            "$ref": "#/responses/NotificationThreadList"
          }
        }
      }
    },
    "/notifications/new": {
      "get": {
        "tags": ["notification"],
        "summary": "Check if unread notifications exist",
        "operationId": "notifyNewAvailable",
        "responses": {
          "200": {
            "$ref": "#/responses/NotificationCount"
          }
        }
      }
    },
    "/notifications/threads/{id}": {
      "get": {
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "tags": ["notification"],
        "summary": "Get notification thread by ID",
        "operationId": "notifyGetThread",
        "parameters": [
          {
            "type": "string",
            "description": "id of notification thread",
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/NotificationThread"
          },
          "403": {
            "$ref": "#/responses/forbidden"
          },
          "404": {
            "$ref": "#/responses/notFound"
          }
        }
      },
      "patch": {
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "tags": ["notification"],
        "summary": "Mark notification thread as read by ID",
        "operationId": "notifyReadThread",
        "parameters": [
          {
            "type": "string",
            "description": "id of notification thread",
            "name": "id",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "default": "read",
            "description": "Status to mark notifications as",
            "name": "to-status",
            "in": "query"
          }
        ],
        "responses": {
          "205": {
            "$ref": "#/responses/NotificationThread"
          },
          "403": {
            "$ref": "#/responses/forbidden"
          },
          "404": {
            "$ref": "#/responses/notFound"
          }
        }
      }
    },
    "/org/{org}/repos": {
      "post": {
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "tags": ["organization"],
        "summary": "Create a repository in an organization",
        "operationId": "createOrgRepoDeprecated",
        "deprecated": true,
        "parameters": [
          {
            "type": "string",
            "description": "name of organization",
            "name": "org",
            "in": "path",
            "required": true
          },
          {
            "name": "body",
            "in": "body",
            "schema": {
              "$ref": "#/definitions/CreateRepoOption"
            }
          }
        ],
        "responses": {
          "201": {
            "$ref": "#/responses/Repository"
          },
          "403": {
            "$ref": "#/responses/forbidden"
          },
          "422": {
            "$ref": "#/responses/validationError"
          }
        }
      }
    },
    "/orgs": {
      "get": {
        "produces": ["application/json"],
        "tags": ["organization"],
        "summary": "Get list of organizations",
        "operationId": "orgGetAll",
        "parameters": [
          {
            "type": "string",
            "description": "If the org has one or more repos with the given language(s), the org will be in the results. Multiple lang's are ORed.",
            "name": "lang",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page number of results to return (1-based)",
            "name": "page",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page size of results",
            "name": "limit",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/OrganizationList"
          }
        }
      },
      "post": {
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "tags": ["organization"],
        "summary": "Create an organization",
        "operationId": "orgCreate",
        "parameters": [
          {
            "name": "organization",
            "in": "body",
            "required": true,
            "schema": {
              "$ref": "#/definitions/CreateOrgOption"
            }
          }
        ],
        "responses": {
          "201": {
            "$ref": "#/responses/Organization"
          },
          "403": {
            "$ref": "#/responses/forbidden"
          },
          "422": {
            "$ref": "#/responses/validationError"
          }
        }
      }
    },
    "/orgs/{org}": {
      "get": {
        "produces": ["application/json"],
        "tags": ["organization"],
        "summary": "Get an organization",
        "operationId": "orgGet",
        "parameters": [
          {
            "type": "string",
            "description": "name of the organization to get",
            "name": "org",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/Organization"
          }
        }
      },
      "delete": {
        "produces": ["application/json"],
        "tags": ["organization"],
        "summary": "Delete an organization",
        "operationId": "orgDelete",
        "parameters": [
          {
            "type": "string",
            "description": "organization that is to be deleted",
            "name": "org",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "204": {
            "$ref": "#/responses/empty"
          }
        }
      },
      "patch": {
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "tags": ["organization"],
        "summary": "Edit an organization",
        "operationId": "orgEdit",
        "parameters": [
          {
            "type": "string",
            "description": "name of the organization to edit",
            "name": "org",
            "in": "path",
            "required": true
          },
          {
            "name": "body",
            "in": "body",
            "required": true,
            "schema": {
              "$ref": "#/definitions/EditOrgOption"
            }
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/Organization"
          }
        }
      }
    },
    "/orgs/{org}/hooks": {
      "get": {
        "produces": ["application/json"],
        "tags": ["organization"],
        "summary": "List an organization's webhooks",
        "operationId": "orgListHooks",
        "parameters": [
          {
            "type": "string",
            "description": "name of the organization",
            "name": "org",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "description": "page number of results to return (1-based)",
            "name": "page",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page size of results",
            "name": "limit",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/HookList"
          }
        }
      }
    },
    "/orgs/{org}/hooks/": {
      "post": {
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "tags": ["organization"],
        "summary": "Create a hook",
        "operationId": "orgCreateHook",
        "parameters": [
          {
            "type": "string",
            "description": "name of the organization",
            "name": "org",
            "in": "path",
            "required": true
          },
          {
            "name": "body",
            "in": "body",
            "required": true,
            "schema": {
              "$ref": "#/definitions/CreateHookOption"
            }
          }
        ],
        "responses": {
          "201": {
            "$ref": "#/responses/Hook"
          }
        }
      }
    },
    "/orgs/{org}/hooks/{id}": {
      "get": {
        "produces": ["application/json"],
        "tags": ["organization"],
        "summary": "Get a hook",
        "operationId": "orgGetHook",
        "parameters": [
          {
            "type": "string",
            "description": "name of the organization",
            "name": "org",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "id of the hook to get",
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/Hook"
          }
        }
      },
      "delete": {
        "produces": ["application/json"],
        "tags": ["organization"],
        "summary": "Delete a hook",
        "operationId": "orgDeleteHook",
        "parameters": [
          {
            "type": "string",
            "description": "name of the organization",
            "name": "org",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "id of the hook to delete",
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "204": {
            "$ref": "#/responses/empty"
          }
        }
      },
      "patch": {
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "tags": ["organization"],
        "summary": "Update a hook",
        "operationId": "orgEditHook",
        "parameters": [
          {
            "type": "string",
            "description": "name of the organization",
            "name": "org",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "id of the hook to update",
            "name": "id",
            "in": "path",
            "required": true
          },
          {
            "name": "body",
            "in": "body",
            "schema": {
              "$ref": "#/definitions/EditHookOption"
            }
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/Hook"
          }
        }
      }
    },
    "/orgs/{org}/labels": {
      "get": {
        "produces": ["application/json"],
        "tags": ["organization"],
        "summary": "List an organization's labels",
        "operationId": "orgListLabels",
        "parameters": [
          {
            "type": "string",
            "description": "name of the organization",
            "name": "org",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "description": "page number of results to return (1-based)",
            "name": "page",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page size of results",
            "name": "limit",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/LabelList"
          }
        }
      },
      "post": {
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "tags": ["organization"],
        "summary": "Create a label for an organization",
        "operationId": "orgCreateLabel",
        "parameters": [
          {
            "type": "string",
            "description": "name of the organization",
            "name": "org",
            "in": "path",
            "required": true
          },
          {
            "name": "body",
            "in": "body",
            "schema": {
              "$ref": "#/definitions/CreateLabelOption"
            }
          }
        ],
        "responses": {
          "201": {
            "$ref": "#/responses/Label"
          },
          "422": {
            "$ref": "#/responses/validationError"
          }
        }
      }
    },
    "/orgs/{org}/labels/{id}": {
      "get": {
        "produces": ["application/json"],
        "tags": ["organization"],
        "summary": "Get a single label",
        "operationId": "orgGetLabel",
        "parameters": [
          {
            "type": "string",
            "description": "name of the organization",
            "name": "org",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "id of the label to get",
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/Label"
          }
        }
      },
      "delete": {
        "tags": ["organization"],
        "summary": "Delete a label",
        "operationId": "orgDeleteLabel",
        "parameters": [
          {
            "type": "string",
            "description": "name of the organization",
            "name": "org",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "id of the label to delete",
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "204": {
            "$ref": "#/responses/empty"
          }
        }
      },
      "patch": {
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "tags": ["organization"],
        "summary": "Update a label",
        "operationId": "orgEditLabel",
        "parameters": [
          {
            "type": "string",
            "description": "name of the organization",
            "name": "org",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "id of the label to edit",
            "name": "id",
            "in": "path",
            "required": true
          },
          {
            "name": "body",
            "in": "body",
            "schema": {
              "$ref": "#/definitions/EditLabelOption"
            }
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/Label"
          },
          "422": {
            "$ref": "#/responses/validationError"
          }
        }
      }
    },
    "/orgs/{org}/members": {
      "get": {
        "produces": ["application/json"],
        "tags": ["organization"],
        "summary": "List an organization's members",
        "operationId": "orgListMembers",
        "parameters": [
          {
            "type": "string",
            "description": "name of the organization",
            "name": "org",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "description": "page number of results to return (1-based)",
            "name": "page",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page size of results",
            "name": "limit",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/UserList"
          }
        }
      }
    },
    "/orgs/{org}/members/{username}": {
      "get": {
        "tags": ["organization"],
        "summary": "Check if a user is a member of an organization",
        "operationId": "orgIsMember",
        "parameters": [
          {
            "type": "string",
            "description": "name of the organization",
            "name": "org",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "username of the user",
            "name": "username",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "204": {
            "description": "user is a member"
          },
          "302": {
            "description": "redirection to /orgs/{org}/public_members/{username}"
          },
          "404": {
            "description": "user is not a member"
          }
        }
      },
      "delete": {
        "produces": ["application/json"],
        "tags": ["organization"],
        "summary": "Remove a member from an organization",
        "operationId": "orgDeleteMember",
        "parameters": [
          {
            "type": "string",
            "description": "name of the organization",
            "name": "org",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "username of the user",
            "name": "username",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "204": {
            "description": "member removed"
          }
        }
      }
    },
    "/orgs/{org}/public_members": {
      "get": {
        "produces": ["application/json"],
        "tags": ["organization"],
        "summary": "List an organization's public members",
        "operationId": "orgListPublicMembers",
        "parameters": [
          {
            "type": "string",
            "description": "name of the organization",
            "name": "org",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "description": "page number of results to return (1-based)",
            "name": "page",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page size of results",
            "name": "limit",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/UserList"
          }
        }
      }
    },
    "/orgs/{org}/public_members/{username}": {
      "get": {
        "tags": ["organization"],
        "summary": "Check if a user is a public member of an organization",
        "operationId": "orgIsPublicMember",
        "parameters": [
          {
            "type": "string",
            "description": "name of the organization",
            "name": "org",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "username of the user",
            "name": "username",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "204": {
            "description": "user is a public member"
          },
          "404": {
            "description": "user is not a public member"
          }
        }
      },
      "put": {
        "produces": ["application/json"],
        "tags": ["organization"],
        "summary": "Publicize a user's membership",
        "operationId": "orgPublicizeMember",
        "parameters": [
          {
            "type": "string",
            "description": "name of the organization",
            "name": "org",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "username of the user",
            "name": "username",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "204": {
            "description": "membership publicized"
          },
          "403": {
            "$ref": "#/responses/forbidden"
          }
        }
      },
      "delete": {
        "produces": ["application/json"],
        "tags": ["organization"],
        "summary": "Conceal a user's membership",
        "operationId": "orgConcealMember",
        "parameters": [
          {
            "type": "string",
            "description": "name of the organization",
            "name": "org",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "username of the user",
            "name": "username",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "204": {
            "$ref": "#/responses/empty"
          },
          "403": {
            "$ref": "#/responses/forbidden"
          }
        }
      }
    },
    "/orgs/{org}/repos": {
      "get": {
        "produces": ["application/json"],
        "tags": ["organization"],
        "summary": "List an organization's repos",
        "operationId": "orgListRepos",
        "parameters": [
          {
            "type": "string",
            "description": "name of the organization",
            "name": "org",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "description": "page number of results to return (1-based)",
            "name": "page",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page size of results",
            "name": "limit",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/RepositoryList"
          }
        }
      },
      "post": {
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "tags": ["organization"],
        "summary": "Create a repository in an organization",
        "operationId": "createOrgRepo",
        "parameters": [
          {
            "type": "string",
            "description": "name of organization",
            "name": "org",
            "in": "path",
            "required": true
          },
          {
            "name": "body",
            "in": "body",
            "schema": {
              "$ref": "#/definitions/CreateRepoOption"
            }
          }
        ],
        "responses": {
          "201": {
            "$ref": "#/responses/Repository"
          },
          "403": {
            "$ref": "#/responses/forbidden"
          },
          "404": {
            "$ref": "#/responses/notFound"
          }
        }
      }
    },
    "/orgs/{org}/teams": {
      "get": {
        "produces": ["application/json"],
        "tags": ["organization"],
        "summary": "List an organization's teams",
        "operationId": "orgListTeams",
        "parameters": [
          {
            "type": "string",
            "description": "name of the organization",
            "name": "org",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "description": "page number of results to return (1-based)",
            "name": "page",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page size of results",
            "name": "limit",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/TeamList"
          }
        }
      },
      "post": {
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "tags": ["organization"],
        "summary": "Create a team",
        "operationId": "orgCreateTeam",
        "parameters": [
          {
            "type": "string",
            "description": "name of the organization",
            "name": "org",
            "in": "path",
            "required": true
          },
          {
            "name": "body",
            "in": "body",
            "schema": {
              "$ref": "#/definitions/CreateTeamOption"
            }
          }
        ],
        "responses": {
          "201": {
            "$ref": "#/responses/Team"
          },
          "422": {
            "$ref": "#/responses/validationError"
          }
        }
      }
    },
    "/orgs/{org}/teams/search": {
      "get": {
        "produces": ["application/json"],
        "tags": ["organization"],
        "summary": "Search for teams within an organization",
        "operationId": "teamSearch",
        "parameters": [
          {
            "type": "string",
            "description": "name of the organization",
            "name": "org",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "keywords to search",
            "name": "q",
            "in": "query"
          },
          {
            "type": "boolean",
            "description": "include search within team description (defaults to true)",
            "name": "include_desc",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page number of results to return (1-based)",
            "name": "page",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page size of results",
            "name": "limit",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "description": "SearchResults of a successful search",
            "schema": {
              "type": "object",
              "properties": {
                "data": {
                  "type": "array",
                  "items": {
                    "$ref": "#/definitions/Team"
                  }
                },
                "ok": {
                  "type": "boolean"
                }
              }
            }
          }
        }
      }
    },
    "/repos/issues/search": {
      "get": {
        "produces": ["application/json"],
        "tags": ["issue"],
        "summary": "Search for issues across the repositories that the user has access to",
        "operationId": "issueSearchIssues",
        "parameters": [
          {
            "type": "string",
            "description": "whether issue is open or closed",
            "name": "state",
            "in": "query"
          },
          {
            "type": "string",
            "description": "comma separated list of labels. Fetch only issues that have any of this labels. Non existent labels are discarded",
            "name": "labels",
            "in": "query"
          },
          {
            "type": "string",
            "description": "comma separated list of milestone names. Fetch only issues that have any of this milestones. Non existent are discarded",
            "name": "milestones",
            "in": "query"
          },
          {
            "type": "string",
            "description": "search string",
            "name": "q",
            "in": "query"
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "repository to prioritize in the results",
            "name": "priority_repo_id",
            "in": "query"
          },
          {
            "type": "string",
            "description": "filter by type (issues / pulls) if set",
            "name": "type",
            "in": "query"
          },
          {
            "type": "string",
            "format": "date-time",
            "description": "Only show notifications updated after the given time. This is a timestamp in RFC 3339 format",
            "name": "since",
            "in": "query"
          },
          {
            "type": "string",
            "format": "date-time",
            "description": "Only show notifications updated before the given time. This is a timestamp in RFC 3339 format",
            "name": "before",
            "in": "query"
          },
          {
            "type": "boolean",
            "description": "filter (issues / pulls) assigned to you, default is false",
            "name": "assigned",
            "in": "query"
          },
          {
            "type": "boolean",
            "description": "filter (issues / pulls) created by you, default is false",
            "name": "created",
            "in": "query"
          },
          {
            "type": "boolean",
            "description": "filter (issues / pulls) mentioning you, default is false",
            "name": "mentioned",
            "in": "query"
          },
          {
            "type": "boolean",
            "description": "filter pulls requesting your review, default is false",
            "name": "review_requested",
            "in": "query"
          },
          {
            "type": "string",
            "description": "filter by owner",
            "name": "owner",
            "in": "query"
          },
          {
            "type": "string",
            "description": "filter by team (requires organization owner parameter to be provided)",
            "name": "team",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page number of results to return (1-based)",
            "name": "page",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page size of results",
            "name": "limit",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/IssueList"
          }
        }
      }
    },
    "/repos/migrate": {
      "post": {
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Migrate a remote git repository",
        "operationId": "repoMigrate",
        "parameters": [
          {
            "name": "body",
            "in": "body",
            "schema": {
              "$ref": "#/definitions/MigrateRepoOptions"
            }
          }
        ],
        "responses": {
          "201": {
            "$ref": "#/responses/Repository"
          },
          "403": {
            "$ref": "#/responses/forbidden"
          },
          "422": {
            "$ref": "#/responses/validationError"
          }
        }
      }
    },
    "/repos/search": {
      "get": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Search for repositories",
        "operationId": "repoSearch",
        "parameters": [
          {
            "type": "string",
            "description": "keyword",
            "name": "q",
            "in": "query"
          },
          {
            "type": "boolean",
            "description": "Limit search to repositories with keyword as topic",
            "name": "topic",
            "in": "query"
          },
          {
            "type": "boolean",
            "description": "include search of keyword within repository description (defaults to false)",
            "name": "includeDesc",
            "in": "query"
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "search only for repos that the user with the given id owns or contributes to",
            "name": "uid",
            "in": "query"
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "repo owner to prioritize in the results",
            "name": "priority_owner_id",
            "in": "query"
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "search only for repos that belong to the given team id",
            "name": "team_id",
            "in": "query"
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "search only for repos that the user with the given id has starred",
            "name": "starredBy",
            "in": "query"
          },
          {
            "type": "boolean",
            "description": "include private repositories this user has access to (defaults to true)",
            "name": "private",
            "in": "query"
          },
          {
            "type": "boolean",
            "description": "show only pubic, private or all repositories (defaults to all)",
            "name": "is_private",
            "in": "query"
          },
          {
            "type": "boolean",
            "description": "include template repositories this user has access to (defaults to true)",
            "name": "template",
            "in": "query"
          },
          {
            "type": "boolean",
            "description": "show only archived, non-archived or all repositories (defaults to all)",
            "name": "archived",
            "in": "query"
          },
          {
            "type": "string",
            "description": "type of repository to search for. Supported values are \"fork\", \"source\", \"mirror\" and \"collaborative\"",
            "name": "mode",
            "in": "query"
          },
          {
            "type": "boolean",
            "description": "if `uid` is given, search only for repos that the user owns",
            "name": "exclusive",
            "in": "query"
          },
          {
            "type": "string",
            "description": "name of the repo. Multiple repo's are ORed.",
            "name": "repo",
            "in": "query"
          },
          {
            "type": "string",
            "description": "owner of the repo. Multiple owner's are ORed.",
            "name": "owner",
            "in": "query"
          },
          {
            "type": "string",
            "description": "If the repo is a resource of the given language(s), the repo will be in the results. Multiple lang's are ORed.",
            "name": "lang",
            "in": "query"
          },
          {
            "type": "string",
            "description": "resource subject. Multiple subject's are ORed.",
            "name": "subject",
            "in": "query"
          },
          {
            "type": "string",
            "description": "book (project id) that exist in a resource. If the resource contains the the book, its repository will be included in the results. Multiple book's are ORed.",
            "name": "book",
            "in": "query"
          },
          {
            "type": "boolean",
            "description": "if false, q value will only be searched for in the repo name, owner, description and title and subject; otherwise search all values of the manifest file. (defaults to false)",
            "name": "includeMetadata",
            "in": "query"
          },
          {
            "type": "string",
            "description": "sort repos by attribute. Supported values are \"alpha\", \"created\", \"updated\", \"size\", and \"id\". Default is \"alpha\"",
            "name": "sort",
            "in": "query"
          },
          {
            "type": "string",
            "description": "sort order, either \"asc\" (ascending) or \"desc\" (descending). Default is \"asc\", ignored if \"sort\" is not specified.",
            "name": "order",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page number of results to return (1-based)",
            "name": "page",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page size of results",
            "name": "limit",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/SearchResults"
          },
          "422": {
            "$ref": "#/responses/validationError"
          }
        }
      }
    },
    "/repos/{owner}/{repo}": {
      "get": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Get a repository",
        "operationId": "repoGet",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/Repository"
          }
        }
      },
      "delete": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Delete a repository",
        "operationId": "repoDelete",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo to delete",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo to delete",
            "name": "repo",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "204": {
            "$ref": "#/responses/empty"
          },
          "403": {
            "$ref": "#/responses/forbidden"
          }
        }
      },
      "patch": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Edit a repository's properties. Only fields that are set will be changed.",
        "operationId": "repoEdit",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo to edit",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo to edit",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "description": "Properties of a repo that you can edit",
            "name": "body",
            "in": "body",
            "schema": {
              "$ref": "#/definitions/EditRepoOption"
            }
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/Repository"
          },
          "403": {
            "$ref": "#/responses/forbidden"
          },
          "422": {
            "$ref": "#/responses/validationError"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/archive/{archive}": {
      "get": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Get an archive of a repository",
        "operationId": "repoGetArchive",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "the git reference for download with attached archive format (e.g. master.zip)",
            "name": "archive",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "success"
          },
          "404": {
            "$ref": "#/responses/notFound"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/assignees": {
      "get": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Return all users that have write access and can be assigned to issues",
        "operationId": "repoGetAssignees",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/UserList"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/branch_protections": {
      "get": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "List branch protections for a repository",
        "operationId": "repoListBranchProtection",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/BranchProtectionList"
          }
        }
      },
      "post": {
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Create a branch protections for a repository",
        "operationId": "repoCreateBranchProtection",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "name": "body",
            "in": "body",
            "schema": {
              "$ref": "#/definitions/CreateBranchProtectionOption"
            }
          }
        ],
        "responses": {
          "201": {
            "$ref": "#/responses/BranchProtection"
          },
          "403": {
            "$ref": "#/responses/forbidden"
          },
          "404": {
            "$ref": "#/responses/notFound"
          },
          "422": {
            "$ref": "#/responses/validationError"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/branch_protections/{name}": {
      "get": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Get a specific branch protection for the repository",
        "operationId": "repoGetBranchProtection",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of protected branch",
            "name": "name",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/BranchProtection"
          },
          "404": {
            "$ref": "#/responses/notFound"
          }
        }
      },
      "delete": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Delete a specific branch protection for the repository",
        "operationId": "repoDeleteBranchProtection",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of protected branch",
            "name": "name",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "204": {
            "$ref": "#/responses/empty"
          },
          "404": {
            "$ref": "#/responses/notFound"
          }
        }
      },
      "patch": {
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Edit a branch protections for a repository. Only fields that are set will be changed",
        "operationId": "repoEditBranchProtection",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of protected branch",
            "name": "name",
            "in": "path",
            "required": true
          },
          {
            "name": "body",
            "in": "body",
            "schema": {
              "$ref": "#/definitions/EditBranchProtectionOption"
            }
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/BranchProtection"
          },
          "404": {
            "$ref": "#/responses/notFound"
          },
          "422": {
            "$ref": "#/responses/validationError"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/branches": {
      "get": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "List a repository's branches",
        "operationId": "repoListBranches",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "description": "page number of results to return (1-based)",
            "name": "page",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page size of results",
            "name": "limit",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/BranchList"
          }
        }
      },
      "post": {
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Create a branch",
        "operationId": "repoCreateBranch",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "name": "body",
            "in": "body",
            "schema": {
              "$ref": "#/definitions/CreateBranchRepoOption"
            }
          }
        ],
        "responses": {
          "201": {
            "$ref": "#/responses/Branch"
          },
          "404": {
            "description": "The old branch does not exist."
          },
          "409": {
            "description": "The branch with the same name already exists."
          }
        }
      }
    },
    "/repos/{owner}/{repo}/branches/{branch}": {
      "get": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Retrieve a specific branch from a repository, including its effective branch protection",
        "operationId": "repoGetBranch",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "branch to get",
            "name": "branch",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/Branch"
          },
          "404": {
            "$ref": "#/responses/notFound"
          }
        }
      },
      "delete": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Delete a specific branch from a repository",
        "operationId": "repoDeleteBranch",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "branch to delete",
            "name": "branch",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "204": {
            "$ref": "#/responses/empty"
          },
          "403": {
            "$ref": "#/responses/error"
          },
          "404": {
            "$ref": "#/responses/notFound"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/collaborators": {
      "get": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "List a repository's collaborators",
        "operationId": "repoListCollaborators",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "description": "page number of results to return (1-based)",
            "name": "page",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page size of results",
            "name": "limit",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/UserList"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/collaborators/{collaborator}": {
      "get": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Check if a user is a collaborator of a repository",
        "operationId": "repoCheckCollaborator",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "username of the collaborator",
            "name": "collaborator",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "204": {
            "$ref": "#/responses/empty"
          },
          "404": {
            "$ref": "#/responses/notFound"
          },
          "422": {
            "$ref": "#/responses/validationError"
          }
        }
      },
      "put": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Add a collaborator to a repository",
        "operationId": "repoAddCollaborator",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "username of the collaborator to add",
            "name": "collaborator",
            "in": "path",
            "required": true
          },
          {
            "name": "body",
            "in": "body",
            "schema": {
              "$ref": "#/definitions/AddCollaboratorOption"
            }
          }
        ],
        "responses": {
          "204": {
            "$ref": "#/responses/empty"
          },
          "422": {
            "$ref": "#/responses/validationError"
          }
        }
      },
      "delete": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Delete a collaborator from a repository",
        "operationId": "repoDeleteCollaborator",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "username of the collaborator to delete",
            "name": "collaborator",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "204": {
            "$ref": "#/responses/empty"
          },
          "422": {
            "$ref": "#/responses/validationError"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/commits": {
      "get": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Get a list of all commits from a repository",
        "operationId": "repoGetAllCommits",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "SHA or branch to start listing commits from (usually 'master')",
            "name": "sha",
            "in": "query"
          },
          {
            "type": "string",
            "description": "filepath of a file/dir",
            "name": "path",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page number of results to return (1-based)",
            "name": "page",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page size of results (ignored if used with 'path')",
            "name": "limit",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/CommitList"
          },
          "404": {
            "$ref": "#/responses/notFound"
          },
          "409": {
            "$ref": "#/responses/EmptyRepository"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/commits/{ref}/status": {
      "get": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Get a commit's combined status, by branch/tag/commit reference",
        "operationId": "repoGetCombinedStatusByRef",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of branch/tag/commit",
            "name": "ref",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "description": "page number of results to return (1-based)",
            "name": "page",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page size of results",
            "name": "limit",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/CombinedStatus"
          },
          "400": {
            "$ref": "#/responses/error"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/commits/{ref}/statuses": {
      "get": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Get a commit's statuses, by branch/tag/commit reference",
        "operationId": "repoListStatusesByRef",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of branch/tag/commit",
            "name": "ref",
            "in": "path",
            "required": true
          },
          {
            "enum": [
              "oldest",
              "recentupdate",
              "leastupdate",
              "leastindex",
              "highestindex"
            ],
            "type": "string",
            "description": "type of sort",
            "name": "sort",
            "in": "query"
          },
          {
            "enum": ["pending", "success", "error", "failure", "warning"],
            "type": "string",
            "description": "type of state",
            "name": "state",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page number of results to return (1-based)",
            "name": "page",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page size of results",
            "name": "limit",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/CommitStatusList"
          },
          "400": {
            "$ref": "#/responses/error"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/contents": {
      "get": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Gets the metadata of all the entries of the root dir",
        "operationId": "repoGetContentsList",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "The name of the commit/branch/tag. Default the repository’s default branch (usually master)",
            "name": "ref",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/ContentsListResponse"
          },
          "404": {
            "$ref": "#/responses/notFound"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/contents/{filepath}": {
      "get": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Gets the metadata and contents (if a file) of an entry in a repository, or a list of entries if a dir",
        "operationId": "repoGetContents",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "path of the dir, file, symlink or submodule in the repo",
            "name": "filepath",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "The name of the commit/branch/tag. Default the repository’s default branch (usually master)",
            "name": "ref",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/ContentsResponse"
          },
          "404": {
            "$ref": "#/responses/notFound"
          }
        }
      },
      "put": {
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Update a file in a repository",
        "operationId": "repoUpdateFile",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "path of the file to update",
            "name": "filepath",
            "in": "path",
            "required": true
          },
          {
            "name": "body",
            "in": "body",
            "required": true,
            "schema": {
              "$ref": "#/definitions/UpdateFileOptions"
            }
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/FileResponse"
          },
          "403": {
            "$ref": "#/responses/error"
          },
          "404": {
            "$ref": "#/responses/notFound"
          },
          "422": {
            "$ref": "#/responses/error"
          }
        }
      },
      "post": {
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Create a file in a repository",
        "operationId": "repoCreateFile",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "path of the file to create",
            "name": "filepath",
            "in": "path",
            "required": true
          },
          {
            "name": "body",
            "in": "body",
            "required": true,
            "schema": {
              "$ref": "#/definitions/CreateFileOptions"
            }
          }
        ],
        "responses": {
          "201": {
            "$ref": "#/responses/FileResponse"
          },
          "403": {
            "$ref": "#/responses/error"
          },
          "404": {
            "$ref": "#/responses/notFound"
          },
          "422": {
            "$ref": "#/responses/error"
          }
        }
      },
      "delete": {
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Delete a file in a repository",
        "operationId": "repoDeleteFile",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "path of the file to delete",
            "name": "filepath",
            "in": "path",
            "required": true
          },
          {
            "name": "body",
            "in": "body",
            "required": true,
            "schema": {
              "$ref": "#/definitions/DeleteFileOptions"
            }
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/FileDeleteResponse"
          },
          "400": {
            "$ref": "#/responses/error"
          },
          "403": {
            "$ref": "#/responses/error"
          },
          "404": {
            "$ref": "#/responses/error"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/editorconfig/{filepath}": {
      "get": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Get the EditorConfig definitions of a file in a repository",
        "operationId": "repoGetEditorConfig",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "filepath of file to get",
            "name": "filepath",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "success"
          },
          "404": {
            "$ref": "#/responses/notFound"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/forks": {
      "get": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "List a repository's forks",
        "operationId": "listForks",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "description": "page number of results to return (1-based)",
            "name": "page",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page size of results",
            "name": "limit",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/RepositoryList"
          }
        }
      },
      "post": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Fork a repository",
        "operationId": "createFork",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo to fork",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo to fork",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "name": "body",
            "in": "body",
            "schema": {
              "$ref": "#/definitions/CreateForkOption"
            }
          }
        ],
        "responses": {
          "202": {
            "$ref": "#/responses/Repository"
          },
          "403": {
            "$ref": "#/responses/forbidden"
          },
          "409": {
            "description": "The repository with the same name already exists."
          },
          "422": {
            "$ref": "#/responses/validationError"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/git/blobs/{sha}": {
      "get": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Gets the blob of a repository.",
        "operationId": "GetBlob",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "sha of the commit",
            "name": "sha",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/GitBlobResponse"
          },
          "400": {
            "$ref": "#/responses/error"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/git/commits/{sha}": {
      "get": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Get a single commit from a repository",
        "operationId": "repoGetSingleCommit",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "a git ref or commit sha",
            "name": "sha",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/Commit"
          },
          "404": {
            "$ref": "#/responses/notFound"
          },
          "422": {
            "$ref": "#/responses/validationError"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/git/commits/{sha}.{diffType}": {
      "get": {
        "produces": ["text/plain"],
        "tags": ["repository"],
        "summary": "Get a commit's diff or patch",
        "operationId": "repoDownloadCommitDiffOrPatch",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "SHA of the commit to get",
            "name": "sha",
            "in": "path",
            "required": true
          },
          {
            "enum": ["diff", "patch"],
            "type": "string",
            "description": "whether the output is diff or patch",
            "name": "diffType",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/string"
          },
          "404": {
            "$ref": "#/responses/notFound"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/git/notes/{sha}": {
      "get": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Get a note corresponding to a single commit from a repository",
        "operationId": "repoGetNote",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "a git ref or commit sha",
            "name": "sha",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/Note"
          },
          "404": {
            "$ref": "#/responses/notFound"
          },
          "422": {
            "$ref": "#/responses/validationError"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/git/refs": {
      "get": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Get specified ref or filtered repository's refs",
        "operationId": "repoListAllGitRefs",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/ReferenceList"
          },
          "404": {
            "$ref": "#/responses/notFound"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/git/refs/{ref}": {
      "get": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Get specified ref or filtered repository's refs",
        "operationId": "repoListGitRefs",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "part or full name of the ref",
            "name": "ref",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/ReferenceList"
          },
          "404": {
            "$ref": "#/responses/notFound"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/git/tags/{sha}": {
      "get": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Gets the tag object of an annotated tag (not lightweight tags)",
        "operationId": "GetAnnotatedTag",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "sha of the tag. The Git tags API only supports annotated tag objects, not lightweight tags.",
            "name": "sha",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/AnnotatedTag"
          },
          "400": {
            "$ref": "#/responses/error"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/git/trees/{sha}": {
      "get": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Gets the tree of a repository.",
        "operationId": "GetTree",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "sha of the commit",
            "name": "sha",
            "in": "path",
            "required": true
          },
          {
            "type": "boolean",
            "description": "show all directories and files",
            "name": "recursive",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page number; the 'truncated' field in the response will be true if there are still more items after this page, false if the last page",
            "name": "page",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "number of items per page",
            "name": "per_page",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/GitTreeResponse"
          },
          "400": {
            "$ref": "#/responses/error"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/hooks": {
      "get": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "List the hooks in a repository",
        "operationId": "repoListHooks",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "description": "page number of results to return (1-based)",
            "name": "page",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page size of results",
            "name": "limit",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/HookList"
          }
        }
      },
      "post": {
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Create a hook",
        "operationId": "repoCreateHook",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "name": "body",
            "in": "body",
            "schema": {
              "$ref": "#/definitions/CreateHookOption"
            }
          }
        ],
        "responses": {
          "201": {
            "$ref": "#/responses/Hook"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/hooks/git": {
      "get": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "List the Git hooks in a repository",
        "operationId": "repoListGitHooks",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/GitHookList"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/hooks/git/{id}": {
      "get": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Get a Git hook",
        "operationId": "repoGetGitHook",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "id of the hook to get",
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/GitHook"
          },
          "404": {
            "$ref": "#/responses/notFound"
          }
        }
      },
      "delete": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Delete a Git hook in a repository",
        "operationId": "repoDeleteGitHook",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "id of the hook to get",
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "204": {
            "$ref": "#/responses/empty"
          },
          "404": {
            "$ref": "#/responses/notFound"
          }
        }
      },
      "patch": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Edit a Git hook in a repository",
        "operationId": "repoEditGitHook",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "id of the hook to get",
            "name": "id",
            "in": "path",
            "required": true
          },
          {
            "name": "body",
            "in": "body",
            "schema": {
              "$ref": "#/definitions/EditGitHookOption"
            }
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/GitHook"
          },
          "404": {
            "$ref": "#/responses/notFound"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/hooks/{id}": {
      "get": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Get a hook",
        "operationId": "repoGetHook",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "id of the hook to get",
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/Hook"
          },
          "404": {
            "$ref": "#/responses/notFound"
          }
        }
      },
      "delete": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Delete a hook in a repository",
        "operationId": "repoDeleteHook",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "id of the hook to delete",
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "204": {
            "$ref": "#/responses/empty"
          },
          "404": {
            "$ref": "#/responses/notFound"
          }
        }
      },
      "patch": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Edit a hook in a repository",
        "operationId": "repoEditHook",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "index of the hook",
            "name": "id",
            "in": "path",
            "required": true
          },
          {
            "name": "body",
            "in": "body",
            "schema": {
              "$ref": "#/definitions/EditHookOption"
            }
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/Hook"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/hooks/{id}/tests": {
      "post": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Test a push webhook",
        "operationId": "repoTestHook",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "id of the hook to test",
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "204": {
            "$ref": "#/responses/empty"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/issue_templates": {
      "get": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Get available issue templates for a repository",
        "operationId": "repoGetIssueTemplates",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/IssueTemplates"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/issues": {
      "get": {
        "produces": ["application/json"],
        "tags": ["issue"],
        "summary": "List a repository's issues",
        "operationId": "issueListIssues",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "enum": ["closed", "open", "all"],
            "type": "string",
            "description": "whether issue is open or closed",
            "name": "state",
            "in": "query"
          },
          {
            "type": "string",
            "description": "comma separated list of labels. Fetch only issues that have any of this labels. Non existent labels are discarded",
            "name": "labels",
            "in": "query"
          },
          {
            "type": "string",
            "description": "search string",
            "name": "q",
            "in": "query"
          },
          {
            "enum": ["issues", "pulls"],
            "type": "string",
            "description": "filter by type (issues / pulls) if set",
            "name": "type",
            "in": "query"
          },
          {
            "type": "string",
            "description": "comma separated list of milestone names or ids. It uses names and fall back to ids. Fetch only issues that have any of this milestones. Non existent milestones are discarded",
            "name": "milestones",
            "in": "query"
          },
          {
            "type": "string",
            "format": "date-time",
            "description": "Only show items updated after the given time. This is a timestamp in RFC 3339 format",
            "name": "since",
            "in": "query"
          },
          {
            "type": "string",
            "format": "date-time",
            "description": "Only show items updated before the given time. This is a timestamp in RFC 3339 format",
            "name": "before",
            "in": "query"
          },
          {
            "type": "string",
            "description": "Only show items which were created by the the given user",
            "name": "created_by",
            "in": "query"
          },
          {
            "type": "string",
            "description": "Only show items for which the given user is assigned",
            "name": "assigned_by",
            "in": "query"
          },
          {
            "type": "string",
            "description": "Only show items in which the given user was mentioned",
            "name": "mentioned_by",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page number of results to return (1-based)",
            "name": "page",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page size of results",
            "name": "limit",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/IssueList"
          }
        }
      },
      "post": {
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "tags": ["issue"],
        "summary": "Create an issue. If using deadline only the date will be taken into account, and time of day ignored.",
        "operationId": "issueCreateIssue",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "name": "body",
            "in": "body",
            "schema": {
              "$ref": "#/definitions/CreateIssueOption"
            }
          }
        ],
        "responses": {
          "201": {
            "$ref": "#/responses/Issue"
          },
          "403": {
            "$ref": "#/responses/forbidden"
          },
          "412": {
            "$ref": "#/responses/error"
          },
          "422": {
            "$ref": "#/responses/validationError"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/issues/comments": {
      "get": {
        "produces": ["application/json"],
        "tags": ["issue"],
        "summary": "List all comments in a repository",
        "operationId": "issueGetRepoComments",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "format": "date-time",
            "description": "if provided, only comments updated since the provided time are returned.",
            "name": "since",
            "in": "query"
          },
          {
            "type": "string",
            "format": "date-time",
            "description": "if provided, only comments updated before the provided time are returned.",
            "name": "before",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page number of results to return (1-based)",
            "name": "page",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page size of results",
            "name": "limit",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/CommentList"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/issues/comments/{id}": {
      "get": {
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "tags": ["issue"],
        "summary": "Get a comment",
        "operationId": "issueGetComment",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "id of the comment",
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/Comment"
          },
          "204": {
            "$ref": "#/responses/empty"
          },
          "403": {
            "$ref": "#/responses/forbidden"
          },
          "404": {
            "$ref": "#/responses/notFound"
          }
        }
      },
      "delete": {
        "tags": ["issue"],
        "summary": "Delete a comment",
        "operationId": "issueDeleteComment",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "id of comment to delete",
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "204": {
            "$ref": "#/responses/empty"
          },
          "403": {
            "$ref": "#/responses/forbidden"
          },
          "404": {
            "$ref": "#/responses/notFound"
          }
        }
      },
      "patch": {
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "tags": ["issue"],
        "summary": "Edit a comment",
        "operationId": "issueEditComment",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "id of the comment to edit",
            "name": "id",
            "in": "path",
            "required": true
          },
          {
            "name": "body",
            "in": "body",
            "schema": {
              "$ref": "#/definitions/EditIssueCommentOption"
            }
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/Comment"
          },
          "204": {
            "$ref": "#/responses/empty"
          },
          "403": {
            "$ref": "#/responses/forbidden"
          },
          "404": {
            "$ref": "#/responses/notFound"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/issues/comments/{id}/reactions": {
      "get": {
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "tags": ["issue"],
        "summary": "Get a list of reactions from a comment of an issue",
        "operationId": "issueGetCommentReactions",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "id of the comment to edit",
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/ReactionList"
          },
          "403": {
            "$ref": "#/responses/forbidden"
          }
        }
      },
      "post": {
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "tags": ["issue"],
        "summary": "Add a reaction to a comment of an issue",
        "operationId": "issuePostCommentReaction",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "id of the comment to edit",
            "name": "id",
            "in": "path",
            "required": true
          },
          {
            "name": "content",
            "in": "body",
            "schema": {
              "$ref": "#/definitions/EditReactionOption"
            }
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/Reaction"
          },
          "201": {
            "$ref": "#/responses/Reaction"
          },
          "403": {
            "$ref": "#/responses/forbidden"
          }
        }
      },
      "delete": {
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "tags": ["issue"],
        "summary": "Remove a reaction from a comment of an issue",
        "operationId": "issueDeleteCommentReaction",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "id of the comment to edit",
            "name": "id",
            "in": "path",
            "required": true
          },
          {
            "name": "content",
            "in": "body",
            "schema": {
              "$ref": "#/definitions/EditReactionOption"
            }
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/empty"
          },
          "403": {
            "$ref": "#/responses/forbidden"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/issues/{index}": {
      "get": {
        "produces": ["application/json"],
        "tags": ["issue"],
        "summary": "Get an issue",
        "operationId": "issueGetIssue",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "index of the issue to get",
            "name": "index",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/Issue"
          },
          "404": {
            "$ref": "#/responses/notFound"
          }
        }
      },
      "patch": {
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "tags": ["issue"],
        "summary": "Edit an issue. If using deadline only the date will be taken into account, and time of day ignored.",
        "operationId": "issueEditIssue",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "index of the issue to edit",
            "name": "index",
            "in": "path",
            "required": true
          },
          {
            "name": "body",
            "in": "body",
            "schema": {
              "$ref": "#/definitions/EditIssueOption"
            }
          }
        ],
        "responses": {
          "201": {
            "$ref": "#/responses/Issue"
          },
          "403": {
            "$ref": "#/responses/forbidden"
          },
          "404": {
            "$ref": "#/responses/notFound"
          },
          "412": {
            "$ref": "#/responses/error"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/issues/{index}/comments": {
      "get": {
        "produces": ["application/json"],
        "tags": ["issue"],
        "summary": "List all comments on an issue",
        "operationId": "issueGetComments",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "index of the issue",
            "name": "index",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "format": "date-time",
            "description": "if provided, only comments updated since the specified time are returned.",
            "name": "since",
            "in": "query"
          },
          {
            "type": "string",
            "format": "date-time",
            "description": "if provided, only comments updated before the provided time are returned.",
            "name": "before",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/CommentList"
          }
        }
      },
      "post": {
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "tags": ["issue"],
        "summary": "Add a comment to an issue",
        "operationId": "issueCreateComment",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "index of the issue",
            "name": "index",
            "in": "path",
            "required": true
          },
          {
            "name": "body",
            "in": "body",
            "schema": {
              "$ref": "#/definitions/CreateIssueCommentOption"
            }
          }
        ],
        "responses": {
          "201": {
            "$ref": "#/responses/Comment"
          },
          "403": {
            "$ref": "#/responses/forbidden"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/issues/{index}/comments/{id}": {
      "delete": {
        "tags": ["issue"],
        "summary": "Delete a comment",
        "operationId": "issueDeleteCommentDeprecated",
        "deprecated": true,
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "description": "this parameter is ignored",
            "name": "index",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "id of comment to delete",
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "204": {
            "$ref": "#/responses/empty"
          },
          "403": {
            "$ref": "#/responses/forbidden"
          },
          "404": {
            "$ref": "#/responses/notFound"
          }
        }
      },
      "patch": {
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "tags": ["issue"],
        "summary": "Edit a comment",
        "operationId": "issueEditCommentDeprecated",
        "deprecated": true,
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "description": "this parameter is ignored",
            "name": "index",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "id of the comment to edit",
            "name": "id",
            "in": "path",
            "required": true
          },
          {
            "name": "body",
            "in": "body",
            "schema": {
              "$ref": "#/definitions/EditIssueCommentOption"
            }
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/Comment"
          },
          "204": {
            "$ref": "#/responses/empty"
          },
          "403": {
            "$ref": "#/responses/forbidden"
          },
          "404": {
            "$ref": "#/responses/notFound"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/issues/{index}/deadline": {
      "post": {
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "tags": ["issue"],
        "summary": "Set an issue deadline. If set to null, the deadline is deleted. If using deadline only the date will be taken into account, and time of day ignored.",
        "operationId": "issueEditIssueDeadline",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "index of the issue to create or update a deadline on",
            "name": "index",
            "in": "path",
            "required": true
          },
          {
            "name": "body",
            "in": "body",
            "schema": {
              "$ref": "#/definitions/EditDeadlineOption"
            }
          }
        ],
        "responses": {
          "201": {
            "$ref": "#/responses/IssueDeadline"
          },
          "403": {
            "$ref": "#/responses/forbidden"
          },
          "404": {
            "$ref": "#/responses/notFound"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/issues/{index}/labels": {
      "get": {
        "produces": ["application/json"],
        "tags": ["issue"],
        "summary": "Get an issue's labels",
        "operationId": "issueGetLabels",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "index of the issue",
            "name": "index",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/LabelList"
          },
          "404": {
            "$ref": "#/responses/notFound"
          }
        }
      },
      "put": {
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "tags": ["issue"],
        "summary": "Replace an issue's labels",
        "operationId": "issueReplaceLabels",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "index of the issue",
            "name": "index",
            "in": "path",
            "required": true
          },
          {
            "name": "body",
            "in": "body",
            "schema": {
              "$ref": "#/definitions/IssueLabelsOption"
            }
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/LabelList"
          },
          "403": {
            "$ref": "#/responses/forbidden"
          }
        }
      },
      "post": {
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "tags": ["issue"],
        "summary": "Add a label to an issue",
        "operationId": "issueAddLabel",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "index of the issue",
            "name": "index",
            "in": "path",
            "required": true
          },
          {
            "name": "body",
            "in": "body",
            "schema": {
              "$ref": "#/definitions/IssueLabelsOption"
            }
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/LabelList"
          },
          "403": {
            "$ref": "#/responses/forbidden"
          }
        }
      },
      "delete": {
        "produces": ["application/json"],
        "tags": ["issue"],
        "summary": "Remove all labels from an issue",
        "operationId": "issueClearLabels",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "index of the issue",
            "name": "index",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "204": {
            "$ref": "#/responses/empty"
          },
          "403": {
            "$ref": "#/responses/forbidden"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/issues/{index}/labels/{id}": {
      "delete": {
        "produces": ["application/json"],
        "tags": ["issue"],
        "summary": "Remove a label from an issue",
        "operationId": "issueRemoveLabel",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "index of the issue",
            "name": "index",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "id of the label to remove",
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "204": {
            "$ref": "#/responses/empty"
          },
          "403": {
            "$ref": "#/responses/forbidden"
          },
          "422": {
            "$ref": "#/responses/validationError"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/issues/{index}/reactions": {
      "get": {
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "tags": ["issue"],
        "summary": "Get a list reactions of an issue",
        "operationId": "issueGetIssueReactions",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "index of the issue",
            "name": "index",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "description": "page number of results to return (1-based)",
            "name": "page",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page size of results",
            "name": "limit",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/ReactionList"
          },
          "403": {
            "$ref": "#/responses/forbidden"
          }
        }
      },
      "post": {
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "tags": ["issue"],
        "summary": "Add a reaction to an issue",
        "operationId": "issuePostIssueReaction",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "index of the issue",
            "name": "index",
            "in": "path",
            "required": true
          },
          {
            "name": "content",
            "in": "body",
            "schema": {
              "$ref": "#/definitions/EditReactionOption"
            }
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/Reaction"
          },
          "201": {
            "$ref": "#/responses/Reaction"
          },
          "403": {
            "$ref": "#/responses/forbidden"
          }
        }
      },
      "delete": {
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "tags": ["issue"],
        "summary": "Remove a reaction from an issue",
        "operationId": "issueDeleteIssueReaction",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "index of the issue",
            "name": "index",
            "in": "path",
            "required": true
          },
          {
            "name": "content",
            "in": "body",
            "schema": {
              "$ref": "#/definitions/EditReactionOption"
            }
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/empty"
          },
          "403": {
            "$ref": "#/responses/forbidden"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/issues/{index}/stopwatch/delete": {
      "delete": {
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "tags": ["issue"],
        "summary": "Delete an issue's existing stopwatch.",
        "operationId": "issueDeleteStopWatch",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "index of the issue to stop the stopwatch on",
            "name": "index",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "204": {
            "$ref": "#/responses/empty"
          },
          "403": {
            "description": "Not repo writer, user does not have rights to toggle stopwatch"
          },
          "404": {
            "$ref": "#/responses/notFound"
          },
          "409": {
            "description": "Cannot cancel a non existent stopwatch"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/issues/{index}/stopwatch/start": {
      "post": {
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "tags": ["issue"],
        "summary": "Start stopwatch on an issue.",
        "operationId": "issueStartStopWatch",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "index of the issue to create the stopwatch on",
            "name": "index",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "201": {
            "$ref": "#/responses/empty"
          },
          "403": {
            "description": "Not repo writer, user does not have rights to toggle stopwatch"
          },
          "404": {
            "$ref": "#/responses/notFound"
          },
          "409": {
            "description": "Cannot start a stopwatch again if it already exists"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/issues/{index}/stopwatch/stop": {
      "post": {
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "tags": ["issue"],
        "summary": "Stop an issue's existing stopwatch.",
        "operationId": "issueStopStopWatch",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "index of the issue to stop the stopwatch on",
            "name": "index",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "201": {
            "$ref": "#/responses/empty"
          },
          "403": {
            "description": "Not repo writer, user does not have rights to toggle stopwatch"
          },
          "404": {
            "$ref": "#/responses/notFound"
          },
          "409": {
            "description": "Cannot stop a non existent stopwatch"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/issues/{index}/subscriptions": {
      "get": {
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "tags": ["issue"],
        "summary": "Get users who subscribed on an issue.",
        "operationId": "issueSubscriptions",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "index of the issue",
            "name": "index",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "description": "page number of results to return (1-based)",
            "name": "page",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page size of results",
            "name": "limit",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/UserList"
          },
          "404": {
            "$ref": "#/responses/notFound"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/issues/{index}/subscriptions/check": {
      "get": {
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "tags": ["issue"],
        "summary": "Check if user is subscribed to an issue",
        "operationId": "issueCheckSubscription",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "index of the issue",
            "name": "index",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/WatchInfo"
          },
          "404": {
            "$ref": "#/responses/notFound"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/issues/{index}/subscriptions/{user}": {
      "put": {
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "tags": ["issue"],
        "summary": "Subscribe user to issue",
        "operationId": "issueAddSubscription",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "index of the issue",
            "name": "index",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "user to subscribe",
            "name": "user",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "Already subscribed"
          },
          "201": {
            "description": "Successfully Subscribed"
          },
          "304": {
            "description": "User can only subscribe itself if he is no admin"
          },
          "404": {
            "$ref": "#/responses/notFound"
          }
        }
      },
      "delete": {
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "tags": ["issue"],
        "summary": "Unsubscribe user from issue",
        "operationId": "issueDeleteSubscription",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "index of the issue",
            "name": "index",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "user witch unsubscribe",
            "name": "user",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "Already unsubscribed"
          },
          "201": {
            "description": "Successfully Unsubscribed"
          },
          "304": {
            "description": "User can only subscribe itself if he is no admin"
          },
          "404": {
            "$ref": "#/responses/notFound"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/issues/{index}/timeline": {
      "get": {
        "produces": ["application/json"],
        "tags": ["issue"],
        "summary": "List all comments and events on an issue",
        "operationId": "issueGetCommentsAndTimeline",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "index of the issue",
            "name": "index",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "format": "date-time",
            "description": "if provided, only comments updated since the specified time are returned.",
            "name": "since",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page number of results to return (1-based)",
            "name": "page",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page size of results",
            "name": "limit",
            "in": "query"
          },
          {
            "type": "string",
            "format": "date-time",
            "description": "if provided, only comments updated before the provided time are returned.",
            "name": "before",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/TimelineList"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/issues/{index}/times": {
      "get": {
        "produces": ["application/json"],
        "tags": ["issue"],
        "summary": "List an issue's tracked times",
        "operationId": "issueTrackedTimes",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "index of the issue",
            "name": "index",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "optional filter by user (available for issue managers)",
            "name": "user",
            "in": "query"
          },
          {
            "type": "string",
            "format": "date-time",
            "description": "Only show times updated after the given time. This is a timestamp in RFC 3339 format",
            "name": "since",
            "in": "query"
          },
          {
            "type": "string",
            "format": "date-time",
            "description": "Only show times updated before the given time. This is a timestamp in RFC 3339 format",
            "name": "before",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page number of results to return (1-based)",
            "name": "page",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page size of results",
            "name": "limit",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/TrackedTimeList"
          },
          "404": {
            "$ref": "#/responses/notFound"
          }
        }
      },
      "post": {
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "tags": ["issue"],
        "summary": "Add tracked time to a issue",
        "operationId": "issueAddTime",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "index of the issue",
            "name": "index",
            "in": "path",
            "required": true
          },
          {
            "name": "body",
            "in": "body",
            "schema": {
              "$ref": "#/definitions/AddTimeOption"
            }
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/TrackedTime"
          },
          "400": {
            "$ref": "#/responses/error"
          },
          "403": {
            "$ref": "#/responses/forbidden"
          }
        }
      },
      "delete": {
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "tags": ["issue"],
        "summary": "Reset a tracked time of an issue",
        "operationId": "issueResetTime",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "index of the issue to add tracked time to",
            "name": "index",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "204": {
            "$ref": "#/responses/empty"
          },
          "400": {
            "$ref": "#/responses/error"
          },
          "403": {
            "$ref": "#/responses/forbidden"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/issues/{index}/times/{id}": {
      "delete": {
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "tags": ["issue"],
        "summary": "Delete specific tracked time",
        "operationId": "issueDeleteTime",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "index of the issue",
            "name": "index",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "id of time to delete",
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "204": {
            "$ref": "#/responses/empty"
          },
          "400": {
            "$ref": "#/responses/error"
          },
          "403": {
            "$ref": "#/responses/forbidden"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/keys": {
      "get": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "List a repository's keys",
        "operationId": "repoListKeys",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "description": "the key_id to search for",
            "name": "key_id",
            "in": "query"
          },
          {
            "type": "string",
            "description": "fingerprint of the key",
            "name": "fingerprint",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page number of results to return (1-based)",
            "name": "page",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page size of results",
            "name": "limit",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/DeployKeyList"
          }
        }
      },
      "post": {
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Add a key to a repository",
        "operationId": "repoCreateKey",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "name": "body",
            "in": "body",
            "schema": {
              "$ref": "#/definitions/CreateKeyOption"
            }
          }
        ],
        "responses": {
          "201": {
            "$ref": "#/responses/DeployKey"
          },
          "422": {
            "$ref": "#/responses/validationError"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/keys/{id}": {
      "get": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Get a repository's key by id",
        "operationId": "repoGetKey",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "id of the key to get",
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/DeployKey"
          }
        }
      },
      "delete": {
        "tags": ["repository"],
        "summary": "Delete a key from a repository",
        "operationId": "repoDeleteKey",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "id of the key to delete",
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "204": {
            "$ref": "#/responses/empty"
          },
          "403": {
            "$ref": "#/responses/forbidden"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/labels": {
      "get": {
        "produces": ["application/json"],
        "tags": ["issue"],
        "summary": "Get all of a repository's labels",
        "operationId": "issueListLabels",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "description": "page number of results to return (1-based)",
            "name": "page",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page size of results",
            "name": "limit",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/LabelList"
          }
        }
      },
      "post": {
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "tags": ["issue"],
        "summary": "Create a label",
        "operationId": "issueCreateLabel",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "name": "body",
            "in": "body",
            "schema": {
              "$ref": "#/definitions/CreateLabelOption"
            }
          }
        ],
        "responses": {
          "201": {
            "$ref": "#/responses/Label"
          },
          "422": {
            "$ref": "#/responses/validationError"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/labels/{id}": {
      "get": {
        "produces": ["application/json"],
        "tags": ["issue"],
        "summary": "Get a single label",
        "operationId": "issueGetLabel",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "id of the label to get",
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/Label"
          }
        }
      },
      "delete": {
        "tags": ["issue"],
        "summary": "Delete a label",
        "operationId": "issueDeleteLabel",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "id of the label to delete",
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "204": {
            "$ref": "#/responses/empty"
          }
        }
      },
      "patch": {
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "tags": ["issue"],
        "summary": "Update a label",
        "operationId": "issueEditLabel",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "id of the label to edit",
            "name": "id",
            "in": "path",
            "required": true
          },
          {
            "name": "body",
            "in": "body",
            "schema": {
              "$ref": "#/definitions/EditLabelOption"
            }
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/Label"
          },
          "422": {
            "$ref": "#/responses/validationError"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/languages": {
      "get": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Get languages and number of bytes of code written",
        "operationId": "repoGetLanguages",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/LanguageStatistics"
          },
          "404": {
            "$ref": "#/responses/notFound"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/milestones": {
      "get": {
        "produces": ["application/json"],
        "tags": ["issue"],
        "summary": "Get all of a repository's opened milestones",
        "operationId": "issueGetMilestonesList",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "Milestone state, Recognised values are open, closed and all. Defaults to \"open\"",
            "name": "state",
            "in": "query"
          },
          {
            "type": "string",
            "description": "filter by milestone name",
            "name": "name",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page number of results to return (1-based)",
            "name": "page",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page size of results",
            "name": "limit",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/MilestoneList"
          }
        }
      },
      "post": {
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "tags": ["issue"],
        "summary": "Create a milestone",
        "operationId": "issueCreateMilestone",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "name": "body",
            "in": "body",
            "schema": {
              "$ref": "#/definitions/CreateMilestoneOption"
            }
          }
        ],
        "responses": {
          "201": {
            "$ref": "#/responses/Milestone"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/milestones/{id}": {
      "get": {
        "produces": ["application/json"],
        "tags": ["issue"],
        "summary": "Get a milestone",
        "operationId": "issueGetMilestone",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "the milestone to get, identified by ID and if not available by name",
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/Milestone"
          }
        }
      },
      "delete": {
        "tags": ["issue"],
        "summary": "Delete a milestone",
        "operationId": "issueDeleteMilestone",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "the milestone to delete, identified by ID and if not available by name",
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "204": {
            "$ref": "#/responses/empty"
          }
        }
      },
      "patch": {
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "tags": ["issue"],
        "summary": "Update a milestone",
        "operationId": "issueEditMilestone",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "the milestone to edit, identified by ID and if not available by name",
            "name": "id",
            "in": "path",
            "required": true
          },
          {
            "name": "body",
            "in": "body",
            "schema": {
              "$ref": "#/definitions/EditMilestoneOption"
            }
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/Milestone"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/mirror-sync": {
      "post": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Sync a mirrored repository",
        "operationId": "repoMirrorSync",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo to sync",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo to sync",
            "name": "repo",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/empty"
          },
          "403": {
            "$ref": "#/responses/forbidden"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/notifications": {
      "get": {
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "tags": ["notification"],
        "summary": "List users's notification threads on a specific repo",
        "operationId": "notifyGetRepoList",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "boolean",
            "description": "If true, show notifications marked as read. Default value is false",
            "name": "all",
            "in": "query"
          },
          {
            "type": "array",
            "items": {
              "type": "string"
            },
            "collectionFormat": "multi",
            "description": "Show notifications with the provided status types. Options are: unread, read and/or pinned. Defaults to unread \u0026 pinned",
            "name": "status-types",
            "in": "query"
          },
          {
            "type": "array",
            "items": {
              "enum": ["issue", "pull", "commit", "repository"],
              "type": "string"
            },
            "collectionFormat": "multi",
            "description": "filter notifications by subject type",
            "name": "subject-type",
            "in": "query"
          },
          {
            "type": "string",
            "format": "date-time",
            "description": "Only show notifications updated after the given time. This is a timestamp in RFC 3339 format",
            "name": "since",
            "in": "query"
          },
          {
            "type": "string",
            "format": "date-time",
            "description": "Only show notifications updated before the given time. This is a timestamp in RFC 3339 format",
            "name": "before",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page number of results to return (1-based)",
            "name": "page",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page size of results",
            "name": "limit",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/NotificationThreadList"
          }
        }
      },
      "put": {
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "tags": ["notification"],
        "summary": "Mark notification threads as read, pinned or unread on a specific repo",
        "operationId": "notifyReadRepoList",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "If true, mark all notifications on this repo. Default value is false",
            "name": "all",
            "in": "query"
          },
          {
            "type": "array",
            "items": {
              "type": "string"
            },
            "collectionFormat": "multi",
            "description": "Mark notifications with the provided status types. Options are: unread, read and/or pinned. Defaults to unread.",
            "name": "status-types",
            "in": "query"
          },
          {
            "type": "string",
            "description": "Status to mark notifications as. Defaults to read.",
            "name": "to-status",
            "in": "query"
          },
          {
            "type": "string",
            "format": "date-time",
            "description": "Describes the last point that notifications were checked. Anything updated since this time will not be updated.",
            "name": "last_read_at",
            "in": "query"
          }
        ],
        "responses": {
          "205": {
            "$ref": "#/responses/NotificationThreadList"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/pulls": {
      "get": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "List a repo's pull requests",
        "operationId": "repoListPullRequests",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "enum": ["closed", "open", "all"],
            "type": "string",
            "description": "State of pull request: open or closed (optional)",
            "name": "state",
            "in": "query"
          },
          {
            "enum": [
              "oldest",
              "recentupdate",
              "leastupdate",
              "mostcomment",
              "leastcomment",
              "priority"
            ],
            "type": "string",
            "description": "Type of sort",
            "name": "sort",
            "in": "query"
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "ID of the milestone",
            "name": "milestone",
            "in": "query"
          },
          {
            "type": "array",
            "items": {
              "type": "integer",
              "format": "int64"
            },
            "collectionFormat": "multi",
            "description": "Label IDs",
            "name": "labels",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page number of results to return (1-based)",
            "name": "page",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page size of results",
            "name": "limit",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/PullRequestList"
          }
        }
      },
      "post": {
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Create a pull request",
        "operationId": "repoCreatePullRequest",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "name": "body",
            "in": "body",
            "schema": {
              "$ref": "#/definitions/CreatePullRequestOption"
            }
          }
        ],
        "responses": {
          "201": {
            "$ref": "#/responses/PullRequest"
          },
          "409": {
            "$ref": "#/responses/error"
          },
          "422": {
            "$ref": "#/responses/validationError"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/pulls/{index}": {
      "get": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Get a pull request",
        "operationId": "repoGetPullRequest",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "index of the pull request to get",
            "name": "index",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/PullRequest"
          },
          "404": {
            "$ref": "#/responses/notFound"
          }
        }
      },
      "patch": {
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Update a pull request. If using deadline only the date will be taken into account, and time of day ignored.",
        "operationId": "repoEditPullRequest",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "index of the pull request to edit",
            "name": "index",
            "in": "path",
            "required": true
          },
          {
            "name": "body",
            "in": "body",
            "schema": {
              "$ref": "#/definitions/EditPullRequestOption"
            }
          }
        ],
        "responses": {
          "201": {
            "$ref": "#/responses/PullRequest"
          },
          "403": {
            "$ref": "#/responses/forbidden"
          },
          "409": {
            "$ref": "#/responses/error"
          },
          "412": {
            "$ref": "#/responses/error"
          },
          "422": {
            "$ref": "#/responses/validationError"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/pulls/{index}.{diffType}": {
      "get": {
        "produces": ["text/plain"],
        "tags": ["repository"],
        "summary": "Get a pull request diff or patch",
        "operationId": "repoDownloadPullDiffOrPatch",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "index of the pull request to get",
            "name": "index",
            "in": "path",
            "required": true
          },
          {
            "enum": ["diff", "patch"],
            "type": "string",
            "description": "whether the output is diff or patch",
            "name": "diffType",
            "in": "path",
            "required": true
          },
          {
            "type": "boolean",
            "description": "whether to include binary file changes. if true, the diff is applicable with `git apply`",
            "name": "binary",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/string"
          },
          "404": {
            "$ref": "#/responses/notFound"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/pulls/{index}/commits": {
      "get": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Get commits for a pull request",
        "operationId": "repoGetPullRequestCommits",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "index of the pull request to get",
            "name": "index",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "description": "page number of results to return (1-based)",
            "name": "page",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page size of results",
            "name": "limit",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/CommitList"
          },
          "404": {
            "$ref": "#/responses/notFound"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/pulls/{index}/merge": {
      "get": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Check if a pull request has been merged",
        "operationId": "repoPullRequestIsMerged",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "index of the pull request",
            "name": "index",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "204": {
            "description": "pull request has been merged"
          },
          "404": {
            "description": "pull request has not been merged"
          }
        }
      },
      "post": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Merge a pull request",
        "operationId": "repoMergePullRequest",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "index of the pull request to merge",
            "name": "index",
            "in": "path",
            "required": true
          },
          {
            "name": "body",
            "in": "body",
            "schema": {
              "$ref": "#/definitions/MergePullRequestOption"
            }
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/empty"
          },
          "405": {
            "$ref": "#/responses/empty"
          },
          "409": {
            "$ref": "#/responses/error"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/pulls/{index}/requested_reviewers": {
      "post": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "create review requests for a pull request",
        "operationId": "repoCreatePullReviewRequests",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "index of the pull request",
            "name": "index",
            "in": "path",
            "required": true
          },
          {
            "name": "body",
            "in": "body",
            "required": true,
            "schema": {
              "$ref": "#/definitions/PullReviewRequestOptions"
            }
          }
        ],
        "responses": {
          "201": {
            "$ref": "#/responses/PullReviewList"
          },
          "404": {
            "$ref": "#/responses/notFound"
          },
          "422": {
            "$ref": "#/responses/validationError"
          }
        }
      },
      "delete": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "cancel review requests for a pull request",
        "operationId": "repoDeletePullReviewRequests",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "index of the pull request",
            "name": "index",
            "in": "path",
            "required": true
          },
          {
            "name": "body",
            "in": "body",
            "required": true,
            "schema": {
              "$ref": "#/definitions/PullReviewRequestOptions"
            }
          }
        ],
        "responses": {
          "204": {
            "$ref": "#/responses/empty"
          },
          "404": {
            "$ref": "#/responses/notFound"
          },
          "422": {
            "$ref": "#/responses/validationError"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/pulls/{index}/reviews": {
      "get": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "List all reviews for a pull request",
        "operationId": "repoListPullReviews",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "index of the pull request",
            "name": "index",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "description": "page number of results to return (1-based)",
            "name": "page",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page size of results",
            "name": "limit",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/PullReviewList"
          },
          "404": {
            "$ref": "#/responses/notFound"
          }
        }
      },
      "post": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Create a review to an pull request",
        "operationId": "repoCreatePullReview",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "index of the pull request",
            "name": "index",
            "in": "path",
            "required": true
          },
          {
            "name": "body",
            "in": "body",
            "required": true,
            "schema": {
              "$ref": "#/definitions/CreatePullReviewOptions"
            }
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/PullReview"
          },
          "404": {
            "$ref": "#/responses/notFound"
          },
          "422": {
            "$ref": "#/responses/validationError"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/pulls/{index}/reviews/{id}": {
      "get": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Get a specific review for a pull request",
        "operationId": "repoGetPullReview",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "index of the pull request",
            "name": "index",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "id of the review",
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/PullReview"
          },
          "404": {
            "$ref": "#/responses/notFound"
          }
        }
      },
      "post": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Submit a pending review to an pull request",
        "operationId": "repoSubmitPullReview",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "index of the pull request",
            "name": "index",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "id of the review",
            "name": "id",
            "in": "path",
            "required": true
          },
          {
            "name": "body",
            "in": "body",
            "required": true,
            "schema": {
              "$ref": "#/definitions/SubmitPullReviewOptions"
            }
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/PullReview"
          },
          "404": {
            "$ref": "#/responses/notFound"
          },
          "422": {
            "$ref": "#/responses/validationError"
          }
        }
      },
      "delete": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Delete a specific review from a pull request",
        "operationId": "repoDeletePullReview",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "index of the pull request",
            "name": "index",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "id of the review",
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "204": {
            "$ref": "#/responses/empty"
          },
          "403": {
            "$ref": "#/responses/forbidden"
          },
          "404": {
            "$ref": "#/responses/notFound"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/pulls/{index}/reviews/{id}/comments": {
      "get": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Get a specific review for a pull request",
        "operationId": "repoGetPullReviewComments",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "index of the pull request",
            "name": "index",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "id of the review",
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/PullReviewCommentList"
          },
          "404": {
            "$ref": "#/responses/notFound"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/pulls/{index}/reviews/{id}/dismissals": {
      "post": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Dismiss a review for a pull request",
        "operationId": "repoDismissPullReview",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "index of the pull request",
            "name": "index",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "id of the review",
            "name": "id",
            "in": "path",
            "required": true
          },
          {
            "name": "body",
            "in": "body",
            "required": true,
            "schema": {
              "$ref": "#/definitions/DismissPullReviewOptions"
            }
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/PullReview"
          },
          "403": {
            "$ref": "#/responses/forbidden"
          },
          "422": {
            "$ref": "#/responses/validationError"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/pulls/{index}/reviews/{id}/undismissals": {
      "post": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Cancel to dismiss a review for a pull request",
        "operationId": "repoUnDismissPullReview",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "index of the pull request",
            "name": "index",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "id of the review",
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/PullReview"
          },
          "403": {
            "$ref": "#/responses/forbidden"
          },
          "422": {
            "$ref": "#/responses/validationError"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/pulls/{index}/update": {
      "post": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Merge PR's baseBranch into headBranch",
        "operationId": "repoUpdatePullRequest",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "index of the pull request to get",
            "name": "index",
            "in": "path",
            "required": true
          },
          {
            "enum": ["merge", "rebase"],
            "type": "string",
            "description": "how to update pull request",
            "name": "style",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/empty"
          },
          "403": {
            "$ref": "#/responses/forbidden"
          },
          "404": {
            "$ref": "#/responses/notFound"
          },
          "409": {
            "$ref": "#/responses/error"
          },
          "422": {
            "$ref": "#/responses/validationError"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/raw/{filepath}": {
      "get": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Get a file from a repository",
        "operationId": "repoGetRawFile",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "filepath of the file to get",
            "name": "filepath",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "The name of the commit/branch/tag. Default the repository’s default branch (usually master)",
            "name": "ref",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "description": "success"
          },
          "404": {
            "$ref": "#/responses/notFound"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/releases": {
      "get": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "List a repo's releases",
        "operationId": "repoListReleases",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "boolean",
            "description": "filter (exclude / include) drafts, if you dont have repo write access none will show",
            "name": "draft",
            "in": "query"
          },
          {
            "type": "boolean",
            "description": "filter (exclude / include) pre-releases",
            "name": "pre-release",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page size of results, deprecated - use limit",
            "name": "per_page",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page number of results to return (1-based)",
            "name": "page",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page size of results",
            "name": "limit",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/ReleaseList"
          }
        }
      },
      "post": {
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Create a release",
        "operationId": "repoCreateRelease",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "name": "body",
            "in": "body",
            "schema": {
              "$ref": "#/definitions/CreateReleaseOption"
            }
          }
        ],
        "responses": {
          "201": {
            "$ref": "#/responses/Release"
          },
          "404": {
            "$ref": "#/responses/notFound"
          },
          "409": {
            "$ref": "#/responses/error"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/releases/tags/{tag}": {
      "get": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Get a release by tag name",
        "operationId": "repoGetReleaseByTag",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "tag name of the release to get",
            "name": "tag",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/Release"
          },
          "404": {
            "$ref": "#/responses/notFound"
          }
        }
      },
      "delete": {
        "tags": ["repository"],
        "summary": "Delete a release by tag name",
        "operationId": "repoDeleteReleaseByTag",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "tag name of the release to delete",
            "name": "tag",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "204": {
            "$ref": "#/responses/empty"
          },
          "404": {
            "$ref": "#/responses/notFound"
          },
          "405": {
            "$ref": "#/responses/empty"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/releases/{id}": {
      "get": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Get a release",
        "operationId": "repoGetRelease",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "id of the release to get",
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/Release"
          },
          "404": {
            "$ref": "#/responses/notFound"
          }
        }
      },
      "delete": {
        "tags": ["repository"],
        "summary": "Delete a release",
        "operationId": "repoDeleteRelease",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "id of the release to delete",
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "204": {
            "$ref": "#/responses/empty"
          },
          "404": {
            "$ref": "#/responses/notFound"
          },
          "405": {
            "$ref": "#/responses/empty"
          }
        }
      },
      "patch": {
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Update a release",
        "operationId": "repoEditRelease",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "id of the release to edit",
            "name": "id",
            "in": "path",
            "required": true
          },
          {
            "name": "body",
            "in": "body",
            "schema": {
              "$ref": "#/definitions/EditReleaseOption"
            }
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/Release"
          },
          "404": {
            "$ref": "#/responses/notFound"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/releases/{id}/assets": {
      "get": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "List release's attachments",
        "operationId": "repoListReleaseAttachments",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "id of the release",
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/AttachmentList"
          }
        }
      },
      "post": {
        "consumes": ["multipart/form-data"],
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Create a release attachment",
        "operationId": "repoCreateReleaseAttachment",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "id of the release",
            "name": "id",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the attachment",
            "name": "name",
            "in": "query"
          },
          {
            "type": "file",
            "description": "attachment to upload",
            "name": "attachment",
            "in": "formData",
            "required": true
          }
        ],
        "responses": {
          "201": {
            "$ref": "#/responses/Attachment"
          },
          "400": {
            "$ref": "#/responses/error"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/releases/{id}/assets/{attachment_id}": {
      "get": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Get a release attachment",
        "operationId": "repoGetReleaseAttachment",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "id of the release",
            "name": "id",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "id of the attachment to get",
            "name": "attachment_id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/Attachment"
          }
        }
      },
      "delete": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Delete a release attachment",
        "operationId": "repoDeleteReleaseAttachment",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "id of the release",
            "name": "id",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "id of the attachment to delete",
            "name": "attachment_id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "204": {
            "$ref": "#/responses/empty"
          }
        }
      },
      "patch": {
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Edit a release attachment",
        "operationId": "repoEditReleaseAttachment",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "id of the release",
            "name": "id",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "id of the attachment to edit",
            "name": "attachment_id",
            "in": "path",
            "required": true
          },
          {
            "name": "body",
            "in": "body",
            "schema": {
              "$ref": "#/definitions/EditAttachmentOptions"
            }
          }
        ],
        "responses": {
          "201": {
            "$ref": "#/responses/Attachment"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/reviewers": {
      "get": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Return all users that can be requested to review in this repo",
        "operationId": "repoGetReviewers",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/UserList"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/signing-key.gpg": {
      "get": {
        "produces": ["text/plain"],
        "tags": ["repository"],
        "summary": "Get signing-key.gpg for given repository",
        "operationId": "repoSigningKey",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "GPG armored public key",
            "schema": {
              "type": "string"
            }
          }
        }
      }
    },
    "/repos/{owner}/{repo}/stargazers": {
      "get": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "List a repo's stargazers",
        "operationId": "repoListStargazers",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "description": "page number of results to return (1-based)",
            "name": "page",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page size of results",
            "name": "limit",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/UserList"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/statuses/{sha}": {
      "get": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Get a commit's statuses",
        "operationId": "repoListStatuses",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "sha of the commit",
            "name": "sha",
            "in": "path",
            "required": true
          },
          {
            "enum": [
              "oldest",
              "recentupdate",
              "leastupdate",
              "leastindex",
              "highestindex"
            ],
            "type": "string",
            "description": "type of sort",
            "name": "sort",
            "in": "query"
          },
          {
            "enum": ["pending", "success", "error", "failure", "warning"],
            "type": "string",
            "description": "type of state",
            "name": "state",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page number of results to return (1-based)",
            "name": "page",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page size of results",
            "name": "limit",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/CommitStatusList"
          },
          "400": {
            "$ref": "#/responses/error"
          }
        }
      },
      "post": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Create a commit status",
        "operationId": "repoCreateStatus",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "sha of the commit",
            "name": "sha",
            "in": "path",
            "required": true
          },
          {
            "name": "body",
            "in": "body",
            "schema": {
              "$ref": "#/definitions/CreateStatusOption"
            }
          }
        ],
        "responses": {
          "201": {
            "$ref": "#/responses/CommitStatus"
          },
          "400": {
            "$ref": "#/responses/error"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/subscribers": {
      "get": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "List a repo's watchers",
        "operationId": "repoListSubscribers",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "description": "page number of results to return (1-based)",
            "name": "page",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page size of results",
            "name": "limit",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/UserList"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/subscription": {
      "get": {
        "tags": ["repository"],
        "summary": "Check if the current user is watching a repo",
        "operationId": "userCurrentCheckSubscription",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/WatchInfo"
          },
          "404": {
            "description": "User is not watching this repo or repo do not exist"
          }
        }
      },
      "put": {
        "tags": ["repository"],
        "summary": "Watch a repo",
        "operationId": "userCurrentPutSubscription",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/WatchInfo"
          }
        }
      },
      "delete": {
        "tags": ["repository"],
        "summary": "Unwatch a repo",
        "operationId": "userCurrentDeleteSubscription",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "204": {
            "$ref": "#/responses/empty"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/tags": {
      "get": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "List a repository's tags",
        "operationId": "repoListTags",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "description": "page number of results to return (1-based)",
            "name": "page",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page size of results, default maximum page size is 50",
            "name": "limit",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/TagList"
          }
        }
      },
      "post": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Create a new git tag in a repository",
        "operationId": "repoCreateTag",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "name": "body",
            "in": "body",
            "schema": {
              "$ref": "#/definitions/CreateTagOption"
            }
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/Tag"
          },
          "404": {
            "$ref": "#/responses/notFound"
          },
          "405": {
            "$ref": "#/responses/empty"
          },
          "409": {
            "$ref": "#/responses/conflict"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/tags/{tag}": {
      "get": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Get the tag of a repository by tag name",
        "operationId": "repoGetTag",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of tag",
            "name": "tag",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/Tag"
          },
          "404": {
            "$ref": "#/responses/notFound"
          }
        }
      },
      "delete": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Delete a repository's tag by name",
        "operationId": "repoDeleteTag",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of tag to delete",
            "name": "tag",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "204": {
            "$ref": "#/responses/empty"
          },
          "404": {
            "$ref": "#/responses/notFound"
          },
          "405": {
            "$ref": "#/responses/empty"
          },
          "409": {
            "$ref": "#/responses/conflict"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/teams": {
      "get": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "List a repository's teams",
        "operationId": "repoListTeams",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/TeamList"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/teams/{team}": {
      "get": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Check if a team is assigned to a repository",
        "operationId": "repoCheckTeam",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "team name",
            "name": "team",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/Team"
          },
          "404": {
            "$ref": "#/responses/notFound"
          },
          "405": {
            "$ref": "#/responses/error"
          }
        }
      },
      "put": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Add a team to a repository",
        "operationId": "repoAddTeam",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "team name",
            "name": "team",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "204": {
            "$ref": "#/responses/empty"
          },
          "405": {
            "$ref": "#/responses/error"
          },
          "422": {
            "$ref": "#/responses/validationError"
          }
        }
      },
      "delete": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Delete a team from a repository",
        "operationId": "repoDeleteTeam",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "team name",
            "name": "team",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "204": {
            "$ref": "#/responses/empty"
          },
          "405": {
            "$ref": "#/responses/error"
          },
          "422": {
            "$ref": "#/responses/validationError"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/times": {
      "get": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "List a repo's tracked times",
        "operationId": "repoTrackedTimes",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "optional filter by user (available for issue managers)",
            "name": "user",
            "in": "query"
          },
          {
            "type": "string",
            "format": "date-time",
            "description": "Only show times updated after the given time. This is a timestamp in RFC 3339 format",
            "name": "since",
            "in": "query"
          },
          {
            "type": "string",
            "format": "date-time",
            "description": "Only show times updated before the given time. This is a timestamp in RFC 3339 format",
            "name": "before",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page number of results to return (1-based)",
            "name": "page",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page size of results",
            "name": "limit",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/TrackedTimeList"
          },
          "400": {
            "$ref": "#/responses/error"
          },
          "403": {
            "$ref": "#/responses/forbidden"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/times/{user}": {
      "get": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "List a user's tracked times in a repo",
        "operationId": "userTrackedTimes",
        "deprecated": true,
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "username of user",
            "name": "user",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/TrackedTimeList"
          },
          "400": {
            "$ref": "#/responses/error"
          },
          "403": {
            "$ref": "#/responses/forbidden"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/topics": {
      "get": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Get list of topics that a repository has",
        "operationId": "repoListTopics",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "description": "page number of results to return (1-based)",
            "name": "page",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page size of results",
            "name": "limit",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/TopicNames"
          }
        }
      },
      "put": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Replace list of topics for a repository",
        "operationId": "repoUpdateTopics",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "name": "body",
            "in": "body",
            "schema": {
              "$ref": "#/definitions/RepoTopicOptions"
            }
          }
        ],
        "responses": {
          "204": {
            "$ref": "#/responses/empty"
          },
          "422": {
            "$ref": "#/responses/invalidTopicsError"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/topics/{topic}": {
      "put": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Add a topic to a repository",
        "operationId": "repoAddTopic",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the topic to add",
            "name": "topic",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "204": {
            "$ref": "#/responses/empty"
          },
          "422": {
            "$ref": "#/responses/invalidTopicsError"
          }
        }
      },
      "delete": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Delete a topic from a repository",
        "operationId": "repoDeleteTopic",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the topic to delete",
            "name": "topic",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "204": {
            "$ref": "#/responses/empty"
          },
          "422": {
            "$ref": "#/responses/invalidTopicsError"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/transfer": {
      "post": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Transfer a repo ownership",
        "operationId": "repoTransfer",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo to transfer",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo to transfer",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "description": "Transfer Options",
            "name": "body",
            "in": "body",
            "required": true,
            "schema": {
              "$ref": "#/definitions/TransferRepoOption"
            }
          }
        ],
        "responses": {
          "202": {
            "$ref": "#/responses/Repository"
          },
          "403": {
            "$ref": "#/responses/forbidden"
          },
          "404": {
            "$ref": "#/responses/notFound"
          },
          "422": {
            "$ref": "#/responses/validationError"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/transfer/accept": {
      "post": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Accept a repo transfer",
        "operationId": "acceptRepoTransfer",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo to transfer",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo to transfer",
            "name": "repo",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "202": {
            "$ref": "#/responses/Repository"
          },
          "403": {
            "$ref": "#/responses/forbidden"
          },
          "404": {
            "$ref": "#/responses/notFound"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/transfer/reject": {
      "post": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Reject a repo transfer",
        "operationId": "rejectRepoTransfer",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo to transfer",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo to transfer",
            "name": "repo",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/Repository"
          },
          "403": {
            "$ref": "#/responses/forbidden"
          },
          "404": {
            "$ref": "#/responses/notFound"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/wiki/new": {
      "post": {
        "consumes": ["application/json"],
        "tags": ["repository"],
        "summary": "Create a wiki page",
        "operationId": "repoCreateWikiPage",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "name": "body",
            "in": "body",
            "schema": {
              "$ref": "#/definitions/CreateWikiPageOptions"
            }
          }
        ],
        "responses": {
          "201": {
            "$ref": "#/responses/WikiPage"
          },
          "400": {
            "$ref": "#/responses/error"
          },
          "403": {
            "$ref": "#/responses/forbidden"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/wiki/page/{pageName}": {
      "get": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Get a wiki page",
        "operationId": "repoGetWikiPage",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the page",
            "name": "pageName",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/WikiPage"
          },
          "404": {
            "$ref": "#/responses/notFound"
          }
        }
      },
      "delete": {
        "tags": ["repository"],
        "summary": "Delete a wiki page",
        "operationId": "repoDeleteWikiPage",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the page",
            "name": "pageName",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "204": {
            "$ref": "#/responses/empty"
          },
          "403": {
            "$ref": "#/responses/forbidden"
          },
          "404": {
            "$ref": "#/responses/notFound"
          }
        }
      },
      "patch": {
        "consumes": ["application/json"],
        "tags": ["repository"],
        "summary": "Edit a wiki page",
        "operationId": "repoEditWikiPage",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the page",
            "name": "pageName",
            "in": "path",
            "required": true
          },
          {
            "name": "body",
            "in": "body",
            "schema": {
              "$ref": "#/definitions/CreateWikiPageOptions"
            }
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/WikiPage"
          },
          "400": {
            "$ref": "#/responses/error"
          },
          "403": {
            "$ref": "#/responses/forbidden"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/wiki/pages": {
      "get": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Get all wiki pages",
        "operationId": "repoGetWikiPages",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "description": "page number of results to return (1-based)",
            "name": "page",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page size of results",
            "name": "limit",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/WikiPageList"
          },
          "404": {
            "$ref": "#/responses/notFound"
          }
        }
      }
    },
    "/repos/{owner}/{repo}/wiki/revisions/{pageName}": {
      "get": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Get revisions of a wiki page",
        "operationId": "repoGetWikiPageRevisions",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the page",
            "name": "pageName",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "description": "page number of results to return (1-based)",
            "name": "page",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/WikiCommitList"
          },
          "404": {
            "$ref": "#/responses/notFound"
          }
        }
      }
    },
    "/repos/{template_owner}/{template_repo}/generate": {
      "post": {
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Create a repository using a template",
        "operationId": "generateRepo",
        "parameters": [
          {
            "type": "string",
            "description": "name of the template repository owner",
            "name": "template_owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the template repository",
            "name": "template_repo",
            "in": "path",
            "required": true
          },
          {
            "name": "body",
            "in": "body",
            "schema": {
              "$ref": "#/definitions/GenerateRepoOption"
            }
          }
        ],
        "responses": {
          "201": {
            "$ref": "#/responses/Repository"
          },
          "403": {
            "$ref": "#/responses/forbidden"
          },
          "404": {
            "$ref": "#/responses/notFound"
          },
          "409": {
            "description": "The repository with the same name already exists."
          },
          "422": {
            "$ref": "#/responses/validationError"
          }
        }
      }
    },
    "/repositories/{id}": {
      "get": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "Get a repository by id",
        "operationId": "repoGetByID",
        "parameters": [
          {
            "type": "integer",
            "format": "int64",
            "description": "id of the repo to get",
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/Repository"
          }
        }
      }
    },
    "/settings/api": {
      "get": {
        "produces": ["application/json"],
        "tags": ["settings"],
        "summary": "Get instance's global settings for api",
        "operationId": "getGeneralAPISettings",
        "responses": {
          "200": {
            "$ref": "#/responses/GeneralAPISettings"
          }
        }
      }
    },
    "/settings/attachment": {
      "get": {
        "produces": ["application/json"],
        "tags": ["settings"],
        "summary": "Get instance's global settings for Attachment",
        "operationId": "getGeneralAttachmentSettings",
        "responses": {
          "200": {
            "$ref": "#/responses/GeneralAttachmentSettings"
          }
        }
      }
    },
    "/settings/repository": {
      "get": {
        "produces": ["application/json"],
        "tags": ["settings"],
        "summary": "Get instance's global settings for repositories",
        "operationId": "getGeneralRepositorySettings",
        "responses": {
          "200": {
            "$ref": "#/responses/GeneralRepoSettings"
          }
        }
      }
    },
    "/settings/ui": {
      "get": {
        "produces": ["application/json"],
        "tags": ["settings"],
        "summary": "Get instance's global settings for ui",
        "operationId": "getGeneralUISettings",
        "responses": {
          "200": {
            "$ref": "#/responses/GeneralUISettings"
          }
        }
      }
    },
    "/signing-key.gpg": {
      "get": {
        "produces": ["text/plain"],
        "tags": ["miscellaneous"],
        "summary": "Get default signing-key.gpg",
        "operationId": "getSigningKey",
        "responses": {
          "200": {
            "description": "GPG armored public key",
            "schema": {
              "type": "string"
            }
          }
        }
      }
    },
    "/teams/{id}": {
      "get": {
        "produces": ["application/json"],
        "tags": ["organization"],
        "summary": "Get a team",
        "operationId": "orgGetTeam",
        "parameters": [
          {
            "type": "integer",
            "format": "int64",
            "description": "id of the team to get",
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/Team"
          }
        }
      },
      "delete": {
        "tags": ["organization"],
        "summary": "Delete a team",
        "operationId": "orgDeleteTeam",
        "parameters": [
          {
            "type": "integer",
            "format": "int64",
            "description": "id of the team to delete",
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "204": {
            "description": "team deleted"
          }
        }
      },
      "patch": {
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "tags": ["organization"],
        "summary": "Edit a team",
        "operationId": "orgEditTeam",
        "parameters": [
          {
            "type": "integer",
            "description": "id of the team to edit",
            "name": "id",
            "in": "path",
            "required": true
          },
          {
            "name": "body",
            "in": "body",
            "schema": {
              "$ref": "#/definitions/EditTeamOption"
            }
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/Team"
          }
        }
      }
    },
    "/teams/{id}/members": {
      "get": {
        "produces": ["application/json"],
        "tags": ["organization"],
        "summary": "List a team's members",
        "operationId": "orgListTeamMembers",
        "parameters": [
          {
            "type": "integer",
            "format": "int64",
            "description": "id of the team",
            "name": "id",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "description": "page number of results to return (1-based)",
            "name": "page",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page size of results",
            "name": "limit",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/UserList"
          }
        }
      }
    },
    "/teams/{id}/members/{username}": {
      "get": {
        "produces": ["application/json"],
        "tags": ["organization"],
        "summary": "List a particular member of team",
        "operationId": "orgListTeamMember",
        "parameters": [
          {
            "type": "integer",
            "format": "int64",
            "description": "id of the team",
            "name": "id",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "username of the member to list",
            "name": "username",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/User"
          },
          "404": {
            "$ref": "#/responses/notFound"
          }
        }
      },
      "put": {
        "produces": ["application/json"],
        "tags": ["organization"],
        "summary": "Add a team member",
        "operationId": "orgAddTeamMember",
        "parameters": [
          {
            "type": "integer",
            "format": "int64",
            "description": "id of the team",
            "name": "id",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "username of the user to add",
            "name": "username",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "204": {
            "$ref": "#/responses/empty"
          },
          "404": {
            "$ref": "#/responses/notFound"
          }
        }
      },
      "delete": {
        "produces": ["application/json"],
        "tags": ["organization"],
        "summary": "Remove a team member",
        "operationId": "orgRemoveTeamMember",
        "parameters": [
          {
            "type": "integer",
            "format": "int64",
            "description": "id of the team",
            "name": "id",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "username of the user to remove",
            "name": "username",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "204": {
            "$ref": "#/responses/empty"
          },
          "404": {
            "$ref": "#/responses/notFound"
          }
        }
      }
    },
    "/teams/{id}/repos": {
      "get": {
        "produces": ["application/json"],
        "tags": ["organization"],
        "summary": "List a team's repos",
        "operationId": "orgListTeamRepos",
        "parameters": [
          {
            "type": "integer",
            "format": "int64",
            "description": "id of the team",
            "name": "id",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "description": "page number of results to return (1-based)",
            "name": "page",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page size of results",
            "name": "limit",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/RepositoryList"
          }
        }
      }
    },
    "/teams/{id}/repos/{org}/{repo}": {
      "put": {
        "produces": ["application/json"],
        "tags": ["organization"],
        "summary": "Add a repository to a team",
        "operationId": "orgAddTeamRepository",
        "parameters": [
          {
            "type": "integer",
            "format": "int64",
            "description": "id of the team",
            "name": "id",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "organization that owns the repo to add",
            "name": "org",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo to add",
            "name": "repo",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "204": {
            "$ref": "#/responses/empty"
          },
          "403": {
            "$ref": "#/responses/forbidden"
          }
        }
      },
      "delete": {
        "description": "This does not delete the repository, it only removes the repository from the team.",
        "produces": ["application/json"],
        "tags": ["organization"],
        "summary": "Remove a repository from a team",
        "operationId": "orgRemoveTeamRepository",
        "parameters": [
          {
            "type": "integer",
            "format": "int64",
            "description": "id of the team",
            "name": "id",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "organization that owns the repo to remove",
            "name": "org",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo to remove",
            "name": "repo",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "204": {
            "$ref": "#/responses/empty"
          },
          "403": {
            "$ref": "#/responses/forbidden"
          }
        }
      }
    },
    "/topics/search": {
      "get": {
        "produces": ["application/json"],
        "tags": ["repository"],
        "summary": "search topics via keyword",
        "operationId": "topicSearch",
        "parameters": [
          {
            "type": "string",
            "description": "keywords to search",
            "name": "q",
            "in": "query",
            "required": true
          },
          {
            "type": "integer",
            "description": "page number of results to return (1-based)",
            "name": "page",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page size of results",
            "name": "limit",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/TopicListResponse"
          },
          "403": {
            "$ref": "#/responses/forbidden"
          }
        }
      }
    },
    "/user": {
      "get": {
        "produces": ["application/json"],
        "tags": ["user"],
        "summary": "Get the authenticated user",
        "operationId": "userGetCurrent",
        "responses": {
          "200": {
            "$ref": "#/responses/User"
          }
        }
      }
    },
    "/user/applications/oauth2": {
      "get": {
        "produces": ["application/json"],
        "tags": ["user"],
        "summary": "List the authenticated user's oauth2 applications",
        "operationId": "userGetOauth2Application",
        "parameters": [
          {
            "type": "integer",
            "description": "page number of results to return (1-based)",
            "name": "page",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page size of results",
            "name": "limit",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/OAuth2ApplicationList"
          }
        }
      },
      "post": {
        "produces": ["application/json"],
        "tags": ["user"],
        "summary": "creates a new OAuth2 application",
        "operationId": "userCreateOAuth2Application",
        "parameters": [
          {
            "name": "body",
            "in": "body",
            "required": true,
            "schema": {
              "$ref": "#/definitions/CreateOAuth2ApplicationOptions"
            }
          }
        ],
        "responses": {
          "201": {
            "$ref": "#/responses/OAuth2Application"
          },
          "400": {
            "$ref": "#/responses/error"
          }
        }
      }
    },
    "/user/applications/oauth2/{id}": {
      "get": {
        "produces": ["application/json"],
        "tags": ["user"],
        "summary": "get an OAuth2 Application",
        "operationId": "userGetOAuth2Application",
        "parameters": [
          {
            "type": "integer",
            "format": "int64",
            "description": "Application ID to be found",
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/OAuth2Application"
          },
          "404": {
            "$ref": "#/responses/notFound"
          }
        }
      },
      "delete": {
        "produces": ["application/json"],
        "tags": ["user"],
        "summary": "delete an OAuth2 Application",
        "operationId": "userDeleteOAuth2Application",
        "parameters": [
          {
            "type": "integer",
            "format": "int64",
            "description": "token to be deleted",
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "204": {
            "$ref": "#/responses/empty"
          },
          "404": {
            "$ref": "#/responses/notFound"
          }
        }
      },
      "patch": {
        "produces": ["application/json"],
        "tags": ["user"],
        "summary": "update an OAuth2 Application, this includes regenerating the client secret",
        "operationId": "userUpdateOAuth2Application",
        "parameters": [
          {
            "type": "integer",
            "format": "int64",
            "description": "application to be updated",
            "name": "id",
            "in": "path",
            "required": true
          },
          {
            "name": "body",
            "in": "body",
            "required": true,
            "schema": {
              "$ref": "#/definitions/CreateOAuth2ApplicationOptions"
            }
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/OAuth2Application"
          },
          "404": {
            "$ref": "#/responses/notFound"
          }
        }
      }
    },
    "/user/emails": {
      "get": {
        "produces": ["application/json"],
        "tags": ["user"],
        "summary": "List the authenticated user's email addresses",
        "operationId": "userListEmails",
        "responses": {
          "200": {
            "$ref": "#/responses/EmailList"
          }
        }
      },
      "post": {
        "produces": ["application/json"],
        "tags": ["user"],
        "summary": "Add email addresses",
        "operationId": "userAddEmail",
        "parameters": [
          {
            "name": "body",
            "in": "body",
            "schema": {
              "$ref": "#/definitions/CreateEmailOption"
            }
          }
        ],
        "responses": {
          "201": {
            "$ref": "#/responses/EmailList"
          },
          "422": {
            "$ref": "#/responses/validationError"
          }
        }
      },
      "delete": {
        "produces": ["application/json"],
        "tags": ["user"],
        "summary": "Delete email addresses",
        "operationId": "userDeleteEmail",
        "parameters": [
          {
            "name": "body",
            "in": "body",
            "schema": {
              "$ref": "#/definitions/DeleteEmailOption"
            }
          }
        ],
        "responses": {
          "204": {
            "$ref": "#/responses/empty"
          },
          "404": {
            "$ref": "#/responses/notFound"
          }
        }
      }
    },
    "/user/followers": {
      "get": {
        "produces": ["application/json"],
        "tags": ["user"],
        "summary": "List the authenticated user's followers",
        "operationId": "userCurrentListFollowers",
        "parameters": [
          {
            "type": "integer",
            "description": "page number of results to return (1-based)",
            "name": "page",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page size of results",
            "name": "limit",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/UserList"
          }
        }
      }
    },
    "/user/following": {
      "get": {
        "produces": ["application/json"],
        "tags": ["user"],
        "summary": "List the users that the authenticated user is following",
        "operationId": "userCurrentListFollowing",
        "parameters": [
          {
            "type": "integer",
            "description": "page number of results to return (1-based)",
            "name": "page",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page size of results",
            "name": "limit",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/UserList"
          }
        }
      }
    },
    "/user/following/{username}": {
      "get": {
        "tags": ["user"],
        "summary": "Check whether a user is followed by the authenticated user",
        "operationId": "userCurrentCheckFollowing",
        "parameters": [
          {
            "type": "string",
            "description": "username of followed user",
            "name": "username",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "204": {
            "$ref": "#/responses/empty"
          },
          "404": {
            "$ref": "#/responses/notFound"
          }
        }
      },
      "put": {
        "tags": ["user"],
        "summary": "Follow a user",
        "operationId": "userCurrentPutFollow",
        "parameters": [
          {
            "type": "string",
            "description": "username of user to follow",
            "name": "username",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "204": {
            "$ref": "#/responses/empty"
          }
        }
      },
      "delete": {
        "tags": ["user"],
        "summary": "Unfollow a user",
        "operationId": "userCurrentDeleteFollow",
        "parameters": [
          {
            "type": "string",
            "description": "username of user to unfollow",
            "name": "username",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "204": {
            "$ref": "#/responses/empty"
          }
        }
      }
    },
    "/user/gpg_key_token": {
      "get": {
        "produces": ["text/plain"],
        "tags": ["user"],
        "summary": "Get a Token to verify",
        "operationId": "getVerificationToken",
        "responses": {
          "200": {
            "$ref": "#/responses/string"
          },
          "404": {
            "$ref": "#/responses/notFound"
          }
        }
      }
    },
    "/user/gpg_key_verify": {
      "post": {
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "tags": ["user"],
        "summary": "Verify a GPG key",
        "operationId": "userVerifyGPGKey",
        "responses": {
          "201": {
            "$ref": "#/responses/GPGKey"
          },
          "404": {
            "$ref": "#/responses/notFound"
          },
          "422": {
            "$ref": "#/responses/validationError"
          }
        }
      }
    },
    "/user/gpg_keys": {
      "get": {
        "produces": ["application/json"],
        "tags": ["user"],
        "summary": "List the authenticated user's GPG keys",
        "operationId": "userCurrentListGPGKeys",
        "parameters": [
          {
            "type": "integer",
            "description": "page number of results to return (1-based)",
            "name": "page",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page size of results",
            "name": "limit",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/GPGKeyList"
          }
        }
      },
      "post": {
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "tags": ["user"],
        "summary": "Create a GPG key",
        "operationId": "userCurrentPostGPGKey",
        "parameters": [
          {
            "name": "Form",
            "in": "body",
            "schema": {
              "$ref": "#/definitions/CreateGPGKeyOption"
            }
          }
        ],
        "responses": {
          "201": {
            "$ref": "#/responses/GPGKey"
          },
          "404": {
            "$ref": "#/responses/notFound"
          },
          "422": {
            "$ref": "#/responses/validationError"
          }
        }
      }
    },
    "/user/gpg_keys/{id}": {
      "get": {
        "produces": ["application/json"],
        "tags": ["user"],
        "summary": "Get a GPG key",
        "operationId": "userCurrentGetGPGKey",
        "parameters": [
          {
            "type": "integer",
            "format": "int64",
            "description": "id of key to get",
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/GPGKey"
          },
          "404": {
            "$ref": "#/responses/notFound"
          }
        }
      },
      "delete": {
        "produces": ["application/json"],
        "tags": ["user"],
        "summary": "Remove a GPG key",
        "operationId": "userCurrentDeleteGPGKey",
        "parameters": [
          {
            "type": "integer",
            "format": "int64",
            "description": "id of key to delete",
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "204": {
            "$ref": "#/responses/empty"
          },
          "403": {
            "$ref": "#/responses/forbidden"
          },
          "404": {
            "$ref": "#/responses/notFound"
          }
        }
      }
    },
    "/user/keys": {
      "get": {
        "produces": ["application/json"],
        "tags": ["user"],
        "summary": "List the authenticated user's public keys",
        "operationId": "userCurrentListKeys",
        "parameters": [
          {
            "type": "string",
            "description": "fingerprint of the key",
            "name": "fingerprint",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page number of results to return (1-based)",
            "name": "page",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page size of results",
            "name": "limit",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/PublicKeyList"
          }
        }
      },
      "post": {
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "tags": ["user"],
        "summary": "Create a public key",
        "operationId": "userCurrentPostKey",
        "parameters": [
          {
            "name": "body",
            "in": "body",
            "schema": {
              "$ref": "#/definitions/CreateKeyOption"
            }
          }
        ],
        "responses": {
          "201": {
            "$ref": "#/responses/PublicKey"
          },
          "422": {
            "$ref": "#/responses/validationError"
          }
        }
      }
    },
    "/user/keys/{id}": {
      "get": {
        "produces": ["application/json"],
        "tags": ["user"],
        "summary": "Get a public key",
        "operationId": "userCurrentGetKey",
        "parameters": [
          {
            "type": "integer",
            "format": "int64",
            "description": "id of key to get",
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/PublicKey"
          },
          "404": {
            "$ref": "#/responses/notFound"
          }
        }
      },
      "delete": {
        "produces": ["application/json"],
        "tags": ["user"],
        "summary": "Delete a public key",
        "operationId": "userCurrentDeleteKey",
        "parameters": [
          {
            "type": "integer",
            "format": "int64",
            "description": "id of key to delete",
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "204": {
            "$ref": "#/responses/empty"
          },
          "403": {
            "$ref": "#/responses/forbidden"
          },
          "404": {
            "$ref": "#/responses/notFound"
          }
        }
      }
    },
    "/user/orgs": {
      "get": {
        "produces": ["application/json"],
        "tags": ["organization"],
        "summary": "List the current user's organizations",
        "operationId": "orgListCurrentUserOrgs",
        "parameters": [
          {
            "type": "integer",
            "description": "page number of results to return (1-based)",
            "name": "page",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page size of results",
            "name": "limit",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/OrganizationList"
          }
        }
      }
    },
    "/user/repos": {
      "get": {
        "produces": ["application/json"],
        "tags": ["user"],
        "summary": "List the repos that the authenticated user owns",
        "operationId": "userCurrentListRepos",
        "parameters": [
          {
            "type": "integer",
            "description": "page number of results to return (1-based)",
            "name": "page",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page size of results",
            "name": "limit",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/RepositoryList"
          }
        }
      },
      "post": {
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "tags": ["repository", "user"],
        "summary": "Create a repository",
        "operationId": "createCurrentUserRepo",
        "parameters": [
          {
            "name": "body",
            "in": "body",
            "schema": {
              "$ref": "#/definitions/CreateRepoOption"
            }
          }
        ],
        "responses": {
          "201": {
            "$ref": "#/responses/Repository"
          },
          "409": {
            "description": "The repository with the same name already exists."
          },
          "422": {
            "$ref": "#/responses/validationError"
          }
        }
      }
    },
    "/user/settings": {
      "get": {
        "produces": ["application/json"],
        "tags": ["user"],
        "summary": "Get user settings",
        "operationId": "getUserSettings",
        "responses": {
          "200": {
            "$ref": "#/responses/UserSettings"
          }
        }
      },
      "patch": {
        "produces": ["application/json"],
        "tags": ["user"],
        "summary": "Update user settings",
        "operationId": "updateUserSettings",
        "parameters": [
          {
            "name": "body",
            "in": "body",
            "schema": {
              "$ref": "#/definitions/UserSettingsOptions"
            }
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/UserSettings"
          }
        }
      }
    },
    "/user/starred": {
      "get": {
        "produces": ["application/json"],
        "tags": ["user"],
        "summary": "The repos that the authenticated user has starred",
        "operationId": "userCurrentListStarred",
        "parameters": [
          {
            "type": "integer",
            "description": "page number of results to return (1-based)",
            "name": "page",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page size of results",
            "name": "limit",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/RepositoryList"
          }
        }
      }
    },
    "/user/starred/{owner}/{repo}": {
      "get": {
        "tags": ["user"],
        "summary": "Whether the authenticated is starring the repo",
        "operationId": "userCurrentCheckStarring",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo",
            "name": "repo",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "204": {
            "$ref": "#/responses/empty"
          },
          "404": {
            "$ref": "#/responses/notFound"
          }
        }
      },
      "put": {
        "tags": ["user"],
        "summary": "Star the given repo",
        "operationId": "userCurrentPutStar",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo to star",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo to star",
            "name": "repo",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "204": {
            "$ref": "#/responses/empty"
          }
        }
      },
      "delete": {
        "tags": ["user"],
        "summary": "Unstar the given repo",
        "operationId": "userCurrentDeleteStar",
        "parameters": [
          {
            "type": "string",
            "description": "owner of the repo to unstar",
            "name": "owner",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the repo to unstar",
            "name": "repo",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "204": {
            "$ref": "#/responses/empty"
          }
        }
      }
    },
    "/user/stopwatches": {
      "get": {
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "tags": ["user"],
        "summary": "Get list of all existing stopwatches",
        "operationId": "userGetStopWatches",
        "parameters": [
          {
            "type": "integer",
            "description": "page number of results to return (1-based)",
            "name": "page",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page size of results",
            "name": "limit",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/StopWatchList"
          }
        }
      }
    },
    "/user/subscriptions": {
      "get": {
        "produces": ["application/json"],
        "tags": ["user"],
        "summary": "List repositories watched by the authenticated user",
        "operationId": "userCurrentListSubscriptions",
        "parameters": [
          {
            "type": "integer",
            "description": "page number of results to return (1-based)",
            "name": "page",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page size of results",
            "name": "limit",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/RepositoryList"
          }
        }
      }
    },
    "/user/teams": {
      "get": {
        "produces": ["application/json"],
        "tags": ["user"],
        "summary": "List all the teams a user belongs to",
        "operationId": "userListTeams",
        "parameters": [
          {
            "type": "integer",
            "description": "page number of results to return (1-based)",
            "name": "page",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page size of results",
            "name": "limit",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/TeamList"
          }
        }
      }
    },
    "/user/times": {
      "get": {
        "produces": ["application/json"],
        "tags": ["user"],
        "summary": "List the current user's tracked times",
        "operationId": "userCurrentTrackedTimes",
        "parameters": [
          {
            "type": "string",
            "format": "date-time",
            "description": "Only show times updated after the given time. This is a timestamp in RFC 3339 format",
            "name": "since",
            "in": "query"
          },
          {
            "type": "string",
            "format": "date-time",
            "description": "Only show times updated before the given time. This is a timestamp in RFC 3339 format",
            "name": "before",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/TrackedTimeList"
          }
        }
      }
    },
    "/users/search": {
      "get": {
        "produces": ["application/json"],
        "tags": ["user"],
        "summary": "Search for users",
        "operationId": "userSearch",
        "parameters": [
          {
            "type": "string",
            "description": "keyword",
            "name": "q",
            "in": "query"
          },
          {
            "type": "integer",
            "format": "int64",
            "description": "ID of the user to search for",
            "name": "uid",
            "in": "query"
          },
          {
            "type": "string",
            "description": "If the user has one or more repos with the given language(s), the org will be in the results. Multiple lang's are ORed.",
            "name": "lang",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page number of results to return (1-based)",
            "name": "page",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page size of results",
            "name": "limit",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "description": "SearchResults of a successful search",
            "schema": {
              "type": "object",
              "properties": {
                "data": {
                  "type": "array",
                  "items": {
                    "$ref": "#/definitions/User"
                  }
                },
                "ok": {
                  "type": "boolean"
                }
              }
            }
          }
        }
      }
    },
    "/users/{follower}/following/{followee}": {
      "get": {
        "tags": ["user"],
        "summary": "Check if one user is following another user",
        "operationId": "userCheckFollowing",
        "parameters": [
          {
            "type": "string",
            "description": "username of following user",
            "name": "follower",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "username of followed user",
            "name": "followee",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "204": {
            "$ref": "#/responses/empty"
          },
          "404": {
            "$ref": "#/responses/notFound"
          }
        }
      }
    },
    "/users/{username}": {
      "get": {
        "produces": ["application/json"],
        "tags": ["user"],
        "summary": "Get a user",
        "operationId": "userGet",
        "parameters": [
          {
            "type": "string",
            "description": "username of user to get",
            "name": "username",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/User"
          },
          "404": {
            "$ref": "#/responses/notFound"
          }
        }
      }
    },
    "/users/{username}/followers": {
      "get": {
        "produces": ["application/json"],
        "tags": ["user"],
        "summary": "List the given user's followers",
        "operationId": "userListFollowers",
        "parameters": [
          {
            "type": "string",
            "description": "username of user",
            "name": "username",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "description": "page number of results to return (1-based)",
            "name": "page",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page size of results",
            "name": "limit",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/UserList"
          }
        }
      }
    },
    "/users/{username}/following": {
      "get": {
        "produces": ["application/json"],
        "tags": ["user"],
        "summary": "List the users that the given user is following",
        "operationId": "userListFollowing",
        "parameters": [
          {
            "type": "string",
            "description": "username of user",
            "name": "username",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "description": "page number of results to return (1-based)",
            "name": "page",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page size of results",
            "name": "limit",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/UserList"
          }
        }
      }
    },
    "/users/{username}/gpg_keys": {
      "get": {
        "produces": ["application/json"],
        "tags": ["user"],
        "summary": "List the given user's GPG keys",
        "operationId": "userListGPGKeys",
        "parameters": [
          {
            "type": "string",
            "description": "username of user",
            "name": "username",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "description": "page number of results to return (1-based)",
            "name": "page",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page size of results",
            "name": "limit",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/GPGKeyList"
          }
        }
      }
    },
    "/users/{username}/heatmap": {
      "get": {
        "produces": ["application/json"],
        "tags": ["user"],
        "summary": "Get a user's heatmap",
        "operationId": "userGetHeatmapData",
        "parameters": [
          {
            "type": "string",
            "description": "username of user to get",
            "name": "username",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/UserHeatmapData"
          },
          "404": {
            "$ref": "#/responses/notFound"
          }
        }
      }
    },
    "/users/{username}/keys": {
      "get": {
        "produces": ["application/json"],
        "tags": ["user"],
        "summary": "List the given user's public keys",
        "operationId": "userListKeys",
        "parameters": [
          {
            "type": "string",
            "description": "username of user",
            "name": "username",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "fingerprint of the key",
            "name": "fingerprint",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page number of results to return (1-based)",
            "name": "page",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page size of results",
            "name": "limit",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/PublicKeyList"
          }
        }
      }
    },
    "/users/{username}/orgs": {
      "get": {
        "produces": ["application/json"],
        "tags": ["organization"],
        "summary": "List a user's organizations",
        "operationId": "orgListUserOrgs",
        "parameters": [
          {
            "type": "string",
            "description": "username of user",
            "name": "username",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "description": "page number of results to return (1-based)",
            "name": "page",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page size of results",
            "name": "limit",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/OrganizationList"
          }
        }
      }
    },
    "/users/{username}/orgs/{org}/permissions": {
      "get": {
        "produces": ["application/json"],
        "tags": ["organization"],
        "summary": "Get user permissions in organization",
        "operationId": "orgGetUserPermissions",
        "parameters": [
          {
            "type": "string",
            "description": "username of user",
            "name": "username",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "name of the organization",
            "name": "org",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/OrganizationPermissions"
          },
          "403": {
            "$ref": "#/responses/forbidden"
          },
          "404": {
            "$ref": "#/responses/notFound"
          }
        }
      }
    },
    "/users/{username}/repos": {
      "get": {
        "produces": ["application/json"],
        "tags": ["user"],
        "summary": "List the repos owned by the given user",
        "operationId": "userListRepos",
        "parameters": [
          {
            "type": "string",
            "description": "username of user",
            "name": "username",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "description": "page number of results to return (1-based)",
            "name": "page",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page size of results",
            "name": "limit",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/RepositoryList"
          }
        }
      }
    },
    "/users/{username}/starred": {
      "get": {
        "produces": ["application/json"],
        "tags": ["user"],
        "summary": "The repos that the given user has starred",
        "operationId": "userListStarred",
        "parameters": [
          {
            "type": "string",
            "description": "username of user",
            "name": "username",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "description": "page number of results to return (1-based)",
            "name": "page",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page size of results",
            "name": "limit",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/RepositoryList"
          }
        }
      }
    },
    "/users/{username}/subscriptions": {
      "get": {
        "produces": ["application/json"],
        "tags": ["user"],
        "summary": "List the repositories watched by a user",
        "operationId": "userListSubscriptions",
        "parameters": [
          {
            "type": "string",
            "description": "username of the user",
            "name": "username",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "description": "page number of results to return (1-based)",
            "name": "page",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page size of results",
            "name": "limit",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/RepositoryList"
          }
        }
      }
    },
    "/users/{username}/tokens": {
      "get": {
        "produces": ["application/json"],
        "tags": ["user"],
        "summary": "List the authenticated user's access tokens",
        "operationId": "userGetTokens",
        "parameters": [
          {
            "type": "string",
            "description": "username of user",
            "name": "username",
            "in": "path",
            "required": true
          },
          {
            "type": "integer",
            "description": "page number of results to return (1-based)",
            "name": "page",
            "in": "query"
          },
          {
            "type": "integer",
            "description": "page size of results",
            "name": "limit",
            "in": "query"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/responses/AccessTokenList"
          }
        }
      },
      "post": {
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "tags": ["user"],
        "summary": "Create an access token",
        "operationId": "userCreateToken",
        "parameters": [
          {
            "type": "string",
            "x-go-name": "Name",
            "description": "username of user",
            "name": "username",
            "in": "path",
            "required": true
          },
          {
            "name": "userCreateToken",
            "in": "body",
            "schema": {
              "$ref": "#/definitions/CreateAccessTokenOption"
            }
          }
        ],
        "responses": {
          "201": {
            "$ref": "#/responses/AccessToken"
          },
          "400": {
            "$ref": "#/responses/error"
          }
        }
      }
    },
    "/users/{username}/tokens/{token}": {
      "delete": {
        "produces": ["application/json"],
        "tags": ["user"],
        "summary": "delete an access token",
        "operationId": "userDeleteAccessToken",
        "parameters": [
          {
            "type": "string",
            "description": "username of user",
            "name": "username",
            "in": "path",
            "required": true
          },
          {
            "type": "string",
            "description": "token to be deleted, identified by ID and if not available by name",
            "name": "token",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "204": {
            "$ref": "#/responses/empty"
          },
          "404": {
            "$ref": "#/responses/notFound"
          },
          "422": {
            "$ref": "#/responses/error"
          }
        }
      }
    },
    "/version": {
      "get": {
        "produces": ["application/json"],
        "tags": ["miscellaneous"],
        "summary": "Returns the version of the Gitea application",
        "operationId": "getVersion",
        "responses": {
          "200": {
            "$ref": "#/responses/ServerVersion"
          }
        }
      }
    }
  },
  "definitions": {
    "APIError": {
      "description": "APIError is an api error with a message",
      "type": "object",
      "properties": {
        "message": {
          "type": "string",
          "x-go-name": "Message"
        },
        "url": {
          "type": "string",
          "x-go-name": "URL"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "AccessToken": {
      "type": "object",
      "title": "AccessToken represents an API access token.",
      "properties": {
        "id": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "ID"
        },
        "name": {
          "type": "string",
          "x-go-name": "Name"
        },
        "sha1": {
          "type": "string",
          "x-go-name": "Token"
        },
        "token_last_eight": {
          "type": "string",
          "x-go-name": "TokenLastEight"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "AddCollaboratorOption": {
      "description": "AddCollaboratorOption options when adding a user as a collaborator of a repository",
      "type": "object",
      "properties": {
        "permission": {
          "type": "string",
          "x-go-name": "Permission"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "AddTimeOption": {
      "description": "AddTimeOption options for adding time to an issue",
      "type": "object",
      "required": ["time"],
      "properties": {
        "created": {
          "type": "string",
          "format": "date-time",
          "x-go-name": "Created"
        },
        "time": {
          "description": "time in seconds",
          "type": "integer",
          "format": "int64",
          "x-go-name": "Time"
        },
        "user_name": {
          "description": "User who spent the time (optional)",
          "type": "string",
          "x-go-name": "User"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "AnnotatedTag": {
      "description": "AnnotatedTag represents an annotated tag",
      "type": "object",
      "properties": {
        "message": {
          "type": "string",
          "x-go-name": "Message"
        },
        "object": {
          "$ref": "#/definitions/AnnotatedTagObject"
        },
        "sha": {
          "type": "string",
          "x-go-name": "SHA"
        },
        "tag": {
          "type": "string",
          "x-go-name": "Tag"
        },
        "tagger": {
          "$ref": "#/definitions/CommitUser"
        },
        "url": {
          "type": "string",
          "x-go-name": "URL"
        },
        "verification": {
          "$ref": "#/definitions/PayloadCommitVerification"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "AnnotatedTagObject": {
      "description": "AnnotatedTagObject contains meta information of the tag object",
      "type": "object",
      "properties": {
        "sha": {
          "type": "string",
          "x-go-name": "SHA"
        },
        "type": {
          "type": "string",
          "x-go-name": "Type"
        },
        "url": {
          "type": "string",
          "x-go-name": "URL"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "Attachment": {
      "description": "Attachment a generic attachment",
      "type": "object",
      "properties": {
        "browser_download_url": {
          "type": "string",
          "x-go-name": "DownloadURL"
        },
        "created_at": {
          "type": "string",
          "format": "date-time",
          "x-go-name": "Created"
        },
        "download_count": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "DownloadCount"
        },
        "id": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "ID"
        },
        "name": {
          "type": "string",
          "x-go-name": "Name"
        },
        "size": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "Size"
        },
        "uuid": {
          "type": "string",
          "x-go-name": "UUID"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "Branch": {
      "description": "Branch represents a repository branch",
      "type": "object",
      "properties": {
        "commit": {
          "$ref": "#/definitions/PayloadCommit"
        },
        "effective_branch_protection_name": {
          "type": "string",
          "x-go-name": "EffectiveBranchProtectionName"
        },
        "enable_status_check": {
          "type": "boolean",
          "x-go-name": "EnableStatusCheck"
        },
        "name": {
          "type": "string",
          "x-go-name": "Name"
        },
        "protected": {
          "type": "boolean",
          "x-go-name": "Protected"
        },
        "required_approvals": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "RequiredApprovals"
        },
        "status_check_contexts": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "x-go-name": "StatusCheckContexts"
        },
        "user_can_merge": {
          "type": "boolean",
          "x-go-name": "UserCanMerge"
        },
        "user_can_push": {
          "type": "boolean",
          "x-go-name": "UserCanPush"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "BranchProtection": {
      "description": "BranchProtection represents a branch protection for a repository",
      "type": "object",
      "properties": {
        "approvals_whitelist_teams": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "x-go-name": "ApprovalsWhitelistTeams"
        },
        "approvals_whitelist_username": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "x-go-name": "ApprovalsWhitelistUsernames"
        },
        "block_on_official_review_requests": {
          "type": "boolean",
          "x-go-name": "BlockOnOfficialReviewRequests"
        },
        "block_on_outdated_branch": {
          "type": "boolean",
          "x-go-name": "BlockOnOutdatedBranch"
        },
        "block_on_rejected_reviews": {
          "type": "boolean",
          "x-go-name": "BlockOnRejectedReviews"
        },
        "branch_name": {
          "type": "string",
          "x-go-name": "BranchName"
        },
        "created_at": {
          "type": "string",
          "format": "date-time",
          "x-go-name": "Created"
        },
        "dismiss_stale_approvals": {
          "type": "boolean",
          "x-go-name": "DismissStaleApprovals"
        },
        "enable_approvals_whitelist": {
          "type": "boolean",
          "x-go-name": "EnableApprovalsWhitelist"
        },
        "enable_merge_whitelist": {
          "type": "boolean",
          "x-go-name": "EnableMergeWhitelist"
        },
        "enable_push": {
          "type": "boolean",
          "x-go-name": "EnablePush"
        },
        "enable_push_whitelist": {
          "type": "boolean",
          "x-go-name": "EnablePushWhitelist"
        },
        "enable_status_check": {
          "type": "boolean",
          "x-go-name": "EnableStatusCheck"
        },
        "merge_whitelist_teams": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "x-go-name": "MergeWhitelistTeams"
        },
        "merge_whitelist_usernames": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "x-go-name": "MergeWhitelistUsernames"
        },
        "protected_file_patterns": {
          "type": "string",
          "x-go-name": "ProtectedFilePatterns"
        },
        "push_whitelist_deploy_keys": {
          "type": "boolean",
          "x-go-name": "PushWhitelistDeployKeys"
        },
        "push_whitelist_teams": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "x-go-name": "PushWhitelistTeams"
        },
        "push_whitelist_usernames": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "x-go-name": "PushWhitelistUsernames"
        },
        "require_signed_commits": {
          "type": "boolean",
          "x-go-name": "RequireSignedCommits"
        },
        "required_approvals": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "RequiredApprovals"
        },
        "status_check_contexts": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "x-go-name": "StatusCheckContexts"
        },
        "unprotected_file_patterns": {
          "type": "string",
          "x-go-name": "UnprotectedFilePatterns"
        },
        "updated_at": {
          "type": "string",
          "format": "date-time",
          "x-go-name": "Updated"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "CatalogStage": {
      "description": "CatalogStage a repo's catalog stage metadata",
      "type": "object",
      "properties": {
        "branch_or_tag_name": {
          "type": "string",
          "x-go-name": "Tag"
        },
        "contents_url": {
          "type": "string",
          "x-go-name": "ContentsURL"
        },
        "git_trees_url": {
          "type": "string",
          "x-go-name": "GitTreesURL"
        },
        "release_url": {
          "type": "string",
          "x-go-name": "ReleaseURL"
        },
        "released": {
          "type": "string",
          "format": "date-time",
          "x-go-name": "Released"
        },
        "tarball_url": {
          "type": "string",
          "x-go-name": "TarballURL"
        },
        "zipball_url": {
          "type": "string",
          "x-go-name": "ZipballURL"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "CatalogStages": {
      "description": "CatalogStages a repo's catalog stages",
      "type": "object",
      "properties": {
        "draft": {
          "$ref": "#/definitions/CatalogStage"
        },
        "latest": {
          "$ref": "#/definitions/CatalogStage"
        },
        "preprod": {
          "$ref": "#/definitions/CatalogStage"
        },
        "prod": {
          "$ref": "#/definitions/CatalogStage"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "CombinedStatus": {
      "description": "CombinedStatus holds the combined state of several statuses for a single commit",
      "type": "object",
      "properties": {
        "commit_url": {
          "type": "string",
          "x-go-name": "CommitURL"
        },
        "repository": {
          "$ref": "#/definitions/Repository"
        },
        "sha": {
          "type": "string",
          "x-go-name": "SHA"
        },
        "state": {
          "$ref": "#/definitions/CommitStatusState"
        },
        "statuses": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/CommitStatus"
          },
          "x-go-name": "Statuses"
        },
        "total_count": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "TotalCount"
        },
        "url": {
          "type": "string",
          "x-go-name": "URL"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "Comment": {
      "description": "Comment represents a comment on a commit or issue",
      "type": "object",
      "properties": {
        "body": {
          "type": "string",
          "x-go-name": "Body"
        },
        "created_at": {
          "type": "string",
          "format": "date-time",
          "x-go-name": "Created"
        },
        "html_url": {
          "type": "string",
          "x-go-name": "HTMLURL"
        },
        "id": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "ID"
        },
        "issue_url": {
          "type": "string",
          "x-go-name": "IssueURL"
        },
        "original_author": {
          "type": "string",
          "x-go-name": "OriginalAuthor"
        },
        "original_author_id": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "OriginalAuthorID"
        },
        "pull_request_url": {
          "type": "string",
          "x-go-name": "PRURL"
        },
        "updated_at": {
          "type": "string",
          "format": "date-time",
          "x-go-name": "Updated"
        },
        "user": {
          "$ref": "#/definitions/User"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "Commit": {
      "type": "object",
      "title": "Commit contains information generated from a Git commit.",
      "properties": {
        "author": {
          "$ref": "#/definitions/User"
        },
        "commit": {
          "$ref": "#/definitions/RepoCommit"
        },
        "committer": {
          "$ref": "#/definitions/User"
        },
        "created": {
          "type": "string",
          "format": "date-time",
          "x-go-name": "Created"
        },
        "files": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/CommitAffectedFiles"
          },
          "x-go-name": "Files"
        },
        "html_url": {
          "type": "string",
          "x-go-name": "HTMLURL"
        },
        "parents": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/CommitMeta"
          },
          "x-go-name": "Parents"
        },
        "sha": {
          "type": "string",
          "x-go-name": "SHA"
        },
        "url": {
          "type": "string",
          "x-go-name": "URL"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "CommitAffectedFiles": {
      "description": "CommitAffectedFiles store information about files affected by the commit",
      "type": "object",
      "properties": {
        "filename": {
          "type": "string",
          "x-go-name": "Filename"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "CommitDateOptions": {
      "description": "CommitDateOptions store dates for GIT_AUTHOR_DATE and GIT_COMMITTER_DATE",
      "type": "object",
      "properties": {
        "author": {
          "type": "string",
          "format": "date-time",
          "x-go-name": "Author"
        },
        "committer": {
          "type": "string",
          "format": "date-time",
          "x-go-name": "Committer"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "CommitMeta": {
      "type": "object",
      "title": "CommitMeta contains meta information of a commit in terms of API.",
      "properties": {
        "created": {
          "type": "string",
          "format": "date-time",
          "x-go-name": "Created"
        },
        "sha": {
          "type": "string",
          "x-go-name": "SHA"
        },
        "url": {
          "type": "string",
          "x-go-name": "URL"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "CommitStatus": {
      "description": "CommitStatus holds a single status of a single Commit",
      "type": "object",
      "properties": {
        "context": {
          "type": "string",
          "x-go-name": "Context"
        },
        "created_at": {
          "type": "string",
          "format": "date-time",
          "x-go-name": "Created"
        },
        "creator": {
          "$ref": "#/definitions/User"
        },
        "description": {
          "type": "string",
          "x-go-name": "Description"
        },
        "id": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "ID"
        },
        "status": {
          "$ref": "#/definitions/CommitStatusState"
        },
        "target_url": {
          "type": "string",
          "x-go-name": "TargetURL"
        },
        "updated_at": {
          "type": "string",
          "format": "date-time",
          "x-go-name": "Updated"
        },
        "url": {
          "type": "string",
          "x-go-name": "URL"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "CommitStatusState": {
      "description": "CommitStatusState holds the state of a CommitStatus\nIt can be \"pending\", \"success\", \"error\", \"failure\", and \"warning\"",
      "type": "string",
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "CommitUser": {
      "type": "object",
      "title": "CommitUser contains information of a user in the context of a commit.",
      "properties": {
        "date": {
          "type": "string",
          "x-go-name": "Date"
        },
        "email": {
          "type": "string",
          "format": "email",
          "x-go-name": "Email"
        },
        "name": {
          "type": "string",
          "x-go-name": "Name"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "ContentsResponse": {
      "description": "ContentsResponse contains information about a repo's entry's (dir, file, symlink, submodule) metadata and content",
      "type": "object",
      "properties": {
        "_links": {
          "$ref": "#/definitions/FileLinksResponse"
        },
        "content": {
          "description": "`content` is populated when `type` is `file`, otherwise null",
          "type": "string",
          "x-go-name": "Content"
        },
        "download_url": {
          "type": "string",
          "x-go-name": "DownloadURL"
        },
        "encoding": {
          "description": "`encoding` is populated when `type` is `file`, otherwise null",
          "type": "string",
          "x-go-name": "Encoding"
        },
        "git_url": {
          "type": "string",
          "x-go-name": "GitURL"
        },
        "html_url": {
          "type": "string",
          "x-go-name": "HTMLURL"
        },
        "name": {
          "type": "string",
          "x-go-name": "Name"
        },
        "path": {
          "type": "string",
          "x-go-name": "Path"
        },
        "sha": {
          "type": "string",
          "x-go-name": "SHA"
        },
        "size": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "Size"
        },
        "submodule_git_url": {
          "description": "`submodule_git_url` is populated when `type` is `submodule`, otherwise null",
          "type": "string",
          "x-go-name": "SubmoduleGitURL"
        },
        "target": {
          "description": "`target` is populated when `type` is `symlink`, otherwise null",
          "type": "string",
          "x-go-name": "Target"
        },
        "type": {
          "description": "`type` will be `file`, `dir`, `symlink`, or `submodule`",
          "type": "string",
          "x-go-name": "Type"
        },
        "url": {
          "type": "string",
          "x-go-name": "URL"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "CreateAccessTokenOption": {
      "description": "CreateAccessTokenOption options when create access token",
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "x-go-name": "Name"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "CreateBranchProtectionOption": {
      "description": "CreateBranchProtectionOption options for creating a branch protection",
      "type": "object",
      "properties": {
        "approvals_whitelist_teams": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "x-go-name": "ApprovalsWhitelistTeams"
        },
        "approvals_whitelist_username": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "x-go-name": "ApprovalsWhitelistUsernames"
        },
        "block_on_official_review_requests": {
          "type": "boolean",
          "x-go-name": "BlockOnOfficialReviewRequests"
        },
        "block_on_outdated_branch": {
          "type": "boolean",
          "x-go-name": "BlockOnOutdatedBranch"
        },
        "block_on_rejected_reviews": {
          "type": "boolean",
          "x-go-name": "BlockOnRejectedReviews"
        },
        "branch_name": {
          "type": "string",
          "x-go-name": "BranchName"
        },
        "dismiss_stale_approvals": {
          "type": "boolean",
          "x-go-name": "DismissStaleApprovals"
        },
        "enable_approvals_whitelist": {
          "type": "boolean",
          "x-go-name": "EnableApprovalsWhitelist"
        },
        "enable_merge_whitelist": {
          "type": "boolean",
          "x-go-name": "EnableMergeWhitelist"
        },
        "enable_push": {
          "type": "boolean",
          "x-go-name": "EnablePush"
        },
        "enable_push_whitelist": {
          "type": "boolean",
          "x-go-name": "EnablePushWhitelist"
        },
        "enable_status_check": {
          "type": "boolean",
          "x-go-name": "EnableStatusCheck"
        },
        "merge_whitelist_teams": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "x-go-name": "MergeWhitelistTeams"
        },
        "merge_whitelist_usernames": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "x-go-name": "MergeWhitelistUsernames"
        },
        "protected_file_patterns": {
          "type": "string",
          "x-go-name": "ProtectedFilePatterns"
        },
        "push_whitelist_deploy_keys": {
          "type": "boolean",
          "x-go-name": "PushWhitelistDeployKeys"
        },
        "push_whitelist_teams": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "x-go-name": "PushWhitelistTeams"
        },
        "push_whitelist_usernames": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "x-go-name": "PushWhitelistUsernames"
        },
        "require_signed_commits": {
          "type": "boolean",
          "x-go-name": "RequireSignedCommits"
        },
        "required_approvals": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "RequiredApprovals"
        },
        "status_check_contexts": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "x-go-name": "StatusCheckContexts"
        },
        "unprotected_file_patterns": {
          "type": "string",
          "x-go-name": "UnprotectedFilePatterns"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "CreateBranchRepoOption": {
      "description": "CreateBranchRepoOption options when creating a branch in a repository",
      "type": "object",
      "required": ["new_branch_name"],
      "properties": {
        "new_branch_name": {
          "description": "Name of the branch to create",
          "type": "string",
          "uniqueItems": true,
          "x-go-name": "BranchName"
        },
        "old_branch_name": {
          "description": "Name of the old branch to create from",
          "type": "string",
          "uniqueItems": true,
          "x-go-name": "OldBranchName"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "CreateEmailOption": {
      "description": "CreateEmailOption options when creating email addresses",
      "type": "object",
      "properties": {
        "emails": {
          "description": "email addresses to add",
          "type": "array",
          "items": {
            "type": "string"
          },
          "x-go-name": "Emails"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "CreateFileOptions": {
      "description": "CreateFileOptions options for creating files\nNote: `author` and `committer` are optional (if only one is given, it will be used for the other, otherwise the authenticated user will be used)",
      "type": "object",
      "required": ["content"],
      "properties": {
        "author": {
          "$ref": "#/definitions/Identity"
        },
        "branch": {
          "description": "branch (optional) to base this file from. if not given, the default branch is used",
          "type": "string",
          "x-go-name": "BranchName"
        },
        "committer": {
          "$ref": "#/definitions/Identity"
        },
        "content": {
          "description": "content must be base64 encoded",
          "type": "string",
          "x-go-name": "Content"
        },
        "dates": {
          "$ref": "#/definitions/CommitDateOptions"
        },
        "message": {
          "description": "message (optional) for the commit of this file. if not supplied, a default message will be used",
          "type": "string",
          "x-go-name": "Message"
        },
        "new_branch": {
          "description": "new_branch (optional) will make a new branch from `branch` before creating the file",
          "type": "string",
          "x-go-name": "NewBranchName"
        },
        "signoff": {
          "description": "Add a Signed-off-by trailer by the committer at the end of the commit log message.",
          "type": "boolean",
          "x-go-name": "Signoff"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "CreateForkOption": {
      "description": "CreateForkOption options for creating a fork",
      "type": "object",
      "properties": {
        "name": {
          "description": "name of the forked repository",
          "type": "string",
          "x-go-name": "Name"
        },
        "organization": {
          "description": "organization name, if forking into an organization",
          "type": "string",
          "x-go-name": "Organization"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "CreateGPGKeyOption": {
      "description": "CreateGPGKeyOption options create user GPG key",
      "type": "object",
      "required": ["armored_public_key"],
      "properties": {
        "armored_public_key": {
          "description": "An armored GPG key to add",
          "type": "string",
          "uniqueItems": true,
          "x-go-name": "ArmoredKey"
        },
        "armored_signature": {
          "type": "string",
          "x-go-name": "Signature"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "CreateHookOption": {
      "description": "CreateHookOption options when create a hook",
      "type": "object",
      "required": ["type", "config"],
      "properties": {
        "active": {
          "type": "boolean",
          "default": false,
          "x-go-name": "Active"
        },
        "branch_filter": {
          "type": "string",
          "x-go-name": "BranchFilter"
        },
        "config": {
          "$ref": "#/definitions/CreateHookOptionConfig"
        },
        "events": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "x-go-name": "Events"
        },
        "type": {
          "type": "string",
          "enum": [
            "dingtalk",
            "discord",
            "gitea",
            "gogs",
            "msteams",
            "slack",
            "telegram",
            "feishu",
            "wechatwork"
          ],
          "x-go-name": "Type"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "CreateHookOptionConfig": {
      "description": "CreateHookOptionConfig has all config options in it\nrequired are \"content_type\" and \"url\" Required",
      "type": "object",
      "additionalProperties": {
        "type": "string"
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "CreateIssueCommentOption": {
      "description": "CreateIssueCommentOption options for creating a comment on an issue",
      "type": "object",
      "required": ["body"],
      "properties": {
        "body": {
          "type": "string",
          "x-go-name": "Body"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "CreateIssueOption": {
      "description": "CreateIssueOption options to create one issue",
      "type": "object",
      "required": ["title"],
      "properties": {
        "assignee": {
          "description": "deprecated",
          "type": "string",
          "x-go-name": "Assignee"
        },
        "assignees": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "x-go-name": "Assignees"
        },
        "body": {
          "type": "string",
          "x-go-name": "Body"
        },
        "closed": {
          "type": "boolean",
          "x-go-name": "Closed"
        },
        "due_date": {
          "type": "string",
          "format": "date-time",
          "x-go-name": "Deadline"
        },
        "labels": {
          "description": "list of label ids",
          "type": "array",
          "items": {
            "type": "integer",
            "format": "int64"
          },
          "x-go-name": "Labels"
        },
        "milestone": {
          "description": "milestone id",
          "type": "integer",
          "format": "int64",
          "x-go-name": "Milestone"
        },
        "ref": {
          "type": "string",
          "x-go-name": "Ref"
        },
        "title": {
          "type": "string",
          "x-go-name": "Title"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "CreateKeyOption": {
      "description": "CreateKeyOption options when creating a key",
      "type": "object",
      "required": ["title", "key"],
      "properties": {
        "key": {
          "description": "An armored SSH key to add",
          "type": "string",
          "uniqueItems": true,
          "x-go-name": "Key"
        },
        "read_only": {
          "description": "Describe if the key has only read access or read/write",
          "type": "boolean",
          "x-go-name": "ReadOnly"
        },
        "title": {
          "description": "Title of the key to add",
          "type": "string",
          "uniqueItems": true,
          "x-go-name": "Title"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "CreateLabelOption": {
      "description": "CreateLabelOption options for creating a label",
      "type": "object",
      "required": ["name", "color"],
      "properties": {
        "color": {
          "type": "string",
          "x-go-name": "Color",
          "example": "#00aabb"
        },
        "description": {
          "type": "string",
          "x-go-name": "Description"
        },
        "name": {
          "type": "string",
          "x-go-name": "Name"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "CreateMilestoneOption": {
      "description": "CreateMilestoneOption options for creating a milestone",
      "type": "object",
      "properties": {
        "description": {
          "type": "string",
          "x-go-name": "Description"
        },
        "due_on": {
          "type": "string",
          "format": "date-time",
          "x-go-name": "Deadline"
        },
        "state": {
          "type": "string",
          "enum": ["open", "closed"],
          "x-go-name": "State"
        },
        "title": {
          "type": "string",
          "x-go-name": "Title"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "CreateOAuth2ApplicationOptions": {
      "description": "CreateOAuth2ApplicationOptions holds options to create an oauth2 application",
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "x-go-name": "Name"
        },
        "redirect_uris": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "x-go-name": "RedirectURIs"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "CreateOrgOption": {
      "description": "CreateOrgOption options for creating an organization",
      "type": "object",
      "required": ["username"],
      "properties": {
        "description": {
          "type": "string",
          "x-go-name": "Description"
        },
        "full_name": {
          "type": "string",
          "x-go-name": "FullName"
        },
        "location": {
          "type": "string",
          "x-go-name": "Location"
        },
        "repo_admin_change_team_access": {
          "type": "boolean",
          "x-go-name": "RepoAdminChangeTeamAccess"
        },
        "username": {
          "type": "string",
          "x-go-name": "UserName"
        },
        "visibility": {
          "description": "possible values are `public` (default), `limited` or `private`",
          "type": "string",
          "enum": ["public", "limited", "private"],
          "x-go-name": "Visibility"
        },
        "website": {
          "type": "string",
          "x-go-name": "Website"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "CreatePullRequestOption": {
      "description": "CreatePullRequestOption options when creating a pull request",
      "type": "object",
      "properties": {
        "assignee": {
          "type": "string",
          "x-go-name": "Assignee"
        },
        "assignees": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "x-go-name": "Assignees"
        },
        "base": {
          "type": "string",
          "x-go-name": "Base"
        },
        "body": {
          "type": "string",
          "x-go-name": "Body"
        },
        "due_date": {
          "type": "string",
          "format": "date-time",
          "x-go-name": "Deadline"
        },
        "head": {
          "type": "string",
          "x-go-name": "Head"
        },
        "labels": {
          "type": "array",
          "items": {
            "type": "integer",
            "format": "int64"
          },
          "x-go-name": "Labels"
        },
        "milestone": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "Milestone"
        },
        "title": {
          "type": "string",
          "x-go-name": "Title"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "CreatePullReviewComment": {
      "description": "CreatePullReviewComment represent a review comment for creation api",
      "type": "object",
      "properties": {
        "body": {
          "type": "string",
          "x-go-name": "Body"
        },
        "new_position": {
          "description": "if comment to new file line or 0",
          "type": "integer",
          "format": "int64",
          "x-go-name": "NewLineNum"
        },
        "old_position": {
          "description": "if comment to old file line or 0",
          "type": "integer",
          "format": "int64",
          "x-go-name": "OldLineNum"
        },
        "path": {
          "description": "the tree path",
          "type": "string",
          "x-go-name": "Path"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "CreatePullReviewOptions": {
      "description": "CreatePullReviewOptions are options to create a pull review",
      "type": "object",
      "properties": {
        "body": {
          "type": "string",
          "x-go-name": "Body"
        },
        "comments": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/CreatePullReviewComment"
          },
          "x-go-name": "Comments"
        },
        "commit_id": {
          "type": "string",
          "x-go-name": "CommitID"
        },
        "event": {
          "$ref": "#/definitions/ReviewStateType"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "CreateReleaseOption": {
      "description": "CreateReleaseOption options when creating a release",
      "type": "object",
      "required": ["tag_name"],
      "properties": {
        "body": {
          "type": "string",
          "x-go-name": "Note"
        },
        "draft": {
          "type": "boolean",
          "x-go-name": "IsDraft"
        },
        "name": {
          "type": "string",
          "x-go-name": "Title"
        },
        "prerelease": {
          "type": "boolean",
          "x-go-name": "IsPrerelease"
        },
        "tag_name": {
          "type": "string",
          "x-go-name": "TagName"
        },
        "target_commitish": {
          "type": "string",
          "x-go-name": "Target"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "CreateRepoOption": {
      "description": "CreateRepoOption options when creating repository",
      "type": "object",
      "required": ["name"],
      "properties": {
        "auto_init": {
          "description": "Whether the repository should be auto-initialized?",
          "type": "boolean",
          "x-go-name": "AutoInit"
        },
        "default_branch": {
          "description": "DefaultBranch of the repository (used when initializes and in template)",
          "type": "string",
          "x-go-name": "DefaultBranch"
        },
        "description": {
          "description": "Description of the repository to create",
          "type": "string",
          "x-go-name": "Description"
        },
        "gitignores": {
          "description": "Gitignores to use",
          "type": "string",
          "x-go-name": "Gitignores"
        },
        "issue_labels": {
          "description": "Label-Set to use",
          "type": "string",
          "x-go-name": "IssueLabels"
        },
        "license": {
          "description": "License to use",
          "type": "string",
          "x-go-name": "License"
        },
        "name": {
          "description": "Name of the repository to create",
          "type": "string",
          "uniqueItems": true,
          "x-go-name": "Name"
        },
        "private": {
          "description": "Whether the repository is private",
          "type": "boolean",
          "x-go-name": "Private"
        },
        "readme": {
          "description": "Readme of the repository to create",
          "type": "string",
          "x-go-name": "Readme"
        },
        "template": {
          "description": "Whether the repository is template",
          "type": "boolean",
          "x-go-name": "Template"
        },
        "trust_model": {
          "description": "TrustModel of the repository",
          "type": "string",
          "enum": [
            "default",
            "collaborator",
            "committer",
            "collaboratorcommitter"
          ],
          "x-go-name": "TrustModel"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "CreateStatusOption": {
      "description": "CreateStatusOption holds the information needed to create a new CommitStatus for a Commit",
      "type": "object",
      "properties": {
        "context": {
          "type": "string",
          "x-go-name": "Context"
        },
        "description": {
          "type": "string",
          "x-go-name": "Description"
        },
        "state": {
          "$ref": "#/definitions/CommitStatusState"
        },
        "target_url": {
          "type": "string",
          "x-go-name": "TargetURL"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "CreateTagOption": {
      "description": "CreateTagOption options when creating a tag",
      "type": "object",
      "required": ["tag_name"],
      "properties": {
        "message": {
          "type": "string",
          "x-go-name": "Message"
        },
        "tag_name": {
          "type": "string",
          "x-go-name": "TagName"
        },
        "target": {
          "type": "string",
          "x-go-name": "Target"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "CreateTeamOption": {
      "description": "CreateTeamOption options for creating a team",
      "type": "object",
      "required": ["name"],
      "properties": {
        "can_create_org_repo": {
          "type": "boolean",
          "x-go-name": "CanCreateOrgRepo"
        },
        "description": {
          "type": "string",
          "x-go-name": "Description"
        },
        "includes_all_repositories": {
          "type": "boolean",
          "x-go-name": "IncludesAllRepositories"
        },
        "name": {
          "type": "string",
          "x-go-name": "Name"
        },
        "permission": {
          "type": "string",
          "enum": ["read", "write", "admin"],
          "x-go-name": "Permission"
        },
        "units": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "x-go-name": "Units",
          "example": [
            "repo.code",
            "repo.issues",
            "repo.ext_issues",
            "repo.wiki",
            "repo.pulls",
            "repo.releases",
            "repo.projects",
            "repo.ext_wiki"
          ]
        },
        "units_map": {
          "type": "object",
          "additionalProperties": {
            "type": "string"
          },
          "x-go-name": "UnitsMap",
          "example": "{\"repo.code\":\"read\",\"repo.issues\":\"write\",\"repo.ext_issues\":\"none\",\"repo.wiki\":\"admin\",\"repo.pulls\":\"owner\",\"repo.releases\":\"none\",\"repo.projects\":\"none\",\"repo.ext_wiki\":\"none\"]"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "CreateUserOption": {
      "description": "CreateUserOption create user options",
      "type": "object",
      "required": ["username", "email", "password"],
      "properties": {
        "email": {
          "type": "string",
          "format": "email",
          "x-go-name": "Email"
        },
        "full_name": {
          "type": "string",
          "x-go-name": "FullName"
        },
        "login_name": {
          "type": "string",
          "x-go-name": "LoginName"
        },
        "must_change_password": {
          "type": "boolean",
          "x-go-name": "MustChangePassword"
        },
        "password": {
          "type": "string",
          "x-go-name": "Password"
        },
        "restricted": {
          "type": "boolean",
          "x-go-name": "Restricted"
        },
        "send_notify": {
          "type": "boolean",
          "x-go-name": "SendNotify"
        },
        "source_id": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "SourceID"
        },
        "username": {
          "type": "string",
          "x-go-name": "Username"
        },
        "visibility": {
          "type": "string",
          "x-go-name": "Visibility"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "CreateWikiPageOptions": {
      "description": "CreateWikiPageOptions form for creating wiki",
      "type": "object",
      "properties": {
        "content_base64": {
          "description": "content must be base64 encoded",
          "type": "string",
          "x-go-name": "ContentBase64"
        },
        "message": {
          "description": "optional commit message summarizing the change",
          "type": "string",
          "x-go-name": "Message"
        },
        "title": {
          "description": "page title. leave empty to keep unchanged",
          "type": "string",
          "x-go-name": "Title"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "Cron": {
      "description": "Cron represents a Cron task",
      "type": "object",
      "properties": {
        "exec_times": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "ExecTimes"
        },
        "name": {
          "type": "string",
          "x-go-name": "Name"
        },
        "next": {
          "type": "string",
          "format": "date-time",
          "x-go-name": "Next"
        },
        "prev": {
          "type": "string",
          "format": "date-time",
          "x-go-name": "Prev"
        },
        "schedule": {
          "type": "string",
          "x-go-name": "Schedule"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "DeleteEmailOption": {
      "description": "DeleteEmailOption options when deleting email addresses",
      "type": "object",
      "properties": {
        "emails": {
          "description": "email addresses to delete",
          "type": "array",
          "items": {
            "type": "string"
          },
          "x-go-name": "Emails"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "DeleteFileOptions": {
      "description": "DeleteFileOptions options for deleting files (used for other File structs below)\nNote: `author` and `committer` are optional (if only one is given, it will be used for the other, otherwise the authenticated user will be used)",
      "type": "object",
      "required": ["sha"],
      "properties": {
        "author": {
          "$ref": "#/definitions/Identity"
        },
        "branch": {
          "description": "branch (optional) to base this file from. if not given, the default branch is used",
          "type": "string",
          "x-go-name": "BranchName"
        },
        "committer": {
          "$ref": "#/definitions/Identity"
        },
        "dates": {
          "$ref": "#/definitions/CommitDateOptions"
        },
        "message": {
          "description": "message (optional) for the commit of this file. if not supplied, a default message will be used",
          "type": "string",
          "x-go-name": "Message"
        },
        "new_branch": {
          "description": "new_branch (optional) will make a new branch from `branch` before creating the file",
          "type": "string",
          "x-go-name": "NewBranchName"
        },
        "sha": {
          "description": "sha is the SHA for the file that already exists",
          "type": "string",
          "x-go-name": "SHA"
        },
        "signoff": {
          "description": "Add a Signed-off-by trailer by the committer at the end of the commit log message.",
          "type": "boolean",
          "x-go-name": "Signoff"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "DeployKey": {
      "description": "DeployKey a deploy key",
      "type": "object",
      "properties": {
        "created_at": {
          "type": "string",
          "format": "date-time",
          "x-go-name": "Created"
        },
        "fingerprint": {
          "type": "string",
          "x-go-name": "Fingerprint"
        },
        "id": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "ID"
        },
        "key": {
          "type": "string",
          "x-go-name": "Key"
        },
        "key_id": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "KeyID"
        },
        "read_only": {
          "type": "boolean",
          "x-go-name": "ReadOnly"
        },
        "repository": {
          "$ref": "#/definitions/Repository"
        },
        "title": {
          "type": "string",
          "x-go-name": "Title"
        },
        "url": {
          "type": "string",
          "x-go-name": "URL"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "DismissPullReviewOptions": {
      "description": "DismissPullReviewOptions are options to dismiss a pull review",
      "type": "object",
      "properties": {
        "message": {
          "type": "string",
          "x-go-name": "Message"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "EditAttachmentOptions": {
      "description": "EditAttachmentOptions options for editing attachments",
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "x-go-name": "Name"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "EditBranchProtectionOption": {
      "description": "EditBranchProtectionOption options for editing a branch protection",
      "type": "object",
      "properties": {
        "approvals_whitelist_teams": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "x-go-name": "ApprovalsWhitelistTeams"
        },
        "approvals_whitelist_username": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "x-go-name": "ApprovalsWhitelistUsernames"
        },
        "block_on_official_review_requests": {
          "type": "boolean",
          "x-go-name": "BlockOnOfficialReviewRequests"
        },
        "block_on_outdated_branch": {
          "type": "boolean",
          "x-go-name": "BlockOnOutdatedBranch"
        },
        "block_on_rejected_reviews": {
          "type": "boolean",
          "x-go-name": "BlockOnRejectedReviews"
        },
        "dismiss_stale_approvals": {
          "type": "boolean",
          "x-go-name": "DismissStaleApprovals"
        },
        "enable_approvals_whitelist": {
          "type": "boolean",
          "x-go-name": "EnableApprovalsWhitelist"
        },
        "enable_merge_whitelist": {
          "type": "boolean",
          "x-go-name": "EnableMergeWhitelist"
        },
        "enable_push": {
          "type": "boolean",
          "x-go-name": "EnablePush"
        },
        "enable_push_whitelist": {
          "type": "boolean",
          "x-go-name": "EnablePushWhitelist"
        },
        "enable_status_check": {
          "type": "boolean",
          "x-go-name": "EnableStatusCheck"
        },
        "merge_whitelist_teams": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "x-go-name": "MergeWhitelistTeams"
        },
        "merge_whitelist_usernames": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "x-go-name": "MergeWhitelistUsernames"
        },
        "protected_file_patterns": {
          "type": "string",
          "x-go-name": "ProtectedFilePatterns"
        },
        "push_whitelist_deploy_keys": {
          "type": "boolean",
          "x-go-name": "PushWhitelistDeployKeys"
        },
        "push_whitelist_teams": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "x-go-name": "PushWhitelistTeams"
        },
        "push_whitelist_usernames": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "x-go-name": "PushWhitelistUsernames"
        },
        "require_signed_commits": {
          "type": "boolean",
          "x-go-name": "RequireSignedCommits"
        },
        "required_approvals": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "RequiredApprovals"
        },
        "status_check_contexts": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "x-go-name": "StatusCheckContexts"
        },
        "unprotected_file_patterns": {
          "type": "string",
          "x-go-name": "UnprotectedFilePatterns"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "EditDeadlineOption": {
      "description": "EditDeadlineOption options for creating a deadline",
      "type": "object",
      "required": ["due_date"],
      "properties": {
        "due_date": {
          "type": "string",
          "format": "date-time",
          "x-go-name": "Deadline"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "EditGitHookOption": {
      "description": "EditGitHookOption options when modifying one Git hook",
      "type": "object",
      "properties": {
        "content": {
          "type": "string",
          "x-go-name": "Content"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "EditHookOption": {
      "description": "EditHookOption options when modify one hook",
      "type": "object",
      "properties": {
        "active": {
          "type": "boolean",
          "x-go-name": "Active"
        },
        "branch_filter": {
          "type": "string",
          "x-go-name": "BranchFilter"
        },
        "config": {
          "type": "object",
          "additionalProperties": {
            "type": "string"
          },
          "x-go-name": "Config"
        },
        "events": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "x-go-name": "Events"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "EditIssueCommentOption": {
      "description": "EditIssueCommentOption options for editing a comment",
      "type": "object",
      "required": ["body"],
      "properties": {
        "body": {
          "type": "string",
          "x-go-name": "Body"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "EditIssueOption": {
      "description": "EditIssueOption options for editing an issue",
      "type": "object",
      "properties": {
        "assignee": {
          "description": "deprecated",
          "type": "string",
          "x-go-name": "Assignee"
        },
        "assignees": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "x-go-name": "Assignees"
        },
        "body": {
          "type": "string",
          "x-go-name": "Body"
        },
        "due_date": {
          "type": "string",
          "format": "date-time",
          "x-go-name": "Deadline"
        },
        "milestone": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "Milestone"
        },
        "ref": {
          "type": "string",
          "x-go-name": "Ref"
        },
        "state": {
          "type": "string",
          "x-go-name": "State"
        },
        "title": {
          "type": "string",
          "x-go-name": "Title"
        },
        "unset_due_date": {
          "type": "boolean",
          "x-go-name": "RemoveDeadline"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "EditLabelOption": {
      "description": "EditLabelOption options for editing a label",
      "type": "object",
      "properties": {
        "color": {
          "type": "string",
          "x-go-name": "Color"
        },
        "description": {
          "type": "string",
          "x-go-name": "Description"
        },
        "name": {
          "type": "string",
          "x-go-name": "Name"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "EditMilestoneOption": {
      "description": "EditMilestoneOption options for editing a milestone",
      "type": "object",
      "properties": {
        "description": {
          "type": "string",
          "x-go-name": "Description"
        },
        "due_on": {
          "type": "string",
          "format": "date-time",
          "x-go-name": "Deadline"
        },
        "state": {
          "type": "string",
          "x-go-name": "State"
        },
        "title": {
          "type": "string",
          "x-go-name": "Title"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "EditOrgOption": {
      "description": "EditOrgOption options for editing an organization",
      "type": "object",
      "properties": {
        "description": {
          "type": "string",
          "x-go-name": "Description"
        },
        "full_name": {
          "type": "string",
          "x-go-name": "FullName"
        },
        "location": {
          "type": "string",
          "x-go-name": "Location"
        },
        "repo_admin_change_team_access": {
          "type": "boolean",
          "x-go-name": "RepoAdminChangeTeamAccess"
        },
        "visibility": {
          "description": "possible values are `public`, `limited` or `private`",
          "type": "string",
          "enum": ["public", "limited", "private"],
          "x-go-name": "Visibility"
        },
        "website": {
          "type": "string",
          "x-go-name": "Website"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "EditPullRequestOption": {
      "description": "EditPullRequestOption options when modify pull request",
      "type": "object",
      "properties": {
        "assignee": {
          "type": "string",
          "x-go-name": "Assignee"
        },
        "assignees": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "x-go-name": "Assignees"
        },
        "base": {
          "type": "string",
          "x-go-name": "Base"
        },
        "body": {
          "type": "string",
          "x-go-name": "Body"
        },
        "due_date": {
          "type": "string",
          "format": "date-time",
          "x-go-name": "Deadline"
        },
        "labels": {
          "type": "array",
          "items": {
            "type": "integer",
            "format": "int64"
          },
          "x-go-name": "Labels"
        },
        "milestone": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "Milestone"
        },
        "state": {
          "type": "string",
          "x-go-name": "State"
        },
        "title": {
          "type": "string",
          "x-go-name": "Title"
        },
        "unset_due_date": {
          "type": "boolean",
          "x-go-name": "RemoveDeadline"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "EditReactionOption": {
      "description": "EditReactionOption contain the reaction type",
      "type": "object",
      "properties": {
        "content": {
          "type": "string",
          "x-go-name": "Reaction"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "EditReleaseOption": {
      "description": "EditReleaseOption options when editing a release",
      "type": "object",
      "properties": {
        "body": {
          "type": "string",
          "x-go-name": "Note"
        },
        "draft": {
          "type": "boolean",
          "x-go-name": "IsDraft"
        },
        "name": {
          "type": "string",
          "x-go-name": "Title"
        },
        "prerelease": {
          "type": "boolean",
          "x-go-name": "IsPrerelease"
        },
        "tag_name": {
          "type": "string",
          "x-go-name": "TagName"
        },
        "target_commitish": {
          "type": "string",
          "x-go-name": "Target"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "EditRepoOption": {
      "description": "EditRepoOption options when editing a repository's properties",
      "type": "object",
      "properties": {
        "allow_manual_merge": {
          "description": "either `true` to allow mark pr as merged manually, or `false` to prevent it. `has_pull_requests` must be `true`.",
          "type": "boolean",
          "x-go-name": "AllowManualMerge"
        },
        "allow_merge_commits": {
          "description": "either `true` to allow merging pull requests with a merge commit, or `false` to prevent merging pull requests with merge commits. `has_pull_requests` must be `true`.",
          "type": "boolean",
          "x-go-name": "AllowMerge"
        },
        "allow_rebase": {
          "description": "either `true` to allow rebase-merging pull requests, or `false` to prevent rebase-merging. `has_pull_requests` must be `true`.",
          "type": "boolean",
          "x-go-name": "AllowRebase"
        },
        "allow_rebase_explicit": {
          "description": "either `true` to allow rebase with explicit merge commits (--no-ff), or `false` to prevent rebase with explicit merge commits. `has_pull_requests` must be `true`.",
          "type": "boolean",
          "x-go-name": "AllowRebaseMerge"
        },
        "allow_squash_merge": {
          "description": "either `true` to allow squash-merging pull requests, or `false` to prevent squash-merging. `has_pull_requests` must be `true`.",
          "type": "boolean",
          "x-go-name": "AllowSquash"
        },
        "archived": {
          "description": "set to `true` to archive this repository.",
          "type": "boolean",
          "x-go-name": "Archived"
        },
        "autodetect_manual_merge": {
          "description": "either `true` to enable AutodetectManualMerge, or `false` to prevent it. `has_pull_requests` must be `true`, Note: In some special cases, misjudgments can occur.",
          "type": "boolean",
          "x-go-name": "AutodetectManualMerge"
        },
        "default_branch": {
          "description": "sets the default branch for this repository.",
          "type": "string",
          "x-go-name": "DefaultBranch"
        },
        "default_delete_branch_after_merge": {
          "description": "set to `true` to delete pr branch after merge by default",
          "type": "boolean",
          "x-go-name": "DefaultDeleteBranchAfterMerge"
        },
        "default_merge_style": {
          "description": "set to a merge style to be used by this repository: \"merge\", \"rebase\", \"rebase-merge\", or \"squash\". `has_pull_requests` must be `true`.",
          "type": "string",
          "x-go-name": "DefaultMergeStyle"
        },
        "description": {
          "description": "a short description of the repository.",
          "type": "string",
          "x-go-name": "Description"
        },
        "enable_prune": {
          "description": "enable prune - remove obsolete remote-tracking references",
          "type": "boolean",
          "x-go-name": "EnablePrune"
        },
        "external_tracker": {
          "$ref": "#/definitions/ExternalTracker"
        },
        "external_wiki": {
          "$ref": "#/definitions/ExternalWiki"
        },
        "has_issues": {
          "description": "either `true` to enable issues for this repository or `false` to disable them.",
          "type": "boolean",
          "x-go-name": "HasIssues"
        },
        "has_projects": {
          "description": "either `true` to enable project unit, or `false` to disable them.",
          "type": "boolean",
          "x-go-name": "HasProjects"
        },
        "has_pull_requests": {
          "description": "either `true` to allow pull requests, or `false` to prevent pull request.",
          "type": "boolean",
          "x-go-name": "HasPullRequests"
        },
        "has_wiki": {
          "description": "either `true` to enable the wiki for this repository or `false` to disable it.",
          "type": "boolean",
          "x-go-name": "HasWiki"
        },
        "ignore_whitespace_conflicts": {
          "description": "either `true` to ignore whitespace for conflicts, or `false` to not ignore whitespace. `has_pull_requests` must be `true`.",
          "type": "boolean",
          "x-go-name": "IgnoreWhitespaceConflicts"
        },
        "internal_tracker": {
          "$ref": "#/definitions/InternalTracker"
        },
        "mirror_interval": {
          "description": "set to a string like `8h30m0s` to set the mirror interval time",
          "type": "string",
          "x-go-name": "MirrorInterval"
        },
        "name": {
          "description": "name of the repository",
          "type": "string",
          "uniqueItems": true,
          "x-go-name": "Name"
        },
        "private": {
          "description": "either `true` to make the repository private or `false` to make it public.\nNote: you will get a 422 error if the organization restricts changing repository visibility to organization\nowners and a non-owner tries to change the value of private.",
          "type": "boolean",
          "x-go-name": "Private"
        },
        "template": {
          "description": "either `true` to make this repository a template or `false` to make it a normal repository",
          "type": "boolean",
          "x-go-name": "Template"
        },
        "website": {
          "description": "a URL with more information about the repository.",
          "type": "string",
          "x-go-name": "Website"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "EditTeamOption": {
      "description": "EditTeamOption options for editing a team",
      "type": "object",
      "required": ["name"],
      "properties": {
        "can_create_org_repo": {
          "type": "boolean",
          "x-go-name": "CanCreateOrgRepo"
        },
        "description": {
          "type": "string",
          "x-go-name": "Description"
        },
        "includes_all_repositories": {
          "type": "boolean",
          "x-go-name": "IncludesAllRepositories"
        },
        "name": {
          "type": "string",
          "x-go-name": "Name"
        },
        "permission": {
          "type": "string",
          "enum": ["read", "write", "admin"],
          "x-go-name": "Permission"
        },
        "units": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "x-go-name": "Units",
          "example": [
            "repo.code",
            "repo.issues",
            "repo.ext_issues",
            "repo.wiki",
            "repo.pulls",
            "repo.releases",
            "repo.projects",
            "repo.ext_wiki"
          ]
        },
        "units_map": {
          "type": "object",
          "additionalProperties": {
            "type": "string"
          },
          "x-go-name": "UnitsMap",
          "example": "{\"repo.code\":\"read\",\"repo.issues\":\"write\",\"repo.ext_issues\":\"none\",\"repo.wiki\":\"admin\",\"repo.pulls\":\"owner\",\"repo.releases\":\"none\",\"repo.projects\":\"none\",\"repo.ext_wiki\":\"none\"]"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "EditUserOption": {
      "description": "EditUserOption edit user options",
      "type": "object",
      "required": ["source_id", "login_name"],
      "properties": {
        "active": {
          "type": "boolean",
          "x-go-name": "Active"
        },
        "admin": {
          "type": "boolean",
          "x-go-name": "Admin"
        },
        "allow_create_organization": {
          "type": "boolean",
          "x-go-name": "AllowCreateOrganization"
        },
        "allow_git_hook": {
          "type": "boolean",
          "x-go-name": "AllowGitHook"
        },
        "allow_import_local": {
          "type": "boolean",
          "x-go-name": "AllowImportLocal"
        },
        "description": {
          "type": "string",
          "x-go-name": "Description"
        },
        "email": {
          "type": "string",
          "format": "email",
          "x-go-name": "Email"
        },
        "full_name": {
          "type": "string",
          "x-go-name": "FullName"
        },
        "location": {
          "type": "string",
          "x-go-name": "Location"
        },
        "login_name": {
          "type": "string",
          "x-go-name": "LoginName"
        },
        "max_repo_creation": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "MaxRepoCreation"
        },
        "must_change_password": {
          "type": "boolean",
          "x-go-name": "MustChangePassword"
        },
        "password": {
          "type": "string",
          "x-go-name": "Password"
        },
        "prohibit_login": {
          "type": "boolean",
          "x-go-name": "ProhibitLogin"
        },
        "restricted": {
          "type": "boolean",
          "x-go-name": "Restricted"
        },
        "source_id": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "SourceID"
        },
        "visibility": {
          "type": "string",
          "x-go-name": "Visibility"
        },
        "website": {
          "type": "string",
          "x-go-name": "Website"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "Email": {
      "description": "Email an email address belonging to a user",
      "type": "object",
      "properties": {
        "email": {
          "type": "string",
          "format": "email",
          "x-go-name": "Email"
        },
        "primary": {
          "type": "boolean",
          "x-go-name": "Primary"
        },
        "verified": {
          "type": "boolean",
          "x-go-name": "Verified"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "ExternalTracker": {
      "description": "ExternalTracker represents settings for external tracker",
      "type": "object",
      "properties": {
        "external_tracker_format": {
          "description": "External Issue Tracker URL Format. Use the placeholders {user}, {repo} and {index} for the username, repository name and issue index.",
          "type": "string",
          "x-go-name": "ExternalTrackerFormat"
        },
        "external_tracker_style": {
          "description": "External Issue Tracker Number Format, either `numeric` or `alphanumeric`",
          "type": "string",
          "x-go-name": "ExternalTrackerStyle"
        },
        "external_tracker_url": {
          "description": "URL of external issue tracker.",
          "type": "string",
          "x-go-name": "ExternalTrackerURL"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "ExternalWiki": {
      "description": "ExternalWiki represents setting for external wiki",
      "type": "object",
      "properties": {
        "external_wiki_url": {
          "description": "URL of external wiki.",
          "type": "string",
          "x-go-name": "ExternalWikiURL"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "FileCommitResponse": {
      "type": "object",
      "title": "FileCommitResponse contains information generated from a Git commit for a repo's file.",
      "properties": {
        "author": {
          "$ref": "#/definitions/CommitUser"
        },
        "committer": {
          "$ref": "#/definitions/CommitUser"
        },
        "created": {
          "type": "string",
          "format": "date-time",
          "x-go-name": "Created"
        },
        "html_url": {
          "type": "string",
          "x-go-name": "HTMLURL"
        },
        "message": {
          "type": "string",
          "x-go-name": "Message"
        },
        "parents": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/CommitMeta"
          },
          "x-go-name": "Parents"
        },
        "sha": {
          "type": "string",
          "x-go-name": "SHA"
        },
        "tree": {
          "$ref": "#/definitions/CommitMeta"
        },
        "url": {
          "type": "string",
          "x-go-name": "URL"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "FileDeleteResponse": {
      "description": "FileDeleteResponse contains information about a repo's file that was deleted",
      "type": "object",
      "properties": {
        "commit": {
          "$ref": "#/definitions/FileCommitResponse"
        },
        "content": {
          "type": "object",
          "x-go-name": "Content"
        },
        "verification": {
          "$ref": "#/definitions/PayloadCommitVerification"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "FileLinksResponse": {
      "description": "FileLinksResponse contains the links for a repo's file",
      "type": "object",
      "properties": {
        "git": {
          "type": "string",
          "x-go-name": "GitURL"
        },
        "html": {
          "type": "string",
          "x-go-name": "HTMLURL"
        },
        "self": {
          "type": "string",
          "x-go-name": "Self"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "FileResponse": {
      "description": "FileResponse contains information about a repo's file",
      "type": "object",
      "properties": {
        "commit": {
          "$ref": "#/definitions/FileCommitResponse"
        },
        "content": {
          "$ref": "#/definitions/ContentsResponse"
        },
        "verification": {
          "$ref": "#/definitions/PayloadCommitVerification"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "GPGKey": {
      "description": "GPGKey a user GPG key to sign commit and tag in repository",
      "type": "object",
      "properties": {
        "can_certify": {
          "type": "boolean",
          "x-go-name": "CanCertify"
        },
        "can_encrypt_comms": {
          "type": "boolean",
          "x-go-name": "CanEncryptComms"
        },
        "can_encrypt_storage": {
          "type": "boolean",
          "x-go-name": "CanEncryptStorage"
        },
        "can_sign": {
          "type": "boolean",
          "x-go-name": "CanSign"
        },
        "created_at": {
          "type": "string",
          "format": "date-time",
          "x-go-name": "Created"
        },
        "emails": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/GPGKeyEmail"
          },
          "x-go-name": "Emails"
        },
        "expires_at": {
          "type": "string",
          "format": "date-time",
          "x-go-name": "Expires"
        },
        "id": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "ID"
        },
        "key_id": {
          "type": "string",
          "x-go-name": "KeyID"
        },
        "primary_key_id": {
          "type": "string",
          "x-go-name": "PrimaryKeyID"
        },
        "public_key": {
          "type": "string",
          "x-go-name": "PublicKey"
        },
        "subkeys": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/GPGKey"
          },
          "x-go-name": "SubsKey"
        },
        "verified": {
          "type": "boolean",
          "x-go-name": "Verified"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "GPGKeyEmail": {
      "description": "GPGKeyEmail an email attached to a GPGKey",
      "type": "object",
      "properties": {
        "email": {
          "type": "string",
          "x-go-name": "Email"
        },
        "verified": {
          "type": "boolean",
          "x-go-name": "Verified"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "GeneralAPISettings": {
      "description": "GeneralAPISettings contains global api settings exposed by it",
      "type": "object",
      "properties": {
        "default_git_trees_per_page": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "DefaultGitTreesPerPage"
        },
        "default_max_blob_size": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "DefaultMaxBlobSize"
        },
        "default_paging_num": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "DefaultPagingNum"
        },
        "max_response_items": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "MaxResponseItems"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "GeneralAttachmentSettings": {
      "description": "GeneralAttachmentSettings contains global Attachment settings exposed by API",
      "type": "object",
      "properties": {
        "allowed_types": {
          "type": "string",
          "x-go-name": "AllowedTypes"
        },
        "enabled": {
          "type": "boolean",
          "x-go-name": "Enabled"
        },
        "max_files": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "MaxFiles"
        },
        "max_size": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "MaxSize"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "GeneralRepoSettings": {
      "description": "GeneralRepoSettings contains global repository settings exposed by API",
      "type": "object",
      "properties": {
        "http_git_disabled": {
          "type": "boolean",
          "x-go-name": "HTTPGitDisabled"
        },
        "lfs_disabled": {
          "type": "boolean",
          "x-go-name": "LFSDisabled"
        },
        "migrations_disabled": {
          "type": "boolean",
          "x-go-name": "MigrationsDisabled"
        },
        "mirrors_disabled": {
          "type": "boolean",
          "x-go-name": "MirrorsDisabled"
        },
        "stars_disabled": {
          "type": "boolean",
          "x-go-name": "StarsDisabled"
        },
        "time_tracking_disabled": {
          "type": "boolean",
          "x-go-name": "TimeTrackingDisabled"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "GeneralUISettings": {
      "description": "GeneralUISettings contains global ui settings exposed by API",
      "type": "object",
      "properties": {
        "allowed_reactions": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "x-go-name": "AllowedReactions"
        },
        "custom_emojis": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "x-go-name": "CustomEmojis"
        },
        "default_theme": {
          "type": "string",
          "x-go-name": "DefaultTheme"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "GenerateRepoOption": {
      "description": "GenerateRepoOption options when creating repository using a template",
      "type": "object",
      "required": ["owner", "name"],
      "properties": {
        "avatar": {
          "description": "include avatar of the template repo",
          "type": "boolean",
          "x-go-name": "Avatar"
        },
        "description": {
          "description": "Description of the repository to create",
          "type": "string",
          "x-go-name": "Description"
        },
        "git_content": {
          "description": "include git content of default branch in template repo",
          "type": "boolean",
          "x-go-name": "GitContent"
        },
        "git_hooks": {
          "description": "include git hooks in template repo",
          "type": "boolean",
          "x-go-name": "GitHooks"
        },
        "labels": {
          "description": "include labels in template repo",
          "type": "boolean",
          "x-go-name": "Labels"
        },
        "name": {
          "description": "Name of the repository to create",
          "type": "string",
          "uniqueItems": true,
          "x-go-name": "Name"
        },
        "owner": {
          "description": "The organization or person who will own the new repository",
          "type": "string",
          "x-go-name": "Owner"
        },
        "private": {
          "description": "Whether the repository is private",
          "type": "boolean",
          "x-go-name": "Private"
        },
        "topics": {
          "description": "include topics in template repo",
          "type": "boolean",
          "x-go-name": "Topics"
        },
        "webhooks": {
          "description": "include webhooks in template repo",
          "type": "boolean",
          "x-go-name": "Webhooks"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "GitBlobResponse": {
      "description": "GitBlobResponse represents a git blob",
      "type": "object",
      "properties": {
        "content": {
          "type": "string",
          "x-go-name": "Content"
        },
        "encoding": {
          "type": "string",
          "x-go-name": "Encoding"
        },
        "sha": {
          "type": "string",
          "x-go-name": "SHA"
        },
        "size": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "Size"
        },
        "url": {
          "type": "string",
          "x-go-name": "URL"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "GitEntry": {
      "description": "GitEntry represents a git tree",
      "type": "object",
      "properties": {
        "mode": {
          "type": "string",
          "x-go-name": "Mode"
        },
        "path": {
          "type": "string",
          "x-go-name": "Path"
        },
        "sha": {
          "type": "string",
          "x-go-name": "SHA"
        },
        "size": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "Size"
        },
        "type": {
          "type": "string",
          "x-go-name": "Type"
        },
        "url": {
          "type": "string",
          "x-go-name": "URL"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "GitHook": {
      "description": "GitHook represents a Git repository hook",
      "type": "object",
      "properties": {
        "content": {
          "type": "string",
          "x-go-name": "Content"
        },
        "is_active": {
          "type": "boolean",
          "x-go-name": "IsActive"
        },
        "name": {
          "type": "string",
          "x-go-name": "Name"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "GitObject": {
      "type": "object",
      "title": "GitObject represents a Git object.",
      "properties": {
        "sha": {
          "type": "string",
          "x-go-name": "SHA"
        },
        "type": {
          "type": "string",
          "x-go-name": "Type"
        },
        "url": {
          "type": "string",
          "x-go-name": "URL"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "GitServiceType": {
      "description": "GitServiceType represents a git service",
      "type": "integer",
      "format": "int64",
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "GitTreeResponse": {
      "description": "GitTreeResponse returns a git tree",
      "type": "object",
      "properties": {
        "page": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "Page"
        },
        "sha": {
          "type": "string",
          "x-go-name": "SHA"
        },
        "total_count": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "TotalCount"
        },
        "tree": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/GitEntry"
          },
          "x-go-name": "Entries"
        },
        "truncated": {
          "type": "boolean",
          "x-go-name": "Truncated"
        },
        "url": {
          "type": "string",
          "x-go-name": "URL"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "Hook": {
      "description": "Hook a hook is a web hook when one repository changed",
      "type": "object",
      "properties": {
        "active": {
          "type": "boolean",
          "x-go-name": "Active"
        },
        "config": {
          "type": "object",
          "additionalProperties": {
            "type": "string"
          },
          "x-go-name": "Config"
        },
        "created_at": {
          "type": "string",
          "format": "date-time",
          "x-go-name": "Created"
        },
        "events": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "x-go-name": "Events"
        },
        "id": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "ID"
        },
        "type": {
          "type": "string",
          "x-go-name": "Type"
        },
        "updated_at": {
          "type": "string",
          "format": "date-time",
          "x-go-name": "Updated"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "Identity": {
      "description": "Identity for a person's identity like an author or committer",
      "type": "object",
      "properties": {
        "email": {
          "type": "string",
          "format": "email",
          "x-go-name": "Email"
        },
        "name": {
          "type": "string",
          "x-go-name": "Name"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "InternalTracker": {
      "description": "InternalTracker represents settings for internal tracker",
      "type": "object",
      "properties": {
        "allow_only_contributors_to_track_time": {
          "description": "Let only contributors track time (Built-in issue tracker)",
          "type": "boolean",
          "x-go-name": "AllowOnlyContributorsToTrackTime"
        },
        "enable_issue_dependencies": {
          "description": "Enable dependencies for issues and pull requests (Built-in issue tracker)",
          "type": "boolean",
          "x-go-name": "EnableIssueDependencies"
        },
        "enable_time_tracker": {
          "description": "Enable time tracking (Built-in issue tracker)",
          "type": "boolean",
          "x-go-name": "EnableTimeTracker"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "Issue": {
      "description": "Issue represents an issue in a repository",
      "type": "object",
      "properties": {
        "assignee": {
          "$ref": "#/definitions/User"
        },
        "assignees": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/User"
          },
          "x-go-name": "Assignees"
        },
        "body": {
          "type": "string",
          "x-go-name": "Body"
        },
        "closed_at": {
          "type": "string",
          "format": "date-time",
          "x-go-name": "Closed"
        },
        "comments": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "Comments"
        },
        "created_at": {
          "type": "string",
          "format": "date-time",
          "x-go-name": "Created"
        },
        "due_date": {
          "type": "string",
          "format": "date-time",
          "x-go-name": "Deadline"
        },
        "html_url": {
          "type": "string",
          "x-go-name": "HTMLURL"
        },
        "id": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "ID"
        },
        "is_locked": {
          "type": "boolean",
          "x-go-name": "IsLocked"
        },
        "labels": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Label"
          },
          "x-go-name": "Labels"
        },
        "milestone": {
          "$ref": "#/definitions/Milestone"
        },
        "number": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "Index"
        },
        "original_author": {
          "type": "string",
          "x-go-name": "OriginalAuthor"
        },
        "original_author_id": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "OriginalAuthorID"
        },
        "pull_request": {
          "$ref": "#/definitions/PullRequestMeta"
        },
        "ref": {
          "type": "string",
          "x-go-name": "Ref"
        },
        "repository": {
          "$ref": "#/definitions/RepositoryMeta"
        },
        "state": {
          "$ref": "#/definitions/StateType"
        },
        "title": {
          "type": "string",
          "x-go-name": "Title"
        },
        "updated_at": {
          "type": "string",
          "format": "date-time",
          "x-go-name": "Updated"
        },
        "url": {
          "type": "string",
          "x-go-name": "URL"
        },
        "user": {
          "$ref": "#/definitions/User"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "IssueDeadline": {
      "description": "IssueDeadline represents an issue deadline",
      "type": "object",
      "properties": {
        "due_date": {
          "type": "string",
          "format": "date-time",
          "x-go-name": "Deadline"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "IssueLabelsOption": {
      "description": "IssueLabelsOption a collection of labels",
      "type": "object",
      "properties": {
        "labels": {
          "description": "list of label IDs",
          "type": "array",
          "items": {
            "type": "integer",
            "format": "int64"
          },
          "x-go-name": "Labels"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "IssueTemplate": {
      "description": "IssueTemplate represents an issue template for a repository",
      "type": "object",
      "properties": {
        "about": {
          "type": "string",
          "x-go-name": "About"
        },
        "content": {
          "type": "string",
          "x-go-name": "Content"
        },
        "file_name": {
          "type": "string",
          "x-go-name": "FileName"
        },
        "labels": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "x-go-name": "Labels"
        },
        "name": {
          "type": "string",
          "x-go-name": "Name"
        },
        "ref": {
          "type": "string",
          "x-go-name": "Ref"
        },
        "title": {
          "type": "string",
          "x-go-name": "Title"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "Label": {
      "description": "Label a label to an issue or a pr",
      "type": "object",
      "properties": {
        "color": {
          "type": "string",
          "x-go-name": "Color",
          "example": "00aabb"
        },
        "description": {
          "type": "string",
          "x-go-name": "Description"
        },
        "id": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "ID"
        },
        "name": {
          "type": "string",
          "x-go-name": "Name"
        },
        "url": {
          "type": "string",
          "x-go-name": "URL"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "MarkdownOption": {
      "description": "MarkdownOption markdown options",
      "type": "object",
      "properties": {
        "Context": {
          "description": "Context to render\n\nin: body",
          "type": "string"
        },
        "Mode": {
          "description": "Mode to render\n\nin: body",
          "type": "string"
        },
        "Text": {
          "description": "Text markdown to render\n\nin: body",
          "type": "string"
        },
        "Wiki": {
          "description": "Is it a wiki page ?\n\nin: body",
          "type": "boolean"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "MergePullRequestOption": {
      "description": "MergePullRequestForm form for merging Pull Request",
      "type": "object",
      "required": ["Do"],
      "properties": {
        "Do": {
          "type": "string",
          "enum": [
            "merge",
            "rebase",
            "rebase-merge",
            "squash",
            "manually-merged"
          ]
        },
        "MergeCommitID": {
          "type": "string"
        },
        "MergeMessageField": {
          "type": "string"
        },
        "MergeTitleField": {
          "type": "string"
        },
        "delete_branch_after_merge": {
          "type": "boolean",
          "x-go-name": "DeleteBranchAfterMerge"
        },
        "force_merge": {
          "type": "boolean",
          "x-go-name": "ForceMerge"
        },
        "head_commit_id": {
          "type": "string",
          "x-go-name": "HeadCommitID"
        }
      },
      "x-go-name": "MergePullRequestForm",
      "x-go-package": "code.gitea.io/gitea/services/forms"
    },
    "MigrateRepoForm": {
      "description": "MigrateRepoForm form for migrating repository\nthis is used to interact with web ui",
      "type": "object",
      "required": ["clone_addr", "uid", "repo_name"],
      "properties": {
        "auth_password": {
          "type": "string",
          "x-go-name": "AuthPassword"
        },
        "auth_token": {
          "type": "string",
          "x-go-name": "AuthToken"
        },
        "auth_username": {
          "type": "string",
          "x-go-name": "AuthUsername"
        },
        "clone_addr": {
          "type": "string",
          "x-go-name": "CloneAddr"
        },
        "description": {
          "type": "string",
          "x-go-name": "Description"
        },
        "issues": {
          "type": "boolean",
          "x-go-name": "Issues"
        },
        "labels": {
          "type": "boolean",
          "x-go-name": "Labels"
        },
        "lfs": {
          "type": "boolean",
          "x-go-name": "LFS"
        },
        "lfs_endpoint": {
          "type": "string",
          "x-go-name": "LFSEndpoint"
        },
        "milestones": {
          "type": "boolean",
          "x-go-name": "Milestones"
        },
        "mirror": {
          "type": "boolean",
          "x-go-name": "Mirror"
        },
        "mirror_interval": {
          "type": "string",
          "x-go-name": "MirrorInterval"
        },
        "private": {
          "type": "boolean",
          "x-go-name": "Private"
        },
        "pull_requests": {
          "type": "boolean",
          "x-go-name": "PullRequests"
        },
        "releases": {
          "type": "boolean",
          "x-go-name": "Releases"
        },
        "repo_name": {
          "type": "string",
          "x-go-name": "RepoName"
        },
        "service": {
          "$ref": "#/definitions/GitServiceType"
        },
        "uid": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "UID"
        },
        "wiki": {
          "type": "boolean",
          "x-go-name": "Wiki"
        }
      },
      "x-go-package": "code.gitea.io/gitea/services/forms"
    },
    "MigrateRepoOptions": {
      "description": "MigrateRepoOptions options for migrating repository's\nthis is used to interact with api v1",
      "type": "object",
      "required": ["clone_addr", "repo_name"],
      "properties": {
        "auth_password": {
          "type": "string",
          "x-go-name": "AuthPassword"
        },
        "auth_token": {
          "type": "string",
          "x-go-name": "AuthToken"
        },
        "auth_username": {
          "type": "string",
          "x-go-name": "AuthUsername"
        },
        "clone_addr": {
          "type": "string",
          "x-go-name": "CloneAddr"
        },
        "description": {
          "type": "string",
          "x-go-name": "Description"
        },
        "issues": {
          "type": "boolean",
          "x-go-name": "Issues"
        },
        "labels": {
          "type": "boolean",
          "x-go-name": "Labels"
        },
        "lfs": {
          "type": "boolean",
          "x-go-name": "LFS"
        },
        "lfs_endpoint": {
          "type": "string",
          "x-go-name": "LFSEndpoint"
        },
        "milestones": {
          "type": "boolean",
          "x-go-name": "Milestones"
        },
        "mirror": {
          "type": "boolean",
          "x-go-name": "Mirror"
        },
        "mirror_interval": {
          "type": "string",
          "x-go-name": "MirrorInterval"
        },
        "private": {
          "type": "boolean",
          "x-go-name": "Private"
        },
        "pull_requests": {
          "type": "boolean",
          "x-go-name": "PullRequests"
        },
        "releases": {
          "type": "boolean",
          "x-go-name": "Releases"
        },
        "repo_name": {
          "type": "string",
          "x-go-name": "RepoName"
        },
        "repo_owner": {
          "description": "Name of User or Organisation who will own Repo after migration",
          "type": "string",
          "x-go-name": "RepoOwner"
        },
        "service": {
          "type": "string",
          "enum": ["git", "github", "gitea", "gitlab"],
          "x-go-name": "Service"
        },
        "uid": {
          "description": "deprecated (only for backwards compatibility)",
          "type": "integer",
          "format": "int64",
          "x-go-name": "RepoOwnerID"
        },
        "wiki": {
          "type": "boolean",
          "x-go-name": "Wiki"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "Milestone": {
      "description": "Milestone milestone is a collection of issues on one repository",
      "type": "object",
      "properties": {
        "closed_at": {
          "type": "string",
          "format": "date-time",
          "x-go-name": "Closed"
        },
        "closed_issues": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "ClosedIssues"
        },
        "created_at": {
          "type": "string",
          "format": "date-time",
          "x-go-name": "Created"
        },
        "description": {
          "type": "string",
          "x-go-name": "Description"
        },
        "due_on": {
          "type": "string",
          "format": "date-time",
          "x-go-name": "Deadline"
        },
        "id": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "ID"
        },
        "open_issues": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "OpenIssues"
        },
        "state": {
          "$ref": "#/definitions/StateType"
        },
        "title": {
          "type": "string",
          "x-go-name": "Title"
        },
        "updated_at": {
          "type": "string",
          "format": "date-time",
          "x-go-name": "Updated"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "NodeInfo": {
      "description": "NodeInfo contains standardized way of exposing metadata about a server running one of the distributed social networks",
      "type": "object",
      "properties": {
        "metadata": {
          "type": "object",
          "x-go-name": "Metadata"
        },
        "openRegistrations": {
          "type": "boolean",
          "x-go-name": "OpenRegistrations"
        },
        "protocols": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "x-go-name": "Protocols"
        },
        "services": {
          "$ref": "#/definitions/NodeInfoServices"
        },
        "software": {
          "$ref": "#/definitions/NodeInfoSoftware"
        },
        "usage": {
          "$ref": "#/definitions/NodeInfoUsage"
        },
        "version": {
          "type": "string",
          "x-go-name": "Version"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "NodeInfoServices": {
      "description": "NodeInfoServices contains the third party sites this server can connect to via their application API",
      "type": "object",
      "properties": {
        "inbound": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "x-go-name": "Inbound"
        },
        "outbound": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "x-go-name": "Outbound"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "NodeInfoSoftware": {
      "description": "NodeInfoSoftware contains Metadata about server software in use",
      "type": "object",
      "properties": {
        "homepage": {
          "type": "string",
          "x-go-name": "Homepage"
        },
        "name": {
          "type": "string",
          "x-go-name": "Name"
        },
        "repository": {
          "type": "string",
          "x-go-name": "Repository"
        },
        "version": {
          "type": "string",
          "x-go-name": "Version"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "NodeInfoUsage": {
      "description": "NodeInfoUsage contains usage statistics for this server",
      "type": "object",
      "properties": {
        "localComments": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "LocalComments"
        },
        "localPosts": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "LocalPosts"
        },
        "users": {
          "$ref": "#/definitions/NodeInfoUsageUsers"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "NodeInfoUsageUsers": {
      "description": "NodeInfoUsageUsers contains statistics about the users of this server",
      "type": "object",
      "properties": {
        "activeHalfyear": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "ActiveHalfyear"
        },
        "activeMonth": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "ActiveMonth"
        },
        "total": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "Total"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "Note": {
      "description": "Note contains information related to a git note",
      "type": "object",
      "properties": {
        "commit": {
          "$ref": "#/definitions/Commit"
        },
        "message": {
          "type": "string",
          "x-go-name": "Message"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "NotificationCount": {
      "description": "NotificationCount number of unread notifications",
      "type": "object",
      "properties": {
        "new": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "New"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "NotificationSubject": {
      "description": "NotificationSubject contains the notification subject (Issue/Pull/Commit)",
      "type": "object",
      "properties": {
        "html_url": {
          "type": "string",
          "x-go-name": "HTMLURL"
        },
        "latest_comment_html_url": {
          "type": "string",
          "x-go-name": "LatestCommentHTMLURL"
        },
        "latest_comment_url": {
          "type": "string",
          "x-go-name": "LatestCommentURL"
        },
        "state": {
          "$ref": "#/definitions/StateType"
        },
        "title": {
          "type": "string",
          "x-go-name": "Title"
        },
        "type": {
          "$ref": "#/definitions/NotifySubjectType"
        },
        "url": {
          "type": "string",
          "x-go-name": "URL"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "NotificationThread": {
      "description": "NotificationThread expose Notification on API",
      "type": "object",
      "properties": {
        "id": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "ID"
        },
        "pinned": {
          "type": "boolean",
          "x-go-name": "Pinned"
        },
        "repository": {
          "$ref": "#/definitions/Repository"
        },
        "subject": {
          "$ref": "#/definitions/NotificationSubject"
        },
        "unread": {
          "type": "boolean",
          "x-go-name": "Unread"
        },
        "updated_at": {
          "type": "string",
          "format": "date-time",
          "x-go-name": "UpdatedAt"
        },
        "url": {
          "type": "string",
          "x-go-name": "URL"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "NotifySubjectType": {
      "description": "NotifySubjectType represent type of notification subject",
      "type": "string",
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "OAuth2Application": {
      "type": "object",
      "title": "OAuth2Application represents an OAuth2 application.",
      "properties": {
        "client_id": {
          "type": "string",
          "x-go-name": "ClientID"
        },
        "client_secret": {
          "type": "string",
          "x-go-name": "ClientSecret"
        },
        "created": {
          "type": "string",
          "format": "date-time",
          "x-go-name": "Created"
        },
        "id": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "ID"
        },
        "name": {
          "type": "string",
          "x-go-name": "Name"
        },
        "redirect_uris": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "x-go-name": "RedirectURIs"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "Organization": {
      "description": "Organization represents an organization",
      "type": "object",
      "properties": {
        "avatar_url": {
          "type": "string",
          "x-go-name": "AvatarURL"
        },
        "description": {
          "type": "string",
          "x-go-name": "Description"
        },
        "full_name": {
          "type": "string",
          "x-go-name": "FullName"
        },
        "id": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "ID"
        },
        "location": {
          "type": "string",
          "x-go-name": "Location"
        },
        "repo_admin_change_team_access": {
          "type": "boolean",
          "x-go-name": "RepoAdminChangeTeamAccess"
        },
        "repo_languages": {
          "description": "DCS Customizations ***/",
          "type": "array",
          "items": {
            "type": "string"
          },
          "x-go-name": "RepoLanguages"
        },
        "repo_subjects": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "x-go-name": "RepoSubjects"
        },
        "username": {
          "type": "string",
          "x-go-name": "UserName"
        },
        "visibility": {
          "type": "string",
          "x-go-name": "Visibility"
        },
        "website": {
          "type": "string",
          "x-go-name": "Website"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "OrganizationPermissions": {
      "description": "OrganizationPermissions list different users permissions on an organization",
      "type": "object",
      "properties": {
        "can_create_repository": {
          "type": "boolean",
          "x-go-name": "CanCreateRepository"
        },
        "can_read": {
          "type": "boolean",
          "x-go-name": "CanRead"
        },
        "can_write": {
          "type": "boolean",
          "x-go-name": "CanWrite"
        },
        "is_admin": {
          "type": "boolean",
          "x-go-name": "IsAdmin"
        },
        "is_owner": {
          "type": "boolean",
          "x-go-name": "IsOwner"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "PRBranchInfo": {
      "description": "PRBranchInfo information about a branch",
      "type": "object",
      "properties": {
        "label": {
          "type": "string",
          "x-go-name": "Name"
        },
        "ref": {
          "type": "string",
          "x-go-name": "Ref"
        },
        "repo": {
          "$ref": "#/definitions/Repository"
        },
        "repo_id": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "RepoID"
        },
        "sha": {
          "type": "string",
          "x-go-name": "Sha"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "PayloadCommit": {
      "description": "PayloadCommit represents a commit",
      "type": "object",
      "properties": {
        "added": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "x-go-name": "Added"
        },
        "author": {
          "$ref": "#/definitions/PayloadUser"
        },
        "committer": {
          "$ref": "#/definitions/PayloadUser"
        },
        "id": {
          "description": "sha1 hash of the commit",
          "type": "string",
          "x-go-name": "ID"
        },
        "message": {
          "type": "string",
          "x-go-name": "Message"
        },
        "modified": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "x-go-name": "Modified"
        },
        "removed": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "x-go-name": "Removed"
        },
        "timestamp": {
          "type": "string",
          "format": "date-time",
          "x-go-name": "Timestamp"
        },
        "url": {
          "type": "string",
          "x-go-name": "URL"
        },
        "verification": {
          "$ref": "#/definitions/PayloadCommitVerification"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "PayloadCommitVerification": {
      "description": "PayloadCommitVerification represents the GPG verification of a commit",
      "type": "object",
      "properties": {
        "payload": {
          "type": "string",
          "x-go-name": "Payload"
        },
        "reason": {
          "type": "string",
          "x-go-name": "Reason"
        },
        "signature": {
          "type": "string",
          "x-go-name": "Signature"
        },
        "signer": {
          "$ref": "#/definitions/PayloadUser"
        },
        "verified": {
          "type": "boolean",
          "x-go-name": "Verified"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "PayloadUser": {
      "description": "PayloadUser represents the author or committer of a commit",
      "type": "object",
      "properties": {
        "email": {
          "type": "string",
          "format": "email",
          "x-go-name": "Email"
        },
        "name": {
          "description": "Full name of the commit author",
          "type": "string",
          "x-go-name": "Name"
        },
        "username": {
          "type": "string",
          "x-go-name": "UserName"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "Permission": {
      "description": "Permission represents a set of permissions",
      "type": "object",
      "properties": {
        "admin": {
          "type": "boolean",
          "x-go-name": "Admin"
        },
        "pull": {
          "type": "boolean",
          "x-go-name": "Pull"
        },
        "push": {
          "type": "boolean",
          "x-go-name": "Push"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "PublicKey": {
      "description": "PublicKey publickey is a user key to push code to repository",
      "type": "object",
      "properties": {
        "created_at": {
          "type": "string",
          "format": "date-time",
          "x-go-name": "Created"
        },
        "fingerprint": {
          "type": "string",
          "x-go-name": "Fingerprint"
        },
        "id": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "ID"
        },
        "key": {
          "type": "string",
          "x-go-name": "Key"
        },
        "key_type": {
          "type": "string",
          "x-go-name": "KeyType"
        },
        "read_only": {
          "type": "boolean",
          "x-go-name": "ReadOnly"
        },
        "title": {
          "type": "string",
          "x-go-name": "Title"
        },
        "url": {
          "type": "string",
          "x-go-name": "URL"
        },
        "user": {
          "$ref": "#/definitions/User"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "PullRequest": {
      "description": "PullRequest represents a pull request",
      "type": "object",
      "properties": {
        "assignee": {
          "$ref": "#/definitions/User"
        },
        "assignees": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/User"
          },
          "x-go-name": "Assignees"
        },
        "base": {
          "$ref": "#/definitions/PRBranchInfo"
        },
        "body": {
          "type": "string",
          "x-go-name": "Body"
        },
        "closed_at": {
          "type": "string",
          "format": "date-time",
          "x-go-name": "Closed"
        },
        "comments": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "Comments"
        },
        "created_at": {
          "type": "string",
          "format": "date-time",
          "x-go-name": "Created"
        },
        "diff_url": {
          "type": "string",
          "x-go-name": "DiffURL"
        },
        "due_date": {
          "type": "string",
          "format": "date-time",
          "x-go-name": "Deadline"
        },
        "head": {
          "$ref": "#/definitions/PRBranchInfo"
        },
        "html_url": {
          "type": "string",
          "x-go-name": "HTMLURL"
        },
        "id": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "ID"
        },
        "is_locked": {
          "type": "boolean",
          "x-go-name": "IsLocked"
        },
        "labels": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Label"
          },
          "x-go-name": "Labels"
        },
        "merge_base": {
          "type": "string",
          "x-go-name": "MergeBase"
        },
        "merge_commit_sha": {
          "type": "string",
          "x-go-name": "MergedCommitID"
        },
        "mergeable": {
          "type": "boolean",
          "x-go-name": "Mergeable"
        },
        "merged": {
          "type": "boolean",
          "x-go-name": "HasMerged"
        },
        "merged_at": {
          "type": "string",
          "format": "date-time",
          "x-go-name": "Merged"
        },
        "merged_by": {
          "$ref": "#/definitions/User"
        },
        "milestone": {
          "$ref": "#/definitions/Milestone"
        },
        "number": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "Index"
        },
        "patch_url": {
          "type": "string",
          "x-go-name": "PatchURL"
        },
        "state": {
          "$ref": "#/definitions/StateType"
        },
        "title": {
          "type": "string",
          "x-go-name": "Title"
        },
        "updated_at": {
          "type": "string",
          "format": "date-time",
          "x-go-name": "Updated"
        },
        "url": {
          "type": "string",
          "x-go-name": "URL"
        },
        "user": {
          "$ref": "#/definitions/User"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "PullRequestMeta": {
      "description": "PullRequestMeta PR info if an issue is a PR",
      "type": "object",
      "properties": {
        "merged": {
          "type": "boolean",
          "x-go-name": "HasMerged"
        },
        "merged_at": {
          "type": "string",
          "format": "date-time",
          "x-go-name": "Merged"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "PullReview": {
      "description": "PullReview represents a pull request review",
      "type": "object",
      "properties": {
        "body": {
          "type": "string",
          "x-go-name": "Body"
        },
        "comments_count": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "CodeCommentsCount"
        },
        "commit_id": {
          "type": "string",
          "x-go-name": "CommitID"
        },
        "dismissed": {
          "type": "boolean",
          "x-go-name": "Dismissed"
        },
        "html_url": {
          "type": "string",
          "x-go-name": "HTMLURL"
        },
        "id": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "ID"
        },
        "official": {
          "type": "boolean",
          "x-go-name": "Official"
        },
        "pull_request_url": {
          "type": "string",
          "x-go-name": "HTMLPullURL"
        },
        "stale": {
          "type": "boolean",
          "x-go-name": "Stale"
        },
        "state": {
          "$ref": "#/definitions/ReviewStateType"
        },
        "submitted_at": {
          "type": "string",
          "format": "date-time",
          "x-go-name": "Submitted"
        },
        "team": {
          "$ref": "#/definitions/Team"
        },
        "user": {
          "$ref": "#/definitions/User"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "PullReviewComment": {
      "description": "PullReviewComment represents a comment on a pull request review",
      "type": "object",
      "properties": {
        "body": {
          "type": "string",
          "x-go-name": "Body"
        },
        "commit_id": {
          "type": "string",
          "x-go-name": "CommitID"
        },
        "created_at": {
          "type": "string",
          "format": "date-time",
          "x-go-name": "Created"
        },
        "diff_hunk": {
          "type": "string",
          "x-go-name": "DiffHunk"
        },
        "html_url": {
          "type": "string",
          "x-go-name": "HTMLURL"
        },
        "id": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "ID"
        },
        "original_commit_id": {
          "type": "string",
          "x-go-name": "OrigCommitID"
        },
        "original_position": {
          "type": "integer",
          "format": "uint64",
          "x-go-name": "OldLineNum"
        },
        "path": {
          "type": "string",
          "x-go-name": "Path"
        },
        "position": {
          "type": "integer",
          "format": "uint64",
          "x-go-name": "LineNum"
        },
        "pull_request_review_id": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "ReviewID"
        },
        "pull_request_url": {
          "type": "string",
          "x-go-name": "HTMLPullURL"
        },
        "resolver": {
          "$ref": "#/definitions/User"
        },
        "updated_at": {
          "type": "string",
          "format": "date-time",
          "x-go-name": "Updated"
        },
        "user": {
          "$ref": "#/definitions/User"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "PullReviewRequestOptions": {
      "description": "PullReviewRequestOptions are options to add or remove pull review requests",
      "type": "object",
      "properties": {
        "reviewers": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "x-go-name": "Reviewers"
        },
        "team_reviewers": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "x-go-name": "TeamReviewers"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "Reaction": {
      "description": "Reaction contain one reaction",
      "type": "object",
      "properties": {
        "content": {
          "type": "string",
          "x-go-name": "Reaction"
        },
        "created_at": {
          "type": "string",
          "format": "date-time",
          "x-go-name": "Created"
        },
        "user": {
          "$ref": "#/definitions/User"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "Reference": {
      "type": "object",
      "title": "Reference represents a Git reference.",
      "properties": {
        "object": {
          "$ref": "#/definitions/GitObject"
        },
        "ref": {
          "type": "string",
          "x-go-name": "Ref"
        },
        "url": {
          "type": "string",
          "x-go-name": "URL"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "Release": {
      "description": "Release represents a repository release",
      "type": "object",
      "properties": {
        "assets": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Attachment"
          },
          "x-go-name": "Attachments"
        },
        "author": {
          "$ref": "#/definitions/User"
        },
        "body": {
          "type": "string",
          "x-go-name": "Note"
        },
        "created_at": {
          "type": "string",
          "format": "date-time",
          "x-go-name": "CreatedAt"
        },
        "draft": {
          "type": "boolean",
          "x-go-name": "IsDraft"
        },
        "html_url": {
          "type": "string",
          "x-go-name": "HTMLURL"
        },
        "id": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "ID"
        },
        "name": {
          "type": "string",
          "x-go-name": "Title"
        },
        "prerelease": {
          "type": "boolean",
          "x-go-name": "IsPrerelease"
        },
        "published_at": {
          "type": "string",
          "format": "date-time",
          "x-go-name": "PublishedAt"
        },
        "tag_name": {
          "type": "string",
          "x-go-name": "TagName"
        },
        "tarball_url": {
          "type": "string",
          "x-go-name": "TarURL"
        },
        "target_commitish": {
          "type": "string",
          "x-go-name": "Target"
        },
        "url": {
          "type": "string",
          "x-go-name": "URL"
        },
        "zipball_url": {
          "type": "string",
          "x-go-name": "ZipURL"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "RepoCommit": {
      "type": "object",
      "title": "RepoCommit contains information of a commit in the context of a repository.",
      "properties": {
        "author": {
          "$ref": "#/definitions/CommitUser"
        },
        "committer": {
          "$ref": "#/definitions/CommitUser"
        },
        "message": {
          "type": "string",
          "x-go-name": "Message"
        },
        "tree": {
          "$ref": "#/definitions/CommitMeta"
        },
        "url": {
          "type": "string",
          "x-go-name": "URL"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "RepoTopicOptions": {
      "description": "RepoTopicOptions a collection of repo topic names",
      "type": "object",
      "properties": {
        "topics": {
          "description": "list of topic names",
          "type": "array",
          "items": {
            "type": "string"
          },
          "x-go-name": "Topics"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "RepoTransfer": {
      "description": "RepoTransfer represents a pending repo transfer",
      "type": "object",
      "properties": {
        "doer": {
          "$ref": "#/definitions/User"
        },
        "recipient": {
          "$ref": "#/definitions/User"
        },
        "teams": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Team"
          },
          "x-go-name": "Teams"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "Repository": {
      "description": "Repository represents a repository",
      "type": "object",
      "properties": {
        "alignment_counts": {
          "type": "object",
          "additionalProperties": {
            "type": "object"
          },
          "x-go-name": "AlignmentCounts"
        },
        "allow_merge_commits": {
          "type": "boolean",
          "x-go-name": "AllowMerge"
        },
        "allow_rebase": {
          "type": "boolean",
          "x-go-name": "AllowRebase"
        },
        "allow_rebase_explicit": {
          "type": "boolean",
          "x-go-name": "AllowRebaseMerge"
        },
        "allow_squash_merge": {
          "type": "boolean",
          "x-go-name": "AllowSquash"
        },
        "archived": {
          "type": "boolean",
          "x-go-name": "Archived"
        },
        "avatar_url": {
          "type": "string",
          "x-go-name": "AvatarURL"
        },
        "books": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "x-go-name": "Books"
        },
        "catalog": {
          "$ref": "#/definitions/CatalogStages"
        },
        "checking_level": {
          "type": "string",
          "x-go-name": "CheckingLevel"
        },
        "clone_url": {
          "type": "string",
          "x-go-name": "CloneURL"
        },
        "created_at": {
          "type": "string",
          "format": "date-time",
          "x-go-name": "Created"
        },
        "default_branch": {
          "type": "string",
          "x-go-name": "DefaultBranch"
        },
        "default_merge_style": {
          "type": "string",
          "x-go-name": "DefaultMergeStyle"
        },
        "description": {
          "type": "string",
          "x-go-name": "Description"
        },
        "empty": {
          "type": "boolean",
          "x-go-name": "Empty"
        },
        "external_tracker": {
          "$ref": "#/definitions/ExternalTracker"
        },
        "external_wiki": {
          "$ref": "#/definitions/ExternalWiki"
        },
        "fork": {
          "type": "boolean",
          "x-go-name": "Fork"
        },
        "forks_count": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "Forks"
        },
        "full_name": {
          "type": "string",
          "x-go-name": "FullName"
        },
        "has_issues": {
          "type": "boolean",
          "x-go-name": "HasIssues"
        },
        "has_projects": {
          "type": "boolean",
          "x-go-name": "HasProjects"
        },
        "has_pull_requests": {
          "type": "boolean",
          "x-go-name": "HasPullRequests"
        },
        "has_wiki": {
          "type": "boolean",
          "x-go-name": "HasWiki"
        },
        "html_url": {
          "type": "string",
          "x-go-name": "HTMLURL"
        },
        "id": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "ID"
        },
        "ignore_whitespace_conflicts": {
          "type": "boolean",
          "x-go-name": "IgnoreWhitespaceConflicts"
        },
        "internal": {
          "type": "boolean",
          "x-go-name": "Internal"
        },
        "internal_tracker": {
          "$ref": "#/definitions/InternalTracker"
        },
        "language": {
          "description": "DCS Customizations ***/",
          "type": "string",
          "x-go-name": "Language"
        },
        "language_direction": {
          "type": "string",
          "x-go-name": "LanguageDir"
        },
        "language_is_gl": {
          "type": "boolean",
          "x-go-name": "LanguageIsGL"
        },
        "language_title": {
          "type": "string",
          "x-go-name": "LanguageTitle"
        },
        "mirror": {
          "type": "boolean",
          "x-go-name": "Mirror"
        },
        "mirror_interval": {
          "type": "string",
          "x-go-name": "MirrorInterval"
        },
        "mirror_updated": {
          "type": "string",
          "format": "date-time",
          "x-go-name": "MirrorUpdated"
        },
        "name": {
          "type": "string",
          "x-go-name": "Name"
        },
        "open_issues_count": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "OpenIssues"
        },
        "open_pr_counter": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "OpenPulls"
        },
        "original_url": {
          "type": "string",
          "x-go-name": "OriginalURL"
        },
        "owner": {
          "$ref": "#/definitions/User"
        },
        "parent": {
          "$ref": "#/definitions/Repository"
        },
        "permissions": {
          "$ref": "#/definitions/Permission"
        },
        "private": {
          "type": "boolean",
          "x-go-name": "Private"
        },
        "release_counter": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "Releases"
        },
        "repo_transfer": {
          "$ref": "#/definitions/RepoTransfer"
        },
        "size": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "Size"
        },
        "ssh_url": {
          "type": "string",
          "x-go-name": "SSHURL"
        },
        "stars_count": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "Stars"
        },
        "subject": {
          "type": "string",
          "x-go-name": "Subject"
        },
        "template": {
          "type": "boolean",
          "x-go-name": "Template"
        },
        "title": {
          "type": "string",
          "x-go-name": "Title"
        },
        "updated_at": {
          "type": "string",
          "format": "date-time",
          "x-go-name": "Updated"
        },
        "watchers_count": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "Watchers"
        },
        "website": {
          "type": "string",
          "x-go-name": "Website"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "RepositoryMeta": {
      "description": "RepositoryMeta basic repository information",
      "type": "object",
      "properties": {
        "full_name": {
          "type": "string",
          "x-go-name": "FullName"
        },
        "id": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "ID"
        },
        "name": {
          "type": "string",
          "x-go-name": "Name"
        },
        "owner": {
          "type": "string",
          "x-go-name": "Owner"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "ReviewStateType": {
      "description": "ReviewStateType review state type",
      "type": "string",
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "SearchResults": {
      "description": "SearchResults results of a successful search",
      "type": "object",
      "properties": {
        "data": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Repository"
          },
          "x-go-name": "Data"
        },
        "ok": {
          "type": "boolean",
          "x-go-name": "OK"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "ServerVersion": {
      "description": "ServerVersion wraps the version of the server",
      "type": "object",
      "properties": {
        "version": {
          "type": "string",
          "x-go-name": "Version"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "StateType": {
      "description": "StateType issue state type",
      "type": "string",
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "StopWatch": {
      "description": "StopWatch represent a running stopwatch",
      "type": "object",
      "properties": {
        "created": {
          "type": "string",
          "format": "date-time",
          "x-go-name": "Created"
        },
        "duration": {
          "type": "string",
          "x-go-name": "Duration"
        },
        "issue_index": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "IssueIndex"
        },
        "issue_title": {
          "type": "string",
          "x-go-name": "IssueTitle"
        },
        "repo_name": {
          "type": "string",
          "x-go-name": "RepoName"
        },
        "repo_owner_name": {
          "type": "string",
          "x-go-name": "RepoOwnerName"
        },
        "seconds": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "Seconds"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "SubmitPullReviewOptions": {
      "description": "SubmitPullReviewOptions are options to submit a pending pull review",
      "type": "object",
      "properties": {
        "body": {
          "type": "string",
          "x-go-name": "Body"
        },
        "event": {
          "$ref": "#/definitions/ReviewStateType"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "Tag": {
      "description": "Tag represents a repository tag",
      "type": "object",
      "properties": {
        "commit": {
          "$ref": "#/definitions/CommitMeta"
        },
        "id": {
          "type": "string",
          "x-go-name": "ID"
        },
        "message": {
          "type": "string",
          "x-go-name": "Message"
        },
        "name": {
          "type": "string",
          "x-go-name": "Name"
        },
        "tarball_url": {
          "type": "string",
          "x-go-name": "TarballURL"
        },
        "zipball_url": {
          "type": "string",
          "x-go-name": "ZipballURL"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "Team": {
      "description": "Team represents a team in an organization",
      "type": "object",
      "properties": {
        "can_create_org_repo": {
          "type": "boolean",
          "x-go-name": "CanCreateOrgRepo"
        },
        "description": {
          "type": "string",
          "x-go-name": "Description"
        },
        "id": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "ID"
        },
        "includes_all_repositories": {
          "type": "boolean",
          "x-go-name": "IncludesAllRepositories"
        },
        "name": {
          "type": "string",
          "x-go-name": "Name"
        },
        "organization": {
          "$ref": "#/definitions/Organization"
        },
        "permission": {
          "type": "string",
          "enum": ["none", "read", "write", "admin", "owner"],
          "x-go-name": "Permission"
        },
        "units": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "x-go-name": "Units",
          "example": [
            "repo.code",
            "repo.issues",
            "repo.ext_issues",
            "repo.wiki",
            "repo.pulls",
            "repo.releases",
            "repo.projects",
            "repo.ext_wiki"
          ]
        },
        "units_map": {
          "type": "object",
          "additionalProperties": {
            "type": "string"
          },
          "x-go-name": "UnitsMap",
          "example": "{\"repo.code\":\"read\",\"repo.issues\":\"write\",\"repo.ext_issues\":\"none\",\"repo.wiki\":\"admin\",\"repo.pulls\":\"owner\",\"repo.releases\":\"none\",\"repo.projects\":\"none\",\"repo.ext_wiki\":\"none\"]"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "TimeStamp": {
      "description": "TimeStamp defines a timestamp",
      "type": "integer",
      "format": "int64",
      "x-go-package": "code.gitea.io/gitea/modules/timeutil"
    },
    "TimelineComment": {
      "description": "TimelineComment represents a timeline comment (comment of any type) on a commit or issue",
      "type": "object",
      "properties": {
        "assignee": {
          "$ref": "#/definitions/User"
        },
        "assignee_team": {
          "$ref": "#/definitions/Team"
        },
        "body": {
          "type": "string",
          "x-go-name": "Body"
        },
        "created_at": {
          "type": "string",
          "format": "date-time",
          "x-go-name": "Created"
        },
        "dependent_issue": {
          "$ref": "#/definitions/Issue"
        },
        "html_url": {
          "type": "string",
          "x-go-name": "HTMLURL"
        },
        "id": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "ID"
        },
        "issue_url": {
          "type": "string",
          "x-go-name": "IssueURL"
        },
        "label": {
          "$ref": "#/definitions/Label"
        },
        "milestone": {
          "$ref": "#/definitions/Milestone"
        },
        "new_ref": {
          "type": "string",
          "x-go-name": "NewRef"
        },
        "new_title": {
          "type": "string",
          "x-go-name": "NewTitle"
        },
        "old_milestone": {
          "$ref": "#/definitions/Milestone"
        },
        "old_project_id": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "OldProjectID"
        },
        "old_ref": {
          "type": "string",
          "x-go-name": "OldRef"
        },
        "old_title": {
          "type": "string",
          "x-go-name": "OldTitle"
        },
        "project_id": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "ProjectID"
        },
        "pull_request_url": {
          "type": "string",
          "x-go-name": "PRURL"
        },
        "ref_action": {
          "type": "string",
          "x-go-name": "RefAction"
        },
        "ref_comment": {
          "$ref": "#/definitions/Comment"
        },
        "ref_commit_sha": {
          "description": "commit SHA where issue/PR was referenced",
          "type": "string",
          "x-go-name": "RefCommitSHA"
        },
        "ref_issue": {
          "$ref": "#/definitions/Issue"
        },
        "removed_assignee": {
          "description": "whether the assignees were removed or added",
          "type": "boolean",
          "x-go-name": "RemovedAssignee"
        },
        "resolve_doer": {
          "$ref": "#/definitions/User"
        },
        "review_id": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "ReviewID"
        },
        "tracked_time": {
          "$ref": "#/definitions/TrackedTime"
        },
        "type": {
          "type": "string",
          "x-go-name": "Type"
        },
        "updated_at": {
          "type": "string",
          "format": "date-time",
          "x-go-name": "Updated"
        },
        "user": {
          "$ref": "#/definitions/User"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "TopicName": {
      "description": "TopicName a list of repo topic names",
      "type": "object",
      "properties": {
        "topics": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "x-go-name": "TopicNames"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "TopicResponse": {
      "description": "TopicResponse for returning topics",
      "type": "object",
      "properties": {
        "created": {
          "type": "string",
          "format": "date-time",
          "x-go-name": "Created"
        },
        "id": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "ID"
        },
        "repo_count": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "RepoCount"
        },
        "topic_name": {
          "type": "string",
          "x-go-name": "Name"
        },
        "updated": {
          "type": "string",
          "format": "date-time",
          "x-go-name": "Updated"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "TrackedTime": {
      "description": "TrackedTime worked time for an issue / pr",
      "type": "object",
      "properties": {
        "created": {
          "type": "string",
          "format": "date-time",
          "x-go-name": "Created"
        },
        "id": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "ID"
        },
        "issue": {
          "$ref": "#/definitions/Issue"
        },
        "issue_id": {
          "description": "deprecated (only for backwards compatibility)",
          "type": "integer",
          "format": "int64",
          "x-go-name": "IssueID"
        },
        "time": {
          "description": "Time in seconds",
          "type": "integer",
          "format": "int64",
          "x-go-name": "Time"
        },
        "user_id": {
          "description": "deprecated (only for backwards compatibility)",
          "type": "integer",
          "format": "int64",
          "x-go-name": "UserID"
        },
        "user_name": {
          "type": "string",
          "x-go-name": "UserName"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "TransferRepoOption": {
      "description": "TransferRepoOption options when transfer a repository's ownership",
      "type": "object",
      "required": ["new_owner"],
      "properties": {
        "new_owner": {
          "type": "string",
          "x-go-name": "NewOwner"
        },
        "team_ids": {
          "description": "ID of the team or teams to add to the repository. Teams can only be added to organization-owned repositories.",
          "type": "array",
          "items": {
            "type": "integer",
            "format": "int64"
          },
          "x-go-name": "TeamIDs"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "UpdateFileOptions": {
      "description": "UpdateFileOptions options for updating files\nNote: `author` and `committer` are optional (if only one is given, it will be used for the other, otherwise the authenticated user will be used)",
      "type": "object",
      "required": ["sha", "content"],
      "properties": {
        "author": {
          "$ref": "#/definitions/Identity"
        },
        "branch": {
          "description": "branch (optional) to base this file from. if not given, the default branch is used",
          "type": "string",
          "x-go-name": "BranchName"
        },
        "committer": {
          "$ref": "#/definitions/Identity"
        },
        "content": {
          "description": "content must be base64 encoded",
          "type": "string",
          "x-go-name": "Content"
        },
        "dates": {
          "$ref": "#/definitions/CommitDateOptions"
        },
        "from_path": {
          "description": "from_path (optional) is the path of the original file which will be moved/renamed to the path in the URL",
          "type": "string",
          "x-go-name": "FromPath"
        },
        "message": {
          "description": "message (optional) for the commit of this file. if not supplied, a default message will be used",
          "type": "string",
          "x-go-name": "Message"
        },
        "new_branch": {
          "description": "new_branch (optional) will make a new branch from `branch` before creating the file",
          "type": "string",
          "x-go-name": "NewBranchName"
        },
        "sha": {
          "description": "sha is the SHA for the file that already exists",
          "type": "string",
          "x-go-name": "SHA"
        },
        "signoff": {
          "description": "Add a Signed-off-by trailer by the committer at the end of the commit log message.",
          "type": "boolean",
          "x-go-name": "Signoff"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "User": {
      "description": "User represents a user",
      "type": "object",
      "properties": {
        "active": {
          "description": "Is user active",
          "type": "boolean",
          "x-go-name": "IsActive"
        },
        "avatar_url": {
          "description": "URL to the user's avatar",
          "type": "string",
          "x-go-name": "AvatarURL"
        },
        "created": {
          "type": "string",
          "format": "date-time",
          "x-go-name": "Created"
        },
        "description": {
          "description": "the user's description",
          "type": "string",
          "x-go-name": "Description"
        },
        "email": {
          "type": "string",
          "format": "email",
          "x-go-name": "Email"
        },
        "followers_count": {
          "description": "user counts",
          "type": "integer",
          "format": "int64",
          "x-go-name": "Followers"
        },
        "following_count": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "Following"
        },
        "full_name": {
          "description": "the user's full name",
          "type": "string",
          "x-go-name": "FullName"
        },
        "id": {
          "description": "the user's id",
          "type": "integer",
          "format": "int64",
          "x-go-name": "ID"
        },
        "is_admin": {
          "description": "Is the user an administrator",
          "type": "boolean",
          "x-go-name": "IsAdmin"
        },
        "language": {
          "description": "User locale",
          "type": "string",
          "x-go-name": "Language"
        },
        "last_login": {
          "type": "string",
          "format": "date-time",
          "x-go-name": "LastLogin"
        },
        "location": {
          "description": "the user's location",
          "type": "string",
          "x-go-name": "Location"
        },
        "login": {
          "description": "the user's username",
          "type": "string",
          "x-go-name": "UserName"
        },
        "prohibit_login": {
          "description": "Is user login prohibited",
          "type": "boolean",
          "x-go-name": "ProhibitLogin"
        },
        "repo_languages": {
          "description": "DCS Customizations ***/\nRepo languages",
          "type": "array",
          "items": {
            "type": "string"
          },
          "x-go-name": "RepoLanguages"
        },
        "repo_subjects": {
          "description": "Repo subjects",
          "type": "array",
          "items": {
            "type": "string"
          },
          "x-go-name": "RepoSubjects"
        },
        "restricted": {
          "description": "END DCS Customizations ***/\nIs user restricted",
          "type": "boolean",
          "x-go-name": "Restricted"
        },
        "starred_repos_count": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "StarredRepos"
        },
        "visibility": {
          "description": "User visibility level option: public, limited, private",
          "type": "string",
          "x-go-name": "Visibility"
        },
        "website": {
          "description": "the user's website",
          "type": "string",
          "x-go-name": "Website"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "UserHeatmapData": {
      "description": "UserHeatmapData represents the data needed to create a heatmap",
      "type": "object",
      "properties": {
        "contributions": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "Contributions"
        },
        "timestamp": {
          "$ref": "#/definitions/TimeStamp"
        }
      },
      "x-go-package": "code.gitea.io/gitea/models"
    },
    "UserSettings": {
      "description": "UserSettings represents user settings",
      "type": "object",
      "properties": {
        "description": {
          "type": "string",
          "x-go-name": "Description"
        },
        "diff_view_style": {
          "type": "string",
          "x-go-name": "DiffViewStyle"
        },
        "full_name": {
          "type": "string",
          "x-go-name": "FullName"
        },
        "hide_activity": {
          "type": "boolean",
          "x-go-name": "HideActivity"
        },
        "hide_email": {
          "description": "Privacy",
          "type": "boolean",
          "x-go-name": "HideEmail"
        },
        "language": {
          "type": "string",
          "x-go-name": "Language"
        },
        "location": {
          "type": "string",
          "x-go-name": "Location"
        },
        "theme": {
          "type": "string",
          "x-go-name": "Theme"
        },
        "website": {
          "type": "string",
          "x-go-name": "Website"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "UserSettingsOptions": {
      "description": "UserSettingsOptions represents options to change user settings",
      "type": "object",
      "properties": {
        "description": {
          "type": "string",
          "x-go-name": "Description"
        },
        "diff_view_style": {
          "type": "string",
          "x-go-name": "DiffViewStyle"
        },
        "full_name": {
          "type": "string",
          "x-go-name": "FullName"
        },
        "hide_activity": {
          "type": "boolean",
          "x-go-name": "HideActivity"
        },
        "hide_email": {
          "description": "Privacy",
          "type": "boolean",
          "x-go-name": "HideEmail"
        },
        "language": {
          "type": "string",
          "x-go-name": "Language"
        },
        "location": {
          "type": "string",
          "x-go-name": "Location"
        },
        "theme": {
          "type": "string",
          "x-go-name": "Theme"
        },
        "website": {
          "type": "string",
          "x-go-name": "Website"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "WatchInfo": {
      "description": "WatchInfo represents an API watch status of one repository",
      "type": "object",
      "properties": {
        "created_at": {
          "type": "string",
          "format": "date-time",
          "x-go-name": "CreatedAt"
        },
        "ignored": {
          "type": "boolean",
          "x-go-name": "Ignored"
        },
        "reason": {
          "type": "object",
          "x-go-name": "Reason"
        },
        "repository_url": {
          "type": "string",
          "x-go-name": "RepositoryURL"
        },
        "subscribed": {
          "type": "boolean",
          "x-go-name": "Subscribed"
        },
        "url": {
          "type": "string",
          "x-go-name": "URL"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "WikiCommit": {
      "description": "WikiCommit page commit/revision",
      "type": "object",
      "properties": {
        "author": {
          "$ref": "#/definitions/CommitUser"
        },
        "commiter": {
          "$ref": "#/definitions/CommitUser"
        },
        "message": {
          "type": "string",
          "x-go-name": "Message"
        },
        "sha": {
          "type": "string",
          "x-go-name": "ID"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "WikiCommitList": {
      "description": "WikiCommitList commit/revision list",
      "type": "object",
      "properties": {
        "commits": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/WikiCommit"
          },
          "x-go-name": "WikiCommits"
        },
        "count": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "Count"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "WikiPage": {
      "description": "WikiPage a wiki page",
      "type": "object",
      "properties": {
        "commit_count": {
          "type": "integer",
          "format": "int64",
          "x-go-name": "CommitCount"
        },
        "content_base64": {
          "description": "Page content, base64 encoded",
          "type": "string",
          "x-go-name": "ContentBase64"
        },
        "footer": {
          "type": "string",
          "x-go-name": "Footer"
        },
        "html_url": {
          "type": "string",
          "x-go-name": "HTMLURL"
        },
        "last_commit": {
          "$ref": "#/definitions/WikiCommit"
        },
        "sidebar": {
          "type": "string",
          "x-go-name": "Sidebar"
        },
        "sub_url": {
          "type": "string",
          "x-go-name": "SubURL"
        },
        "title": {
          "type": "string",
          "x-go-name": "Title"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    },
    "WikiPageMetaData": {
      "description": "WikiPageMetaData wiki page meta information",
      "type": "object",
      "properties": {
        "html_url": {
          "type": "string",
          "x-go-name": "HTMLURL"
        },
        "last_commit": {
          "$ref": "#/definitions/WikiCommit"
        },
        "sub_url": {
          "type": "string",
          "x-go-name": "SubURL"
        },
        "title": {
          "type": "string",
          "x-go-name": "Title"
        }
      },
      "x-go-package": "code.gitea.io/gitea/modules/structs"
    }
  },
  "responses": {
    "AccessToken": {
      "description": "AccessToken represents an API access token.",
      "schema": {
        "$ref": "#/definitions/AccessToken"
      }
    },
    "AccessTokenList": {
      "description": "AccessTokenList represents a list of API access token.",
      "schema": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/AccessToken"
        }
      }
    },
    "AnnotatedTag": {
      "description": "AnnotatedTag",
      "schema": {
        "$ref": "#/definitions/AnnotatedTag"
      }
    },
    "Attachment": {
      "description": "Attachment",
      "schema": {
        "$ref": "#/definitions/Attachment"
      }
    },
    "AttachmentList": {
      "description": "AttachmentList",
      "schema": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/Attachment"
        }
      }
    },
    "Branch": {
      "description": "Branch",
      "schema": {
        "$ref": "#/definitions/Branch"
      }
    },
    "BranchList": {
      "description": "BranchList",
      "schema": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/Branch"
        }
      }
    },
    "BranchProtection": {
      "description": "BranchProtection",
      "schema": {
        "$ref": "#/definitions/BranchProtection"
      }
    },
    "BranchProtectionList": {
      "description": "BranchProtectionList",
      "schema": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/BranchProtection"
        }
      }
    },
    "CombinedStatus": {
      "description": "CombinedStatus",
      "schema": {
        "$ref": "#/definitions/CombinedStatus"
      }
    },
    "Comment": {
      "description": "Comment",
      "schema": {
        "$ref": "#/definitions/Comment"
      }
    },
    "CommentList": {
      "description": "CommentList",
      "schema": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/Comment"
        }
      }
    },
    "Commit": {
      "description": "Commit",
      "schema": {
        "$ref": "#/definitions/Commit"
      }
    },
    "CommitList": {
      "description": "CommitList",
      "schema": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/Commit"
        }
      },
      "headers": {
        "X-HasMore": {
          "type": "boolean",
          "description": "True if there is another page"
        },
        "X-Page": {
          "type": "integer",
          "format": "int64",
          "description": "The current page"
        },
        "X-PageCount": {
          "type": "integer",
          "format": "int64",
          "description": "Total number of pages"
        },
        "X-PerPage": {
          "type": "integer",
          "format": "int64",
          "description": "Commits per page"
        },
        "X-Total": {
          "type": "integer",
          "format": "int64",
          "description": "Total commit count"
        }
      }
    },
    "CommitStatus": {
      "description": "CommitStatus",
      "schema": {
        "$ref": "#/definitions/CommitStatus"
      }
    },
    "CommitStatusList": {
      "description": "CommitStatusList",
      "schema": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/CommitStatus"
        }
      }
    },
    "ContentsListResponse": {
      "description": "ContentsListResponse",
      "schema": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/ContentsResponse"
        }
      }
    },
    "ContentsResponse": {
      "description": "ContentsResponse",
      "schema": {
        "$ref": "#/definitions/ContentsResponse"
      }
    },
    "CronList": {
      "description": "CronList",
      "schema": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/Cron"
        }
      }
    },
    "DeployKey": {
      "description": "DeployKey",
      "schema": {
        "$ref": "#/definitions/DeployKey"
      }
    },
    "DeployKeyList": {
      "description": "DeployKeyList",
      "schema": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/DeployKey"
        }
      }
    },
    "EmailList": {
      "description": "EmailList",
      "schema": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/Email"
        }
      }
    },
    "EmptyRepository": {
      "description": "EmptyRepository",
      "schema": {
        "$ref": "#/definitions/APIError"
      }
    },
    "FileDeleteResponse": {
      "description": "FileDeleteResponse",
      "schema": {
        "$ref": "#/definitions/FileDeleteResponse"
      }
    },
    "FileResponse": {
      "description": "FileResponse",
      "schema": {
        "$ref": "#/definitions/FileResponse"
      }
    },
    "GPGKey": {
      "description": "GPGKey",
      "schema": {
        "$ref": "#/definitions/GPGKey"
      }
    },
    "GPGKeyList": {
      "description": "GPGKeyList",
      "schema": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/GPGKey"
        }
      }
    },
    "GeneralAPISettings": {
      "description": "GeneralAPISettings",
      "schema": {
        "$ref": "#/definitions/GeneralAPISettings"
      }
    },
    "GeneralAttachmentSettings": {
      "description": "GeneralAttachmentSettings",
      "schema": {
        "$ref": "#/definitions/GeneralAttachmentSettings"
      }
    },
    "GeneralRepoSettings": {
      "description": "GeneralRepoSettings",
      "schema": {
        "$ref": "#/definitions/GeneralRepoSettings"
      }
    },
    "GeneralUISettings": {
      "description": "GeneralUISettings",
      "schema": {
        "$ref": "#/definitions/GeneralUISettings"
      }
    },
    "GitBlobResponse": {
      "description": "GitBlobResponse",
      "schema": {
        "$ref": "#/definitions/GitBlobResponse"
      }
    },
    "GitHook": {
      "description": "GitHook",
      "schema": {
        "$ref": "#/definitions/GitHook"
      }
    },
    "GitHookList": {
      "description": "GitHookList",
      "schema": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/GitHook"
        }
      }
    },
    "GitTreeResponse": {
      "description": "GitTreeResponse",
      "schema": {
        "$ref": "#/definitions/GitTreeResponse"
      }
    },
    "Hook": {
      "description": "Hook",
      "schema": {
        "$ref": "#/definitions/Hook"
      }
    },
    "HookList": {
      "description": "HookList",
      "schema": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/Hook"
        }
      }
    },
    "Issue": {
      "description": "Issue",
      "schema": {
        "$ref": "#/definitions/Issue"
      }
    },
    "IssueDeadline": {
      "description": "IssueDeadline",
      "schema": {
        "$ref": "#/definitions/IssueDeadline"
      }
    },
    "IssueList": {
      "description": "IssueList",
      "schema": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/Issue"
        }
      }
    },
    "IssueTemplates": {
      "description": "IssueTemplates",
      "schema": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/IssueTemplate"
        }
      }
    },
    "Label": {
      "description": "Label",
      "schema": {
        "$ref": "#/definitions/Label"
      }
    },
    "LabelList": {
      "description": "LabelList",
      "schema": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/Label"
        }
      }
    },
    "LanguageStatistics": {
      "description": "LanguageStatistics",
      "schema": {
        "type": "object",
        "additionalProperties": {
          "type": "integer",
          "format": "int64"
        }
      }
    },
    "MarkdownRender": {
      "description": "MarkdownRender is a rendered markdown document",
      "schema": {
        "type": "string"
      }
    },
    "Milestone": {
      "description": "Milestone",
      "schema": {
        "$ref": "#/definitions/Milestone"
      }
    },
    "MilestoneList": {
      "description": "MilestoneList",
      "schema": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/Milestone"
        }
      }
    },
    "NodeInfo": {
      "description": "NodeInfo",
      "schema": {
        "$ref": "#/definitions/NodeInfo"
      }
    },
    "Note": {
      "description": "Note",
      "schema": {
        "$ref": "#/definitions/Note"
      }
    },
    "NotificationCount": {
      "description": "Number of unread notifications",
      "schema": {
        "$ref": "#/definitions/NotificationCount"
      }
    },
    "NotificationThread": {
      "description": "NotificationThread",
      "schema": {
        "$ref": "#/definitions/NotificationThread"
      }
    },
    "NotificationThreadList": {
      "description": "NotificationThreadList",
      "schema": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/NotificationThread"
        }
      }
    },
    "OAuth2Application": {
      "description": "OAuth2Application",
      "schema": {
        "$ref": "#/definitions/OAuth2Application"
      }
    },
    "OAuth2ApplicationList": {
      "description": "OAuth2ApplicationList represents a list of OAuth2 applications.",
      "schema": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/OAuth2Application"
        }
      }
    },
    "Organization": {
      "description": "Organization",
      "schema": {
        "$ref": "#/definitions/Organization"
      }
    },
    "OrganizationList": {
      "description": "OrganizationList",
      "schema": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/Organization"
        }
      }
    },
    "OrganizationPermissions": {
      "description": "OrganizationPermissions",
      "schema": {
        "$ref": "#/definitions/OrganizationPermissions"
      }
    },
    "PublicKey": {
      "description": "PublicKey",
      "schema": {
        "$ref": "#/definitions/PublicKey"
      }
    },
    "PublicKeyList": {
      "description": "PublicKeyList",
      "schema": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/PublicKey"
        }
      }
    },
    "PullRequest": {
      "description": "PullRequest",
      "schema": {
        "$ref": "#/definitions/PullRequest"
      }
    },
    "PullRequestList": {
      "description": "PullRequestList",
      "schema": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/PullRequest"
        }
      }
    },
    "PullReview": {
      "description": "PullReview",
      "schema": {
        "$ref": "#/definitions/PullReview"
      }
    },
    "PullReviewComment": {
      "description": "PullComment",
      "schema": {
        "$ref": "#/definitions/PullReviewComment"
      }
    },
    "PullReviewCommentList": {
      "description": "PullCommentList",
      "schema": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/PullReviewComment"
        }
      }
    },
    "PullReviewList": {
      "description": "PullReviewList",
      "schema": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/PullReview"
        }
      }
    },
    "Reaction": {
      "description": "Reaction",
      "schema": {
        "$ref": "#/definitions/Reaction"
      }
    },
    "ReactionList": {
      "description": "ReactionList",
      "schema": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/Reaction"
        }
      }
    },
    "Reference": {
      "description": "Reference",
      "schema": {
        "$ref": "#/definitions/Reference"
      }
    },
    "ReferenceList": {
      "description": "ReferenceList",
      "schema": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/Reference"
        }
      }
    },
    "Release": {
      "description": "Release",
      "schema": {
        "$ref": "#/definitions/Release"
      }
    },
    "ReleaseList": {
      "description": "ReleaseList",
      "schema": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/Release"
        }
      }
    },
    "Repository": {
      "description": "Repository",
      "schema": {
        "$ref": "#/definitions/Repository"
      }
    },
    "RepositoryList": {
      "description": "RepositoryList",
      "schema": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/Repository"
        }
      }
    },
    "SearchResults": {
      "description": "SearchResults",
      "schema": {
        "$ref": "#/definitions/SearchResults"
      }
    },
    "ServerVersion": {
      "description": "ServerVersion",
      "schema": {
        "$ref": "#/definitions/ServerVersion"
      }
    },
    "StopWatch": {
      "description": "StopWatch",
      "schema": {
        "$ref": "#/definitions/StopWatch"
      }
    },
    "StopWatchList": {
      "description": "StopWatchList",
      "schema": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/StopWatch"
        }
      }
    },
    "StringSlice": {
      "description": "StringSlice",
      "schema": {
        "type": "array",
        "items": {
          "type": "string"
        }
      }
    },
    "Tag": {
      "description": "Tag",
      "schema": {
        "$ref": "#/definitions/Tag"
      }
    },
    "TagList": {
      "description": "TagList",
      "schema": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/Tag"
        }
      }
    },
    "Team": {
      "description": "Team",
      "schema": {
        "$ref": "#/definitions/Team"
      }
    },
    "TeamList": {
      "description": "TeamList",
      "schema": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/Team"
        }
      }
    },
    "TimelineList": {
      "description": "TimelineList",
      "schema": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/TimelineComment"
        }
      }
    },
    "TopicListResponse": {
      "description": "TopicListResponse",
      "schema": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/TopicResponse"
        }
      }
    },
    "TopicNames": {
      "description": "TopicNames",
      "schema": {
        "$ref": "#/definitions/TopicName"
      }
    },
    "TrackedTime": {
      "description": "TrackedTime",
      "schema": {
        "$ref": "#/definitions/TrackedTime"
      }
    },
    "TrackedTimeList": {
      "description": "TrackedTimeList",
      "schema": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/TrackedTime"
        }
      }
    },
    "User": {
      "description": "User",
      "schema": {
        "$ref": "#/definitions/User"
      }
    },
    "UserHeatmapData": {
      "description": "UserHeatmapData",
      "schema": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/UserHeatmapData"
        }
      }
    },
    "UserList": {
      "description": "UserList",
      "schema": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/User"
        }
      }
    },
    "UserSettings": {
      "description": "UserSettings",
      "schema": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/UserSettings"
        }
      }
    },
    "WatchInfo": {
      "description": "WatchInfo",
      "schema": {
        "$ref": "#/definitions/WatchInfo"
      }
    },
    "WikiCommitList": {
      "description": "WikiCommitList",
      "schema": {
        "$ref": "#/definitions/WikiCommitList"
      }
    },
    "WikiPage": {
      "description": "WikiPage",
      "schema": {
        "$ref": "#/definitions/WikiPage"
      }
    },
    "WikiPageList": {
      "description": "WikiPageList",
      "schema": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/WikiPageMetaData"
        }
      }
    },
    "conflict": {
      "description": "APIConflict is a conflict empty response"
    },
    "empty": {
      "description": "APIEmpty is an empty response"
    },
    "error": {
      "description": "APIError is error format response",
      "headers": {
        "message": {
          "type": "string"
        },
        "url": {
          "type": "string"
        }
      }
    },
    "forbidden": {
      "description": "APIForbiddenError is a forbidden error response",
      "headers": {
        "message": {
          "type": "string"
        },
        "url": {
          "type": "string"
        }
      }
    },
    "invalidTopicsError": {
      "description": "APIInvalidTopicsError is error format response to invalid topics",
      "headers": {
        "invalidTopics": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "message": {
          "type": "string"
        }
      }
    },
    "notFound": {
      "description": "APINotFound is a not found empty response"
    },
    "parameterBodies": {
      "description": "parameterBodies",
      "schema": {
        "$ref": "#/definitions/CreateWikiPageOptions"
      }
    },
    "redirect": {
      "description": "APIRedirect is a redirect response"
    },
    "string": {
      "description": "APIString is a string response",
      "schema": {
        "type": "string"
      }
    },
    "validationError": {
      "description": "APIValidationError is error format response related to input validation",
      "headers": {
        "message": {
          "type": "string"
        },
        "url": {
          "type": "string"
        }
      }
    }
  },
  "securityDefinitions": {
    "AccessToken": {
      "type": "apiKey",
      "name": "access_token",
      "in": "query"
    },
    "AuthorizationHeaderToken": {
      "description": "API tokens must be prepended with \"token\" followed by a space.",
      "type": "apiKey",
      "name": "Authorization",
      "in": "header"
    },
    "BasicAuth": {
      "type": "basic"
    },
    "SudoHeader": {
      "description": "Sudo API request as the user provided as the key. Admin privileges are required.",
      "type": "apiKey",
      "name": "Sudo",
      "in": "header"
    },
    "SudoParam": {
      "description": "Sudo API request as the user provided as the key. Admin privileges are required.",
      "type": "apiKey",
      "name": "sudo",
      "in": "query"
    },
    "TOTPHeader": {
      "description": "Must be used in combination with BasicAuth if two-factor authentication is enabled.",
      "type": "apiKey",
      "name": "X-GITEA-OTP",
      "in": "header"
    },
    "Token": {
      "type": "apiKey",
      "name": "token",
      "in": "query"
    }
  },
  "security": [
    {
      "BasicAuth": []
    },
    {
      "Token": []
    },
    {
      "AccessToken": []
    },
    {
      "AuthorizationHeaderToken": []
    },
    {
      "SudoParam": []
    },
    {
      "SudoHeader": []
    },
    {
      "TOTPHeader": []
    }
  ]
}
