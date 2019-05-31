import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "./actions/index";
import store from "./store";
class Post extends Component {

state={
    data:[]
  }
  componentDidMount() {
    // calling the new action creator
    this.props.getData();
    store.getState()
  }
  getTableRows(){
    return this.props.remoteArticles.map((item=>{
        return <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.title}</td>
        </tr>
    }))
  }
  render() {
    return (<div>
      <table>
        <thead>
          <td>UserId</td>
          <td>title</td>
          </thead>
          <tbody>{this.getTableRows()}</tbody>
          </table>
      
    </div>)
  }
}

const mapStateToProps = state => {
  console.log(state)
  return { remoteArticles: state.remoteArticles };
};

function mapDispatchToProps(dispatch) {
  return {
    getData: () => {
        return dispatch(getData())
  }
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);