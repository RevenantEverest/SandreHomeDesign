import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './components/navigation/NavBar';
import HomePage from './components/pages/HomePage';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

class App extends Component {

    NavBar_Paths = [
        "/about",
        "/contact",
        "/gallery",
        "/instagram"
    ];

    render() {
        return(
            <div id="App">
            <Router>
                <div>
                    <Route exact path={this.NavBar_Paths} component={NavBar} />
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                </div>
            </Router>
            </div>
        );
    }
};

export default App;