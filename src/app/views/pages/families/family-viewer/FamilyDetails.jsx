import React from "react";
import { Grid, Fade } from "@material-ui/core";
import FamilyBillings from "./FamilyBillings";
import FamilyEmailSender from "./FamilyEmailSender";
import FamilyInfo from "./FamilyInfo";
import FamilyActions from "./FamilyActions";


const FamilyDetails = () => {
  
  return (
    <Fade in timeout={300}>
      <Grid container spacing={3}>
        <Grid item lg={4} md={6} xs={12}>
          <FamilyInfo />
        </Grid>
        <Grid item lg={4} md={6} xs={12}>
          <FamilyBillings />
        </Grid>
        <Grid item lg={4} md={6} xs={12}>
          <FamilyEmailSender />
        </Grid>
        <Grid item lg={4} md={6} xs={12}>
          <FamilyActions />
        </Grid>
      </Grid>
    </Fade>
  );
};

export default FamilyDetails;
