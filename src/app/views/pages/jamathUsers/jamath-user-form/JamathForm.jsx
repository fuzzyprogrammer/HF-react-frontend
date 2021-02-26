import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Formik } from "formik";
import {
  Grid,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Card,
  Divider,
  TextField,
  MenuItem,
  Tabs,
  Tab,
  Button,
} from "@material-ui/core";
import { Breadcrumb } from "matx";

const JamathForm = () => {
  // console.log({user});
  const [jamaths, setJamaths] = useState([]);
  const [role, setRole] = useState([]);

  useEffect(() => {
    Axios.get("/api/jamaths").then(({ data }) => {
      setJamaths(data);
    });

    Axios.get("/api/role").then(({ data }) => {
      setRole(data);
    });
  }, [])


  const handleSubmit = async (values, { isSubmitting }) => {
    console.log(values);
    await Axios.post('api/users', values)
      .then(function (res) {
        console.log(res);
      })
      .catch(function (err) {
        console.log(err);
      });
  };


  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb
          routeSegments={[
            { name: "Pages", path: "/pages" },
            { name: "New User" },
          ]}
        />
      </div>

      <Card elevation={3}>
        <div className="flex p-4">
          <h4 className="m-0">Add a New User</h4>
        </div>
        <Divider className="mb-2" />

        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          enableReinitialize={true}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            setSubmitting,
            setFieldValue,
          }) => (
            <form className="p-4" onSubmit={handleSubmit}>
              <Grid container spacing={3} alignItems="center">
                <Grid item md={2} sm={4} xs={12}>
                  User Name
                </Grid>
                <Grid item md={10} sm={8} xs={12}>
                  <TextField
                    label="Full Name"
                    name="name"
                    size="small"
                    variant="outlined"
                    value={values.name}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item md={2} sm={4} xs={12}>
                  User Email
                </Grid>
                <Grid item md={10} sm={8} xs={12}>
                  <TextField
                    label="User Email"
                    name="email"
                    size="small"
                    type="email"
                    variant="outlined"
                    value={values.email}
                    onChange={handleChange}
                  />
                </Grid>

                {/* <Grid item md={2} sm={4} xs={12}>
                  Customer Phone
                </Grid>
                <Grid item md={10} sm={8} xs={12}>
                  <div className="flex flex-wrap m--2">
                    <TextField
                      className="m-2"
                      label="Work Phone"
                      name="workPhone"
                      size="small"
                      variant="outlined"
                      value={values.workPhone}
                      onChange={handleChange}
                    />
                    <TextField
                      className="m-2"
                      label="Mobile"
                      name="mobile"
                      size="small"
                      variant="outlined"
                      value={values.mobile}
                      onChange={handleChange}
                    />
                  </div>
                </Grid> */}

                <Grid item md={2} sm={4} xs={12}>
                  Jamath
                </Grid>
                <Grid item md={10} sm={8} xs={12}>
                  <TextField
                    className="min-w-208"
                    label="Jamath"
                    name="jamath_id"
                    size="small"
                    variant="outlined"
                    select
                    value={values.jamath_id || ""}
                    onChange={handleChange}
                    >
                      {jamaths.map((item) => (
                        <MenuItem value={item.id} key={item.id}>
                          {item.name}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>

                <Grid item md={2} sm={4} xs={12}>
                  Role
                </Grid>
                <Grid item md={10} sm={8} xs={12}>
                  <TextField
                    className="min-w-208"
                    label="Role"
                    name="role_id"
                    size="small"
                    variant="outlined"
                    select
                    value={values.role_id || ""}
                    onChange={handleChange}
                  >
                    {role.map((item) => (
                      <MenuItem value={item.id} key={item.id}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Grid>

              <div className="mt-6">
                <Button color="primary" variant="contained" type="submit">
                  Submit
                </Button>
              </div>
            </form>
          )}
        </Formik>
      </Card>
    </div>
  );
};


const initialValues = {
  
};

export default JamathForm;
