import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./HomePage";
import Error404 from "./Error404"
import Login from "./Login";
import Register from "./Register";
import AddCoffeeRecipe from "./AddCoffeeRecipe";
import DisplayCoffeeReceip from "./DisplayCoffeeRecipe";
import Booking from "./Booking";
import Menu from "./Menu";
import BookingList from "./BookingList";
import DisplayRecipe from "./DisplayRecipe";
import AllUser from "./AllUser";
function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="" element={<HomePage/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
          <Route path="recipe" element={<DisplayCoffeeReceip/>}/>
          <Route path="recipe/:id" element={<DisplayRecipe/>}/>
          <Route path="add-recipe" element={<AddCoffeeRecipe/>}/>
          <Route path="booking" element={<Booking/>}/>
          <Route path="all-users" element={<AllUser/>}/>
          <Route path="menu" element={<Menu/>}/>
          <Route path="booking-list" element={<BookingList/>}/>
          <Route path="*" element={<Error404/>}/>
        </Route>
      </Routes>
  );
}

export default App;
