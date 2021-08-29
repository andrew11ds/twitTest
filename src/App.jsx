import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Helmet } from "react-helmet";
import Login from './components/Login';
import SignUp from './components/SignUp';
import Nav from './components/Nav';
import PasswordRecovery from './components/PasswordRecovery';
import Profile from './components/Profile';
import Timeline from './components/Timeline';
import Tweets from './components/Tweets';
import Trending from './components/Trending';
import Search from './components/Search';

const App = () => {
  return (
    <main>
      <Helmet>
        <title>SabanaTweet</title>
        <meta name="description" content="Tweeter test" />
      </Helmet>
      <BrowserRouter>
        <h1>SabanaTweet</h1>
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
          <Route path="/profile">
            <Profile />
          </Route>

          <Route path="/timeline">
            <Timeline />
          </Route>

          <Route path="/tweets">
            <Tweets />
          </Route>

          <Route path="/trending">
            <Trending />
          </Route>

          <Route path="/search">
            <Search />
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
