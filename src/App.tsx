import GlobalStyle from './styles/global';
import { Router } from 'react-router';
import Routes from './routes';

import { createBrowserHistory } from 'history';

export default function App() {
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <Routes />
      <GlobalStyle />
    </Router>
  );
}
