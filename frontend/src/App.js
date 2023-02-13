import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import TicketScreen from "./screens/TicketScreen";

import classes from './App.module.css'
import TicketListScreen from "./screens/TicketListScreen";
import HomeScreen from "./screens/HomeScreen";
import FinishTicketScreen from "./screens/FinishTicketScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
      <Route path='/' element={<HomeScreen />} exact />
        <Route path="/ticket" element={<TicketScreen />} exact />
        <Route path="/view-ticket" element={<TicketListScreen />} exact/>
        <Route path="/finish-ticket" element={<FinishTicketScreen />} exact/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
