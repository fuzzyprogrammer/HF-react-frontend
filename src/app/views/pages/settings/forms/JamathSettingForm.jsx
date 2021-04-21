import React from "react";
import JamathAccessSetting from "./JamathAccessSetting";
import { Breadcrumb, SimpleCard } from "matx";

const JamathSettingForm = () => {
  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb
          routeSegments={[
            { name: "Jamath Settings", path: "/" },
            { name: "Jamath Settings" }
          ]}
        />
      </div>
      <SimpleCard title="Jamath Access Settings">
        <JamathAccessSetting />
      </SimpleCard>
    </div>
  );
};

export default JamathSettingForm;
