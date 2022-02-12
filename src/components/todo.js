import { useEffect, useState } from "react";
import {
  Button,
  TextField,
  Container,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Todo = () => {
  const [addtodo, setAddtodo] = useState([]);
  const [newvalue, setNewvalue] = useState("");

  const handlesubmit = () => {
    {
      newvalue && setAddtodo([...addtodo, newvalue]);
      setNewvalue("");
    }
  };
  const enterSubmit = (event) => {
    if (newvalue && event.key === "Enter") {
      setAddtodo([...addtodo, newvalue]);
      setNewvalue("");
    }
  };

  return (
    <>
      <br></br>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Item>
              <TextField
                label="Todo"
                variant="standard"
                placeholder="type here..."
                value={newvalue}
                onChange={(e) => setNewvalue(e.target.value)}
                onKeyPress={enterSubmit}
              />
              <Button variant="contained" onClick={handlesubmit}>
                Add
              </Button>{" "}
              <Button
                variant="contained"
                color="error"
                onClick={() => setAddtodo([])}
              >
                Reset Data
              </Button>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Todo List</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {addtodo?.length === 0 ? (
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="td" scope="row">
                          No Data !!!
                        </TableCell>
                      </TableRow>
                    ) : (
                      addtodo?.map((addtodo, index) => (
                        <TableRow
                          key={index}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="td" scope="row">
                            {addtodo}
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </Item>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Todo;
