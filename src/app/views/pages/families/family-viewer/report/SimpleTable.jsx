import React, { useEffect, useState } from "react";
import {
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  TableContainer,
  Avatar,
  Badge,
  Paper,
  Grid,
  Divider,
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./report.css";

const SimpleTable = () => {
  const { familyId } = useParams();
  const [familyData, setFamilyData] = useState();
  const [isAlive, setIsAlive] = useState(true);
  const [family, setFamily] = useState();

  useEffect(() => {
    axios.get(`api/family-reports/${familyId}`).then(({ data }) => {
      if (isAlive) setFamily(data);
      if (isAlive) setFamilyData(data.allFamilyMembers);
    });
    return () => setIsAlive(false);
  }, [isAlive]);

  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      // "&:nth-of-type(odd)": {
      //   backgroundColor: theme.palette.action.hover,
      // },
    },
  }))(TableRow);

  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
    },
    container: {
      width: "100%",
      maxHeight: 480,
    },
    table: {
      minWidth: 700,
    },
    large: {
      width: "75",
      height: "75",
    },
    leftSticky: {
      fontWeight: "500",
      fontSize: "15px",
      color: "#000080",
      position: "sticky",
      left: 0,
      zIndex: 1,
      backgroundColor: "#fff",
    },
    sticky: {
      position: "sticky",
      top: 0,
      zIndex: 1,
      backgroundColor: "white",
    },
    bold: {
      fontWeight: "bold",
      textAlign: "center",
      fontSize: "16px",
    },
    subHeading2: {
      fontWeight: "bold",
      textAlign: "left",
      fontSize: "14px",
    },
    childTable: {
      // borderCollapse: "collapse",
    },
    tdTitle: {
      minWidth: "95px",
    },
    tdColon: {
      minWidth: "10px",
    },
    tdValue: {
      minWidth: "130px",
    },
  }));

  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item md={4} sm={4} xs={4}>
            <Grid item>
              <span className={classes.subHeading2}>District &emsp;:</span>{" "}
              &emsp; {"askdjfakl"}
            </Grid>
            <Grid item>
              <span className={classes.subHeading2}>
                Taluq &nbsp; &nbsp;&emsp;:
              </span>{" "}
              &emsp; {"askdjfakl"}
            </Grid>
          </Grid>
          <Grid item md={4} sm={4} xs={12} className={classes.bold}>
            <Grid col md={12} style={{ fontSize: "22px" }}>
              NGO CO-ORDINATION
            </Grid>
            <Grid col md={12} style={{ fontSize: "18px" }}>
              FAMILY SURVEY FORM
            </Grid>
          </Grid>
          <Grid item md={4} sm={4} xs={4} style={{ paddingLeft: "60px" }}>
            <Grid item>
              <span className={classes.subHeading2}>Jamath &emsp;:</span> &emsp;
              {"askdjfakl"}
            </Grid>
            <Grid item>
              <span className={classes.subHeading2}>Area &emsp; &emsp;:</span>
              &emsp; {"askdjfakl"}
            </Grid>
          </Grid>
        </Grid>

        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item md={4} sm={4} xs={4}>
            <span className={classes.subHeading2}>Family ID :</span>
            {" " + family?.family_code}
          </Grid>
          <Grid item md={4} sm={4} xs={4} className={classes.bold}>
            Family Information
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
        </Grid>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell className={classes.subHeading2}>
                Present Address
              </StyledTableCell>
              <StyledTableCell className={classes.subHeading2}>
                Previous Address
              </StyledTableCell>
              <StyledTableCell className={classes.subHeading2}>Other Info</StyledTableCell>
              <StyledTableCell className={classes.subHeading2}>
                Bank Account Info
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <StyledTableCell colSpan={1} className="px-0 capitalize">
                <table className={classes.childTable}>
                  <tbody>
                    <tr>
                      <td align="left" className={classes.tdTitle}>
                        Address
                      </td>
                      <td align="left" className={classes.tdColon}>
                        :
                      </td>
                      <td align="left" className={classes.tdValue}>
                        {family?.address[0]?.address}
                      </td>
                    </tr>
                    <tr>
                      <td align="left">Street</td>
                      <td align="left">:</td>
                      <td align="left">{family?.address[0]?.street}</td>
                    </tr>
                    <tr>
                      <td align="left">City</td>
                      <td align="left">:</td>
                      <td align="left">{family?.address[0]?.city}</td>
                    </tr>
                    <tr>
                      <td align="left">State</td>
                      <td align="left">:</td>
                      <td align="left">{family?.address[0]?.state}</td>
                    </tr>
                    <tr>
                      <td align="left">Country</td>
                      <td align="left">:</td>
                      <td align="left">{family?.address[0]?.country}</td>
                    </tr>
                    <tr>
                      <td align="left">Pincode</td>
                      <td align="left">:</td>
                      <td align="left">{family?.address[0]?.pincode}</td>
                    </tr>
                  </tbody>
                </table>
              </StyledTableCell>
              <StyledTableCell colSpan={1} className="px-0 capitalize">
                <table className={classes.childTable}>
                  <tbody>
                    <tr>
                      <td align="left" className={classes.tdTitle}>
                        Address
                      </td>
                      <td align="left" className={classes.tdColon}>
                        :
                      </td>
                      <td align="left" className={classes.tdValue}>
                        {family?.name}
                      </td>
                    </tr>
                    <tr>
                      <td align="left">Street</td>
                      <td align="left">:</td>
                      <td align="left">{family?.name}</td>
                    </tr>
                    <tr>
                      <td align="left">City</td>
                      <td align="left">:</td>
                      <td align="left">{family?.name}</td>
                    </tr>
                    <tr>
                      <td align="left">State</td>
                      <td align="left">:</td>
                      <td align="left">{family?.name}</td>
                    </tr>
                    <tr>
                      <td align="left">Country</td>
                      <td align="left">:</td>
                      <td align="left">{family?.name}</td>
                    </tr>
                    <tr>
                      <td align="left">Pincode</td>
                      <td align="left">:</td>
                      <td align="left">{family?.name}</td>
                    </tr>
                  </tbody>
                </table>
              </StyledTableCell>
              <StyledTableCell className="px-0 capitalize">
                <table className={classes.childTable}>
                  <tbody>
                    <tr>
                      <td align="left" className={classes.tdTitle}>
                        Religion
                      </td>
                      <td align="left" className={classes.tdColon}>
                        :
                      </td>
                      <td align="left" className={classes.tdValue}>
                        {family?.religion}
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style={{ minWidth: "100px" }}>
                        Mother Tongue
                      </td>
                      <td align="left">:</td>
                      <td align="left">{family?.language}</td>
                    </tr>
                    <tr>
                      <td align="left">Annual Income</td>
                      <td align="left">:</td>
                      <td align="left">{family?.income}</td>
                    </tr>
                    <tr>
                      <td align="left">
                        {family?.contacts[0].hasOwnProperty("email")
                          ? "Email ID"
                          : "Contact No"}
                      </td>
                      <td align="left">:</td>
                      <td align="left">
                        {family?.contacts[0].hasOwnProperty("email")
                          ? family?.contacts[0].email
                          : family?.contacts[0].phone}
                      </td>
                    </tr>
                    <tr>
                      <td align="left">
                        {family?.contacts[1].hasOwnProperty("email")
                          ? "Email ID"
                          : "Contact No"}
                      </td>
                      <td align="left">:</td>
                      <td align="left">
                        {family?.contacts[1].hasOwnProperty("email")
                          ? family?.contacts[1].email
                          : family?.contacts[1].phone}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </StyledTableCell>
              <StyledTableCell colSpan={1} className="px-0 capitalize">
                <table className={classes.childTable}>
                  <tbody>
                    <tr>
                      <td align="left">A/C No</td>
                      <td align="left">:</td>
                      <td align="left">{family?.bank?.account_no}</td>
                    </tr>
                    <tr>
                      <td align="left">Bank Name</td>
                      <td align="left">:</td>
                      <td align="left">{family?.bank?.bank_name}</td>
                    </tr>
                    <tr>
                      <td align="left">Bank Branch</td>
                      <td align="left">:</td>
                      <td align="left">{family?.bank?.bank_branch}</td>
                    </tr>
                    <tr>
                      <td align="left">IFSC Code</td>
                      <td align="left">:</td>
                      <td align="left">{family?.bank?.ifsc_code}</td>
                    </tr>
                  </tbody>
                </table>
              </StyledTableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item row md={4} sm={4} xs={4}></Grid>
          <Grid item md={4} sm={4} xs={12} className={classes.bold}>
            General Information
          </Grid>
          <Grid item row md={4} sm={4} xs={4}>
            <Grid col md={12}>
              <div>
                {console.log(family)}
                Total Members: {family?.total_members} &emsp; Male:{" "}
                {family?.males}&emsp; Female: {family?.females}
              </div>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
        </Grid>
        <div></div>
        <Table
          className={classes.table}
          aria-label="customized table sticky "
          stickyHeader
        >
          <TableHead>
            <TableRow>
              <StyledTableCell
                // component="th"
                styles={{
                  fontWeight: 500,
                  color: "#000080",
                  position: "sticky",
                  left: 0,
                  top: 0,
                  zIndex: 2,
                  backgroundColor: "white",
                }}
              >
                Profile Picture
              </StyledTableCell>
              {familyData?.map((member) => (
                <StyledTableCell align="left" className={classes.sticky}>
                  <Badge
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                    color="primary"
                    overlap="circle"
                    badgeContent={member?.isHead && "Head"}
                    invisible={!member?.isHead}
                  >
                    <Avatar
                      src={member?.profile_img_url}
                      className="w-48 h-48"
                    />
                  </Badge>
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow>
              <StyledTableCell
                component="th"
                scope="row"
                className={classes.leftSticky}
              >
                Name
              </StyledTableCell>
              {familyData?.map((member, index) => (
                <StyledTableCell align="left" key={index}>
                  {member?.name}
                </StyledTableCell>
              ))}
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell
                component="th"
                scope="row"
                className={classes.leftSticky}
              >
                Relationship
              </StyledTableCell>
              {familyData?.map((member, index) => (
                <StyledTableCell align="left" key={index}>
                  {member?.relationship}
                </StyledTableCell>
              ))}
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell
                component="th"
                className={classes.leftSticky}
                scope="row"
              >
                Age
              </StyledTableCell>
              {familyData?.map((member, index) => (
                <StyledTableCell align="left" key={index}>
                  {member?.age}
                </StyledTableCell>
              ))}
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell
                component="th"
                className={classes.leftSticky}
                scope="row"
              >
                Gender
              </StyledTableCell>
              {familyData?.map((member, index) => (
                <StyledTableCell align="left" key={index}>
                  {member?.gender}
                </StyledTableCell>
              ))}
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell
                component="th"
                className={classes.leftSticky}
                scope="row"
              >
                Contact
              </StyledTableCell>
              {familyData?.map((member, index) => (
                <StyledTableCell align="left" key={index}>
                  {member?.family_member_contact?.map((contact) => {
                    if (contact.contact?.contact_type === "Contact No.") {
                      return contact.contact.value;
                    }
                  })}
                </StyledTableCell>
              ))}
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell
                component="th"
                className={classes.leftSticky}
                scope="row"
              >
                Bank Account
              </StyledTableCell>
              {familyData?.map((member, index) => (
                <StyledTableCell align="left" key={index}>
                  {member?.bank.account_no === "undefined" ? "No" : "Yes"}
                </StyledTableCell>
              ))}
            </StyledTableRow>

            <StyledTableRow>
              <StyledTableCell
                component="th"
                className={classes.leftSticky}
                scope="row"
              >
                Marital Status
              </StyledTableCell>
              {familyData?.map((member, index) => (
                <StyledTableCell align="left" key={index}>
                  {member?.marital_status}
                </StyledTableCell>
              ))}
            </StyledTableRow>

            <StyledTableRow>
              <StyledTableCell
                colSpan={familyData?.length + 1}
                component="th"
                scope="row"
                align="center"
                fontSize={24}
                className="empty"
              ></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell
                colSpan={familyData?.length + 1}
                component="th"
                scope="row"
                align="center"
                fontSize={24}
                className={classes.bold}
              >
                Food
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell
                component="th"
                className={classes.leftSticky}
                scope="row"
              >
                Ration Card Type
              </StyledTableCell>
              <StyledTableCell colSpan={familyData?.length} align="left">
                {family?.ration_card_type}
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell
                component="th"
                className={classes.leftSticky}
                scope="row"
              >
                Source
              </StyledTableCell>
              <StyledTableCell colSpan={familyData?.length} align="left">
                {family?.food?.source}
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell
                component="th"
                className={classes.leftSticky}
                scope="row"
              >
                Support Required
              </StyledTableCell>
              <StyledTableCell colSpan={familyData?.length} align="left">
                {family?.food?.support_required}
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell
                colSpan={familyData?.length + 1}
                component="th"
                scope="row"
                align="center"
                fontSize={24}
                className="empty"
              ></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell
                colSpan={familyData?.length + 1}
                component="th"
                scope="row"
                align="center"
                fontSize={24}
                className={classes.bold}
              >
                Infrastructure
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell
                component="th"
                className={classes.leftSticky}
                scope="row"
              >
                Type
              </StyledTableCell>
              <StyledTableCell colSpan={familyData?.length} align="left">
                {family?.shelter?.type}
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell
                component="th"
                className={classes.leftSticky}
                scope="row"
              >
                Ownership
              </StyledTableCell>
              <StyledTableCell colSpan={familyData?.length} align="left">
                {family?.shelter?.ownership}
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell
                component="th"
                className={classes.leftSticky}
                scope="row"
              >
                Support Required
              </StyledTableCell>
              <StyledTableCell colSpan={familyData?.length} align="left">
                {family?.shelter?.support_required}
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell
                colSpan={familyData?.length + 1}
                component="th"
                scope="row"
                align="center"
                fontSize={24}
                className="empty"
              ></StyledTableCell>
            </StyledTableRow>

            <StyledTableRow>
              <StyledTableCell
                colSpan={familyData?.length + 1}
                component="th"
                scope="row"
                align="center"
                fontSize={24}
                className={classes.bold}
              >
                Education
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell
                component="th"
                className={classes.leftSticky}
                scope="row"
              >
                Religious Education / Year
              </StyledTableCell>
              {familyData?.map((member, index) => (
                <StyledTableCell align="left" key={index}>
                  {(member?.religious_edu?.academic_detail?.class
                    ? member?.religious_edu?.academic_detail?.class
                    : "N/A") +
                    " / " +
                    (member?.religious_edu?.status === "Complete"
                      ? member?.religious_edu?.academic_detail?.academic_year
                      : member?.religious_edu?.status)}
                </StyledTableCell>
              ))}
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell
                component="th"
                className={classes.leftSticky}
                scope="row"
              >
                General Education / Year
              </StyledTableCell>
              {familyData?.map((member, index) => (
                <StyledTableCell align="left" key={index}>
                  {(member?.general_edu?.academic_detail?.class
                    ? member?.general_edu?.academic_detail?.class
                    : "N/A") +
                    " / " +
                    (member?.general_edu?.status === "Complete"
                      ? member?.general_edu?.academic_detail?.academic_year
                      : member?.general_edu?.status)}
                </StyledTableCell>
              ))}
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell
                component="th"
                className={classes.leftSticky}
                scope="row"
              >
                Institute
              </StyledTableCell>
              {familyData?.map((member, index) => (
                <StyledTableCell align="left" key={index}>
                  {member?.general_edu?.academic_detail?.academy_name
                    ? member?.general_edu?.academic_detail?.academy_name
                    : "N/A"}
                </StyledTableCell>
              ))}
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell
                component="th"
                className={classes.leftSticky}
                scope="row"
              >
                Other Courses
              </StyledTableCell>
              {familyData?.map((member, index) => (
                <StyledTableCell align="left" key={index}>
                  {member?.other_course !== ("undefined" || null)
                    ? member?.other_course
                    : "N/A"}
                </StyledTableCell>
              ))}
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell
                component="th"
                className={classes.leftSticky}
                scope="row"
              >
                Hobby
              </StyledTableCell>
              {familyData?.map((member, index) => (
                <StyledTableCell align="left" key={index}>
                  {member?.hobby !== ("undefined" || null)
                    ? member?.hobby
                    : "N/A"}
                </StyledTableCell>
              ))}
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell
                component="th"
                className={classes.leftSticky}
                scope="row"
              >
                Skill
              </StyledTableCell>
              {familyData?.map((member, index) => (
                <StyledTableCell align="left" key={index}>
                  {member?.skill !== ("undefined" || null)
                    ? member?.skill
                    : "N/A"}
                </StyledTableCell>
              ))}
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell
                component="th"
                className={classes.leftSticky}
                scope="row"
              >
                Goal
              </StyledTableCell>
              {familyData?.map((member, index) => (
                <StyledTableCell align="left" key={index}>
                  {member?.goal !== ("undefined" || null)
                    ? member?.goal
                    : "N/A"}
                </StyledTableCell>
              ))}
            </StyledTableRow>

            <StyledTableRow>
              <StyledTableCell
                component="th"
                className={classes.leftSticky}
                scope="row"
              >
                Support Received
              </StyledTableCell>
              {familyData?.map((member, index) => (
                <StyledTableCell align="left" key={index}>
                  {member?.edu_support?.support_received !==
                  ("undefined" || null)
                    ? member?.edu_support.support_received
                    : "N/A"}
                </StyledTableCell>
              ))}
            </StyledTableRow>

            <StyledTableRow>
              <StyledTableCell
                component="th"
                className={classes.leftSticky}
                scope="row"
              >
                Support Source
              </StyledTableCell>
              {familyData?.map((member, index) => (
                <StyledTableCell align="left" key={index}>
                  {member?.edu_support?.support_source !== ("undefined" || null)
                    ? member?.edu_support?.support_source
                    : "N/A"}
                </StyledTableCell>
              ))}
            </StyledTableRow>

            <StyledTableRow>
              <StyledTableCell
                component="th"
                className={classes.leftSticky}
                scope="row"
              >
                Support Required
              </StyledTableCell>
              {familyData?.map((member, index) => (
                <StyledTableCell align="left" key={index}>
                  {member?.edu_support?.support_required !==
                  ("undefined" || null)
                    ? member?.edu_support.support_required
                    : "N/A"}
                </StyledTableCell>
              ))}
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell
                colSpan={familyData?.length + 1}
                component="th"
                scope="row"
                align="center"
                fontSize={24}
                className="empty"
              ></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell
                colSpan={familyData?.length + 1}
                component="th"
                scope="row"
                align="center"
                fontSize={24}
                className={classes.bold}
              >
                Self Reliance
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell
                component="th"
                className={classes.leftSticky}
                scope="row"
              >
                Occupation
              </StyledTableCell>
              {familyData?.map((member, index) => (
                <StyledTableCell align="left" key={index}>
                  {member?.occupation_type}
                </StyledTableCell>
              ))}
            </StyledTableRow>

            <StyledTableRow>
              <StyledTableCell
                component="th"
                className={classes.leftSticky}
                scope="row"
              >
                Work Place
              </StyledTableCell>
              {familyData?.map((member, index) => (
                <StyledTableCell align="left" key={index}>
                  {(member?.occupation_type === "Business Owner") | "Job"
                    ? member.occupation_detail.workplace_name
                    : "N/A"}
                </StyledTableCell>
              ))}
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell
                component="th"
                className={classes.leftSticky}
                scope="row"
              >
                Work Place Address
              </StyledTableCell>
              {familyData?.map((member, index) => (
                <StyledTableCell align="left" key={index}>
                  {(member?.occupation_type === "Business Owner") | "Job"
                    ? member.occupation_detail.workplace_address
                    : "N/A"}
                </StyledTableCell>
              ))}
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell
                component="th"
                className={classes.leftSticky}
                scope="row"
              >
                Income
              </StyledTableCell>
              {familyData?.map((member, index) => (
                <StyledTableCell align="left" key={index}>
                  {(member?.occupation_type === "Business Owner") | "Job"
                    ? member.occupation_detail.income
                    : "N/A"}
                </StyledTableCell>
              ))}
            </StyledTableRow>

            <StyledTableRow>
              <StyledTableCell
                component="th"
                className={classes.leftSticky}
                scope="row"
              >
                Support Received
              </StyledTableCell>
              {familyData?.map((member, index) => (
                <StyledTableCell align="left" key={index}>
                  {member?.ocu_support?.support_received !==
                  ("undefined" || null)
                    ? member?.ocu_support.support_received
                    : "N/A"}
                </StyledTableCell>
              ))}
            </StyledTableRow>

            <StyledTableRow>
              <StyledTableCell
                component="th"
                className={classes.leftSticky}
                scope="row"
              >
                Support Source
              </StyledTableCell>
              {familyData?.map((member, index) => (
                <StyledTableCell align="left" key={index}>
                  {member?.ocu_support?.support_source !== ("undefined" || null)
                    ? member?.ocu_support?.support_source
                    : "N/A"}
                </StyledTableCell>
              ))}
            </StyledTableRow>

            <StyledTableRow>
              <StyledTableCell
                component="th"
                className={classes.leftSticky}
                scope="row"
              >
                Support Required
              </StyledTableCell>
              {familyData?.map((member, index) => (
                <StyledTableCell align="left" key={index}>
                  {member?.ocu_support?.support_required !==
                  ("undefined" || null)
                    ? member?.ocu_support?.support_required
                    : "N/A"}
                </StyledTableCell>
              ))}
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell
                colSpan={familyData?.length + 1}
                component="th"
                scope="row"
                align="center"
                fontSize={24}
                className="empty"
              ></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell
                colSpan={familyData?.length + 1}
                component="th"
                scope="row"
                align="center"
                fontSize={24}
                className={classes.bold}
              >
                Health
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell
                component="th"
                className={classes.leftSticky}
                scope="row"
              >
                Blood Group
              </StyledTableCell>
              {familyData?.map((member, index) => (
                <StyledTableCell align="left" key={index}>
                  {member?.blood_group ? member.blood_group : "N/A"}
                </StyledTableCell>
              ))}
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell
                component="th"
                className={classes.leftSticky}
                scope="row"
              >
                Disease / Since
              </StyledTableCell>
              {familyData?.map((member, index) => (
                <StyledTableCell align="left" key={index}>
                  {member?.health?.disease
                    ? member?.health?.disease +
                      " / " +
                      (member?.health?.since ? member?.health?.since : "N/A")
                    : "Nothing"}
                </StyledTableCell>
              ))}
            </StyledTableRow>

            <StyledTableRow>
              <StyledTableCell
                component="th"
                className={classes.leftSticky}
                scope="row"
              >
                Status
              </StyledTableCell>
              {familyData?.map((member, index) => (
                <StyledTableCell align="left" key={index}>
                  {member?.health?.status ? member.health?.status : "N/A"}
                </StyledTableCell>
              ))}
            </StyledTableRow>

            <StyledTableRow>
              <StyledTableCell
                component="th"
                className={classes.leftSticky}
                scope="row"
              >
                Hospital & Place
              </StyledTableCell>
              {familyData?.map((member, index) => (
                <StyledTableCell align="left" key={index}>
                  {member?.health?.hospital
                    ? member?.health?.hospital +
                      ", " +
                      (member?.health?.place ? member?.health?.place : "N/A")
                    : "Nothing"}
                </StyledTableCell>
              ))}
            </StyledTableRow>

            <StyledTableRow>
              <StyledTableCell
                component="th"
                className={classes.leftSticky}
                scope="row"
              >
                Regular Exercise
              </StyledTableCell>
              {familyData?.map((member, index) => (
                <StyledTableCell align="left" key={index}>
                  {member?.health?.exercise ? member.health?.exercise : "N/A"}
                </StyledTableCell>
              ))}
            </StyledTableRow>

            <StyledTableRow>
              <StyledTableCell
                component="th"
                className={classes.leftSticky}
                scope="row"
              >
                Support Received
              </StyledTableCell>
              {familyData?.map((member, index) => (
                <StyledTableCell align="left" key={index}>
                  {member?.health_support &&
                  member?.health_support?.support_received !==
                    ("undefined" || null)
                    ? member?.health_support.support_received
                    : "N/A"}
                </StyledTableCell>
              ))}
            </StyledTableRow>

            <StyledTableRow>
              <StyledTableCell
                component="th"
                className={classes.leftSticky}
                scope="row"
              >
                Support Source
              </StyledTableCell>
              {familyData?.map((member, index) => (
                <StyledTableCell align="left" key={index}>
                  {member?.health_support &&
                  member?.health_support?.support_source !==
                    ("undefined" || null)
                    ? member?.health_support?.support_source
                    : "N/A"}
                </StyledTableCell>
              ))}
            </StyledTableRow>

            <StyledTableRow>
              <StyledTableCell
                component="th"
                className={classes.leftSticky}
                scope="row"
              >
                Support Required
              </StyledTableCell>
              {familyData?.map((member, index) => (
                <StyledTableCell align="left" key={index}>
                  {member?.health_support &&
                  member?.health_support?.support_required !==
                    ("undefined" || null)
                    ? member?.health_support?.support_required
                    : "N/A"}
                </StyledTableCell>
              ))}
            </StyledTableRow>

            <StyledTableRow>
              <StyledTableCell
                colSpan={familyData?.length + 1}
                component="th"
                scope="row"
                align="center"
                fontSize={24}
                className="empty"
              ></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell
                component="th"
                className={classes.leftSticky}
                scope="row"
              >
                Priority Support
              </StyledTableCell>
              {familyData?.map((member, index) => (
                <StyledTableCell align="left" key={index}>
                  {member?.priority_support &&
                  member.priority_support !== "undefined"
                    ? member.priority_support
                    : "N/A"}
                </StyledTableCell>
              ))}
            </StyledTableRow>

            <StyledTableRow>
              <StyledTableCell
                colSpan={familyData?.length + 1}
                component="th"
                scope="row"
                align="center"
                fontSize={24}
                className="empty"
              ></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell
                colSpan={familyData?.length + 1}
                component="th"
                scope="row"
                align="center"
                fontSize={24}
                className={classes.bold}
              >
                Identity Details
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell
                component="th"
                className={classes.leftSticky}
                scope="row"
              >
                Aadhar No.
              </StyledTableCell>
              {familyData?.map((member, index) => (
                <StyledTableCell align="left" key={index}>
                  {member?.aadhar &&
                  member.aadhar.aadhar_card_no !== "undefined"
                    ? member.aadhar.aadhar_card_no
                    : "N/A"}
                </StyledTableCell>
              ))}
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell
                component="th"
                className={classes.leftSticky}
                scope="row"
              >
                Voter Id No.
              </StyledTableCell>
              {familyData?.map((member, index) => (
                <StyledTableCell align="left" key={index}>
                  {member?.voter_id && member.voter_id.voter_id_card_no
                    ? member.voter_id.voter_id_card_no
                    : "N/A"}
                </StyledTableCell>
              ))}
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell
                component="th"
                className={classes.leftSticky}
                scope="row"
              >
                Account No.
              </StyledTableCell>
              {familyData?.map((member, index) => (
                <StyledTableCell align="left" key={index}>
                  {member?.bank && member.bank.account_no !== "undefined"
                    ? member.bank.account_no
                    : "N/A"}
                </StyledTableCell>
              ))}
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell
                colSpan={familyData?.length + 1}
                component="th"
                scope="row"
                align="center"
                fontSize={24}
                className="empty"
              ></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell
                colSpan={familyData?.length + 1}
                component="th"
                scope="row"
                align="center"
                fontSize={24}
                className={classes.bold}
              >
                Other Card Details
              </StyledTableCell>
            </StyledTableRow>

            <StyledTableRow>
              <StyledTableCell
                component="th"
                className={classes.leftSticky}
                scope="row"
              >
                Labour Card No.
              </StyledTableCell>
              {familyData?.map((member, index) => (
                <StyledTableCell align="left" key={index}>
                  {member?.labour && member.labour.labour_card_no
                    ? member.labour.labour_card_no
                    : "N/A"}
                </StyledTableCell>
              ))}
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell
                component="th"
                className={classes.leftSticky}
                scope="row"
              >
                Senior Citizen Card No.
              </StyledTableCell>
              {familyData?.map((member, index) => (
                <StyledTableCell align="left" key={index}>
                  {member?.senior_citizen &&
                  member.senior_citizen.senior_citizen_card_no
                    ? member.senior_citizen.senior_citizen_card_no
                    : "N/A"}
                </StyledTableCell>
              ))}
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell
                component="th"
                className={classes.leftSticky}
                scope="row"
              >
                Health Card No.
              </StyledTableCell>
              {familyData?.map((member, index) => (
                <StyledTableCell align="left" key={index}>
                  {member?.health && member.health.health_card_no
                    ? member.health.health_card_no
                    : "N/A"}
                </StyledTableCell>
              ))}
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default SimpleTable;
