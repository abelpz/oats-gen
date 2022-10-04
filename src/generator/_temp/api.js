async function request(params) {
  const { method, body, query, path, basePath, headers, auth } = params;
  const { username, password } = auth || {};
  const defaultPath = "https://git.door43.org/api/v1";
  const urlObj = new URL((basePath || defaultPath) + path);
  console.log(urlObj.pathname);
  const queryObj = new URLSearchParams(urlObj.search);
  const basicAuth =
    username && password
      ? { Authorization: "Basic " + btoa(username + ":" + password) }
      : undefined;

  for (const key in query) {
    if (query?.[key] !== undefined) queryObj.set(key, query[key]);
  }
  urlObj.search = new URLSearchParams(queryObj).toString();
  const url = urlObj.toString();

  const data = await fetch(url, {
    method,
    headers: { ...headers, ...basicAuth },
    body,
  });
  return await data.json();
}

export function adminCronList({ page, limit, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/admin/cron`,
    query: { page: page, limit: limit, ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function adminCronRun({ task, auth, options }) {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/admin/cron/${task}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function adminGetAllOrgs({ lang, page, limit, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/admin/orgs`,
    query: { lang: lang, page: page, limit: limit, ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function adminUnadoptedList({ page, limit, pattern, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/admin/unadopted`,
    query: { page: page, limit: limit, pattern: pattern, ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function adminAdoptRepository({ owner, repo, auth, options }) {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/admin/unadopted/${owner}/${repo}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function adminDeleteUnadoptedRepository({ owner, repo, auth, options }) {
  const requestParams = {
    method: "DELETE",
    basePath: options?.basePath,
    path: `/admin/unadopted/${owner}/${repo}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function adminGetAllUsers({ lang, page, limit, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/admin/users`,
    query: { lang: lang, page: page, limit: limit, ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function adminCreateUser({ body, auth, options }) {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/admin/users`,
    query: { ...options?.query },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function adminDeleteUser({ username, auth, options }) {
  const requestParams = {
    method: "DELETE",
    basePath: options?.basePath,
    path: `/admin/users/${username}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function adminEditUser({ username, body, auth, options }) {
  const requestParams = {
    method: "PATCH",
    basePath: options?.basePath,
    path: `/admin/users/${username}`,
    query: { ...options?.query },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function adminCreatePublicKey({ username, body, auth, options }) {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/admin/users/${username}/keys`,
    query: { ...options?.query },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function adminDeleteUserPublicKey({ username, id, auth, options }) {
  const requestParams = {
    method: "DELETE",
    basePath: options?.basePath,
    path: `/admin/users/${username}/keys/${id}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function adminCreateOrg({ username, body, auth, options }) {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/admin/users/${username}/orgs`,
    query: { ...options?.query },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function adminCreateRepo({ username, body, auth, options }) {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/admin/users/${username}/repos`,
    query: { ...options?.query },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function renderMarkdown({ body, auth, options }) {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/markdown`,
    query: { ...options?.query },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function renderMarkdownRaw({ body, auth, options }) {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/markdown/raw`,
    query: { ...options?.query },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function getNodeInfo({ auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/nodeinfo`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function notifyGetList({
  all,
  statusTypes,
  subjectType,
  since,
  before,
  page,
  limit,
  auth,
  options,
}) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/notifications`,
    query: {
      all: all,
      "status-types": statusTypes,
      "subject-type": subjectType,
      since: since,
      before: before,
      page: page,
      limit: limit,
      ...options?.query,
    },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function notifyReadList({
  lastReadAt,
  all,
  statusTypes,
  toStatus,
  auth,
  options,
}) {
  const requestParams = {
    method: "PUT",
    basePath: options?.basePath,
    path: `/notifications`,
    query: {
      last_read_at: lastReadAt,
      all: all,
      "status-types": statusTypes,
      "to-status": toStatus,
      ...options?.query,
    },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function notifyNewAvailable({ auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/notifications/new`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function notifyGetThread({ id, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/notifications/threads/${id}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function notifyReadThread({ id, toStatus, auth, options }) {
  const requestParams = {
    method: "PATCH",
    basePath: options?.basePath,
    path: `/notifications/threads/${id}`,
    query: { "to-status": toStatus, ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function createOrgRepoDeprecated({ org, body, auth, options }) {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/org/${org}/repos`,
    query: { ...options?.query },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function orgGetAll({ lang, page, limit, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/orgs`,
    query: { lang: lang, page: page, limit: limit, ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function orgCreate({ body, auth, options }) {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/orgs`,
    query: { ...options?.query },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function orgGet({ org, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/orgs/${org}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function orgDelete({ org, auth, options }) {
  const requestParams = {
    method: "DELETE",
    basePath: options?.basePath,
    path: `/orgs/${org}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function orgEdit({ org, body, auth, options }) {
  const requestParams = {
    method: "PATCH",
    basePath: options?.basePath,
    path: `/orgs/${org}`,
    query: { ...options?.query },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function orgListHooks({ org, page, limit, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/orgs/${org}/hooks`,
    query: { page: page, limit: limit, ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function orgCreateHook({ org, body, auth, options }) {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/orgs/${org}/hooks/`,
    query: { ...options?.query },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function orgGetHook({ org, id, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/orgs/${org}/hooks/${id}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function orgDeleteHook({ org, id, auth, options }) {
  const requestParams = {
    method: "DELETE",
    basePath: options?.basePath,
    path: `/orgs/${org}/hooks/${id}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function orgEditHook({ org, id, body, auth, options }) {
  const requestParams = {
    method: "PATCH",
    basePath: options?.basePath,
    path: `/orgs/${org}/hooks/${id}`,
    query: { ...options?.query },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function orgListLabels({ org, page, limit, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/orgs/${org}/labels`,
    query: { page: page, limit: limit, ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function orgCreateLabel({ org, body, auth, options }) {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/orgs/${org}/labels`,
    query: { ...options?.query },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function orgGetLabel({ org, id, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/orgs/${org}/labels/${id}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function orgDeleteLabel({ org, id, auth, options }) {
  const requestParams = {
    method: "DELETE",
    basePath: options?.basePath,
    path: `/orgs/${org}/labels/${id}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function orgEditLabel({ org, id, body, auth, options }) {
  const requestParams = {
    method: "PATCH",
    basePath: options?.basePath,
    path: `/orgs/${org}/labels/${id}`,
    query: { ...options?.query },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function orgListMembers({ org, page, limit, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/orgs/${org}/members`,
    query: { page: page, limit: limit, ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function orgIsMember({ org, username, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/orgs/${org}/members/${username}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function orgDeleteMember({ org, username, auth, options }) {
  const requestParams = {
    method: "DELETE",
    basePath: options?.basePath,
    path: `/orgs/${org}/members/${username}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function orgListPublicMembers({ org, page, limit, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/orgs/${org}/public_members`,
    query: { page: page, limit: limit, ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function orgIsPublicMember({ org, username, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/orgs/${org}/public_members/${username}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function orgPublicizeMember({ org, username, auth, options }) {
  const requestParams = {
    method: "PUT",
    basePath: options?.basePath,
    path: `/orgs/${org}/public_members/${username}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function orgConcealMember({ org, username, auth, options }) {
  const requestParams = {
    method: "DELETE",
    basePath: options?.basePath,
    path: `/orgs/${org}/public_members/${username}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function orgListRepos({ org, page, limit, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/orgs/${org}/repos`,
    query: { page: page, limit: limit, ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function createOrgRepo({ org, body, auth, options }) {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/orgs/${org}/repos`,
    query: { ...options?.query },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function orgListTeams({ org, page, limit, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/orgs/${org}/teams`,
    query: { page: page, limit: limit, ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function orgCreateTeam({ org, body, auth, options }) {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/orgs/${org}/teams`,
    query: { ...options?.query },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function teamSearch({
  org,
  q,
  includeDesc,
  page,
  limit,
  auth,
  options,
}) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/orgs/${org}/teams/search`,
    query: {
      q: q,
      include_desc: includeDesc,
      page: page,
      limit: limit,
      ...options?.query,
    },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function issueSearchIssues({
  state,
  labels,
  milestones,
  q,
  priorityRepoId,
  type,
  since,
  before,
  assigned,
  created,
  mentioned,
  reviewRequested,
  owner,
  team,
  page,
  limit,
  auth,
  options,
}) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/issues/search`,
    query: {
      state: state,
      labels: labels,
      milestones: milestones,
      q: q,
      priority_repo_id: priorityRepoId,
      type: type,
      since: since,
      before: before,
      assigned: assigned,
      created: created,
      mentioned: mentioned,
      review_requested: reviewRequested,
      owner: owner,
      team: team,
      page: page,
      limit: limit,
      ...options?.query,
    },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoMigrate({ body, auth, options }) {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/repos/migrate`,
    query: { ...options?.query },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoSearch({
  q,
  topic,
  includeDesc,
  uid,
  priorityOwnerId,
  teamId,
  starredBy,
  _private,
  isPrivate,
  template,
  archived,
  mode,
  exclusive,
  repo,
  owner,
  lang,
  subject,
  book,
  includeMetadata,
  sort,
  order,
  page,
  limit,
  auth,
  options,
}) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/search`,
    query: {
      q: q,
      topic: topic,
      includeDesc: includeDesc,
      uid: uid,
      priority_owner_id: priorityOwnerId,
      team_id: teamId,
      starredBy: starredBy,
      private: _private,
      is_private: isPrivate,
      template: template,
      archived: archived,
      mode: mode,
      exclusive: exclusive,
      repo: repo,
      owner: owner,
      lang: lang,
      subject: subject,
      book: book,
      includeMetadata: includeMetadata,
      sort: sort,
      order: order,
      page: page,
      limit: limit,
      ...options?.query,
    },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoGet({ owner, repo, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoDelete({ owner, repo, auth, options }) {
  const requestParams = {
    method: "DELETE",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoEdit({ owner, repo, body, auth, options }) {
  const requestParams = {
    method: "PATCH",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}`,
    query: { ...options?.query },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoGetArchive({ owner, repo, archive, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/archive/${archive}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoGetAssignees({ owner, repo, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/assignees`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoListBranchProtection({ owner, repo, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/branch_protections`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoCreateBranchProtection({
  owner,
  repo,
  body,
  auth,
  options,
}) {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/branch_protections`,
    query: { ...options?.query },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoGetBranchProtection({ owner, repo, name, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/branch_protections/${name}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoDeleteBranchProtection({
  owner,
  repo,
  name,
  auth,
  options,
}) {
  const requestParams = {
    method: "DELETE",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/branch_protections/${name}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoEditBranchProtection({
  owner,
  repo,
  name,
  body,
  auth,
  options,
}) {
  const requestParams = {
    method: "PATCH",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/branch_protections/${name}`,
    query: { ...options?.query },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoListBranches({ owner, repo, page, limit, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/branches`,
    query: { page: page, limit: limit, ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoCreateBranch({ owner, repo, body, auth, options }) {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/branches`,
    query: { ...options?.query },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoGetBranch({ owner, repo, branch, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/branches/${branch}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoDeleteBranch({ owner, repo, branch, auth, options }) {
  const requestParams = {
    method: "DELETE",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/branches/${branch}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoListCollaborators({
  owner,
  repo,
  page,
  limit,
  auth,
  options,
}) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/collaborators`,
    query: { page: page, limit: limit, ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoCheckCollaborator({
  owner,
  repo,
  collaborator,
  auth,
  options,
}) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/collaborators/${collaborator}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoAddCollaborator({
  owner,
  repo,
  collaborator,
  body,
  auth,
  options,
}) {
  const requestParams = {
    method: "PUT",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/collaborators/${collaborator}`,
    query: { ...options?.query },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoDeleteCollaborator({
  owner,
  repo,
  collaborator,
  auth,
  options,
}) {
  const requestParams = {
    method: "DELETE",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/collaborators/${collaborator}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoGetAllCommits({
  owner,
  repo,
  sha,
  path,
  page,
  limit,
  auth,
  options,
}) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/commits`,
    query: {
      sha: sha,
      path: path,
      page: page,
      limit: limit,
      ...options?.query,
    },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoGetCombinedStatusByRef({
  owner,
  repo,
  ref,
  page,
  limit,
  auth,
  options,
}) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/commits/${ref}/status`,
    query: { page: page, limit: limit, ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoListStatusesByRef({
  owner,
  repo,
  ref,
  sort,
  state,
  page,
  limit,
  auth,
  options,
}) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/commits/${ref}/statuses`,
    query: {
      sort: sort,
      state: state,
      page: page,
      limit: limit,
      ...options?.query,
    },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoGetContentsList({ owner, repo, ref, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/contents`,
    query: { ref: ref, ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoGetContents({ owner, repo, filepath, ref, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/contents/${filepath}`,
    query: { ref: ref, ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoUpdateFile({ owner, repo, filepath, body, auth, options }) {
  const requestParams = {
    method: "PUT",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/contents/${filepath}`,
    query: { ...options?.query },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoCreateFile({ owner, repo, filepath, body, auth, options }) {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/contents/${filepath}`,
    query: { ...options?.query },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoDeleteFile({ owner, repo, filepath, body, auth, options }) {
  const requestParams = {
    method: "DELETE",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/contents/${filepath}`,
    query: { ...options?.query },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoGetEditorConfig({ owner, repo, filepath, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/editorconfig/${filepath}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function listForks({ owner, repo, page, limit, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/forks`,
    query: { page: page, limit: limit, ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function createFork({ owner, repo, body, auth, options }) {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/forks`,
    query: { ...options?.query },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function GetBlob({ owner, repo, sha, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/git/blobs/${sha}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoGetSingleCommit({ owner, repo, sha, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/git/commits/${sha}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoDownloadCommitDiffOrPatch({
  owner,
  repo,
  sha,
  diffType,
  auth,
  options,
}) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/git/commits/${sha}.${diffType}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoGetNote({ owner, repo, sha, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/git/notes/${sha}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoListAllGitRefs({ owner, repo, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/git/refs`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoListGitRefs({ owner, repo, ref, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/git/refs/${ref}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function GetAnnotatedTag({ owner, repo, sha, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/git/tags/${sha}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function GetTree({
  owner,
  repo,
  sha,
  recursive,
  page,
  perPage,
  auth,
  options,
}) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/git/trees/${sha}`,
    query: {
      recursive: recursive,
      page: page,
      per_page: perPage,
      ...options?.query,
    },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoListHooks({ owner, repo, page, limit, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/hooks`,
    query: { page: page, limit: limit, ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoCreateHook({ owner, repo, body, auth, options }) {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/hooks`,
    query: { ...options?.query },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoListGitHooks({ owner, repo, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/hooks/git`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoGetGitHook({ owner, repo, id, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/hooks/git/${id}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoDeleteGitHook({ owner, repo, id, auth, options }) {
  const requestParams = {
    method: "DELETE",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/hooks/git/${id}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoEditGitHook({ owner, repo, id, body, auth, options }) {
  const requestParams = {
    method: "PATCH",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/hooks/git/${id}`,
    query: { ...options?.query },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoGetHook({ owner, repo, id, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/hooks/${id}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoDeleteHook({ owner, repo, id, auth, options }) {
  const requestParams = {
    method: "DELETE",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/hooks/${id}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoEditHook({ owner, repo, id, body, auth, options }) {
  const requestParams = {
    method: "PATCH",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/hooks/${id}`,
    query: { ...options?.query },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoTestHook({ owner, repo, id, auth, options }) {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/hooks/${id}/tests`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoGetIssueTemplates({ owner, repo, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/issue_templates`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function issueListIssues({
  owner,
  repo,
  state,
  labels,
  q,
  type,
  milestones,
  since,
  before,
  createdBy,
  assignedBy,
  mentionedBy,
  page,
  limit,
  auth,
  options,
}) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/issues`,
    query: {
      state: state,
      labels: labels,
      q: q,
      type: type,
      milestones: milestones,
      since: since,
      before: before,
      created_by: createdBy,
      assigned_by: assignedBy,
      mentioned_by: mentionedBy,
      page: page,
      limit: limit,
      ...options?.query,
    },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function issueCreateIssue({ owner, repo, body, auth, options }) {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/issues`,
    query: { ...options?.query },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function issueGetRepoComments({
  owner,
  repo,
  since,
  before,
  page,
  limit,
  auth,
  options,
}) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/issues/comments`,
    query: {
      since: since,
      before: before,
      page: page,
      limit: limit,
      ...options?.query,
    },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function issueGetComment({ owner, repo, id, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/issues/comments/${id}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function issueDeleteComment({ owner, repo, id, auth, options }) {
  const requestParams = {
    method: "DELETE",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/issues/comments/${id}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function issueEditComment({ owner, repo, id, body, auth, options }) {
  const requestParams = {
    method: "PATCH",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/issues/comments/${id}`,
    query: { ...options?.query },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function issueGetCommentReactions({ owner, repo, id, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/issues/comments/${id}/reactions`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function issuePostCommentReaction({
  owner,
  repo,
  id,
  body,
  auth,
  options,
}) {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/issues/comments/${id}/reactions`,
    query: { ...options?.query },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function issueDeleteCommentReaction({
  owner,
  repo,
  id,
  body,
  auth,
  options,
}) {
  const requestParams = {
    method: "DELETE",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/issues/comments/${id}/reactions`,
    query: { ...options?.query },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function issueGetIssue({ owner, repo, index, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/issues/${index}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function issueEditIssue({ owner, repo, index, body, auth, options }) {
  const requestParams = {
    method: "PATCH",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/issues/${index}`,
    query: { ...options?.query },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function issueGetComments({
  owner,
  repo,
  index,
  since,
  before,
  auth,
  options,
}) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/issues/${index}/comments`,
    query: { since: since, before: before, ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function issueCreateComment({
  owner,
  repo,
  index,
  body,
  auth,
  options,
}) {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/issues/${index}/comments`,
    query: { ...options?.query },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function issueDeleteCommentDeprecated({
  owner,
  repo,
  index,
  id,
  auth,
  options,
}) {
  const requestParams = {
    method: "DELETE",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/issues/${index}/comments/${id}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function issueEditCommentDeprecated({
  owner,
  repo,
  index,
  id,
  body,
  auth,
  options,
}) {
  const requestParams = {
    method: "PATCH",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/issues/${index}/comments/${id}`,
    query: { ...options?.query },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function issueEditIssueDeadline({
  owner,
  repo,
  index,
  body,
  auth,
  options,
}) {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/issues/${index}/deadline`,
    query: { ...options?.query },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function issueGetLabels({ owner, repo, index, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/issues/${index}/labels`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function issueReplaceLabels({
  owner,
  repo,
  index,
  body,
  auth,
  options,
}) {
  const requestParams = {
    method: "PUT",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/issues/${index}/labels`,
    query: { ...options?.query },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function issueAddLabel({ owner, repo, index, body, auth, options }) {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/issues/${index}/labels`,
    query: { ...options?.query },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function issueClearLabels({ owner, repo, index, auth, options }) {
  const requestParams = {
    method: "DELETE",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/issues/${index}/labels`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function issueRemoveLabel({ owner, repo, index, id, auth, options }) {
  const requestParams = {
    method: "DELETE",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/issues/${index}/labels/${id}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function issueGetIssueReactions({
  owner,
  repo,
  index,
  page,
  limit,
  auth,
  options,
}) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/issues/${index}/reactions`,
    query: { page: page, limit: limit, ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function issuePostIssueReaction({
  owner,
  repo,
  index,
  body,
  auth,
  options,
}) {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/issues/${index}/reactions`,
    query: { ...options?.query },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function issueDeleteIssueReaction({
  owner,
  repo,
  index,
  body,
  auth,
  options,
}) {
  const requestParams = {
    method: "DELETE",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/issues/${index}/reactions`,
    query: { ...options?.query },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function issueDeleteStopWatch({ owner, repo, index, auth, options }) {
  const requestParams = {
    method: "DELETE",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/issues/${index}/stopwatch/delete`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function issueStartStopWatch({ owner, repo, index, auth, options }) {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/issues/${index}/stopwatch/start`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function issueStopStopWatch({ owner, repo, index, auth, options }) {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/issues/${index}/stopwatch/stop`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function issueSubscriptions({
  owner,
  repo,
  index,
  page,
  limit,
  auth,
  options,
}) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/issues/${index}/subscriptions`,
    query: { page: page, limit: limit, ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function issueCheckSubscription({ owner, repo, index, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/issues/${index}/subscriptions/check`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function issueAddSubscription({
  owner,
  repo,
  index,
  user,
  auth,
  options,
}) {
  const requestParams = {
    method: "PUT",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/issues/${index}/subscriptions/${user}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function issueDeleteSubscription({
  owner,
  repo,
  index,
  user,
  auth,
  options,
}) {
  const requestParams = {
    method: "DELETE",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/issues/${index}/subscriptions/${user}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function issueGetCommentsAndTimeline({
  owner,
  repo,
  index,
  since,
  page,
  limit,
  before,
  auth,
  options,
}) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/issues/${index}/timeline`,
    query: {
      since: since,
      page: page,
      limit: limit,
      before: before,
      ...options?.query,
    },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function issueTrackedTimes({
  owner,
  repo,
  index,
  user,
  since,
  before,
  page,
  limit,
  auth,
  options,
}) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/issues/${index}/times`,
    query: {
      user: user,
      since: since,
      before: before,
      page: page,
      limit: limit,
      ...options?.query,
    },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function issueAddTime({ owner, repo, index, body, auth, options }) {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/issues/${index}/times`,
    query: { ...options?.query },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function issueResetTime({ owner, repo, index, auth, options }) {
  const requestParams = {
    method: "DELETE",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/issues/${index}/times`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function issueDeleteTime({ owner, repo, index, id, auth, options }) {
  const requestParams = {
    method: "DELETE",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/issues/${index}/times/${id}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoListKeys({
  owner,
  repo,
  keyId,
  fingerprint,
  page,
  limit,
  auth,
  options,
}) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/keys`,
    query: {
      key_id: keyId,
      fingerprint: fingerprint,
      page: page,
      limit: limit,
      ...options?.query,
    },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoCreateKey({ owner, repo, body, auth, options }) {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/keys`,
    query: { ...options?.query },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoGetKey({ owner, repo, id, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/keys/${id}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoDeleteKey({ owner, repo, id, auth, options }) {
  const requestParams = {
    method: "DELETE",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/keys/${id}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function issueListLabels({ owner, repo, page, limit, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/labels`,
    query: { page: page, limit: limit, ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function issueCreateLabel({ owner, repo, body, auth, options }) {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/labels`,
    query: { ...options?.query },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function issueGetLabel({ owner, repo, id, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/labels/${id}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function issueDeleteLabel({ owner, repo, id, auth, options }) {
  const requestParams = {
    method: "DELETE",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/labels/${id}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function issueEditLabel({ owner, repo, id, body, auth, options }) {
  const requestParams = {
    method: "PATCH",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/labels/${id}`,
    query: { ...options?.query },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoGetLanguages({ owner, repo, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/languages`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function issueGetMilestonesList({
  owner,
  repo,
  state,
  name,
  page,
  limit,
  auth,
  options,
}) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/milestones`,
    query: {
      state: state,
      name: name,
      page: page,
      limit: limit,
      ...options?.query,
    },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function issueCreateMilestone({ owner, repo, body, auth, options }) {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/milestones`,
    query: { ...options?.query },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function issueGetMilestone({ owner, repo, id, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/milestones/${id}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function issueDeleteMilestone({ owner, repo, id, auth, options }) {
  const requestParams = {
    method: "DELETE",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/milestones/${id}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function issueEditMilestone({ owner, repo, id, body, auth, options }) {
  const requestParams = {
    method: "PATCH",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/milestones/${id}`,
    query: { ...options?.query },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoMirrorSync({ owner, repo, auth, options }) {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/mirror-sync`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function notifyGetRepoList({
  owner,
  repo,
  all,
  statusTypes,
  subjectType,
  since,
  before,
  page,
  limit,
  auth,
  options,
}) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/notifications`,
    query: {
      all: all,
      "status-types": statusTypes,
      "subject-type": subjectType,
      since: since,
      before: before,
      page: page,
      limit: limit,
      ...options?.query,
    },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function notifyReadRepoList({
  owner,
  repo,
  all,
  statusTypes,
  toStatus,
  lastReadAt,
  auth,
  options,
}) {
  const requestParams = {
    method: "PUT",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/notifications`,
    query: {
      all: all,
      "status-types": statusTypes,
      "to-status": toStatus,
      last_read_at: lastReadAt,
      ...options?.query,
    },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoListPullRequests({
  owner,
  repo,
  state,
  sort,
  milestone,
  labels,
  page,
  limit,
  auth,
  options,
}) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/pulls`,
    query: {
      state: state,
      sort: sort,
      milestone: milestone,
      labels: labels,
      page: page,
      limit: limit,
      ...options?.query,
    },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoCreatePullRequest({ owner, repo, body, auth, options }) {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/pulls`,
    query: { ...options?.query },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoGetPullRequest({ owner, repo, index, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/pulls/${index}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoEditPullRequest({
  owner,
  repo,
  index,
  body,
  auth,
  options,
}) {
  const requestParams = {
    method: "PATCH",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/pulls/${index}`,
    query: { ...options?.query },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoDownloadPullDiffOrPatch({
  owner,
  repo,
  index,
  diffType,
  binary,
  auth,
  options,
}) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/pulls/${index}.${diffType}`,
    query: { binary: binary, ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoGetPullRequestCommits({
  owner,
  repo,
  index,
  page,
  limit,
  auth,
  options,
}) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/pulls/${index}/commits`,
    query: { page: page, limit: limit, ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoPullRequestIsMerged({ owner, repo, index, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/pulls/${index}/merge`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoMergePullRequest({
  owner,
  repo,
  index,
  body,
  auth,
  options,
}) {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/pulls/${index}/merge`,
    query: { ...options?.query },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoCreatePullReviewRequests({
  owner,
  repo,
  index,
  body,
  auth,
  options,
}) {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/pulls/${index}/requested_reviewers`,
    query: { ...options?.query },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoDeletePullReviewRequests({
  owner,
  repo,
  index,
  body,
  auth,
  options,
}) {
  const requestParams = {
    method: "DELETE",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/pulls/${index}/requested_reviewers`,
    query: { ...options?.query },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoListPullReviews({
  owner,
  repo,
  index,
  page,
  limit,
  auth,
  options,
}) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/pulls/${index}/reviews`,
    query: { page: page, limit: limit, ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoCreatePullReview({
  owner,
  repo,
  index,
  body,
  auth,
  options,
}) {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/pulls/${index}/reviews`,
    query: { ...options?.query },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoGetPullReview({ owner, repo, index, id, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/pulls/${index}/reviews/${id}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoSubmitPullReview({
  owner,
  repo,
  index,
  id,
  body,
  auth,
  options,
}) {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/pulls/${index}/reviews/${id}`,
    query: { ...options?.query },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoDeletePullReview({
  owner,
  repo,
  index,
  id,
  auth,
  options,
}) {
  const requestParams = {
    method: "DELETE",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/pulls/${index}/reviews/${id}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoGetPullReviewComments({
  owner,
  repo,
  index,
  id,
  auth,
  options,
}) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/pulls/${index}/reviews/${id}/comments`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoDismissPullReview({
  owner,
  repo,
  index,
  id,
  body,
  auth,
  options,
}) {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/pulls/${index}/reviews/${id}/dismissals`,
    query: { ...options?.query },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoUnDismissPullReview({
  owner,
  repo,
  index,
  id,
  auth,
  options,
}) {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/pulls/${index}/reviews/${id}/undismissals`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoUpdatePullRequest({
  owner,
  repo,
  index,
  style,
  auth,
  options,
}) {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/pulls/${index}/update`,
    query: { style: style, ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoGetRawFile({ owner, repo, filepath, ref, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/raw/${filepath}`,
    query: { ref: ref, ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoListReleases({
  owner,
  repo,
  draft,
  preRelease,
  perPage,
  page,
  limit,
  auth,
  options,
}) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/releases`,
    query: {
      draft: draft,
      "pre-release": preRelease,
      per_page: perPage,
      page: page,
      limit: limit,
      ...options?.query,
    },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoCreateRelease({ owner, repo, body, auth, options }) {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/releases`,
    query: { ...options?.query },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoGetReleaseByTag({ owner, repo, tag, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/releases/tags/${tag}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoDeleteReleaseByTag({ owner, repo, tag, auth, options }) {
  const requestParams = {
    method: "DELETE",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/releases/tags/${tag}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoGetRelease({ owner, repo, id, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/releases/${id}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoDeleteRelease({ owner, repo, id, auth, options }) {
  const requestParams = {
    method: "DELETE",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/releases/${id}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoEditRelease({ owner, repo, id, body, auth, options }) {
  const requestParams = {
    method: "PATCH",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/releases/${id}`,
    query: { ...options?.query },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoListReleaseAttachments({ owner, repo, id, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/releases/${id}/assets`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoCreateReleaseAttachment({
  owner,
  repo,
  id,
  name,
  attachment,
  auth,
  options,
}) {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/releases/${id}/assets`,
    query: { name: name, ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoGetReleaseAttachment({
  owner,
  repo,
  id,
  attachmentId,
  auth,
  options,
}) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/releases/${id}/assets/${attachment_id}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoDeleteReleaseAttachment({
  owner,
  repo,
  id,
  attachmentId,
  auth,
  options,
}) {
  const requestParams = {
    method: "DELETE",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/releases/${id}/assets/${attachment_id}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoEditReleaseAttachment({
  owner,
  repo,
  id,
  attachmentId,
  body,
  auth,
  options,
}) {
  const requestParams = {
    method: "PATCH",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/releases/${id}/assets/${attachment_id}`,
    query: { ...options?.query },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoGetReviewers({ owner, repo, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/reviewers`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoSigningKey({ owner, repo, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/signing-key.gpg`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoListStargazers({
  owner,
  repo,
  page,
  limit,
  auth,
  options,
}) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/stargazers`,
    query: { page: page, limit: limit, ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoListStatuses({
  owner,
  repo,
  sha,
  sort,
  state,
  page,
  limit,
  auth,
  options,
}) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/statuses/${sha}`,
    query: {
      sort: sort,
      state: state,
      page: page,
      limit: limit,
      ...options?.query,
    },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoCreateStatus({ owner, repo, sha, body, auth, options }) {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/statuses/${sha}`,
    query: { ...options?.query },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoListSubscribers({
  owner,
  repo,
  page,
  limit,
  auth,
  options,
}) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/subscribers`,
    query: { page: page, limit: limit, ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function userCurrentCheckSubscription({ owner, repo, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/subscription`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function userCurrentPutSubscription({ owner, repo, auth, options }) {
  const requestParams = {
    method: "PUT",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/subscription`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function userCurrentDeleteSubscription({ owner, repo, auth, options }) {
  const requestParams = {
    method: "DELETE",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/subscription`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoListTags({ owner, repo, page, limit, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/tags`,
    query: { page: page, limit: limit, ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoCreateTag({ owner, repo, body, auth, options }) {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/tags`,
    query: { ...options?.query },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoGetTag({ owner, repo, tag, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/tags/${tag}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoDeleteTag({ owner, repo, tag, auth, options }) {
  const requestParams = {
    method: "DELETE",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/tags/${tag}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoListTeams({ owner, repo, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/teams`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoCheckTeam({ owner, repo, team, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/teams/${team}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoAddTeam({ owner, repo, team, auth, options }) {
  const requestParams = {
    method: "PUT",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/teams/${team}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoDeleteTeam({ owner, repo, team, auth, options }) {
  const requestParams = {
    method: "DELETE",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/teams/${team}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoTrackedTimes({
  owner,
  repo,
  user,
  since,
  before,
  page,
  limit,
  auth,
  options,
}) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/times`,
    query: {
      user: user,
      since: since,
      before: before,
      page: page,
      limit: limit,
      ...options?.query,
    },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function userTrackedTimes({ owner, repo, user, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/times/${user}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoListTopics({ owner, repo, page, limit, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/topics`,
    query: { page: page, limit: limit, ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoUpdateTopics({ owner, repo, body, auth, options }) {
  const requestParams = {
    method: "PUT",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/topics`,
    query: { ...options?.query },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoAddTopic({ owner, repo, topic, auth, options }) {
  const requestParams = {
    method: "PUT",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/topics/${topic}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoDeleteTopic({ owner, repo, topic, auth, options }) {
  const requestParams = {
    method: "DELETE",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/topics/${topic}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoTransfer({ owner, repo, body, auth, options }) {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/transfer`,
    query: { ...options?.query },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function acceptRepoTransfer({ owner, repo, auth, options }) {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/transfer/accept`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function rejectRepoTransfer({ owner, repo, auth, options }) {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/transfer/reject`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoCreateWikiPage({ owner, repo, body, auth, options }) {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/wiki/new`,
    query: { ...options?.query },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoGetWikiPage({ owner, repo, pageName, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/wiki/page/${pageName}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoDeleteWikiPage({ owner, repo, pageName, auth, options }) {
  const requestParams = {
    method: "DELETE",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/wiki/page/${pageName}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoEditWikiPage({
  owner,
  repo,
  pageName,
  body,
  auth,
  options,
}) {
  const requestParams = {
    method: "PATCH",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/wiki/page/${pageName}`,
    query: { ...options?.query },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoGetWikiPages({ owner, repo, page, limit, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/wiki/pages`,
    query: { page: page, limit: limit, ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoGetWikiPageRevisions({
  owner,
  repo,
  pageName,
  page,
  auth,
  options,
}) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/wiki/revisions/${pageName}`,
    query: { page: page, ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function generateRepo({
  templateOwner,
  templateRepo,
  body,
  auth,
  options,
}) {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/repos/${template_owner}/${template_repo}/generate`,
    query: { ...options?.query },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function repoGetByID({ id, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repositories/${id}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function getGeneralAPISettings({ auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/settings/api`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function getGeneralAttachmentSettings({ auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/settings/attachment`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function getGeneralRepositorySettings({ auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/settings/repository`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function getGeneralUISettings({ auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/settings/ui`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function getSigningKey({ auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/signing-key.gpg`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function orgGetTeam({ id, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/teams/${id}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function orgDeleteTeam({ id, auth, options }) {
  const requestParams = {
    method: "DELETE",
    basePath: options?.basePath,
    path: `/teams/${id}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function orgEditTeam({ id, body, auth, options }) {
  const requestParams = {
    method: "PATCH",
    basePath: options?.basePath,
    path: `/teams/${id}`,
    query: { ...options?.query },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function orgListTeamMembers({ id, page, limit, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/teams/${id}/members`,
    query: { page: page, limit: limit, ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function orgListTeamMember({ id, username, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/teams/${id}/members/${username}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function orgAddTeamMember({ id, username, auth, options }) {
  const requestParams = {
    method: "PUT",
    basePath: options?.basePath,
    path: `/teams/${id}/members/${username}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function orgRemoveTeamMember({ id, username, auth, options }) {
  const requestParams = {
    method: "DELETE",
    basePath: options?.basePath,
    path: `/teams/${id}/members/${username}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function orgListTeamRepos({ id, page, limit, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/teams/${id}/repos`,
    query: { page: page, limit: limit, ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function orgAddTeamRepository({ id, org, repo, auth, options }) {
  const requestParams = {
    method: "PUT",
    basePath: options?.basePath,
    path: `/teams/${id}/repos/${org}/${repo}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function orgRemoveTeamRepository({ id, org, repo, auth, options }) {
  const requestParams = {
    method: "DELETE",
    basePath: options?.basePath,
    path: `/teams/${id}/repos/${org}/${repo}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function topicSearch({ q, page, limit, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/topics/search`,
    query: { q: q, page: page, limit: limit, ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function userGetCurrent({ auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/user`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function userGetOauth2Application({ page, limit, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/user/applications/oauth2`,
    query: { page: page, limit: limit, ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function userCreateOAuth2Application({ body, auth, options }) {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/user/applications/oauth2`,
    query: { ...options?.query },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function userGetOAuth2Application({ id, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/user/applications/oauth2/${id}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function userDeleteOAuth2Application({ id, auth, options }) {
  const requestParams = {
    method: "DELETE",
    basePath: options?.basePath,
    path: `/user/applications/oauth2/${id}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function userUpdateOAuth2Application({ id, body, auth, options }) {
  const requestParams = {
    method: "PATCH",
    basePath: options?.basePath,
    path: `/user/applications/oauth2/${id}`,
    query: { ...options?.query },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function userListEmails({ auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/user/emails`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function userAddEmail({ body, auth, options }) {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/user/emails`,
    query: { ...options?.query },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function userDeleteEmail({ body, auth, options }) {
  const requestParams = {
    method: "DELETE",
    basePath: options?.basePath,
    path: `/user/emails`,
    query: { ...options?.query },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function userCurrentListFollowers({ page, limit, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/user/followers`,
    query: { page: page, limit: limit, ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function userCurrentListFollowing({ page, limit, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/user/following`,
    query: { page: page, limit: limit, ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function userCurrentCheckFollowing({ username, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/user/following/${username}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function userCurrentPutFollow({ username, auth, options }) {
  const requestParams = {
    method: "PUT",
    basePath: options?.basePath,
    path: `/user/following/${username}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function userCurrentDeleteFollow({ username, auth, options }) {
  const requestParams = {
    method: "DELETE",
    basePath: options?.basePath,
    path: `/user/following/${username}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function getVerificationToken({ auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/user/gpg_key_token`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function userVerifyGPGKey({ auth, options }) {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/user/gpg_key_verify`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function userCurrentListGPGKeys({ page, limit, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/user/gpg_keys`,
    query: { page: page, limit: limit, ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function userCurrentPostGPGKey({ body, auth, options }) {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/user/gpg_keys`,
    query: { ...options?.query },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function userCurrentGetGPGKey({ id, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/user/gpg_keys/${id}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function userCurrentDeleteGPGKey({ id, auth, options }) {
  const requestParams = {
    method: "DELETE",
    basePath: options?.basePath,
    path: `/user/gpg_keys/${id}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function userCurrentListKeys({
  fingerprint,
  page,
  limit,
  auth,
  options,
}) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/user/keys`,
    query: {
      fingerprint: fingerprint,
      page: page,
      limit: limit,
      ...options?.query,
    },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function userCurrentPostKey({ body, auth, options }) {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/user/keys`,
    query: { ...options?.query },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function userCurrentGetKey({ id, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/user/keys/${id}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function userCurrentDeleteKey({ id, auth, options }) {
  const requestParams = {
    method: "DELETE",
    basePath: options?.basePath,
    path: `/user/keys/${id}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function orgListCurrentUserOrgs({ page, limit, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/user/orgs`,
    query: { page: page, limit: limit, ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function userCurrentListRepos({ page, limit, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/user/repos`,
    query: { page: page, limit: limit, ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function createCurrentUserRepo({ body, auth, options }) {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/user/repos`,
    query: { ...options?.query },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function getUserSettings({ auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/user/settings`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function updateUserSettings({ body, auth, options }) {
  const requestParams = {
    method: "PATCH",
    basePath: options?.basePath,
    path: `/user/settings`,
    query: { ...options?.query },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function userCurrentListStarred({ page, limit, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/user/starred`,
    query: { page: page, limit: limit, ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function userCurrentCheckStarring({ owner, repo, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/user/starred/${owner}/${repo}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function userCurrentPutStar({ owner, repo, auth, options }) {
  const requestParams = {
    method: "PUT",
    basePath: options?.basePath,
    path: `/user/starred/${owner}/${repo}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function userCurrentDeleteStar({ owner, repo, auth, options }) {
  const requestParams = {
    method: "DELETE",
    basePath: options?.basePath,
    path: `/user/starred/${owner}/${repo}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function userGetStopWatches({ page, limit, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/user/stopwatches`,
    query: { page: page, limit: limit, ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function userCurrentListSubscriptions({ page, limit, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/user/subscriptions`,
    query: { page: page, limit: limit, ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function userListTeams({ page, limit, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/user/teams`,
    query: { page: page, limit: limit, ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function userCurrentTrackedTimes({ since, before, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/user/times`,
    query: { since: since, before: before, ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function userSearch({ q, uid, lang, page, limit, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/users/search`,
    query: {
      q: q,
      uid: uid,
      lang: lang,
      page: page,
      limit: limit,
      ...options?.query,
    },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function userCheckFollowing({ follower, followee, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/users/${follower}/following/${followee}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function userGet({ username, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/users/${username}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function userListFollowers({ username, page, limit, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/users/${username}/followers`,
    query: { page: page, limit: limit, ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function userListFollowing({ username, page, limit, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/users/${username}/following`,
    query: { page: page, limit: limit, ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function userListGPGKeys({ username, page, limit, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/users/${username}/gpg_keys`,
    query: { page: page, limit: limit, ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function userGetHeatmapData({ username, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/users/${username}/heatmap`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function userListKeys({
  username,
  fingerprint,
  page,
  limit,
  auth,
  options,
}) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/users/${username}/keys`,
    query: {
      fingerprint: fingerprint,
      page: page,
      limit: limit,
      ...options?.query,
    },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function orgListUserOrgs({ username, page, limit, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/users/${username}/orgs`,
    query: { page: page, limit: limit, ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function orgGetUserPermissions({ username, org, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/users/${username}/orgs/${org}/permissions`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function userListRepos({ username, page, limit, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/users/${username}/repos`,
    query: { page: page, limit: limit, ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function userListStarred({ username, page, limit, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/users/${username}/starred`,
    query: { page: page, limit: limit, ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function userListSubscriptions({
  username,
  page,
  limit,
  auth,
  options,
}) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/users/${username}/subscriptions`,
    query: { page: page, limit: limit, ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function userGetTokens({ username, page, limit, auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/users/${username}/tokens`,
    query: { page: page, limit: limit, ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function userCreateToken({ username, body, auth, options }) {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/users/${username}/tokens`,
    query: { ...options?.query },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function userDeleteAccessToken({ username, token, auth, options }) {
  const requestParams = {
    method: "DELETE",
    basePath: options?.basePath,
    path: `/users/${username}/tokens/${token}`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
export function getVersion({ auth, options }) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/version`,
    query: { ...options?.query },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
