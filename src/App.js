import React, { useState } from "react";
import PeopleCards from "./Components/UI/PeopleCards/PeopleCards";
import NavBar from "./Components/Layout/NavBar/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./Components/Layout/ScrollToTop/ScrollToTop";
import { AiOutlineToTop } from "react-icons/all";
import "./App.css";
import Home from "./Components/UI/Home/Home";
import Gallary from "./Components/UI/Gallary/Gallary";

function App() {
  const [scroll, setScroll] = useState("scroll-to-top-button display-none");
  window.onscroll = () => {
    if (window.scrollY > 800) {
      setScroll("scroll-to-top-button");
      return;
    }
    setScroll("scroll-to-top-button display-none");
  };

  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <NavBar />
        <div className="content">
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
          <Switch>
            <Route path="/cards" exact component={PeopleCards} />
          </Switch>
          <Switch>
            <Route path="/gallary" exact component={Gallary} />
          </Switch>
        </div>
      </Router>
      <div className={scroll}>
        <AiOutlineToTop size={25} onClick={() => window.scrollTo(0, 0)} />
      </div>
    </div>
  );
}

export default App;
