import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Welcome from "./Components/Welcome/Welcome";
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";
import CreateEvent from "./Components/CreateEvent/CreateEvent";
import Nav from "./Components/layout/Nav";

function App() {
  return (
    <>
      <Nav />
      <Router>
        <Route exact path="/" component={Welcome} />
        <Route path="/Signup" component={Signup} />
        <Route path="/Login" component={Login} />
        <Route path="/CreateEvent" component={CreateEvent} />
      </Router>
    </>
  );
}

export default App;
