import React, { useEffect } from "react";
import { getUser } from "../../APIs/axios";
import { useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { styled } from "@mui/material/styles";
const Home = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    getUser().then((res) => setUser(res.data.data));
  }, []);
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>UserName</StyledTableCell>
              <StyledTableCell>Passoword</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {user.map((data) => (
              <StyledTableRow key={data._id}>
                <StyledTableCell component="th" scope="row">
                  {data.username}
                </StyledTableCell>
                <StyledTableCell>{data.password}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
export default Home;
