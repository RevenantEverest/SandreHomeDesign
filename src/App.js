import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from './components/pages/HomePage';

class App extends Component {

    render() {
        return(
            <div id="App">
            <Router>
                <div>
                <Route exact path="/" component={HomePage} />
                </div>
            </Router>
            </div>
        );
    }
};

export default App;
