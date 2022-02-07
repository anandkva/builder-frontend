import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from "./components/login/login";
import Home from "./components/home/home";


function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/login" element={<Login/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
