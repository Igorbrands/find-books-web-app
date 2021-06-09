import GlobalStyle from './styles/global';
import { Router } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

import { createBrowserHistory } from 'history';

function App() {
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <BrowserRouter>
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </Router>
  );
}

export default App;
