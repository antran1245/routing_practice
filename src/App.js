import './App.css';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Home from './components/home';
import Text from './components/text';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Redirect to='/home'/>
          </Route>
          <Route exact path='/home'>
            <Home />
          </Route>
          <Route path='/:text/:background/:color'>
            <Text />
          </Route>
          <Route path='/:text'>
            <Text />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
