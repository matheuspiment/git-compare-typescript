import * as moment from 'moment';
import * as React from 'react';

import api from '../../services/api';
import { IPayload } from '../../types/api';
import { IHandleRemoveRepository, IRepository } from '../../types/repository';
import { IState } from './types';

import CompareList from '../../components/CompareList';

import logo from '../../assets/logo.png';
import { Container, Form } from './styles';

export default class Main extends React.Component<{}, IState> {
  public state = {
    loading: false,
    repositories: [],
    repositoryError: false,
    repositoryInput: '',
  }

  public hasRepository = (repositoryId: number): number =>
    this.state.repositories.findIndex((repository: IRepository) => repository.id === repositoryId);

  public handleInputChange = (e: React.FormEvent<HTMLInputElement>): void =>
    this.setState({ repositoryInput: e.currentTarget.value })

  public handleAddRepository = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    this.setState({ loading: true });

    try {
      if (this.state.repositoryInput.length === 0) {
        this.setState({ repositoryError: true });

        return;
      }

      const { data: repository }: IPayload = await api.get(`/repos/${this.state.repositoryInput}`);

      if (this.hasRepository(repository.id) !== -1) {
        this.setState({ repositoryError: true });

        return;
      }

      repository.lastCommit = moment(repository.pushed_at).fromNow();

      this.setState({
        repositories: [...this.state.repositories, repository],
        repositoryError: false,
        repositoryInput: '',
      });
    } catch (err) {
      this.setState({ repositoryError: true });
    } finally {
      this.setState({ loading: false });
    }
  }

  public handleRemoveRepository: IHandleRemoveRepository = (repositoryId: number): void => {
    const repositories = this.state.repositories.filter((repository: IRepository) =>
      repository.id !== repositoryId);

    this.setState({
      repositories,
    });
  }

  public render(): JSX.Element {
    return (
      <Container>
        <img src={logo} alt="Git Compare" />

        <Form
          onSubmit={this.handleAddRepository}
          withError={this.state.repositoryError}
        >
          <input
            type="text"
            placeholder="usuário/reposotório"
            value={this.state.repositoryInput}
            onChange={this.handleInputChange}
          />
          <button type="submit">
            {this.state.loading ? <i className="fa fa-spinner fa-pulse" /> : 'OK'}
          </button>
        </Form>

        <CompareList
          removeRepository={this.handleRemoveRepository}
          repositories={this.state.repositories}
        />
      </Container>
    );
  }
}
