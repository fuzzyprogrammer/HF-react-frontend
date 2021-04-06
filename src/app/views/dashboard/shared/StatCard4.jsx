import React from "react";
import { Grid, Card, IconButton, Icon } from "@material-ui/core";

<<<<<<< HEAD
const StatCard4 = ({analiticalData}) => {
  const numOfUsers = analiticalData?.users?.length || 0;
  const numOfJamaths = analiticalData?.jamaths?.length || 0;
  const numOfFamilies = analiticalData?.families?.length || 0;
  const numOfFamilyMembers = analiticalData?.family_members?.length || 0;

  const statList = [
    {
      icon: "colorize",
      amount: numOfUsers,
      title: "Users",
    },
    {
      icon: "attachment",
      amount: numOfJamaths,
      title: "Jamaths",
    },
    {
      icon: "mode_comment",
      amount: numOfFamilies,
      title: "Families",
    },
    {
      icon: "remove_red_eye",
      amount: numOfFamilyMembers,
      title: "Family Members",
=======
const StatCard4 = () => {
  const statList = [
    {
      icon: "colorize",
      amount: 48,
      title: "New Posts",
    },
    {
      icon: "attachment",
      amount: 291,
      title: "Attached Files",
    },
    {
      icon: "mode_comment",
      amount: 291,
      title: "Comments",
    },
    {
      icon: "remove_red_eye",
      amount: 110,
      title: "Total Views",
>>>>>>> main
    },
  ];

  return (
    <div>
      <Grid container spacing={3}>
        {statList.map((item, ind) => (
          <Grid key={item.title} item md={6} xs={12}>
            <Card
              elevation={3}
              className="p-5 flex-column justify-center items-center"
            >
              <div className="mb-6px">
                <IconButton className="p-3 bg-light-gray">
                  <Icon className="text-muted">{item.icon}</Icon>
                </IconButton>
              </div>

              <h3 className="mt-1 text-32">{item.amount.toLocaleString()}</h3>
              <p className="m-0 text-muted">{item.title}</p>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default StatCard4;
