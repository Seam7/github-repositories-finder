import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  clearList,
  fetchRepositoryListByUser,
} from "../../slices/repositoryList";

import "./UserForm.css";

type PropsFromReduxWrapper = {
  clearList: () => void;
  fetchRepositories: (username: string) => void;
  loading: boolean;
};

const UserForm: React.FC<PropsFromReduxWrapper> = ({
  clearList,
  fetchRepositories,
  loading,
}) => {
  const [inputValue, setInputValue] = useState("");
  React.useEffect(() => {
    const username = new URLSearchParams(window.location.search).get(
      "username"
    );
    if (username) {
      fetchRepositories(username);
    }
  }, [fetchRepositories]);

  const handleUserInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputValue(event.target.value);
  };
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (form) => {
    form.preventDefault();
    fetchRepositories(inputValue);
  };

  return (
    <div className="user-form">
      <form onSubmit={handleSubmit} className="user-form__form">
        <input
          className="user-form__controls"
          type="text"
          name="username"
          placeholder="Enter a github username"
          value={inputValue}
          onChange={handleUserInputChange}
        />
        <div className="user-form__controls user-form-controls__button-container">
          <button disabled={loading || inputValue.length <= 0}>Search</button>
          <button disabled={loading} type="button" onClick={clearList}>
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

const UserFormWithReduxData: React.FC = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((x) => x.repositoriesReducer);

  const fetchRepositories = useCallback(
    (username: string) => dispatch(fetchRepositoryListByUser(username)),
    [dispatch]
  );

  const clearListFromRedux = () => {
    dispatch(clearList());
  };
  return (
    <UserForm
      clearList={clearListFromRedux}
      fetchRepositories={fetchRepositories}
      loading={loading}
    />
  );
};

export default UserFormWithReduxData;
