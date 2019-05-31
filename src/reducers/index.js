import { ADD_ARTICLE } from "../actions/action-types";
const initialState = {
  articles: [],
  remoteArticles:[]
};
function rootReducer(state = initialState, action) {
  console.log("called reducer")
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
        articles: state.articles.concat(action.payload)
      });
  }
  if (action.type === "DATA_LOADED") {
    return Object.assign({}, state, {
      remoteArticles: state.remoteArticles.concat(action.payload)
    });
  }
  return state;
}
export default rootReducer;