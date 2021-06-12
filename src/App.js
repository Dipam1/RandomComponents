import PeopleCards from "./Components/PeopleCards/PeopleCards";
import NavBar from "./Components/Layout/NavBar/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./Components/Layout/ScrollToTop/ScrollToTop";
import { AiOutlineToTop } from "react-icons/all";
import "./App.css";

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
        </div>
      </Router>
      <div className="scroll-to-top-button">
        <AiOutlineToTop size={25} onClick={() => window.scrollTo(0, 0)} />
      </div>
    </div>
  );
}

export default App;
