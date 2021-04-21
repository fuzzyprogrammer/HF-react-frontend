import React, { useState, useEffect } from "react";
import {
  IconButton,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Icon,
  TablePagination,
  Button,
  Card,
  Tooltip,
} from "@material-ui/core";
import { Link, useParams } from "react-router-dom";
import { deleteDistrict } from "./TableService";
import MemberEditorDialog from "./MemberEditorDialog";
import { Breadcrumb, ConfirmationDialog } from "matx";
import shortid from "shortid";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import axios from 'axios';

const useStyles = makeStyles(({ palette, ...theme }) => ({
  productTable: {
    "& thead": {
      "& th:first-child": {
        paddingLeft: 16,
      },
    },
    "& td": {
      borderBottom: "none",
    },
    "& td:first-child": {
      paddingLeft: "16px !important",
    },
  },
}));

const DistrictTable = () => {
  let { stateId } = useParams();

  const [uid, setUid] = useState(null);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);
  const [district, setDistrict] = useState(null);
  const [districtList, setDistrictList] = useState([]);
  const [shouldOpenEditorDialog, setShouldOpenEditorDialog] = useState(false);
  const [
    shouldOpenConfirmationDialog,
    setShouldOpenConfirmationDialog,
  ] = useState(false);

  const classes = useStyles();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleDialogClose = () => {
    setShouldOpenEditorDialog(false);
    setShouldOpenConfirmationDialog(false);
    updatePageData();
  };

  const handleDeleteDistrict = (district) => {
    setDistrict(district);
    setShouldOpenConfirmationDialog(true);
  };

  const handleConfirmationResponse = () => {
    deleteDistrict(district).then(() => {
      handleDialogClose();
    });
  };

  const updatePageData = () => {
    axios.get(`/api/state-district/${stateId}`).then(({ data }) => {
      setDistrictList(data);
    });
  };

  useEffect(() => {
      updatePageData();
  }, []);



  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb routeSegments={[{ name: "district Table" }]} />
      </div>

      <Button
        className="mb-4"
        variant="contained"
        color="primary"
        onClick={() => {
          setUid(null);
          setShouldOpenEditorDialog(true);
        }}
      >
        Add New District
      </Button>
      <Card className="w-full overflow-auto" elevation={6}>
        <Table
          className={clsx("whitespace-pre min-w-750", classes.productTable)}
        >
          <TableHead>
            <TableRow>
              <TableCell colSpan={4}>District</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {districtList
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((district, index) => (
                <TableRow hover key={shortid.generate()}>
                  <TableCell colSpan={4} className="px-1" align="left">
                    {district.name}
                  </TableCell>

                  <TableCell className="px-0 border-none">
                  
                    <Link to={`/pages/taluk/${district.id}`}>
                      <Tooltip title="Add Taluk">
                        <IconButton>
                          <Icon color="primary">add</Icon>
                        </IconButton>
                      </Tooltip>
                    </Link>
                      <Tooltip title="Edit">

                    <IconButton
                      onClick={() => {
                        setUid(district.id);
                        setShouldOpenEditorDialog(true);
                      }}
                    >
                      <Icon color="primary">edit</Icon>
                    </IconButton>
                    </Tooltip>
                      <Tooltip title="Delete">
                    
                    <IconButton onClick={() => handleDeleteDistrict(district)}>
                      <Icon color="error">delete</Icon>
                    </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>

        <TablePagination
          className="px-4"
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={districtList?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            "aria-label": "Previous Page",
          }}
          nextIconButtonProps={{
            "aria-label": "Next Page",
          }}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={({ target: { value } }) => setRowsPerPage(value)}
        />

        {shouldOpenEditorDialog && (
          <MemberEditorDialog
            handleClose={handleDialogClose}
            open={shouldOpenEditorDialog}
            uid={uid}
            stateId={stateId}
          />
        )}
        {shouldOpenConfirmationDialog && (
          <ConfirmationDialog
            open={shouldOpenConfirmationDialog}
            onConfirmDialogClose={handleDialogClose}
            onYesClick={handleConfirmationResponse}
            text="Are you sure to delete?"
          />
        )}
      </Card>
    </div>
  );
};

export default DistrictTable;
