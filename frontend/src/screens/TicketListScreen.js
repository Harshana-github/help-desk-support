import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listTicket, ticketDetails } from "../actions/ticketAction";

import classes from "./TicketListScreen.module.css";

const TicketListScreen = () => {
  const [ticketStatuses, setTicketStatuses] = useState("");

  const dispatch = useDispatch();
  const ticketsList = useSelector((store) => store.ticketsList);
  let { ticket } = ticketsList;
  // Could not map the ticket value obtained from the store.The reason is that an audefined nalue is received when the page is rendered
  const ticketObjectTypeCheck = typeof ticket === "object";

  const handleDropdownChange = (event, ids) => {
    const setStatus = {
      event,
    };
    setTicketStatuses(event);
    dispatch(ticketDetails(ids, setStatus));
  };

  useEffect(() => {
    dispatch(listTicket());
  }, [dispatch]);
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h1 className={classes.h1}>Ticket List Screen</h1>
      </div>

      {ticketObjectTypeCheck ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Location</th>
              <th>Support Details</th>
              <th>Status</th>
              <th>Supporter ID</th>
            </tr>
          </thead>
          <tbody>
            {ticket.map((ele, index = 0) => (
              <tr key={ele._id}>
                <td>{index + 1}</td>
                <td>{ele.name}</td>
                <td>{ele.location}</td>
                <td>{ele.supportDetails}</td>
                <td>
                  <select
                    value={ele.progressStatus}
                    onChange={(e) =>
                      handleDropdownChange(e.target.value, ele._id)
                    }
                  >
                    <option value="opened">Opened</option>
                    <option value="ongoing">Ongoing</option>
                    <option value="closed">Closed</option>
                  </select>
                </td>
                <td>{ele.techPersonId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        console.log("Not error")
      )}
    </div>
  );
};

export default TicketListScreen;
