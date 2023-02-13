import axios from "axios";
import {
  TICKET_CREATE_FAIL,
  TICKET_CREATE_REQUEST,
  TICKET_CREATE_SUCCESS,
  TICKET_LIST_FAIL,
  TICKET_LIST_REQUEST,
  TICKET_LIST_SUCCESS,
  TICKET_STATUS_CHANGE_FAIL,
  TICKET_STATUS_CHANGE_REQUEST,
  TICKET_STATUS_CHANGE_SUCCESS,
} from "../constants/ticketConstans";

export const createTicket = (ticketData) => async (dispatch) => {
  try {
    dispatch({
      type: TICKET_CREATE_REQUEST,
    });
    const { data } = await axios.post(
      "http://localhost:5000/api/add-ticket",
      ticketData
    );

    dispatch({
      type: TICKET_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TICKET_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listTicket = () => async (dispatch) => {
  try {
    dispatch({ type: TICKET_LIST_REQUEST });
    const { data } = await axios.get(`http://localhost:5000/api/get-ticket`);
    // console.log(data)
    dispatch({
      type: TICKET_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TICKET_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const ticketDetails = (id,setStatus) => async (dispatch) => {

  try {
    dispatch({ type: TICKET_STATUS_CHANGE_REQUEST })
    const { data } = await axios.put(`http://localhost:5000/api/get-ticket/${id}`,setStatus)
    dispatch({
      type: TICKET_STATUS_CHANGE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: TICKET_STATUS_CHANGE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
