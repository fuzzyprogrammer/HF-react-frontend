import React, { useState, useEffect } from "react";
import { Dialog, Button, Grid } from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import {
  getDistrictById,
  updateDistrict,
  addNewDistrict,
} from "./TableService";

const MemberEditorDialog = ({ uid, open, handleClose, stateId }) => {
  console.log("Inside Memeber Func: " + stateId);
  const [district, setDistrict] = useState({
    name: "",
    stateId: stateId,
  });

  const handleChange = (event, source) => {
    event.persist();
    setDistrict({
      ...district,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = () => {
    let { id } = district;
    if (id) {
      updateDistrict({
        ...district,
      }).then(() => {
        handleClose();
      });
    } else {
      addNewDistrict({
        ...district,
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
    getDistrictById(uid).then((data) => setDistrict({ ...data.data })); //console.log(data)
  }, [uid]);

  return (
    <Dialog onClose={handleClose} open={open}>
      <div className="p-6">
        <h4 className="mb-5">District</h4>
        <ValidatorForm onSubmit={handleFormSubmit}>
          <Grid className="mb-4" container spacing={4}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <TextValidator
                className="w-full mb-4"
                label="Name"
                onChange={handleChange}
                type="text"
                name="name"
                value={district?.name}
                validators={["required"]}
                errorMessages={["this field is required"]}
              />
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
