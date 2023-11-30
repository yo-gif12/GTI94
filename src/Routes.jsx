import Home from "./components/Home";
import { Switch, Router, Route} from "react-router-dom";
import About from "./components/About";

function Routes() {
  return (
    <Router>
      {/* Route components would be visible only at their route */}
      <Switch>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
      </Switch>
    </Router>
  );
}

export default Routes;
