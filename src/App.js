import './App.css';
import Homepage from './Pages/homepage/homepage.component';
import {Route,Switch} from 'react-router-dom';

function App() {

  const HatsPage = ()=>(
      <div>
          <h1>Hats Page</h1>
      </div>
    
 );

  return (
    <div>
      <Switch>
            <Route exact path='/' component={Homepage} />
            <Route  path='/shop/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
