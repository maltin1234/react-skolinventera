import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import Navbar from "./components/navigation/Navbar";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container, Main } from "./components/style/Container.styled";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Article from "./components/Article";
import Home from "./components/pages/Home";

function App() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
    console.log(sidebar);
  };

  return (
    <Router>
      <Container>
        {" "}
        <Header onShow={showSidebar} />
        <Main>
          {" "}
          {sidebar ? <Navbar sidebar={sidebar} /> : null}
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </Main>
      </Container>
    </Router>
  );
}

export default App;
