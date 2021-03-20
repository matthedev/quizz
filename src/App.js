import React from "react";
import { Switch, Route } from "react-router-dom";
import Starter from "./Components/Starter";
import Quiz from "./Components/Quiz";
import Result from "./Components/Result";



function App() {
  //  write javascript 

  return (
    <div>
      <Switch>
        <Route path="/quizz" exact component={Starter} />
        <Route path="/quiz/:category/:diff" exact component={Quiz} />
        <Route path="/result" exact component={Result} />
      </Switch>
    </div>
  );
}

export default App;
