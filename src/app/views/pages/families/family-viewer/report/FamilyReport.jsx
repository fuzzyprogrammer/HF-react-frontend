import React from "react";
import SimpleTable from "./SimpleTable";
import { Breadcrumb, SimpleCard } from "matx";

const AppTable = () => {
  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb
          routeSegments={[
            { name: "Material", path: "/material" },
            { name: "Table" },
          ]}
        />
      </div>
      <SimpleCard title="Family Report">
        <SimpleTable />
      </SimpleCard>
      <div className="py-3" />      
    </div>
  );
};

export default AppTable;
