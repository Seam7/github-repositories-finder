import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// !TODO: Remove logo from project
import logo from "../../logo.svg";
import Loader from "../Loader";

import {
  clearList,
  fetchRepositoryListByUser,
} from "../../slices/repositoryList";
import RepositoryCard from "../RepositoryCard";

const UserForm: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const { loading, repositories } = useSelector((x) => x.repositoriesReducer);
  const [inputValue, setInputValue] = useState("");
  const handleUserInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputValue(event.target.value);
  };
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (form) => {
    form.preventDefault();
    dispatch(fetchRepositoryListByUser(inputValue));
  };
  const handleListClear: React.MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(clearList());
    console.log(clearList());
  };

  return (
    <div>
      <header className="App-header">
        <h1>The very cool github user repositories finder</h1>
      </header>
      <Loader loading={loading}>
        <div>
          <form action="" onSubmit={handleSubmit}>
            <input
              type="text"
              name="user"
              value={inputValue}
              onChange={handleUserInputChange}
            />
            <button>Search</button>
            <button type="button" onClick={handleListClear}>
              Clear
            </button>
          </form>
          {/* turn this into component */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              padding: "0 20%",
              flexWrap: "wrap",
              marginTop: "50px",
            }}
          >
            {repositories.map((repository: any) => (
              <RepositoryCard
                forks={repository.forks_count}
                name={repository.name}
                stars={repository.stargazers_count}
                url={repository.html_url}
              />
            ))}
          </div>
        </div>
      </Loader>
    </div>
  );
};

export default UserForm;
