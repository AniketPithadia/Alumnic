import { Route, Switch } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import AboutUs from "./components/AboutUs/AboutUs";
import Form from "./components/Form/Form";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/home" exact>
          <Homepage />
        </Route>
        <Route path="/about">
          <AboutUs />
        </Route>
        <Route path="/form">
          <Form />
        </Route>
      </Switch>
    </>
  );
}

export default App;
