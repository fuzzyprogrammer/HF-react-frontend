import React, { useState, useEffect } from "react";
import { Breadcrumb } from "matx";
import Axios from "axios";
import MUIDataTable from "mui-datatables";
<<<<<<< HEAD
import {
  Avatar,
  Grow,
  Icon,
  IconButton,
  TextField,
  Chip,
  Button,
} from "@material-ui/core";
import ControlPointSharpIcon from "@material-ui/icons/ControlPointSharp";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import BarChartIcon from "@material-ui/icons/BarChart";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme) => ({
  icon: {
    display: "inline",
    margin: "5px",
    border: "1px solid #ddd",
    borderRadius: "50%",
    padding: "1px",
    cursor: "pointer",
  },
}));

const FamilyList = () => {
  const classes = useStyles();
  const [isAlive, setIsAlive] = useState(true);
  const [familyList, setFamilyList] = useState([]);

  useEffect(() => {
    Axios.get("/api/hffamilies").then(({ data }) => {
      if (isAlive) setFamilyList(data);
=======
import { Avatar, Grow, Icon, IconButton, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";

const FamilyList = () => {
  const [isAlive, setIsAlive] = useState(true);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    Axios.get("/api/user/all").then(({ data }) => {
      if (isAlive) setUserList(data);
>>>>>>> main
    });
    return () => setIsAlive(false);
  }, [isAlive]);

<<<<<<< HEAD
  console.log(familyList);

=======
>>>>>>> main
  const columns = [
    {
      name: "name", // field name in the row object
      label: "Name", // column title that will be shown in table
      options: {
        filter: true,
        customBodyRenderLite: (dataIndex) => {
<<<<<<< HEAD
          let family = familyList[dataIndex];

          return (
            <div className="flex items-center">
              <Avatar className="w-48 h-48" src={family?.imgUrl} />
              <div className="ml-3">
                <h5 className="my-0 text-15">{family?.family_code}</h5>
                <Chip
                  variant="outlined"
                  color={family?.ration_card_type === "BPL" ? "primary" : "secondary"}
                  label={family?.ration_card_type}
                  size="small"
                />
                {/* <small className="text-muted"></small> */}
=======
          let user = userList[dataIndex];

          return (
            <div className="flex items-center">
              <Avatar className="w-48 h-48" src={user?.imgUrl} />
              <div className="ml-3">
                <h5 className="my-0 text-15">{user?.name}</h5>
                <small className="text-muted">{user?.email}</small>
>>>>>>> main
              </div>
            </div>
          );
        },
      },
    },
    {
<<<<<<< HEAD
      name: "street",
      label: "Street",
      options: {
        filter: true,
        customBodyRenderLite: (dataIndex) => (
          <span className="ellipsis">{familyList[dataIndex].street}</span>
        ),
      },
    },
    {
      name: "category",
      label: "Category",
      options: {
        filter: true,
      },
    },
    {
      name: "members",
      label: "Members",
      options: {
        filter: true,
      },
    },
=======
      name: "address",
      label: "Address",
      options: {
        filter: true,
        // customBodyRenderLite: (dataIndex) => (
        //   <span className="ellipsis">{userList[dataIndex].address}</span>
        // ),
      },
    },

>>>>>>> main
    {
      name: "action",
      label: " ",
      options: {
        filter: false,
        customBodyRenderLite: (dataIndex) => (
          <div className="flex items-center">
<<<<<<< HEAD
            <div className="flex-grow">
              <Link to={`/pages/family-form/${familyList[dataIndex].id}`}>
                <IconButton className={classes.icon}>
                  <Tooltip title="Edit Family">
                    <Icon>edit</Icon>
                  </Tooltip>
                </IconButton>
              </Link>
              <Link
                to={`/pages/family-member-form/${familyList[dataIndex].id}`}
              >
                <IconButton className={classes.icon}>
                  <Tooltip title="Add Family Member">
                    <Icon>add</Icon>
                  </Tooltip>
                </IconButton>
              </Link>
              <Link
                to={`/pages/view-family-report/${familyList[dataIndex].id}`}
              >
                <IconButton className={classes.icon}>
                  <Tooltip title="Family Report Card">
                    <BarChartIcon />
                  </Tooltip>
                </IconButton>
              </Link>
              <Link to={`/pages/view-family/${familyList[dataIndex].id}`}>
                <IconButton className={classes.icon}>
                  <Tooltip title="Family Details">
                    <Icon>arrow_right_alt</Icon>
                  </Tooltip>
                </IconButton>
              </Link>
            </div>
=======
            <div className="flex-grow"></div>
            <Link to="/pages/new-customer">
              <IconButton>
                <Icon>edit</Icon>
              </IconButton>
            </Link>
            <Link to="/pages/view-customer">
              <IconButton>
                <Icon>arrow_right_alt</Icon>
              </IconButton>
            </Link>
>>>>>>> main
          </div>
        ),
      },
    },
  ];

  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb
          routeSegments={[
<<<<<<< HEAD
            { name: "Families", path: "/pages/family-list" },
            { name: "Family List" },
          ]}
        />
      </div>
      <div className="mb-sm-30" >
        <Link to={`/pages/family-form/`}>
          <Button
            color="primary"
            variant="outlined"
            size="large"
            style={{ position: "absolute", right: "30px", top: "20px" }}
          >
            <ControlPointSharpIcon />
            &nbsp; Family
          </Button>
        </Link>
      </div>

      <div className="overflow-auto" >
        <div className="min-w-750">
          <MUIDataTable
            title={"All Families"}
            data={familyList}
=======
            { name: "Pages", path: "/pages" },
            { name: "Customer List" },
          ]}
        />
      </div>
      <div className="overflow-auto">
        <div className="min-w-750">
          <MUIDataTable
            title={"All Customers"}
            data={userList}
>>>>>>> main
            columns={columns}
            options={{
              filterType: "textField",
              responsive: "standard",
              // selectableRows: "none", // set checkbox for each row
              // search: false, // set search option
              // filter: false, // set data filter option
              // download: false, // set download option
              // print: false, // set print option
              // pagination: true, //set pagination option
              // viewColumns: false, // set column option
              elevation: 0,
              rowsPerPageOptions: [10, 20, 40, 80, 100],
              customSearchRender: (
                searchText,
                handleSearch,
                hideSearch,
                options
              ) => {
                return (
                  <Grow appear in={true} timeout={300}>
                    <TextField
                      variant="outlined"
                      size="small"
                      fullWidth
                      onChange={({ target: { value } }) => handleSearch(value)}
                      InputProps={{
                        style: {
                          paddingRight: 0,
                        },
                        startAdornment: (
                          <Icon className="mr-2" fontSize="small">
                            search
                          </Icon>
                        ),
                        endAdornment: (
                          <IconButton onClick={hideSearch}>
                            <Icon fontSize="small">clear</Icon>
                          </IconButton>
                        ),
                      }}
                    />
                  </Grow>
                );
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default FamilyList;
