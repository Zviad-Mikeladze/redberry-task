import "./App.css";
import Input from "./pages/Input";
import List from "./pages/List";
import Landing from "./pages/Landing";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" exact>
          <Landing />
        </Route>
        <Route path="/input">
          <Input />
        </Route>
        <Route path="/list">
          <List />
        </Route>
      </Switch>
    </main>
  );
}

export default App;
