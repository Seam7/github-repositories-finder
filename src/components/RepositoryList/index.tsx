import React from "react";
import { useSelector } from "react-redux";
import Loader from "../Loader";
import RepositoryCard from "../RepositoryCard";
import { GithubRepository } from "../../slices/repositoryList";
import "./RepositoryList.css";

type PropsFromReduxWrapper = {
  loading: boolean;
  repositories: GithubRepository[];
};
const RepositoryList: React.FC<PropsFromReduxWrapper> = ({
  loading,
  repositories,
}) => (
  <Loader loading={loading}>
    {repositories.length > 0 && (
      <ul className="repository-list">
        {repositories.map((repository: any) => (
          <RepositoryCard
            forks={repository.forks_count}
            name={repository.name}
            stars={repository.stargazers_count}
            url={repository.html_url}
            key={repository.name}
          />
        ))}
      </ul>
    )}
  </Loader>
);

const RepositoryListWithReduxData: React.FC = () => {
  const { loading, repositories } = useSelector((x) => x.repositoriesReducer);
  return <RepositoryList loading={loading} repositories={repositories} />;
};

export default RepositoryListWithReduxData;
