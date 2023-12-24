import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import HomePage from "./HomePage";
import Error404 from "./Error404"
function App() {
  return (
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route path="" element={<HomePage/>}/>
          <Route path="*" element={<Error404/>}/>
        </Route>
      </Routes>
  );
}

export default App;
