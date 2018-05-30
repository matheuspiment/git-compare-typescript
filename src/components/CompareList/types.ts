import { IHandleRemoveRepository, IRepository } from '../../types/repository';

export interface IProps {
  removeRepository: IHandleRemoveRepository,
  repositories: IRepository[],
};
