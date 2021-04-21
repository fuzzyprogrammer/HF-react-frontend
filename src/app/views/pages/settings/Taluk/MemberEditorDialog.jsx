import React, { useState, useEffect } from "react";
import { Dialog, Button, Grid } from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import {
  getTalukById,
  updateTaluk,
  addNewTaluk,
} from "./TableService";

const MemberEditorDialog = ({ uid, open, handleClose, districtId }) => {
  console.log("Inside Memeber Func: " + districtId);
  const [taluk, setTaluk] = useState({
    name: "",
    districtId: districtId,
  });

  const handleChange = (event, source) => {
    event.persist();
    setTaluk({
      ...taluk,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = () => {
    let { id } = taluk;
    if (id) {
      updateTaluk({
        ...taluk,
      }).then(() => {
        handleClose();
      });
    } else {
      addNewTaluk({
        ...taluk,
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
    getTalukById(uid).then((data) => setTaluk({ ...data.data })); //console.log(data)
  }, [uid]);

  return (
    <Dialog onClose={handleClose} open={open}>
      <div className="p-6">
        <h4 className="mb-5">Taluk</h4>
        <ValidatorForm onSubmit={handleFormSubmit}>
          <Grid className="mb-4" container spacing={4}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <TextValidator
                className="w-full mb-4"
                label="Name"
                onChange={handleChange}
                type="text"
                name="name"
                value={taluk?.name}
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
