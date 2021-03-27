import { RootState } from "./slices/repositoryList";

declare module "react-redux" {
  interface DefaultRootState {
    repositoriesReducer: RootState;
  }
}
