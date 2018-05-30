import { IRepository } from '../../types/repository';

export interface IState {
  loading: boolean,
  repositoryError: boolean,
  repositoryInput: string,
  repositories: IRepository[],
};
