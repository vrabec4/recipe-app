import { Route, Switch } from "react-router-dom";

import { Dashboard } from "../Pages/Dashboard/Dashboard";
import { Login } from "../Pages/Login/Login";
import { SignUpForm } from "../Pages/SignUp/SignUpForm";

function App() {
  return (
    <div>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/sign-up' exact component={SignUpForm} />
      </Switch>
    </div>
  );
}

export default App;
