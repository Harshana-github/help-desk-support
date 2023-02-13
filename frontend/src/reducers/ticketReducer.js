import { TICKET_CREATE_FAIL, TICKET_CREATE_REQUEST, TICKET_CREATE_SUCCESS, TICKET_LIST_FAIL, TICKET_LIST_REQUEST, TICKET_LIST_SUCCESS } from "../constants/ticketConstans";

export const ticketCreateReducer = (state= {},action) => {
    switch (action.type) {
        case TICKET_CREATE_REQUEST:
            return { loading: true };
        case TICKET_CREATE_SUCCESS:
            return { loading: false, success: true, tiket: action.payload };
        case TICKET_CREATE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    };
};

export const ticketListReducer = (state = { tickets: [] }, action) => {
    switch (action.type) {
      case TICKET_LIST_REQUEST:
        return { loading: true, tickets: [] }
      case TICKET_LIST_SUCCESS:
        return {
          loading: false,
          ticket: action.payload.tickets,
        }
      case TICKET_LIST_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }