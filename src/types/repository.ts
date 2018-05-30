export interface IRepository {
  id: number,
  name: string,
  owner: {
    login: string,
    avatar_url: string,
  },
  forks_count: number,
  open_issues_count: number,
  pushed_at: string,
  stargazers_count: number,
  lastCommit: string,
}

export type IHandleRemoveRepository = (repositoryId: number) => void | undefined;

