import React, { Component } from "react";
import * as actions from "./actions/actions";
import { connect } from "react-redux";
import AppProps from "./config/props";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

class App extends React.Component<AppProps> {
  constructor(props: AppProps) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchRecords();
  }
  render() {
    //return <div>{JSON.stringify(this.props.data)}</div>;
    return (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Employee_ID</TableCell>
              <TableCell align="right">E_NAME</TableCell>
              <TableCell align="right">E_SAL</TableCell>
              <TableCell align="right">E_DESIGNATION</TableCell>
              <TableCell align="right">DOB</TableCell>
              <TableCell align="right">Contacts</TableCell>
              <TableCell align="center">E_HABITS</TableCell>
              <TableCell align="center">E_DEPT</TableCell>
              <TableCell align="center">GENDER</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.data.map((element, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {element.e_id}
                </TableCell>
                <TableCell align="right">{element.e_name}</TableCell>
                <TableCell align="right">{element.e_sal}</TableCell>
                <TableCell align="right">{element.e_designation}</TableCell>
                <TableCell align="right">{element.dob}</TableCell>
                <TableCell align="right">{element.contact}</TableCell>
                <TableCell align="right">{element.e_habits}</TableCell>
                <TableCell align="right">{element.e_dept}</TableCell>
                <TableCell align="right">{element.gender}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
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
