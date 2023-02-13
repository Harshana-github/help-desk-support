import React from "react";
import AddTicketForm from "../components/tickets/AddTicketForm";

import classes from './TicketScreen.module.css'
const TicketScreen = () => {
  return (
    <div className={classes.container}>
      <AddTicketForm />
    </div>
  );
};

export default TicketScreen;
