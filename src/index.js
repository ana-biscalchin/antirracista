import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} exact />
        {/* <Route path="/Cadastro/Vídeo" component={CadastroVideo}  /> */}
        <Route component={() => (<div>Page Not Found</div>)} />
      </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
