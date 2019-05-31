import {ADD_ARTICLE} from './action-types'

export function addArticle(payload) {
  console.log("called actions")
    return { type: ADD_ARTICLE, payload }
  };

export function getData() {
  return dispatch=>{
    console.log(dispatch)
    return fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(json => {
      dispatch({ type: "DATA_LOADED", payload: json })
    });
  }
    
  }