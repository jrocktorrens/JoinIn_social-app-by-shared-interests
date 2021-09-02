import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Welcome from "./Components/Welcome/Welcome";
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";
import CreateEvent from "./Components/CreateEvent/CreateEvent";
import Nav from "./Components/layout/Nav";
import Search from "./Components/search/Search";
import Profile from "./Components/profile/Profile";
import Maps from "./Components/Map/Map";
function App() {
  return (
    <>
      <Router>
        <Nav />
        <Route exact path="/" component={Welcome} />
        <Route path="/Signup" component={Signup} />
        <Route path="/Login" component={Login} />
        <Route path="/CreateEvent" component={CreateEvent} />
        <Route path="/search" component={Search} />
        <Route path="/profile" component={Profile} />
        <Route path="/map" component={Maps} />
      </Router>
    </>
  );
}

export default App;
