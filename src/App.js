import './App.css';
import { Route,  BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Home from './containers/Home';

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/">
                        <Home />
                    </Route>
                    <Route path="*">
                        <Redirect to="/" />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
