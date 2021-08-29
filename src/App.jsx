import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Nav from './components/Nav';
import PasswordRecovery from './components/PasswordRecovery';

const App = () => {
  return (
    <main>
      <BrowserRouter>
        <h1>App</h1>
        <Nav />

        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/signup">
            <SignUp />
          </Route>

          <Route path="/passwordrecovery">
            <PasswordRecovery />
          </Route>

          <Route exact path="/">
            <p>home</p>
          </Route>
        </Switch>

      </BrowserRouter>
    </main>
  );
};

export default App;
