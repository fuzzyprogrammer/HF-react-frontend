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
import { Link } from "react-router-dom";
import { getAllState, deleteState } from "./TableService";
import MemberEditorDialog from "./MemberEditorDialog";
import { Breadcrumb, ConfirmationDialog } from "matx";
import shortid from "shortid";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

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

const StateTable = () => {
  const [uid, setUid] = useState(null);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);
  const [state, setState] = useState(null);
  const [stateList, setStateList] = useState([]);
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

  const handleDeleteState = (state) => {
    setState(state);
    setShouldOpenConfirmationDialog(true);
  };

  const handleConfirmationResponse = () => {
    deleteState(state).then(() => {
      handleDialogClose();
    });
  };

  const updatePageData = () => {
    getAllState().then(({ data }) => {
      setStateList(data);
    });
  };

  useEffect(() => {
    updatePageData();
  }, []);

  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb routeSegments={[{ name: "state Table" }]} />
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
        Add New State
      </Button>
      <Card className="w-full overflow-auto" elevation={6}>
        <Table
          className={clsx("whitespace-pre min-w-750", classes.productTable)}
        >
          <TableHead>
            <TableRow>
              <TableCell colSpan={4}>State</TableCell>

              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stateList
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((state, index) => (
                <TableRow hover key={shortid.generate()}>
                  <TableCell className="px-1" align="left" colSpan={4}>
                    {state.name}
                  </TableCell>

                  <TableCell className="px-0 border-none">
                    <Link to={`/pages/district/${state.id}`}>
                      <Tooltip title="Add District">
                        <IconButton>
                          <Icon color="primary">add</Icon>
                        </IconButton>
                      </Tooltip>
                    </Link>
                    <IconButton
                      onClick={() => {
                        setUid(state.id);
                        setShouldOpenEditorDialog(true);
                      }}
                    >
                      <Tooltip title="Edit">
                        <Icon color="primary">edit</Icon>
                      </Tooltip>
                    </IconButton>

                    <IconButton onClick={() => handleDeleteState(state)}>
                      <Tooltip title="Delete">
                        <Icon color="error">delete</Icon>
                      </Tooltip>
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>

        <TablePagination
          className="px-4"
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={stateList?.length}
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

export default StateTable;
