import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  useParams
} from "react-router-dom";

const Home = (props) => {
  return (
    <h1>Welcome</h1>
  );
}
const Param = (props) => {
  const { param } = useParams()
  if (isNaN(param)) {
    return (
      <h1>The word is: {param}</h1>

    );
  }
  if (!isNaN(param)) {
    return (
      <h1>The number is: {param}</h1>
    );
  }
}
const Param2 = (props) => {
  const { param } = useParams()
  const { text } = useParams()
  const { bg } = useParams()
  if (isNaN(param)) {
    return (
      <h1 style={{ color: text, background:  bg  }}>The word is: {param}</h1>
      );
    }
    if (!isNaN(param)) {
      return (
      <h1 style={{ color: text, background:  bg  }}>The number is: {param}</h1>
    );
  }
}

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/:param">
          <Param />
        </Route>
        <Route exact path="/:param/:text/:bg">
          <Param2 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;