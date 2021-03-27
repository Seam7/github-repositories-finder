import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export type RootState = {
  loading: boolean;
  // !TODO: Add github return type
  repositories: any[];
};

const initialState: RootState = {
  loading: false,
  repositories: [],
};

// !TODO: Add github type to createAsyncThunk generic
// !TODO: Handle fetch failure (400, 401 etc) and generic failure (500)
export const fetchRepositoryListByUser = createAsyncThunk(
  "repositoryList/getList",
  async (username: string, _thunkAPI) => {
    const response = await fetch(
      // `https://pokeapi.co/api/v2/pokemon/${username}`
      `https://api.github.com/users/${username}/repos`
    );
    const data = await response.json();
    return data;
  }
);

export const repositoryListSlice = createSlice({
  name: "repositoryList",
  initialState,
  reducers: {
    clearList: (state: RootState) => ({ ...state, repositories: [] }),
  },
  extraReducers: {
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

export const { clearList } = repositoryListSlice.actions;
