import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export type GithubRepository = {
  forks_count: number;
  stargazers_count: number;
  html_url: string;
  name: string;
  [key: string]: any;
};
export type RootState = {
  loading: boolean;
  repositories: GithubRepository[];
};

const initialState: RootState = {
  loading: false,
  repositories: [],
};

export const fetchRepositoryListByUser = createAsyncThunk(
  "repositoryList/getList",
  async (username: string, _thunkAPI) => {
    window.history.pushState({}, "", `?username=${username}`);
    const response = await fetch(
      `https://api.github.com/users/${username}/repos`
    );
    const data = await response.json();
    return data;
  }
);

export const clearList = createAsyncThunk("repositoryList/clearList", () => {
  window.history.pushState({}, "", "/");
});

export const repositoryListSlice = createSlice({
  name: "repositoryList",
  initialState,
  reducers: {},
  extraReducers: {
    [clearList.fulfilled.type]: (state) => ({
      ...state,
      repositories: [],
    }),
    [fetchRepositoryListByUser.pending.type]: (state) => ({
      ...state,
      loading: true,
    }),
    [fetchRepositoryListByUser.fulfilled.type]: (_state, action) => ({
      loading: false,
      repositories: action.payload,
    }),
  },
});
