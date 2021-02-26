import React from "react";
import { Grid, Fade } from "@material-ui/core";
// import JamathUserBillings from "./JamathUserBillings";
// import JamathUserEmailSender from "./JamathUserEmailSender";
import JamathUserInfo from "./JamathUserInfo";
import JamathUserActions from "./JamathUserActions";

const JamathUserDetails = () => {
  return (
    <Fade in timeout={300}>
      <Grid container spacing={3}>
        <Grid item lg={4} md={6} xs={12}>
          <JamathUserInfo />
        </Grid>
        {/* <Grid item lg={4} md={6} xs={12}>
          <JamathUserBillings />
        </Grid> */}
        {/* <Grid item lg={4} md={6} xs={12}>
          <JamathUserEmailSender />
        </Grid> */}
        <Grid item lg={4} md={6} xs={12}>
          <JamathUserActions />
        </Grid>
      </Grid>
    </Fade>
  );
};

export default JamathUserDetails;
