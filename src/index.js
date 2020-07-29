import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import './index.css';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/video';




ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/Cadastro/Video" component={CadastroVideo}  />
        <Route component={() => (<div>Page Not Found</div>)} />
      </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);
