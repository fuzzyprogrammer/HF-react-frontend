import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
import history from "history.js";

const JamathForm = () => {
  let { slug } = useParams();
  let id = parseInt(slug);

  const [users, setUsers] = useState([]);
  const [jamath, setJamath] = useState();

  useEffect(() => {
    async function fetchMyAPI() {
      await Axios.get(`api/hfJamaths/${id}`).then((res) => {
        setJamath(res.data[0]);
      }).catch((err) => {
        console.log(err);
      });
    }
    fetchMyAPI()
  }, [id]);

  useEffect(() => {
    Axios.get("/api/hfUsers").then(({ data }) => {
      setUsers(data);
    });
  }, [])
  // console.log(jamath)
  const initialValues = {
    'name': jamath ? jamath.name : '',
    'user_id': jamath ? jamath.user_id : '',
  };

  const handleSubmit = async (values, { isSubmitting }) => {
    if (jamath) {
      values.id = jamath.id
      await Axios.put(`api/hfJamaths/${jamath.id}`, values)
        .then(function (res) {
          if (res.status === 200) {
            history.push('/pages/jamath-list');
          }
        })
        .catch(function (err) {
          console.log(err);
        });
    } else {
      await Axios.post('api/hfJamaths', values)
        .then(function (res) {
          if (res.status === 200) {
            history.push('/pages/jamath-list');
          }
        })
        .catch(function (err) {
          console.log(err);
        });
    }
  };

  const handleCancel = () => history.push('/pages/jamath-list');


  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb
          routeSegments={[
            { name: "Pages", path: "/pages" },
            { name: "New Jamath" },
          ]}
        />
      </div>

      <Card elevation={3}>
        <div className="flex p-4">
          <h4 className="m-0">Add a New Jamath</h4>
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
                  Jamath Name
                </Grid>
                <Grid item md={10} sm={8} xs={12}>
                  <TextField
                    label="Jamath Name"
                    name="name"
                    size="small"
                    variant="outlined"
                    value={values.name}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item md={2} sm={4} xs={12}>
                  User
                </Grid>
                <Grid item md={10} sm={8} xs={12}>
                  <TextField
                    className="min-w-208"
                    label="User"
                    name="user_id"
                    size="small"
                    variant="outlined"
                    select
                    value={values.user_id || ""}
                    onChange={handleChange}
                  >
                    {users.map((item) => (
                      <MenuItem value={item.id} key={item.id}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Grid>

              <div className="mt-6">
                <Button color="primary" variant="contained" type="submit">
                  {jamath ? `Update` :`Submit`}
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



export default JamathForm;
