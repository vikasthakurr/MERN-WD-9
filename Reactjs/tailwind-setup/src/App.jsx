import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <br></br>
        <br></br>
        <br></br>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

// import React from "react";
// import Home from "./Home";

// const App = () => {
//   let IsloggedIn = true;
//   return <div>{IsloggedIn ? <Home /> : "please Login"}</div>;
// };

// export default App;
