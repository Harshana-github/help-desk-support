import React from "react";

import classes from "./HomeScreen.module.css";

const HomeScreen = () => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h1 className={classes.h1}>Wellcome to E-Solution</h1>
      </div>
      <img src="images/homepageimage.jpg" alt="web" width="100%" height='400px' className={classes.image}/>
    </div>
  );
};

export default HomeScreen;
