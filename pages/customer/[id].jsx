import React, { useState } from "react";
import Sidebar from "../../components/Dashboard/sidebar/Sidebar";
import Settings from "../../components/Dashboard/settings/Settings";
import Inventory from '../../components/Dashboard/inventory/Inventory';

const CustomerID = () => {
    const [option, setOption] = useState("Your Inventory");

    return (
        <div>
            <div className="w-full min-h-[90vh] mt-16 flex flex-row">
                <Sidebar option={option} setOption={setOption} />

                <div className="w-[100%]">
                    {/* {option === "User Dashboard" && <ShopProfile />} */}
                    {option === "Settings" && <Settings profile users />}
                    {option === "Your Inventory" && <Inventory />}
                </div>
            </div>
        </div>
    );
};

export default CustomerID;