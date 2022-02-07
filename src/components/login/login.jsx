import { Button, TextField, Box, DialogTitle, Dialog } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);


  const handleSubmit = () => {
    if (username && password) {
      setOpen(!open);
      setUsername("");
      setPassword("");
      axios.post(`https://builder-backed.herokuapp.com/user/create`, { username, password })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    }
  };
  return (
    <>
      <div style={{ backgroundColor: "blue" }}>
      <Link to="/">Home</Link>
        <Box
          sx={{
            height: 800,
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            padding: "80px",
            gap: "10px",
            margin: "0 auto",
            width: "50%",
          }}
        >
          <TextField
            label="Username"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
      </div>
      <Dialog open={open}>
        <DialogTitle>Successfully Registor</DialogTitle>
        <Button
          onClick={() => {
            setOpen(!open);
           
          }}
        >
          back
        </Button>
      </Dialog>
    </>
  );
};

export default Login;
