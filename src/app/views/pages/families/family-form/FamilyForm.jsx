<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import {
  Grid,
=======
import React, { useState } from "react";
import { Formik } from "formik";
import {
  Grid,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
>>>>>>> main
  Card,
  Divider,
  TextField,
  MenuItem,
<<<<<<< HEAD
  Button,
  Snackbar,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { Breadcrumb } from "matx";
import FamilyItemTable from "./FamilyItemTable";
import {
  getShelterList,
  getHfLanguages,
  getHFReligions,
  getRationCardTypes,
  setSubmitForm,
  getFamily,
  getShelterOwnershipList,
} from "./FamilyFormService";
import { makeStyles } from "@material-ui/core/styles";
import useAuth from "app/hooks/useAuth";
import history from "history.js";
import { useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  avatar: {
    display: "block",
    margin: "15px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    padding: "5px",
    width: "150px",
    objectFit: "cover",
    cursor: "pointer",
  },
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const FamilyForm = () => {
  const { id } = useParams();
  const ID = parseInt(id);
  console.log(`This is ID ` + ID);

  const classes = useStyles();

  const { user } = useAuth();

  const [isAlive, setIsAlive] = useState(true);
  const [shelterList, setShelterList] = useState([]);
  const [shelterOwnershipList, setShelterOwnershipList] = useState([]);
  const [langList, setLangList] = useState([]);
  const [religionList, setReligionList] = useState([]);
  const [rationCardTypes, setRationCardTypes] = useState([]);
  const [rationCardImg, setRationCardImg] = useState({ preview: "", raw: "" });
  const [open, setOpen] = React.useState(false);
  const [familyData, setFamilyData] = useState();

  useEffect(() => {
    getShelterList().then(({ data }) => {
      if (isAlive) setShelterList(data);
    });
    getShelterOwnershipList().then(({ data }) => {
      if (isAlive) setShelterOwnershipList(data);
    });
    getHfLanguages().then(({ data }) => {
      if (isAlive) setLangList(data);
    });
    getHFReligions().then(({ data }) => {
      if (isAlive) setReligionList(data);
    });
    getRationCardTypes().then(({ data }) => {
      if (isAlive) setRationCardTypes(data);
    });
    return () => setIsAlive(false);
  }, [isAlive]);

  useEffect(async () => {
    if (ID) {
      let res = await getFamily(ID);
      if (res.status === 200) {
        setFamilyData(res.data);
      }
    }
  }, []);

  console.log(familyData);
  const handleRationCardImg = (e) => {
    if (e.target.files.length) {
      setRationCardImg({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
      // this.handleChange(e);
    }
  };

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleSubmit = async (values, { isSubmitting }) => {
    rationCardImg.raw && (values.ration_img_url = rationCardImg.raw);
    values.user_id = user.id;
    await setSubmitForm(values).then((res) => {
      if (res.status === 200) {
        handleClick();
        setTimeout(() => history.push("/pages/family-list"), 2000);
      }
    });
  };
  const initialValues = {
    family_code: familyData?.family_code,
    name: familyData?.name,
    family_address_id: familyData?.family_address_id,
    religion: familyData?.religion,
    language_id: familyData?.family_language_id,
    ration_card_type: familyData?.ration_card_type,
    ration_card_no: familyData?.ration_card_no,
    income: familyData?.income,
    income_source: familyData?.income_source,
    ration_img_url: familyData?.ration_img_url,
    address: familyData?.address,
    street: familyData?.street,
    city: familyData?.city,
    state: familyData?.state,
    country: familyData?.country,
    pincode: familyData?.pincode,
    contacts: familyData?.contacts,
  };

  
  
=======
  Tabs,
  Tab,
  Button,
} from "@material-ui/core";
import OtherDetailsForm from "./OtherDetailsForm";
import AddressForm from "./AddressForm";
import ContactPersonForm from "./ContactPersonForm";
import { Breadcrumb } from "matx";

const FamilyForm = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleSubmit = async (values, { isSubmitting }) => {
    console.log(values);
  };

  const handleTabChange = (e, value) => {
    setTabIndex(value);
  };

>>>>>>> main
  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb
          routeSegments={[
<<<<<<< HEAD
            { name: "Families", path: "/pages/family-list" },
            { name: "Family Form" },
          ]}
        />
      </div>
      <Card elevation={3}>
        <div className="flex p-4">
          <h4 className="m-0">New Family</h4>
=======
            { name: "Pages", path: "/pages" },
            { name: "New Customer" },
          ]}
        />
      </div>

      <Card elevation={3}>
        <div className="flex p-4">
          <h4 className="m-0">Add a New Family</h4>
>>>>>>> main
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
<<<<<<< HEAD
            <form
              className="p-4"
              onSubmit={handleSubmit}
              autoCorrect="off"
              autoComplete="off"
            >
              <Grid container spacing={3} alignItems="center">
                <Grid item md={2} sm={4} xs={12}>
                  Name
                </Grid>
                <Grid item md={4} sm={8} xs={12}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    size="small"
                    variant="outlined"
                    value={values.name || ""}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item md={2} sm={4} xs={12}>
                  Religion
                </Grid>
                <Grid item md={4} sm={8} xs={12}>
                  <TextField
                    fullWidth
                    label="Religion"
                    name="religion"
                    size="small"
                    variant="outlined"
                    value={values.religion || ""}
                    onChange={handleChange}
                    select
                  >
                    {religionList.map((item, ind) => (
                      <MenuItem value={item.id} key={item.id}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item md={2} sm={4} xs={12}>
                  Ration Card Type
                </Grid>
                <Grid item md={4} sm={8} xs={12}>
                  <TextField
                    fullWidth
                    label="Ration Card Type"
                    name="ration_card_type"
                    size="small"
                    variant="outlined"
                    value={values.ration_card_type || ""}
                    onChange={handleChange}
                    select
                  >
                    {rationCardTypes.map((item, ind) => (
                      <MenuItem value={item} key={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item md={2} sm={4} xs={12}>
                  Ration Card No
                </Grid>
                <Grid item md={4} sm={8} xs={12}>
                  <TextField
                    fullWidth
                    label="Ration Card No"
                    name="ration_card_no"
                    size="small"
                    variant="outlined"
                    value={values.ration_card_no || ""}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item md={2} sm={4} xs={12}>
                  Food Source
                </Grid>
                <Grid item md={4} sm={8} xs={12}>
                  <TextField
                    fullWidth
                    label="Food Source"
                    name="food_source"
                    size="small"
                    variant="outlined"
                    value={values.food_source || ""}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item md={2} sm={4} xs={12}>
                  Food Support Required
                </Grid>
                <Grid item md={4} sm={8} xs={12}>
                  <TextField
                    fullWidth
                    label="Food Support Required"
                    name="food_support_required"
                    size="small"
                    variant="outlined"
                    value={values.food_support_required || ""}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item md={2} sm={4} xs={12}>
                  Income
                </Grid>
                <Grid item md={4} sm={8} xs={12}>
                  <TextField
                    fullWidth
                    label="Income"
                    name="income"
                    size="small"
                    variant="outlined"
                    value={values.income || ""}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item md={2} sm={4} xs={12}>
                  Income Source
                </Grid>
                <Grid item md={4} sm={8} xs={12}>
                  <TextField
                    fullWidth
                    label="Income Source"
                    name="income_source"
                    size="small"
                    variant="outlined"
                    value={values.income_source || ""}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item md={2} sm={4} xs={12}>
                  Shelter Type
                </Grid>
                <Grid item md={4} sm={8} xs={12}>
                  <TextField
                    fullWidth
                    label="Shelter Type"
                    name="shelter_type"
                    size="small"
                    variant="outlined"
                    value={values.shelter_type || ""}
                    onChange={handleChange}
                    select
                  >
                    {shelterList.map((item, ind) => (
                      <MenuItem value={item.name} key={item.id}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item md={2} sm={4} xs={12}>
                  Shelter Ownership Type
                </Grid>
                <Grid item md={4} sm={8} xs={12}>
                  <TextField
                    fullWidth
                    label="Shelter Ownership Type"
                    name="shelter_ownership"
                    size="small"
                    variant="outlined"
                    value={values.shelter_ownership || ""}
                    onChange={handleChange}
                    select
                  >
                    {shelterOwnershipList.map((item, ind) => (
                      <MenuItem value={item.name} key={item.id}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item md={2} sm={4} xs={12}>
                  Shelter Support Required
                </Grid>
                <Grid item md={4} sm={8} xs={12}>
                  <TextField
                    fullWidth
                    label="Shelter Support Required"
                    name="shelter_support_required"
                    size="small"
                    variant="outlined"
                    value={values.shelter_support_required || ""}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item md={2} sm={4} xs={12}>
                  Mother Tongue
                </Grid>
                <Grid item md={4} sm={8} xs={12}>
                  <TextField
                    fullWidth
                    label="Mother Tongue"
                    name="language"
                    size="small"
                    variant="outlined"
                    value={values.language || ""}
                    onChange={handleChange}
                    select
                  >
                    {langList.map((item, ind) => (
                      <MenuItem value={item.name} key={item.id}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item md={12} sm={12} xs={12}>
                  <Divider />
                  <p>Address Information</p>
                </Grid>
                <Grid item md={2} sm={4} xs={12}>
                  Address
                </Grid>
                <Grid item md={4} sm={8} xs={12}>
                  <TextField
                    fullWidth
                    label="Address"
                    name="address"
                    size="small"
                    variant="outlined"
                    value={values.address || ""}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item md={2} sm={4} xs={12}>
                  Street
                </Grid>
                <Grid item md={4} sm={8} xs={12}>
                  <TextField
                    fullWidth
                    label="Street"
                    name="street"
                    size="small"
                    variant="outlined"
                    value={values.street || ""}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item md={2} sm={4} xs={12}>
                  City
                </Grid>
                <Grid item md={4} sm={8} xs={12}>
                  <TextField
                    fullWidth
                    label="City"
                    name="city"
                    size="small"
                    variant="outlined"
                    value={values.city || ""}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item md={2} sm={4} xs={12}>
                  State
                </Grid>
                <Grid item md={4} sm={8} xs={12}>
                  <TextField
                    fullWidth
                    label="State"
                    name="state"
                    size="small"
                    variant="outlined"
                    value={values.state || ""}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item md={2} sm={4} xs={12}>
                  Country
                </Grid>
                <Grid item md={4} sm={8} xs={12}>
                  <TextField
                    fullWidth
                    label="Country"
                    name="country"
                    size="small"
                    variant="outlined"
                    value={values.country || ""}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item md={2} sm={4} xs={12}>
                  Pincode
                </Grid>
                <Grid item md={4} sm={8} xs={12}>
                  <TextField
                    fullWidth
                    label="Pincode"
                    name="pincode"
                    size="small"
                    variant="outlined"
                    value={values.pincode || ""}
=======
            <form className="p-4" onSubmit={handleSubmit}>
              <Grid container spacing={3} alignItems="center">
                <Grid item md={2} sm={4} xs={12}>
                  Customer Type
                </Grid>
                <Grid item md={10} sm={8} xs={12}>
                  <FormControl component="fieldset">
                    <RadioGroup
                      row
                      name="customerType"
                      value={values.customerType}
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        className="h-20 mr-6"
                        label="Business"
                        value="business"
                        control={<Radio size="small" color="secondary" />}
                      />
                      <FormControlLabel
                        className="h-20"
                        label="Individual"
                        value="individual"
                        control={<Radio size="small" color="secondary" />}
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>

                <Grid item md={2} sm={4} xs={12}>
                  Primary Contact
                </Grid>
                <Grid item md={10} sm={8} xs={12}>
                  <div className="flex flex-wrap m--2">
                    <TextField
                      className="m-2 min-w-188"
                      label="Salutation"
                      name="salutation"
                      size="small"
                      variant="outlined"
                      select
                      value={values.salutation || ""}
                      onChange={handleChange}
                    >
                      {salutationList.map((item, ind) => (
                        <MenuItem value={item} key={item}>
                          {item}
                        </MenuItem>
                      ))}
                    </TextField>
                    <TextField
                      className="m-2"
                      label="First Name"
                      name="firstName"
                      size="small"
                      variant="outlined"
                      value={values.firstName}
                      onChange={handleChange}
                    />
                    <TextField
                      className="m-2"
                      label="Last Name"
                      name="lastName"
                      size="small"
                      variant="outlined"
                      value={values.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </Grid>

                <Grid item md={2} sm={4} xs={12}>
                  Primary Contact
                </Grid>
                <Grid item md={10} sm={8} xs={12}>
                  <TextField
                    label="Company Name"
                    name="companyName"
                    size="small"
                    variant="outlined"
                    value={values.companyName}
>>>>>>> main
                    onChange={handleChange}
                  />
                </Grid>

<<<<<<< HEAD
                <Grid item xs={12}>
                  <Divider />
                </Grid>
                <Grid item xs={12}>
                  Bank Details
                </Grid>
                <Grid item md={2} sm={4} xs={12}>
                  Account No
                </Grid>
                <Grid item md={4} sm={8} xs={12}>
                  <TextField
                    fullWidth
                    label="Account No"
                    name="account_no"
                    size="small"
                    variant="outlined"
                    value={values.account_no || ""}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item md={2} sm={4} xs={12}>
                  IFSC Code
                </Grid>
                <Grid item md={4} sm={8} xs={12}>
                  <TextField
                    fullWidth
                    label="IFSC Code"
                    name="ifsc_code"
                    size="small"
                    variant="outlined"
                    value={values.ifsc_code || ""}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item md={2} sm={4} xs={12}>
                  Bank Name
                </Grid>
                <Grid item md={4} sm={8} xs={12}>
                  <TextField
                    fullWidth
                    label="Bank Name"
                    name="bank_name"
                    size="small"
                    variant="outlined"
                    value={values.bank_name || ""}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item md={2} sm={4} xs={12}>
                  Bank Branch
                </Grid>
                <Grid item md={4} sm={8} xs={12}>
                  <TextField
                    fullWidth
                    label="Bank Branch"
                    name="bank_branch"
                    size="small"
                    variant="outlined"
                    value={values.bank_branch || ""}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Divider />
                </Grid>
                <Grid item md={2} sm={4} xs={12}>
                  {rationCardImg.preview ? (
                    <Button
                      style={{ color: "red" }}
                      variant="text"
                      onClick={() =>
                        setRationCardImg({
                          preview: "",
                          raw: "",
                        })
                      }
                    >
                      Delete
                    </Button>
                  ) : (
                    <p>Upload Ration Card</p>
                  )}
                </Grid>
                <Grid item md={4} sm={8} xs={12}>
                  <label htmlFor="upload-button">
                    {rationCardImg.preview ? (
                      <img
                        src={rationCardImg.preview}
                        alt="profile-pic"
                        className={classes.avatar}
                      />
                    ) : (
                      <>
                        <img
                          src={
                            initialValues?.ration_img_url ||
                            "/assets/images/file-types/007-jpg.svg"
                          }
                          className={classes.avatar}
                          alt="avatar"
                        />
                      </>
                    )}
                  </label>
                  <input
                    accept="image/*"
                    type="file"
                    id="upload-button"
                    className="hidden"
                    onChange={handleRationCardImg}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Divider />
                </Grid>
              </Grid>

              <div className="mb-8">
                <FamilyItemTable
=======
                <Grid item md={2} sm={4} xs={12}>
                  Customer Display Name
                </Grid>
                <Grid item md={10} sm={8} xs={12}>
                  <TextField
                    label="Display Name"
                    name="displayName"
                    size="small"
                    variant="outlined"
                    value={values.displayName}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item md={2} sm={4} xs={12}>
                  Customer Email
                </Grid>
                <Grid item md={10} sm={8} xs={12}>
                  <TextField
                    label="Customer Email"
                    name="email"
                    size="small"
                    type="email"
                    variant="outlined"
                    value={values.email}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item md={2} sm={4} xs={12}>
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
                </Grid>

                <Grid item md={2} sm={4} xs={12}>
                  Website
                </Grid>
                <Grid item md={10} sm={8} xs={12}>
                  <TextField
                    label="Website"
                    name="website"
                    size="small"
                    type="email"
                    variant="outlined"
                    value={values.website}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
              <Tabs
                className="mt-4 mb-6"
                value={tabIndex}
                onChange={handleTabChange}
                indicatorColor="primary"
                textColor="primary"
              >
                {tabList.map((item, ind) => (
                  <Tab
                    className="capitalize"
                    value={ind}
                    label={item}
                    key={ind}
                  />
                ))}
              </Tabs>
              {tabIndex === 0 && (
                <OtherDetailsForm values={values} handleChange={handleChange} />
              )}
              {tabIndex === 1 && (
                <AddressForm
>>>>>>> main
                  values={values}
                  setFieldValue={setFieldValue}
                  handleChange={handleChange}
                />
<<<<<<< HEAD
              </div>
=======
              )}
              {tabIndex === 2 && (
                <ContactPersonForm
                  values={values}
                  setFieldValue={setFieldValue}
                  handleChange={handleChange}
                />
              )}

>>>>>>> main
              <div className="mt-6">
                <Button color="primary" variant="contained" type="submit">
                  Submit
                </Button>
              </div>
<<<<<<< HEAD
              <Snackbar
                open={open}
                autoHideDuration={2000}
                onClose={handleClose}
              >
                <Alert onClose={handleClose} severity="success">
                  Sucessfully Added New Family!
                </Alert>
              </Snackbar>
=======
>>>>>>> main
            </form>
          )}
        </Formik>
      </Card>
    </div>
  );
<<<<<<< HEAD
 
=======
};

const salutationList = ["Mr.", "Mrs.", "Ms.", "Miss.", "Dr."];
const tabList = ["Other Details", "Address", "Contact Persons"];

const initialValues = {
  customerType: "",
>>>>>>> main
};

export default FamilyForm;
