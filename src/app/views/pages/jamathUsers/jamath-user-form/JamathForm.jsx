import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
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
import history from 'history.js'
import useAuth from 'app/hooks/useAuth';

const JamathForm = () => {
  let {user} = useAuth();
  // console.log("usersINfo"+user.id);

  // const [jamaths, setJamaths] = useState([]);
  const [roles, setRoles] = useState([]);
  const [users, setUsers] = useState();
  let { slug } = useParams();
  let id = parseInt(slug);

  useEffect(() => {
    async function fetchMyAPI() {
      await axios.get(`api/hfUsers/${id}`).then((res) => {
        setUsers(res.data[0]);
      }).catch((err) => {
        console.log(err);
      });
    }
    fetchMyAPI()
  }, [id]);

  useEffect(() => {
    // axios.get("/api/hfJamaths").then(({data}) => {
    //   setJamaths(data);
    //   })
    //     .catch((err) => {
    //       console.log(err);
    //     });
        
        axios.get("/api/hfRoles").then(({ data }) => {
          console.log(data)
        setRoles(data)
      })
      .catch((err) => {
        console.log(err);
      });
    },[]);
  
  const initialValues = {
    name: users ? users.name : '',
    email: users? users.email : "",
    role_id: users? users.role_id : "",
    // jamath_id: users? users.jamath_id : "",
  }
  
  const handleSubmit = async (values, { isSubmitting }) => {
    values && ( values.parent_id = user.id );
    console.log(values);
    if(users){
      values.id = users.id;
      await axios.put(`api/hfUsers/${users.id}`,values)
        .then(function (res) {
          if(res){
            history.push('/pages/jamath-users-list')
          }
        })
        .catch(function (err) {
          console.log(err);
        });
    }else{
    await axios.post('api/hfUsers', values)
      .then(function (res) {
        if (res) {
          history.push('/pages/jamath-users-list')
        }
      })
      .catch(function (err) {
        console.log(err);
      });
    }
  };
  const handleCancel = () => history.push('/pages/jamath-users-list');
  


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
          <h4 className="m-0">Add a New Jamath User</h4>
        </div>
        <Divider className="mb-2" />

        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit} 
          onClick={handleCancel}
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

                {/* <Grid item md={2} sm={4} xs={12}>
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
                  </Grid> */}

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
                    {roles.map((item) => (
                      <MenuItem value={item.id} key={item.id}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Grid>

              <div className="mt-6">
                <Button color="primary" variant="contained" type="submit">
                  {users ? `Update` :'Submit'}
                </Button>
                <Button className={'ml-5'} color="secondary" variant="contained" type="cancel" onClick={handleCancel}>
                  Cancel
                </Button>
              </div>
            </form>
          )}
        </Formik>
      </Card>
    </div>
  );
};




// const initialValues = {
//   name : users.name,
// };

export default JamathForm;
