import {
  TECHPEOPLE_LIST_FAIL,
  TECHPEOPLE_LIST_REQUEST,
  TECHPEOPLE_LIST_SUCCESS,
} from "../constants/techPeopleConstants";

export const techPeopleListReducer = (state = { techPeople: [] }, action) => {
  switch (action.type) {
    case TECHPEOPLE_LIST_REQUEST:
      return { loading: true, techPeople: [] };
    case TECHPEOPLE_LIST_SUCCESS:
      return {
        loading: false,
        techPeople: action.payload,
      };
    case TECHPEOPLE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  };
};
