import { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
export default function Welcome() {
  const handleClick = () => {
    <Link to="/signup" />;
  };
  return (
    <>
      <div className="App">
        <h2 className="App">Welcome from the welcome page</h2>
        <Link to="/signup">
          <button>Get Started</button>
        </Link>
      </div>
    </>
  );
}
