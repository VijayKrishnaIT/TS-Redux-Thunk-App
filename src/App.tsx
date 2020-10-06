import React, { Component } from "react";
import * as actions from "./actions/actions";
import { connect } from "react-redux";
import AppProps from "./config/props";

class App extends React.Component<AppProps> {
  constructor(props: AppProps) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchRecords();
  }
  render() {
    return <div>{JSON.stringify(this.props.data)}</div>;
  }
}

const receive = (state: any) => {
  return {
    data: state.data,
  };
};
const send = (dispatch: any) => {
  return {
    fetchRecords: () => {
      dispatch(actions.getEmployees());
    },
  };
};

export default connect(receive, send)(App);
