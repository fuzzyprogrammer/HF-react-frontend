import React, { useState, useEffect } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import {
  Button,
  Icon,
  Grid,
  Switch,
  FormControlLabel,
  Divider,
} from "@material-ui/core";
import "date-fns";
import {FormSubmit} from './JamathSettingServices';
import { useParams } from "react-router-dom";


const JamathAccessSetting = () => {
  const {jamathId} = useParams();
  const [state, setState] = useState({
    religiousEducation: true,
    generalEducation: true,

    relAcademyName: true,
    relAcademyYear: true,
    relAcademyClass: true,
    relAcademyMajor: true,
    relAcademyMedium: true,
    relAcademyStatus: true,
    
    genAcademyName: true,
    genAcademyYear: true,
    genAcademyClass: true,
    genAcademyMajor: true,
    genAcademyMedium: true,
    genAcademyStatus: true,
    
    jamath_id: jamathId
  });

  const handleSubmit = () => {
    // console.log(state);
    FormSubmit(state).then((res) => console.log(res));
  };

  const handleChange = (event, source) => {
    event.persist();
    if (source === "switch") {
      setState({
        ...state,
        [event.target.name]: event.target.checked,
      });
      return;
    }

    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleCheckedValue = (stateValue, education) => {
    if (education) {
      return stateValue;
    } else {
      return (stateValue = education);
    }
  };

  const { religiousEducation, generalEducation } = state;

  // useEffect(() => {
  //   religiousEducation === false &&
  //     setState({
  //       ...state,
  //       relAcademyName: false,
  //       relAcademyYear: false,
  //       relAcademyClass: false,
  //       relAcademyMajor: false,
  //       relAcademyMedium: false,
  //     });
  // }, [state?.religiousEducation])

  return (
    <div>
      <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
        <Grid container spacing={3} alignItems="center">
          <Grid item md={12} sm={12} xs={12} style={{textAlign:"center"}}>
            <h6>Education</h6>
            <Divider />
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <FormControlLabel
              control={
                <Switch
                  name="religiousEducation"
                  checked={
                    state?.religiousEducation || state?.religiousEducation
                  }
                  onChange={(event) => handleChange(event, "switch")}
                />
              }
              label="Religious Education"
            />

            <Divider />

            <Grid item md={12} lg={12} sm={12} xs={12}>
              <FormControlLabel
                control={
                  <Switch
                    name="relAcademyName"
                    checked={handleCheckedValue(
                      state?.relAcademyName,
                      state?.religiousEducation
                    )}
                    onChange={(event) => handleChange(event, "switch")}
                  />
                }
                label="Religious Academy Name"
              />
            </Grid>

            <Grid item md={12} lg={12} sm={12} xs={12}>
              <FormControlLabel
                control={
                  <Switch
                    name="relAcademyYear"
                    checked={handleCheckedValue(
                      state?.relAcademyYear,
                      state?.religiousEducation
                    )}
                    onChange={(event) => handleChange(event, "switch")}
                  />
                }
                label="Religious Academy Year"
              />
            </Grid>
            <Grid item md={12} lg={12} sm={12} xs={12}>
              <FormControlLabel
                control={
                  <Switch
                    name="relAcademyMedium"
                    checked={handleCheckedValue(
                      state?.relAcademyMedium,
                      state?.religiousEducation
                    )}
                    onChange={(event) => handleChange(event, "switch")}
                  />
                }
                label="Religious Academy Medium"
              />
            </Grid>
            <Grid item md={12} lg={12} sm={12} xs={12}>
              <FormControlLabel
                control={
                  <Switch
                    name="relAcademyClass"
                    checked={handleCheckedValue(
                      state?.relAcademyClass,
                      state?.religiousEducation
                    )}
                    onChange={(event) => handleChange(event, "switch")}
                  />
                }
                label="Religious Academy Class"
              />
            </Grid>
            <Grid item md={12} lg={12} sm={12} xs={12}>
              <FormControlLabel
                control={
                  <Switch
                    name="relAcademyMajor"
                    checked={handleCheckedValue(
                      state?.relAcademyMajor,
                      state?.religiousEducation
                    )}
                    onChange={(event) => handleChange(event, "switch")}
                  />
                }
                label="Religious Academy Major"
              />
            </Grid>
            <Grid item md={12} lg={12} sm={12} xs={12}>
              <FormControlLabel
                control={
                  <Switch
                    name="relAcademyStatus"
                    checked={handleCheckedValue(
                      state?.relAcademyStatus,
                      state?.religiousEducation
                    )}
                    onChange={(event) => handleChange(event, "switch")}
                  />
                }
                label="Religious Academy Status"
              />
            </Grid>
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <FormControlLabel
              control={
                <Switch
                  name="generalEducation"
                  checked={state?.generalEducation || state?.generalEducation}
                  onChange={(event) => handleChange(event, "switch")}
                />
              }
              label="General Education"
            />
            <Divider />

            <Grid item md={12} lg={12} sm={12} xs={12}>
              <FormControlLabel
                control={
                  <Switch
                    name="genAcademyName"
                    checked={handleCheckedValue(
                      state?.genAcademyName,
                      state?.generalEducation
                    )}
                    onChange={(event) => handleChange(event, "switch")}
                  />
                }
                label="General Academy Name"
              />
            </Grid>

            <Grid item md={12} lg={12} sm={12} xs={12}>
              <FormControlLabel
                control={
                  <Switch
                    name="genAcademyYear"
                    checked={handleCheckedValue(
                      state?.genAcademyYear,
                      state?.generalEducation
                    )}
                    onChange={(event) => handleChange(event, "switch")}
                  />
                }
                label="General Academy Year"
              />
            </Grid>
            <Grid item md={12} lg={12} sm={12} xs={12}>
              <FormControlLabel
                control={
                  <Switch
                    name="genAcademyMedium"
                    checked={handleCheckedValue(
                      state?.genAcademyMedium,
                      state?.generalEducation
                    )}
                    onChange={(event) => handleChange(event, "switch")}
                  />
                }
                label="General Academy Medium"
              />
            </Grid>
            <Grid item md={12} lg={12} sm={12} xs={12}>
              <FormControlLabel
                control={
                  <Switch
                    name="genAcademyClass"
                    checked={handleCheckedValue(
                      state?.genAcademyClass,
                      state?.generalEducation
                    )}
                    onChange={(event) => handleChange(event, "switch")}
                  />
                }
                label="General Academy Class"
              />
            </Grid>
            <Grid item md={12} lg={12} sm={12} xs={12}>
              <FormControlLabel
                control={
                  <Switch
                    name="genAcademyMajor"
                    checked={handleCheckedValue(
                      state?.genAcademyMajor,
                      state?.generalEducation
                    )}
                    onChange={(event) => handleChange(event, "switch")}
                  />
                }
                label="General Academy Major"
              />
            </Grid>
            <Grid item md={12} lg={12} sm={12} xs={12}>
              <FormControlLabel
                control={
                  <Switch
                    name="genAcademyStatus"
                    checked={handleCheckedValue(
                      state?.genAcademyStatus,
                      state?.generalEducation
                    )}
                    onChange={(event) => handleChange(event, "switch")}
                  />
                }
                label="Religious Academy Status"
              />
            </Grid>
          </Grid>

          <Grid item md={12} sm={12} xs={12}></Grid>
        </Grid>
        <Button color="primary" variant="contained" type="submit">
          <Icon>send</Icon>
          <span className="pl-2 capitalize">Submit</span>
        </Button>
      </ValidatorForm>
    </div>
  );
};

export default JamathAccessSetting;
