import React, { useState } from "react";
import { Divider, Tab, Tabs } from "@material-ui/core";
import { Breadcrumb } from "matx";
import FamilyDetails from "./FamilyDetails";
import FamilyInvoice from "./FamilyInvoice";


const FamilyViewer = () => {
  
  const [tabIndex, setTabIndex] = useState(0);
  
  

  const handleTabChange = (e, value) => {
    setTabIndex(value);
  };

  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb
          routeSegments={[
            { name: "Pages", path: "/pages" },
            { name: "View Family" },
          ]}
        />
      </div>
      <Tabs
        className="mt-4"
        value={tabIndex}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
      >
        {tabList.map((item, ind) => (
          <Tab className="capitalize" value={ind} label={item} key={ind} />
        ))}
      </Tabs>
      <Divider className="mb-6" />

      {tabIndex === 0 && <FamilyDetails />}
      {tabIndex === 1 && <FamilyInvoice  />}
      {/* {tabIndex === 2 && <FamilyLogs />} */}
    </div>
  );
};

const tabList = ["Details", "Family Members", /*"Logs"*/];

export default FamilyViewer;
