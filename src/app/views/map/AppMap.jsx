import React from "react";
import { Breadcrumb } from "matx";
import { Card } from "@material-ui/core";
import BasicMap from "./BasicMap";
<<<<<<< HEAD
import MarkerMap from "./MarkerMap";
=======
// import MarkerMap from "./MarkerMap";
>>>>>>> main

const AppMap = () => {
  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb routeSegments={[{ name: "Map" }]} />
      </div>
      <Card>
        <BasicMap />
      </Card>
      <div className="py-3" />
      <Card>
<<<<<<< HEAD
        <MarkerMap />
=======
        {/* <MarkerMap /> */}
>>>>>>> main
      </Card>
    </div>
  );
};

export default AppMap;
