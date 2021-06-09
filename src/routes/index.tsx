import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import BookDetails from '../pages/BookDetails';
import Search from '../pages/Search';

const Routes = () => (
  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/book/:id" component={BookDetails} />
    <Route path="/search/:param" component={Search} />
  </Switch>
);

export default Routes;
