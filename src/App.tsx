import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Login from "./Login";
import Test from "./Routes/Test";

function App(){
  return (
    <Router>
      <Switch>
        <Route path="/Test"><Test/></Route>
        <Route path="/Login"><Login/></Route>
        <Route path="/"><Home/></Route>
      </Switch>
    </Router>
  );
}
export default App;