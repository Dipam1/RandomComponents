import PeopleCards from "./Components/UI/PeopleCards/PeopleCards";
import NavBar from "./Components/Layout/NavBar/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./Components/Layout/ScrollToTop/ScrollToTop";
import { AiOutlineToTop } from "react-icons/all";
import "./App.css";
import Home from "./Components/UI/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <NavBar />
        <div className="content">
          <Switch>
            <Route path="/cards" component={PeopleCards} />
          </Switch>
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </div>
      </Router>
      <div className="scroll-to-top-button">
        <AiOutlineToTop size={25} onClick={() => window.scrollTo(0, 0)} />
      </div>
    </div>
  );
}

export default App;
