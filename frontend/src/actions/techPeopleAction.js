import axios from "axios";
import {
  TECHPEOPLE_LIST_FAIL,
  TECHPEOPLE_LIST_REQUEST,
  TECHPEOPLE_LIST_SUCCESS,
} from "../constants/techPeopleConstants";

export const listTechPeoples = () => async (dispatch) => {
  try {
    dispatch({ type: TECHPEOPLE_LIST_REQUEST });
    const { data } = await axios.get(`http://localhost:5000/api/get-tech`);
    dispatch({
      type: TECHPEOPLE_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TECHPEOPLE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
