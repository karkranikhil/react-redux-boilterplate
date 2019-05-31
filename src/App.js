import React from 'react';
import logo from './logo.svg';

import './App.css';
import List from "./List";
import Form from './Form'
import Posts from "./Posts";
import store from "./store/index";
import { addArticle } from "./actions/index";
window.store = store;
window.addArticle = addArticle;


function App() {
  return (
    <div className="App">
      <h2>Articles</h2>
      <List />
      <h2>Add a new article</h2>
      <Form />
      <h2>API posts</h2>
      <Posts />
    </div>
  );
}

export default App;
