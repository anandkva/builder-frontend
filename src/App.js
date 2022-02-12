import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/login/login";
import Home from "./components/home/home";
import Signup from "./components/signup/signup";
import Forgetpassword from "./components/forgotPassword/forgotPassword";
import NotFound from "./components/notfound";
import Todo from "./components/todo";
import Nav from "./components/nav/nav";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/forgot" element={<Forgetpassword />} />
          <Route exact path="/todo" element={<Todo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
