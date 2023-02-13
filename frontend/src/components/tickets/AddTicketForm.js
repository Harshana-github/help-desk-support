import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listTechPeoples } from "../../actions/techPeopleAction";
import { createTicket } from "../../actions/ticketAction";

import classes from "./AddTicketForm.module.css";

const AddTicketForm = () => {
  const dispatch = useDispatch();

  const techPeopleList = useSelector((store) => store.techPeopleList);
  const { techPeople } = techPeopleList;
  const techPeopleObject = techPeople.techPeoples;

  const ticketObjectTypeCheck = typeof techPeopleObject === "object";

  const [nic, setNic] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [location, setLocation] = useState("");
  const [suportDetails, setSuportDetails] = useState("");
  const [techPeopleId, setTechPeople] = useState("");

  function selectTechPerson(e) {
    const techPeopleId = e.target.value;
    setTechPeople(techPeopleId);
  }
  function onSubmitHandler(event) {
    event.preventDefault();
    const ticketData = {
      nic,
      name,
      contact,
      location,
      suportDetails,
      techPeopleId,
    };
    dispatch(createTicket(ticketData));
  }

  useEffect(() => {
    dispatch(listTechPeoples());
  }, [dispatch]);

  return (
    <>
      <div className={classes.header}>
        <h1 className={classes.h1}>Add Ticket</h1>
      </div>
      {ticketObjectTypeCheck ? (
        <form>
          <label>Enter Customer ID Number</label>
          <input type="number" onChange={(e) => setNic(e.target.value)} />
          <br />
          <label>Enter Customer Name</label>
          <input type="text" onChange={(e) => setName(e.target.value)} />
          <br />
          <label>Enter Customer Contact</label>
          <input type="number" onChange={(e) => setContact(e.target.value)} />
          <br />
          <label>Enter Customer Location</label>
          <input type="text" onChange={(e) => setLocation(e.target.value)} />
          <br />
          <label>Enter Support Details</label>
          <input
            type="text"
            onChange={(e) => setSuportDetails(e.target.value)}
          />
          <br />
          <label>Chose Tech Supporter</label>
          <select onChange={selectTechPerson}>
            {techPeopleObject.map((ele) => (
              <option key={ele._id} value={ele._id}>
                {ele.name}
              </option>
            ))}
          </select>
          <p></p>
          <button type="button" onClick={onSubmitHandler}>
            ADD
          </button>
          <br />
        </form>
      ) : (
        console.log("Not error")
      )}
    </>
  );
};

export default AddTicketForm;
