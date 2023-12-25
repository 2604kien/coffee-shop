import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./HomePage";
import Error404 from "./Error404"
import Login from "./Login";
function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="" element={<HomePage/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="*" element={<Error404/>}/>
        </Route>
      </Routes>
  );
}

export default App;
