import React, { useState, useEffect } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TextField,
  Button,
  IconButton,
  Icon,
  MenuItem,
} from "@material-ui/core";
import { FieldArray } from "formik";
import { getContactTypeList } from "../family-form/FamilyFormService";

const MemberItemTable = ({ values, handleChange, setFieldValue }) => {
  const [isAlive, setIsAlive] = useState(true);
  const [contactTypeList, setContactTypeList] = useState([]);

  useEffect(() => {
    console.log("I am here to fetch the data")
    getContactTypeList().then(({ data }) => {
      if (isAlive) setContactTypeList(data);
    });

    return () => setIsAlive(false);
  }, [isAlive]);

  return (
    <FieldArray name="contacts">
      {(arrayHelpers) => (
        <div className="overflow-auto">
        <p>Contact Information</p>
          <Table className="whitespace-pre min-w-750">
            <TableHead>
              <TableRow>
                <TableCell colSpan={5}>Contact Type </TableCell>
                <TableCell colSpan={5}>Value</TableCell>
                <TableCell colSpan={1} className="p-0" align="center" />
              </TableRow>
            </TableHead>
            <TableBody>
              {values.contacts?.map((item, ind) => (
                <TableRow className="position-relative" key={ind}>
                  
                  <TableCell colSpan={5} className="p-0" align="left">
                    <TextField
                      fullWidth
                      name={`contacts[${ind}].type`}
                      size="small"
                      variant="outlined"
                      value={item.type  || ""}
                      onChange={handleChange}
                      select
                    >
                      {contactTypeList.map((item, ind) => (
                        <MenuItem value={item} key={item}>
                          {item.name}
                        </MenuItem>
                      ))}
                    </TextField>
                  </TableCell>
                  <TableCell colSpan={5} className="p-0" align="left">
                    <TextField
                      name={`contacts[${ind}].value`}
                      size="small"
                      variant="outlined"
                      type={ values.contacts[ind].type === 'Email' && 'email' | 'text' }
                      fullWidth
                      value={item.value || ""}
                      onChange={handleChange}
                    />
                  </TableCell>
                  
                  
                  <TableCell colSpan={1} className="p-0" align="center">
                    <IconButton
                      size="small"
                      onClick={() => arrayHelpers.remove(ind)}
                    >
                      <Icon color="error" fontSize="small">
                        clear
                      </Icon>
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Button
            className="mt-4"
            color="primary"
            variant="contained"
            size="small"
            onClick={() => arrayHelpers.push({})}
          >
            + Add New Contact
          </Button>
        </div>
      )}
    </FieldArray>
  );
};

export default MemberItemTable;
