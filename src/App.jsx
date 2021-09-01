import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Helmet } from "react-helmet";
import Nav from './components/Nav';
import routes from './lib/routes';


const App = () => {
  const { restricted, unrestricted } = routes;
  return (
    <main>
      <Helmet>
        <title>SabanaTweet</title>
        <meta name="description" content="Tweeter test" />
      </Helmet>
      <BrowserRouter>
        <Switch>
          {
            restricted.map(({ path, component }) =>
              <Route exact path={path} component={component} />)
          }
          {
            unrestricted.map(({ path, component }) =>
              <Route exact path={path} component={component} />)
          }
        </Switch>

      </BrowserRouter>
    </main>
  );
};

export default App;
