import React from "react";
import '../components/mystyles.css';
import Sidebar from "./Sidebar";
import Workarea from "./Workarea";

function MainContainer() {
  return (
    <div className="Maincontainer">
      <Sidebar/>
      <Workarea/>
    </div>
  );
}

export default MainContainer;
