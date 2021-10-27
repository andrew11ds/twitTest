import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Helmet } from "react-helmet";
import Nav from './components/Nav';
import routes from './lib/routes';
import { AuthContext } from './context/AuthContext';
import Timeline from './components/Private/Timeline';
import { useContext, useState, useEffect } from 'react';


const App = () => {
  const { restricted, unrestricted } = routes;
  const {user, isLoggedIn} = useContext(AuthContext);
  const isAuth = isLoggedIn();
  return (
    <main>
      <Helmet>
        <title>SabanaTweet</title>
        <meta name="description" content="Tweeter test" />
      </Helmet>
      <BrowserRouter>
        
        {isAuth && user && <p>Welcome, {user?.name}</p>}
        
        <Switch>
          {
            isAuth ?
            restricted.map(({ path, component }) =>
              <Route exact path={path} component={component} />)
          :
            unrestricted.map(({ path, component }) =>
              <Route exact path={path} component={component} />)
          }
        </Switch>
        
      </BrowserRouter>
    </main>
  );
};

export default App;
