import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Test from './test';

function App(props) {
  return (
    <div className='d-flex '>
    <Router>
    <Route path="/test" component={Test} />
    </Router>

    </div>
    
  );
}

export default App;
