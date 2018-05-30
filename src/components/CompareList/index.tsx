import * as React from 'react';

import { IProps } from './types';

import { Container, Repository } from './styles';

const CompareList = ({ removeRepository, repositories }: IProps): JSX.Element => {
  return (
    <Container>
      { repositories.map(repository => (
        <Repository key={repository.id}>
          <header>
            <button
              type="button"
              onClick={removeRepository.bind(removeRepository, repository.id)}
            >
              <i className="fa fa-close" />
            </button>
            <img src={repository.owner.avatar_url} alt={repository.owner.login} />
            <strong>{repository.name}</strong>
            <small>{repository.owner.login}</small>
          </header>

          <ul>
            <li>
              <i className="fa fa-star" /> {repository.stargazers_count} <small>stars</small>
            </li>
            <li>
              <i className="fa fa-code-fork" /> {repository.forks_count} <small>forks</small>
            </li>
            <li>
              <i className="fa fa-users" /> {repository.open_issues_count} <small>issues</small>
            </li>
            <li>
              <i className="fa fa-clock-o" /> {repository.lastCommit} <small>last commit</small>
            </li>
          </ul>
        </Repository>
      )) }
    </Container>
  );
}

export default CompareList;
