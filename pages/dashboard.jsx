import React, { useState } from "react";
import Sidebar from "../components/Dashboard/sidebar/Sidebar"
import DashHome from "../components/Dashboard/dashhome/DashHome"

import Settings from "../components/Dashboard/settings/Settings"
import Inventory from "../components/Dashboard/inventory/Inventory"
import Profile from "../components/Dashboard/profile/Profile"
import SalesInsights from "../components/Dashboard/salesInsights/SalesInsights"

// import { Side } from "@syncfusion/ej2/svg-base";


const Dashboard = ({sidebarOpen}) => {

  const [option, setOption] = useState("User Dashboard");

  return (
    <div>
      <div className={` w-full  min-h-[90vh] mt-16 flex flex-row  trantition-all duration-300`}>

        <div className={`${sidebarOpen===false? "hidden" : "block"} `}>
         <Sidebar option={option} setOption={setOption}  />
        </div>

        <div className="w-[100%] ease-in-out duration-300">
          {option === "User Dashboard" && <DashHome />}
          {option === "Your Inventory" && <Inventory />}
          {option === "Sales Insights" && <SalesInsights />}
          {/* {option === "Posted Jobs" && <Yourjobs setOption={setOption}/>} */}
          {/* {option === "Add job" && <Addjob/>} */}
          {option === "Profile" && <Profile profile users security />}
          {option === "Settings" && <Settings profile users security />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;