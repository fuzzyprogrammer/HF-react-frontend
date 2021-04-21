import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import {
  Grid,
  Card,
  Divider,
  TextField,
  MenuItem,
  Button,
  Checkbox,
  Radio,
  RadioGroup,
  FormControlLabel,
  Snackbar,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import MemberItemTable from "./MemberItemTable";
import {
  handleMemberSubmit,
  getMajorList,
  getDeniedList,
} from "./MemberFormService";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import useAuth from "app/hooks/useAuth";
import moment from "moment";
import history from "history.js";

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

const MemberForm = () => {
  const classes = useStyles();
  const { slug } = useParams();
  const { user } = useAuth();

  const [isAlive, setIsAlive] = useState(true);
  const [image, setImage] = useState({ preview: "", raw: "" });
  const [aadharImg, setAadharImg] = useState({ preview: "", raw: "" });
  const [voterIdImg, setVoterIdImg] = useState({ preview: "", raw: "" });
  const [healthCardImg, setHealthCardImg] = useState({ preview: "", raw: "" });
  const [labourCardImg, setLabourCardImg] = useState({ preview: "", row: "" });
  const [seniorCitizenCard, setSeniorCitizenCard] = useState({
    preview: "",
    raw: "",
  });
  const [passbook, setPassbook] = useState({preview: "", raw: ""});
  const [open, setOpen] = React.useState(false);
  const [majorList, setMajorList] = useState([]);
  const [headExist, setHeadExist] = useState(false);

  useEffect(() => {
    getMajorList().then(({ data }) => {
      if (isAlive) setMajorList(data);
    });
    getDeniedList(user).then(({data})=>{
      // if (isAlive) setDeniedList
    })
    return () => setIsAlive(false);
  }, [isAlive]);

  const handleProfilePic = (e) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };

  const handleAadharPic = (e) => {
    if (e.target.files.length) {
      setAadharImg({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };

  const handleVoterIdPic = (e) => {
    if (e.target.files.length) {
      setVoterIdImg({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };

  const handleHealthCard = (e) => {
    if (e.target.files.length) {
      setHealthCardImg({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };

  const handleLabourCard = (e) => {
    if (e.target.files.length) {
      setLabourCardImg({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };
  const handlePassbook = (e) => {
    if (e.target.files.length) {
      setPassbook({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };
  const handleSeniorCitizenCard = (e) => {
    if (e.target.files.length) {
      setSeniorCitizenCard({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
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
    image.raw && (values.profileImg = image.raw);
    aadharImg.raw && (values.aadharImg = aadharImg.raw);
    voterIdImg.raw && (values.voterIdImg = voterIdImg.raw);
    passbook.raw && (values.passbook = passbook.raw);
    healthCardImg.raw && (values.healthCardImg = healthCardImg.raw);
    labourCardImg.raw && (values.labourCardImg = labourCardImg.raw);
    seniorCitizenCard.raw && (values.seniorCitizenCard = seniorCitizenCard.raw);
    slug && (values.family_id = parseInt(slug));
    values.user_id = user.id;
    values.dob = moment(values.dob).format("YYYY-MM-DD, h:mm:ss");
    values.academic_year = moment(values.academic_year).format(
      "YYYY-MM-DD, h:mm:ss"
    );
    values.rel_academic_year = moment(values.rel_academic_year).format(
      "YYYY-MM-DD, h:mm:ss"
    );
    values.since = moment(values.since).format(
      "YYYY-MM-DD, h:mm:ss"
    );
    console.log(values);
    await handleMemberSubmit(values)
      .then((res) => {
        if ((res.status = 2000)) {
          handleClick();
          setTimeout(() => history.push("/pages/family-list"), 2000);
        }
      })
      .catch();
  };
  return (
    <div className="m-sm-30">
      <Card elevation={3}>
        <div className="flex p-4">
          <h4 className="m-0">New Member</h4>
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
            <form
              className="p-4"
              onSubmit={handleSubmit}
              autoCorrect="off"
              autoComplete="off"
            >
              <Grid container spacing={3} alignItems="center">
              
                <Grid item md={2} sm={4} xs={12}>
                  {image.preview ? (
                    <Button
                      style={{ color: "red" }}
                      variant="text"
                      onClick={() =>
                        setImage({
                          preview: "",
                          raw: "",
                        })
                      }
                    >
                      Delete
                    </Button>
                  ) : (
                    <p>Upload Profile Img</p>
                  )}
                </Grid>
                <Grid item md={4} sm={8} xs={12}>
                  <label htmlFor="upload-button">
                    {image.preview ? (
                      <img
                        src={image.preview}
                        alt="profile-pic"
                        className={classes.avatar}
                      />
                    ) : (
                      <>
                        <img
                          src="/assets/images/avatars/007-woman-2.svg"
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
                    onChange={handleProfilePic}
                  />
                </Grid>
                {!headExist && (
                  <>
                    <Grid item md={2} sm={4} xs={12}>
                      Heade Of The Family
                    </Grid>
                    <Grid item md={4} sm={8} xs={12}>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Is Head"
                        name="is_head"
                        checked={values.is_head || false}
                        onChange={handleChange}
                      />
                    </Grid>
                  </>
                )}
                <Grid item md={2} sm={4} xs={12}>
                  Name
                </Grid>
                <Grid item md={4} sm={8} xs={12}>
                  <TextField
                    fullWidth
                    className="min-w-188"
                    label="Name"
                    name="name"
                    size="small"
                    variant="outlined"
                    value={values.name || ""}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item md={2} sm={4} xs={12}>
                  Date of Birth
                </Grid>
                <Grid item md={4} sm={8} xs={12}>
                  <div className="flex flex-wrap m--2 ">
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        fullWidth
                        className="m-2"
                        margin="none"
                        label="DoB"
                        inputVariant="outlined"
                        type="text"
                        size="small"
                        autoOk={true}
                        value={values.dob}
                        format="dd/MM/yyyy"
                        onChange={(date) => setFieldValue("dob", date)}
                      />
                    </MuiPickersUtilsProvider>
                  </div>
                </Grid>

                <Grid item md={2} sm={4} xs={12}>
                  Marital Status
                </Grid>
                <Grid item md={4} sm={8} xs={12}>
                  <TextField
                    fullWidth
                    className="min-w-188"
                    label="Marital Status"
                    name="marital_status"
                    size="small"
                    variant="outlined"
                    value={values.marital_status || ""}
                    onChange={handleChange}
                    select
                  >
                    {maritalStatusList.map((item, ind) => (
                      <MenuItem value={item} key={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item md={2} sm={4} xs={12}>
                  Relationship
                </Grid>
                <Grid item md={4} sm={8} xs={12}>
                  <TextField
                    fullWidth
                    className="min-w-188"
                    label="Relationship"
                    name="relationship"
                    size="small"
                    variant="outlined"
                    value={values.relationship || ""}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Divider />
                </Grid>
                <Grid item xs={12}>
                  <h5>Health</h5>
                </Grid>

                <Grid item md={2} sm={4} xs={12}>
                  Blood Group
                </Grid>
                <Grid item md={4} sm={8} xs={12}>
                  <TextField
                    fullWidth
                    className="min-w-188"
                    label="Blood Group"
                    name="blood_group"
                    size="small"
                    variant="outlined"
                    value={values.blood_group || ""}
                    onChange={handleChange}
                    select
                  >
                    {bloodGroupList.map((item, ind) => (
                      <MenuItem value={item} key={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item md={2} sm={4} xs={12}>
                  Disease
                </Grid>
                <Grid item md={4} sm={8} xs={12}>
                  <TextField
                    fullWidth
                    className="min-w-188"
                    label="Disease"
                    name="disease"
                    size="small"
                    variant="outlined"
                    value={values.disease || ""}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item md={2} sm={4} xs={12}>
                  Since
                </Grid>
                <Grid item md={4} sm={8} xs={12}>
                  <div className="flex flex-wrap m--2">
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        fullWidth
                        className="m-2"
                        margin="none"
                        label="Since (year)"
                        inputVariant="outlined"
                        type="text"
                        size="small"
                        autoOk={true}
                        value={values.academic_year || new Date()}
                        format="yyyy"
                        onChange={(date) => setFieldValue("since", date)}
                      />
                    </MuiPickersUtilsProvider>
                  </div>
                </Grid>
                <Grid item md={2} sm={4} xs={12}>
                  Status
                </Grid>
                <Grid item md={4} sm={8} xs={12}>
                  <TextField
                    fullWidth
                    className="min-w-188"
                    label="Status"
                    name="health_status"
                    size="small"
                    variant="outlined"
                    value={values.health_status || ""}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item md={2} sm={4} xs={12}>
                  Hospital
                </Grid>
                <Grid item md={4} sm={8} xs={12}>
                  <TextField
                    fullWidth
                    className="min-w-188"
                    label="Hospital"
                    name="hospital"
                    size="small"
                    variant="outlined"
                    value={values.hospital || ""}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item md={2} sm={4} xs={12}>
                  Place
                </Grid>
                <Grid item md={4} sm={8} xs={12}>
                  <TextField
                    fullWidth
                    className="min-w-188"
                    label="Place"
                    name="hospital_place"
                    size="small"
                    variant="outlined"
                    value={values.hospital_place || ""}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item md={2} sm={4} xs={12}>
                  Exercise
                </Grid>
                <Grid item md={4} sm={8} xs={12}>
                  <TextField
                    fullWidth
                    className="min-w-188"
                    label="Exercise"
                    name="exercise"
                    size="small"
                    variant="outlined"
                    value={values.exercise || ""}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Divider />
                </Grid>

                <Grid item md={12}>
                  <h5>Health Support</h5>
                </Grid>

                <Grid item md={2} sm={4} xs={12}>
                  Support Received
                </Grid>
                <Grid item md={4} sm={8} xs={12}>
                  <TextField
                    fullWidth
                    className="min-w-188"
                    label="Support Received"
                    name="hlth_support_received"
                    size="small"
                    variant="outlined"
                    value={values.hlth_support_received || ""}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item md={2} sm={4} xs={12}>
                  Source of Support
                </Grid>
                <Grid item md={4} sm={8} xs={12}>
                  <TextField
                    fullWidth
                    className="min-w-188"
                    label="Source of Support"
                    name="hlth_support_source"
                    size="small"
                    variant="outlined"
                    value={values.hlth_support_source || ""}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item md={2} sm={4} xs={12}>
                  Support Required
                </Grid>
                <Grid item md={4} sm={8} xs={12}>
                  <TextField
                    fullWidth
                    className="min-w-188"
                    label="Support Required"
                    name="hlth_support_required"
                    size="small"
                    variant="outlined"
                    value={values.hlth_support_required || ""}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Divider />
                </Grid>
                <Grid item md={2} sm={4} xs={12}>
                  Gender
                </Grid>
                <Grid item md={4} sm={8} xs={12}>
                  <RadioGroup
                    className="mb-4"
                    value={values.gender || ""}
                    name="gender"
                    onChange={handleChange}
                    row
                  >
                    <FormControlLabel
                      value="Male"
                      control={<Radio color="secondary" />}
                      label="Male"
                      labelPlacement="end"
                    />
                    <FormControlLabel
                      value="Female"
                      control={<Radio color="secondary" />}
                      label="Female"
                      labelPlacement="end"
                    />
                    <FormControlLabel
                      value="Others"
                      control={<Radio color="secondary" />}
                      label="Other"
                      labelPlacement="end"
                    />
                  </RadioGroup>
                </Grid>
                <Grid item xs={12}>
                  <Divider />
                </Grid>
                <Grid item md={2} sm={4} xs={12}>
                  Occupation
                </Grid>
                <Grid item md={10} sm={8} xs={12}>
                  <RadioGroup
                    className="mb-4"
                    value={values.occupation || ""}
                    name="occupation"
                    onChange={handleChange}
                    row
                  >
                    <FormControlLabel
                      value="Business Owner"
                      control={<Radio color="secondary" />}
                      label="Business Owner"
                      labelPlacement="end"
                    />
                    <FormControlLabel
                      value="Job"
                      control={<Radio color="secondary" />}
                      label="Job"
                      labelPlacement="end"
                    />
                    <FormControlLabel
                      value="Student"
                      control={<Radio color="secondary" />}
                      label="Student"
                      labelPlacement="end"
                    />
                    <FormControlLabel
                      value="Other"
                      control={<Radio color="secondary" />}
                      label="Other"
                      labelPlacement="end"
                    />
                  </RadioGroup>
                </Grid>
                {values.occupation === "Job" && (
                  <>
                    <Grid item xs={12}>
                      <Divider />
                    </Grid>
                    <Grid item md={2} sm={4} xs={12}>
                      Work Place Name
                    </Grid>
                    <Grid item md={4} sm={8} xs={12}>
                      <TextField
                        fullWidth
                        className="min-w-188"
                        label="Work Place Name"
                        name="work_place_name"
                        size="small"
                        variant="outlined"
                        value={values.work_place_name || ""}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item md={2} sm={4} xs={12}>
                      Income
                    </Grid>
                    <Grid item md={4} sm={8} xs={12}>
                      <TextField
                        fullWidth
                        className="min-w-188"
                        label="Income"
                        name="income"
                        size="small"
                        variant="outlined"
                        value={values.income || ""}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item md={2} sm={4} xs={12}>
                      Work Place Address
                    </Grid>
                    <Grid item md={4} sm={8} xs={12}>
                      <TextField
                        fullWidth
                        className="min-w-188"
                        label="Work Place Address"
                        name="work_place_address"
                        size="small"
                        variant="outlined"
                        value={values.work_place_address || ""}
                        onChange={handleChange}
                      />
                    </Grid>
                  </>
                )}
                {values.occupation === "Business Owner" && (
                  <>
                    <Grid item xs={12}>
                      <Divider />
                    </Grid>
                    <Grid item md={2} sm={4} xs={12}>
                      Work Place Name
                    </Grid>
                    <Grid item md={4} sm={8} xs={12}>
                      <TextField
                        fullWidth
                        className="min-w-188"
                        label="Work Place Name"
                        name="work_place_name"
                        size="small"
                        variant="outlined"
                        value={values.work_place_name || ""}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item md={2} sm={4} xs={12}>
                      Income
                    </Grid>
                    <Grid item md={4} sm={8} xs={12}>
                      <TextField
                        fullWidth
                        className="min-w-188"
                        label="Income"
                        name="income"
                        size="small"
                        variant="outlined"
                        value={values.income || ""}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item md={2} sm={4} xs={12}>
                      Work Place Address
                    </Grid>
                    <Grid item md={4} sm={8} xs={12}>
                      <TextField
                        fullWidth
                        className="min-w-188"
                        label="Work Place Address"
                        name="work_place_address"
                        size="small"
                        variant="outlined"
                        value={values.work_place_address || ""}
                        onChange={handleChange}
                      />
                    </Grid>
                  </>
                )}

                <Grid item xs={12}>
                  <Divider />
                </Grid>

                <Grid item md={12}>
                  <h5>Self Reliance Support</h5>
                </Grid>

                <Grid item md={2} sm={4} xs={12}>
                  Support Received
                </Grid>
                <Grid item md={4} sm={8} xs={12}>
                  <TextField
                    fullWidth
                    className="min-w-188"
                    label="Support Received"
                    name="sr_support_received"
                    size="small"
                    variant="outlined"
                    value={values.sr_support_received || ""}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item md={2} sm={4} xs={12}>
                  Source of Support
                </Grid>
                <Grid item md={4} sm={8} xs={12}>
                  <TextField
                    fullWidth
                    className="min-w-188"
                    label="Source of Support"
                    name="sr_support_source"
                    size="small"
                    variant="outlined"
                    value={values.sr_support_source || ""}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item md={2} sm={4} xs={12}>
                  Support Required
                </Grid>
                <Grid item md={4} sm={8} xs={12}>
                  <TextField
                    fullWidth
                    className="min-w-188"
                    label="Support Required"
                    name="sr_support_required"
                    size="small"
                    variant="outlined"
                    value={values.sr_support_required || ""}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Divider />
                </Grid>

                

                <Grid item md={2} sm={4} xs={12}>
                  Education
                </Grid>
                <Grid item md={10} sm={8} xs={12}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Religious Education"
                    name="religious_education"
                    checked={values.religious_education || false}
                    onChange={handleChange}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="General Education"
                    name="general_education"
                    checked={values.general_education || false}
                    onChange={handleChange}
                  />
                </Grid>
                {values.religious_education && (
                  <>
                    <Grid item xs={12}>
                      <Divider />
                    </Grid>
                    <Grid item xs={12}>
                      {" "}
                      <h5>Religious Education </h5>
                    </Grid>
                    <Grid item md={2} sm={4} xs={12}>
                      Academy Name
                    </Grid>
                    <Grid item md={4} sm={8} xs={12}>
                      <TextField
                        fullWidth
                        className="min-w-188"
                        label="Academy Name"
                        name="rel_academy_name"
                        size="small"
                        variant="outlined"
                        value={values.rel_academy_name || ""}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item md={2} sm={4} xs={12}>
                      Academic Year
                    </Grid>
                    <Grid item md={4} sm={8} xs={12}>
                      <div className="flex flex-wrap m--2">
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                          <KeyboardDatePicker
                            fullWidth
                            className="m-2"
                            margin="none"
                            label="Academic Year"
                            inputVariant="outlined"
                            type="text"
                            size="small"
                            autoOk={true}
                            value={values.rel_academic_year || new Date()}
                            format="yyyy"
                            onChange={(date) =>
                              setFieldValue("rel_academic_year", date)
                            }
                          />
                        </MuiPickersUtilsProvider>
                      </div>
                    </Grid>
                    <Grid item md={2} sm={4} xs={12}>
                      Class
                    </Grid>
                    <Grid item md={4} sm={8} xs={12}>
                      <TextField
                        fullWidth
                        className="min-w-188"
                        label="Class"
                        name="rel_academy_class"
                        size="small"
                        variant="outlined"
                        value={values.rel_academy_class || ""}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item md={2} sm={4} xs={12}>
                      Major
                    </Grid>
                    <Grid item md={4} sm={8} xs={12}>
                      <TextField
                        fullWidth
                        label="Major"
                        name="rel_major"
                        size="small"
                        variant="outlined"
                        value={values.rel_major || ""}
                        onChange={handleChange}
                        select
                      >
                        {majorList.map((item, ind) => (
                          <MenuItem value={item.id} key={item.id}>
                            {item.name}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid item md={2} sm={4} xs={12}>
                      Medium
                    </Grid>
                    <Grid item md={4} sm={8} xs={12}>
                      <TextField
                        fullWidth
                        className="min-w-188"
                        label="Medium"
                        name="rel_medium"
                        size="small"
                        variant="outlined"
                        value={values.rel_medium || ""}
                        onChange={handleChange}
                      />
                    </Grid>
                    {() =>
                      values.religious_education &&
                      setFieldValue("rel_education_type", "Religious Education")
                    }
                    <Grid item md={2} sm={4} xs={12}>
                      Status
                    </Grid>
                    <Grid item md={4} sm={8} xs={12}>
                      <TextField
                        fullWidth
                        className="min-w-188"
                        label="Status"
                        name="rel_status"
                        size="small"
                        variant="outlined"
                        value={values.rel_status || ""}
                        onChange={handleChange}
                        select
                      >
                        {eduStatus.map((item, ind) => (
                          <MenuItem value={item} key={item}>
                            {item}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                  </>
                )}
                {values.general_education && (
                  <>
                    {() =>
                      values.general_education &&
                      setFieldValue("education_type", "General Education")
                    }
                    <Grid item xs={12}>
                      <Divider />
                    </Grid>
                    <Grid item xs={12}>
                      {" "}
                      <h5>General Education </h5>
                    </Grid>
                    <Grid item md={2} sm={4} xs={12}>
                      Academy Name
                    </Grid>
                    <Grid item md={4} sm={8} xs={12}>
                      <TextField
                        fullWidth
                        className="min-w-188"
                        label="Academy Name"
                        name="academy_name"
                        size="small"
                        variant="outlined"
                        value={values.academy_name || ""}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item md={2} sm={4} xs={12}>
                      Academic Year
                    </Grid>
                    <Grid item md={4} sm={8} xs={12}>
                      <div className="flex flex-wrap m--2">
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                          <KeyboardDatePicker
                            fullWidth
                            className="m-2"
                            margin="none"
                            label="Academic Year"
                            inputVariant="outlined"
                            type="text"
                            size="small"
                            autoOk={true}
                            value={values.academic_year || new Date()}
                            format="yyyy"
                            onChange={(date) =>
                              setFieldValue("academic_year", date)
                            }
                          />
                        </MuiPickersUtilsProvider>
                      </div>
                    </Grid>
                    <Grid item md={2} sm={4} xs={12}>
                      Class
                    </Grid>
                    <Grid item md={4} sm={8} xs={12}>
                      <TextField
                        fullWidth
                        className="min-w-188"
                        label="Class"
                        name="academy_class"
                        size="small"
                        variant="outlined"
                        value={values.academy_class || ""}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item md={2} sm={4} xs={12}>
                      Major
                    </Grid>
                    <Grid item md={4} sm={8} xs={12}>
                      <TextField
                        fullWidth
                        label="Major"
                        name="major"
                        size="small"
                        variant="outlined"
                        value={values.major || ""}
                        onChange={handleChange}
                        select
                      >
                        {majorList.map((item, ind) => (
                          <MenuItem value={item.id} key={item.id}>
                            {item.name}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid item md={2} sm={4} xs={12}>
                      Medium
                    </Grid>
                    <Grid item md={4} sm={8} xs={12}>
                      <TextField
                        fullWidth
                        className="min-w-188"
                        label="Medium"
                        name="medium"
                        size="small"
                        variant="outlined"
                        value={values.medium || ""}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item md={2} sm={4} xs={12}>
                      Status
                    </Grid>
                    <Grid item md={4} sm={8} xs={12}>
                      <TextField
                        fullWidth
                        className="min-w-188"
                        label="Status"
                        name="gen_status"
                        size="small"
                        variant="outlined"
                        value={values.gen_status || ""}
                        onChange={handleChange}
                        select
                      >
                        {eduStatus.map((item, ind) => (
                          <MenuItem value={item} key={item}>
                            {item}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                  </>
                )}

                <Grid item md={12}>
                <Divider/>
                </Grid>

                <Grid item md={2} sm={4} xs={12}>
                  Other Course
                </Grid>
                <Grid item md={4} sm={8} xs={12}>
                  <TextField
                    fullWidth
                    className="min-w-188"
                    label="Other Course"
                    name="course"
                    size="small"
                    variant="outlined"
                    value={values.course || ""}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Divider />
                </Grid>

                <Grid item md={12}>
                  <h5>Educational Support</h5>
                </Grid>

                <Grid item md={2} sm={4} xs={12}>
                  Support Received
                </Grid>
                <Grid item md={4} sm={8} xs={12}>
                  <TextField
                    fullWidth
                    className="min-w-188"
                    label="Support Received"
                    name="edu_support_received"
                    size="small"
                    variant="outlined"
                    value={values.edu_support_received || ""}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item md={2} sm={4} xs={12}>
                  Source of Support
                </Grid>
                <Grid item md={4} sm={8} xs={12}>
                  <TextField
                    fullWidth
                    className="min-w-188"
                    label="Source of Support"
                    name="edu_support_source"
                    size="small"
                    variant="outlined"
                    value={values.edu_support_source || ""}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item md={2} sm={4} xs={12}>
                  Support Required
                </Grid>
                <Grid item md={4} sm={8} xs={12}>
                  <TextField
                    fullWidth
                    className="min-w-188"
                    label="Support Required"
                    name="edu_support_required"
                    size="small"
                    variant="outlined"
                    value={values.edu_support_required || ""}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Divider />
                </Grid>

                <Grid item md={2} sm={4} xs={12}>
                  Other
                </Grid>
                <Grid item md={10} sm={8} xs={12}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Hobby"
                    name="hobby"
                    checked={values.hobby || false}
                    onChange={handleChange}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Skill"
                    name="skill"
                    checked={values.skill || false}
                    onChange={handleChange}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Goal"
                    name="goal"
                    checked={values.goal || false}
                    onChange={handleChange}
                  />
                </Grid>
                {values.hobby && (
                  <>
                    <Grid item xs={12}>
                      <Divider />
                    </Grid>
                    <Grid item md={2} sm={4} xs={12}>
                      Hobby
                    </Grid>
                    <Grid item md={4} sm={8} xs={12}>
                      <TextField
                        fullWidth
                        className="min-w-188"
                        label="Hobby"
                        name="mem_hobby"
                        size="small"
                        variant="outlined"
                        value={values.mem_hobby || ""}
                        onChange={handleChange}
                      />
                    </Grid>
                  </>
                )}
                {values.skill && (
                  <>
                    <Grid item md={2} sm={4} xs={12}>
                      Skill
                    </Grid>
                    <Grid item md={4} sm={8} xs={12}>
                      <TextField
                        fullWidth
                        className="min-w-188"
                        label="Skill"
                        name="mem_skill"
                        size="small"
                        variant="outlined"
                        value={values.mem_skill || ""}
                        onChange={handleChange}
                      />
                    </Grid>
                  </>
                )}
                {values.goal && (
                  <>
                    <Grid item md={2} sm={4} xs={12}>
                      Goal
                    </Grid>
                    <Grid item md={4} sm={8} xs={12}>
                      <TextField
                        fullWidth
                        className="min-w-188"
                        label="Goal"
                        name="mem_goal"
                        size="small"
                        variant="outlined"
                        value={values.mem_goal || ""}
                        onChange={handleChange}
                      />
                    </Grid>
                  </>
                )}

                <Grid item xs={12}>
                  <Divider />
                </Grid>
                <Grid item md={2} sm={4} xs={12}>
                  Identity
                </Grid>
                <Grid item md={10} sm={8} xs={12}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Aadhar Card"
                    name="aadhar_card"
                    checked={values.aadhar_card || false}
                    onChange={handleChange}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Voter ID"
                    name="voter_id"
                    checked={values.voter_id || false}
                    onChange={handleChange}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Bank Account"
                    name="bank_account"
                    checked={values.bank_account || false}
                    onChange={handleChange}
                  />
                </Grid>
                {values.aadhar_card && (
                  <>
                    <Grid item xs={12}>
                      <Divider />
                    </Grid>
                    <Grid item md={2} sm={4} xs={12}>
                      Aadhar Card No
                    </Grid>
                    <Grid item md={4} sm={8} xs={12}>
                      <TextField
                        fullWidth
                        className="min-w-188"
                        label="Aadhar Card No"
                        name="aadhar_card_no"
                        size="small"
                        variant="outlined"
                        value={values.aadhar_card_no || ""}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item md={2} sm={4} xs={12}>
                      {aadharImg.preview ? (
                        <Button
                          style={{ color: "red" }}
                          variant="text"
                          onClick={() =>
                            setAadharImg({
                              preview: "",
                              raw: "",
                            })
                          }
                        >
                          Delete
                        </Button>
                      ) : (
                        <p>Upload Aadhar Image</p>
                      )}
                    </Grid>
                    <Grid item md={4} sm={8} xs={12}>
                      <label htmlFor="upload-button-aadhar">
                        {aadharImg.preview ? (
                          <img
                            src={aadharImg.preview}
                            alt="profile-pic"
                            className={classes.avatar}
                          />
                        ) : (
                          <>
                            <img
                              src="/assets/images/file-types/006-png.svg"
                              className={classes.avatar}
                              alt="avatar"
                            />
                          </>
                        )}
                      </label>
                      <input
                        accept="image/*"
                        type="file"
                        id="upload-button-aadhar"
                        className="hidden"
                        onChange={handleAadharPic}
                      />
                    </Grid>
                  </>
                )}
                {values.voter_id && (
                  <>
                    <Grid item xs={12}>
                      <Divider />
                    </Grid>
                    <Grid item md={2} sm={4} xs={12}>
                      Voter Id No
                    </Grid>
                    <Grid item md={4} sm={8} xs={12}>
                      <TextField
                        fullWidth
                        className="min-w-188"
                        label="Voter Id No"
                        name="voter_id_no"
                        size="small"
                        variant="outlined"
                        value={values.voter_id_no || ""}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item md={2} sm={4} xs={12}>
                      {voterIdImg.preview ? (
                        <Button
                          style={{ color: "red" }}
                          variant="text"
                          onClick={() =>
                            setVoterIdImg({
                              preview: "",
                              raw: "",
                            })
                          }
                        >
                          Delete
                        </Button>
                      ) : (
                        <p>Upload Voter Id Image</p>
                      )}
                    </Grid>
                    <Grid item md={4} sm={8} xs={12}>
                      <label htmlFor="upload-button-voter">
                        {voterIdImg.preview ? (
                          <img
                            src={voterIdImg.preview}
                            alt="profile-pic"
                            className={classes.avatar}
                          />
                        ) : (
                          <>
                            <img
                              src="/assets/images/file-types/006-png.svg"
                              className={classes.avatar}
                              alt="avatar"
                            />
                          </>
                        )}
                      </label>
                      <input
                        accept="image/*"
                        type="file"
                        id="upload-button-voter"
                        className="hidden"
                        onChange={handleVoterIdPic}
                      />
                    </Grid>
                  </>
                )}
                {values.bank_account && (
                  <>
                    <Grid item xs={12}>
                      <Divider />
                    </Grid>
                    <Grid item md={2} sm={4} xs={12}>
                      Account Number
                    </Grid>
                    <Grid item md={4} sm={8} xs={12}>
                      <TextField
                        fullWidth
                        className="min-w-188"
                        label="Account Number"
                        name="account_number"
                        size="small"
                        variant="outlined"
                        value={values.account_number || ""}
                        onChange={handleChange}
                      />
                    </Grid>

                    <Grid item md={2} sm={4} xs={12}>
                      {passbook.preview ? (
                        <Button
                          style={{ color: "red" }}
                          variant="text"
                          onClick={() =>
                            setPassbook({
                              preview: "",
                              raw: "",
                            })
                          }
                        >
                          Delete
                        </Button>
                      ) : (
                        <p>Upload Passbook Image</p>
                      )}
                    </Grid>
                    <Grid item md={4} sm={8} xs={12}>
                      <label htmlFor="upload-passbook">
                        {passbook.preview ? (
                          <img
                            src={passbook.preview}
                            alt="passbook-pic"
                            className={classes.avatar}
                          />
                        ) : (
                          <>
                            <img
                              src="/assets/images/file-types/006-png.svg"
                              className={classes.avatar}
                              alt="avatar"
                            />
                          </>
                        )}
                      </label>
                      <input
                        accept="image/*"
                        type="file"
                        id="upload-passbook"
                        className="hidden"
                        onChange={handlePassbook}
                      />
                    </Grid>
                  </>
                )}

                <Grid item xs={12}>
                  <Divider />
                </Grid>
                <Grid item md={2} sm={4} xs={12}>
                  Other Cards
                </Grid>
                <Grid item md={10} sm={8} xs={12}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Health Card"
                    name="health_card"
                    checked={values.health_card || false}
                    onChange={handleChange}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Senior Citizen Card"
                    name="senior_citizen_card"
                    checked={values.senior_citizen_card || false}
                    onChange={handleChange}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Labour Card"
                    name="labour_card"
                    checked={values.labour_card || false}
                    onChange={handleChange}
                  />
                </Grid>

                {values.health_card && (
                  <>
                    <Grid item xs={12}>
                      <Divider />
                    </Grid>
                    <Grid item md={2} sm={4} xs={12}>
                      Health Card No.
                    </Grid>
                    <Grid item md={4} sm={8} xs={12}>
                      <TextField
                        fullWidth
                        className="min-w-188"
                        label="Health Card No."
                        name="health_card_no"
                        size="small"
                        variant="outlined"
                        value={values.health_card_no || ""}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item md={2} sm={4} xs={12}>
                      {healthCardImg.preview ? (
                        <Button
                          style={{ color: "red" }}
                          variant="text"
                          onClick={() =>
                            setHealthCardImg({
                              preview: "",
                              raw: "",
                            })
                          }
                        >
                          Delete
                        </Button>
                      ) : (
                        <p>Upload Health Card Image</p>
                      )}
                    </Grid>
                    <Grid item md={4} sm={8} xs={12}>
                      <label htmlFor="upload-button-health">
                        {healthCardImg.preview ? (
                          <img
                            src={healthCardImg.preview}
                            alt="profile-pic"
                            className={classes.avatar}
                          />
                        ) : (
                          <>
                            <img
                              src="/assets/images/file-types/006-png.svg"
                              className={classes.avatar}
                              alt="avatar"
                            />
                          </>
                        )}
                      </label>
                      <input
                        accept="image/*"
                        type="file"
                        id="upload-button-health"
                        className="hidden"
                        onChange={handleHealthCard}
                      />
                    </Grid>
                  </>
                )}
                {values.labour_card && (
                  <>
                    <Grid item xs={12}>
                      <Divider />
                    </Grid>
                    <Grid item md={2} sm={4} xs={12}>
                      Labour Card No.
                    </Grid>
                    <Grid item md={4} sm={8} xs={12}>
                      <TextField
                        fullWidth
                        className="min-w-188"
                        label="Labour Card No."
                        name="labour_card_no"
                        size="small"
                        variant="outlined"
                        value={values.labour_card_no || ""}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item md={2} sm={4} xs={12}>
                      {labourCardImg.preview ? (
                        <Button
                          style={{ color: "red" }}
                          variant="text"
                          onClick={() =>
                            setLabourCardImg({
                              preview: "",
                              raw: "",
                            })
                          }
                        >
                          Delete
                        </Button>
                      ) : (
                        <p>Upload Labour Card Image</p>
                      )}
                    </Grid>
                    <Grid item md={4} sm={8} xs={12}>
                      <label htmlFor="upload-button-labour">
                        {labourCardImg.preview ? (
                          <img
                            src={labourCardImg.preview}
                            alt="profile-pic"
                            className={classes.avatar}
                          />
                        ) : (
                          <>
                            <img
                              src="/assets/images/file-types/006-png.svg"
                              className={classes.avatar}
                              alt="avatar"
                            />
                          </>
                        )}
                      </label>
                      <input
                        accept="image/*"
                        type="file"
                        id="upload-button-labour"
                        className="hidden"
                        onChange={handleLabourCard}
                      />
                    </Grid>
                  </>
                )}
                {values.senior_citizen_card && (
                  <>
                    <Grid item xs={12}>
                      <Divider />
                    </Grid>
                    <Grid item md={2} sm={4} xs={12}>
                      Senior Citizen Card No.
                    </Grid>
                    <Grid item md={4} sm={8} xs={12}>
                      <TextField
                        fullWidth
                        className="min-w-188"
                        label="Senior Citizen Card No."
                        name="senior_citizen_card_no"
                        size="small"
                        variant="outlined"
                        value={values.senior_citizen_card_no || ""}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item md={2} sm={4} xs={12}>
                      {seniorCitizenCard.preview ? (
                        <Button
                          style={{ color: "red" }}
                          variant="text"
                          onClick={() =>
                            setSeniorCitizenCard({
                              preview: "",
                              raw: "",
                            })
                          }
                        >
                          Delete
                        </Button>
                      ) : (
                        <p>Upload Senior Citizen Card Image</p>
                      )}
                    </Grid>
                    <Grid item md={4} sm={8} xs={12}>
                      <label htmlFor="upload-button-scitizen">
                        {seniorCitizenCard.preview ? (
                          <img
                            src={seniorCitizenCard.preview}
                            alt="profile-pic"
                            className={classes.avatar}
                          />
                        ) : (
                          <>
                            <img
                              src="/assets/images/file-types/006-png.svg"
                              className={classes.avatar}
                              alt="avatar"
                            />
                          </>
                        )}
                      </label>
                      <input
                        accept="image/*"
                        type="file"
                        id="upload-button-scitizen"
                        className="hidden"
                        onChange={handleSeniorCitizenCard}
                      />
                    </Grid>
                  </>
                )}

                <Grid item xs={12}>
                  <Divider />
                </Grid>

                <Grid item md={2} sm={4} xs={12}>
                  Priority Support
                </Grid>
                <Grid item md={4} sm={8} xs={12}>
                  <TextField
                    fullWidth
                    className="min-w-188"
                    label="Priority Support"
                    name="priority_support"
                    size="small"
                    variant="outlined"
                    value={values.priority_support || ""}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Divider />
                </Grid>
              </Grid>

              <div className="mb-8">
                <MemberItemTable
                  values={values}
                  setFieldValue={setFieldValue}
                  handleChange={handleChange}
                />
              </div>

              <div className="mt-6">
                <Button color="primary" variant="contained" type="submit">
                  Submit
                </Button>
              </div>
              <Snackbar
                open={open}
                autoHideDuration={2000}
                onClose={handleClose}
              >
                <Alert onClose={handleClose} severity="success">
                  Sucessfully Added New Family!
                </Alert>
              </Snackbar>
            </form>
          )}
        </Formik>
      </Card>
    </div>
  );
};

const bloodGroupList = [
  "A +",
  "A -",
  "B +",
  "B -",
  "O +",
  "O -",
  "AB +",
  "AB -",
];

const eduStatus = ["Pursuing", "Completed"];

const maritalStatusList = [
  "Single",
  "Married",
  "Engaged",
  "Widowed",
  "Divorced",
  "Abandoned",
];

const initialValues = {};

export default MemberForm;
