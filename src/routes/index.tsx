import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Book from '../pages/Book';
import Search from '../pages/Search';

const Routes = () => (
  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/book" component={Book} />
    <Route path="/search" component={Search} />
  </Switch>
);

export default Routes;
