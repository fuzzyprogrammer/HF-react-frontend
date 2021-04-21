import React, { useState, useEffect } from "react";
import { Dialog, Button, Grid, TextField, MenuItem } from "@material-ui/core";
import { ValidatorForm, TextValidator} from "react-material-ui-form-validator";
import {
  getJamathById,
  updateJamath,
  addNewJamath,
} from "./TableService";
import axios from 'axios';

const MemberEditorDialog = ({ uid, open, handleClose, talukId }) => {
  const [users, setUsers] = useState();
  // console.log("Inside Memeber Func: " + districtId);
  const [jamath, setJamath] = useState({
    name: "",
    taluk_id: talukId,
    user_id: 0,
  });

  const handleChange = (event, source) => {
    event.persist();
    setJamath({
      ...jamath,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = () => {
    let { id } = jamath;
    if (id) {
      updateJamath({
        ...jamath,
      }).then(() => {
        handleClose();
      });
    } else {
      addNewJamath({
        ...jamath,
      })
        .then(() => {
          handleClose();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    getJamathById(uid).then((data) => setJamath({ ...data.data })); //console.log(data)
  }, [uid]);

  useEffect(() => {
    axios.get("/api/hfUsers").then(({ data }) => {
      setUsers(data);
    });
  }, []);

  return (
    <Dialog onClose={handleClose} open={open}>
      <div className="p-6">
        <h4 className="mb-5">Jamath</h4>
        <ValidatorForm onSubmit={handleFormSubmit} autoComplete="off">
          <Grid className="mb-4" container spacing={4}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <TextValidator
                className="w-full mb-4"
                label="Name"
                onChange={handleChange}
                type="text"
                name="name"
                value={jamath?.name}
                validators={["required"]}
                errorMessages={["this field is required"]}
              />
            </Grid>
            <Grid item md={10} sm={8} xs={12}>
              <TextValidator
                className="w-full mb-4"
                fullWidth
                label="User"
                name="user_id"
                // size="small"
                // variant="outlined"
                select
                value={jamath?.user_id || ""}
                onChange={handleChange}
                validators={["required"]}
                errorMessages={["this field is required"]}
              >
                {users?.map((item) => (
                  <MenuItem value={item.id} key={item.id}>
                    {item.name}
                  </MenuItem>
                ))}
              </TextValidator>
            </Grid>
          </Grid>

          <div className="flex justify-between items-center">
            <Button variant="contained" color="primary" type="submit">
              Save
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => handleClose()}
            >
              Cancel
            </Button>
          </div>
        </ValidatorForm>
      </div>
    </Dialog>
  );
};

export default MemberEditorDialog;
