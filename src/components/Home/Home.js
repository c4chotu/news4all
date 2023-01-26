import React from "react";
//import { Link } from "react-router-dom";
import Navbar from "../Navbar";

function Home(props) {
  return (
    <div>
     

      <h2>{props.name ? `Welcome - ${props.name}` : "Login please"}</h2>
      <Navbar/>
    </div>
  );
}

export default Home;