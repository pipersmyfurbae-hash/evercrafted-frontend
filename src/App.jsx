import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <Switch>
                {/* Define routes here */}
                <Route path="/" exact>
                    <h1>Welcome to Evercrafted Frontend</h1>
                </Route>
                {/* Add more routes as needed */}
            </Switch>
        </Router>
    );
};

export default App;