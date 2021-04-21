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
import { deleteJamath } from "./TableService";
import MemberEditorDialog from "./MemberEditorDialog";
import { Breadcrumb, ConfirmationDialog } from "matx";
import shortid from "shortid";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import axios from "axios";

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

const JamathTable = () => {
  let { talukId } = useParams();

  const [uid, setUid] = useState(null);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);
  const [jamath, setJamath] = useState(null);
  const [jamathList, setJamathList] = useState([]);
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

  const handleDeleteJamath = (jamath) => {
    setJamath(jamath);
    setShouldOpenConfirmationDialog(true);
  };

  const handleConfirmationResponse = () => {
    deleteJamath(jamath).then(() => {
      handleDialogClose();
    });
  };

  const updatePageData = () => {
    if (talukId) {
      axios.get(`/api/taluk-jamath/${talukId}`).then(({ data }) => {
        setJamathList(data);
      });
    }
  };

  useEffect(() => {
    updatePageData();
  }, []);

  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb routeSegments={[{ name: "jamath Table" }]} />
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
        Add New Jamath
      </Button>
      <Card className="w-full overflow-auto" elevation={6}>
        <Table
          className={clsx("whitespace-pre min-w-750", classes.productTable)}
        >
          <TableHead>
            <TableRow>
              <TableCell colSpan={4}>Jamath</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {jamathList
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((jamath, index) => (
                <TableRow hover key={shortid.generate()}>
                  <TableCell colSpan={4} className="px-1" align="left">
                    {jamath.name}
                  </TableCell>

                  <TableCell className="px-0 border-none">
                    <Link to={`/pages/forms/${jamath.id}`}>
                      <Tooltip title="Access Setting">
                        <IconButton>
                          <Icon color="secondary">settings</Icon>
                        </IconButton>
                      </Tooltip>
                    </Link>
                    <Tooltip title="Edit">
                      <IconButton
                        onClick={() => {
                          setUid(jamath?.id);
                          setShouldOpenEditorDialog(true);
                        }}
                      >
                        <Icon color="primary">edit</Icon>
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <IconButton onClick={() => handleDeleteJamath(jamath)}>
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
          count={jamathList?.length}
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
            talukId={talukId}
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

export default JamathTable;
