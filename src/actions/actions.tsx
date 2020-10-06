import axios from "axios";
import errHandling from "../config/_errHandling";
import BASE_URL from "../urls/urls";

export const getEmployees = () => {
  return (dispatch: any) => {
    return axios.get(BASE_URL + "/fetch").then((posRes) => {
      dispatch(fun_one(posRes.data));
    }, errHandling);
  };
};
export const fun_one = (records: any) => {
  return { type: "FETCH", value: records };
};

export const AddEmployee = (record: any) => {
  return (dispatch: any) => {
    return axios.get(BASE_URL + "/insert", record).then((posRes) => {
      dispatch(fun_two(posRes.data));
    }, errHandling);
  };
};
export const fun_two = (record: any) => {
  return { type: "INSERT", value: record };
};

export const updateEmployee = (record: any) => {
  return (dispatch: any) => {
    return axios.get(BASE_URL + "/update", record).then((posRes) => {
      dispatch(fun_three(posRes.data));
    }, errHandling);
  };
};
export const fun_three = (result: any) => {
  return { type: "UPDATE", value: result };
};

export const deleteEmployee = (record: any) => {
  return (dispatch: any) => {
    return axios.get(BASE_URL + "/delete", record).then((posRes) => {
      dispatch(fun_four(posRes.data));
    }, errHandling);
  };
};
export const fun_four = (result: any) => {
  return { type: "DELETE", value: result };
};
