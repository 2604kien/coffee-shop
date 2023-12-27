import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./HomePage";
import Error404 from "./Error404"
import Login from "./Login";
import Register from "./Register";
import CoffeeRecipe from "./CoffeeRecipe";
import Booking from "./Booking";
import Menu from "./Menu";
import BookingList from "./BookingList";
function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="" element={<HomePage/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
          <Route path="recipe" element={<CoffeeRecipe/>}/>
          <Route path="booking" element={<Booking/>}/>
          <Route path="menu" element={<Menu/>}/>
          <Route path="booking-list" element={<BookingList/>}/>
          <Route path="*" element={<Error404/>}/>
        </Route>
      </Routes>
  );
}

export default App;
