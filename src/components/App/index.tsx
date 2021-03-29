import React from "react";
import RepositoryList from "../RepositoryList";
import UserForm from "../UserForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>The very cool github user repositories finder</h1>
      </header>
      <UserForm />
      <RepositoryList />
    </div>
  );
}

export default App;
