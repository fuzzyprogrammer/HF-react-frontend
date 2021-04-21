import React, { useState, useEffect } from "react";
import { Dialog, Button, Grid } from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { getStateById, updateState, addNewState } from "./TableService";

const MemberEditorDialog = ({ uid, open, handleClose }) => {
  const [state, setState] = useState({
    name: "",
  });

  const handleChange = (event, source) => {
    event.persist();
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = () => {
    let { id } = state;
    if (id) {
      updateState({
        ...state,
      }).then(() => {
        handleClose();
      });
    } else {
      addNewState({
        ...state,
      }).then(() => {
        handleClose();
      }).catch((err)=>{
        console.log(err);
      })
      ;
    }
  };

  useEffect(() => {
    getStateById(uid).then((data) => setState({ ...data.data })); //console.log(data)
  }, [uid]);

  return (
    <Dialog onClose={handleClose} open={open}>
      <div className="p-6">
        <h4 className="mb-5">State</h4>
        <ValidatorForm onSubmit={handleFormSubmit}>
          <Grid className="mb-4" container spacing={4}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <TextValidator
                className="w-full mb-4"
                label="Name"
                onChange={handleChange}
                type="text"
                name="name"
                value={state?.name}
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
