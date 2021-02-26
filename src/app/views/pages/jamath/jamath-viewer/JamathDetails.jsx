import React from "react";
import { Grid, Fade } from "@material-ui/core";
// import JamathBillings from "./JamathBillings";
// import JamathEmailSender from "./JamathEmailSender";
import JamathInfo from "./JamathInfo";
import JamathActions from "./JamathActions";

const JamathDetails = () => {
  return (
    <Fade in timeout={300}>
      <Grid container spacing={3}>
        <Grid item lg={4} md={6} xs={12}>
          <JamathInfo />
        </Grid>
        {/* <Grid item lg={4} md={6} xs={12}>
          <JamathBillings />
        </Grid> */}
        {/* <Grid item lg={4} md={6} xs={12}>
          <JamathEmailSender />
        </Grid> */}
        <Grid item lg={4} md={6} xs={12}>
          <JamathActions />
        </Grid>
      </Grid>
    </Fade>
  );
};

export default JamathDetails;
