import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import classes from "./FinishTicketScreen.module.css";
import { listTicket } from "../actions/ticketAction";

const FinishTicketScreen = () => {
  const dispatch = useDispatch();
  
  const [newImage, setNewImage] = useState({
    price: "",
    photo: "",
    ticketId: ""
  });

  // function getTicketId(ticketId) {
  //   console.log(ticketId)
  // }

  const handleChange = (e) => {
    setNewImage({ ...newImage, [e.target.name]: e.target.value });
  };

  const handlePhoto = (e) => {
    setNewImage({ ...newImage, photo: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("photo", newImage.photo);
    formData.append("price", newImage.price);
    formData.append("ticketId", newImage.ticketId);

    axios
      .post("http://localhost:5000/image/add/", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    dispatch(listTicket());
  }, [dispatch]);

  const ticketsList = useSelector((store) => store.ticketsList);
  let { ticket } = ticketsList;
  // console.log(ticket)

  const ticketObjectTypeCheck = typeof ticket === "object";

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        {" "}
        <h1 className={classes.h1}>Finish Ticket Screen</h1>
      </div>
      {ticketObjectTypeCheck ? (
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <label>Add Price : </label>
          <input
            type="number"
            placeholder="price"
            name="price"
            value={newImage.price}
            onChange={handleChange}
          />
          <br />
          <label>Add Image : </label>
          <input
            type="file"
            accept=".png, .jpg, .jpeg"
            name="photo"
            onChange={handlePhoto}
          />
          <br />
          <label>Choose Ticket Id : </label>
          <select name="ticketId" onChange={handleChange}>
          {ticket.map((ele)=> (
            <option key={ele._id} value={ele._id}>{ele._id} - {ele.name}</option>
          ))}
        </select>
          <p></p>
          <input type="submit" />
        </form>
      ) : (
        console.log("Not error")
      )}
    </div>
  );
};

export default FinishTicketScreen;
