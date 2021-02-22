import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './components/navigation/NavBar';
import HomePage from './components/pages/HomePage';
import About from './components/pages/About';
import Gallery from './components/pages/Gallery';
import Contact from './components/pages/Contact';
import Instagram from './components/pages/Instagram';
import Services from './components/pages/Services';
import Footer from './components/navigation/Footer';

class App extends Component {

    NavBar_Paths = [
        "/about",
        "/contact",
        "/gallery",
        "/instagram",
        "/services"
    ];

    render() {
        return(
            <div id="App">
            <Router>
                <div>
                    <Route exact path={this.NavBar_Paths} component={NavBar} />
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/about" component={() => (<About className="app-page" />)} />
                    <Route exact path="/gallery" component={() => (<Gallery className="app-page" />)} />
                    <Route exact path="/contact" component={() => (<Contact className="app-page" />)} />
                    <Route exact path="/instagram" component={() => (<Instagram className="app-page" />)} />
                    <Route exact path="/services" component={() => (<Services className="app-page" />)} />
                    <Footer />
                </div>
            </Router>
            </div>
        );
    }
};

export default App;