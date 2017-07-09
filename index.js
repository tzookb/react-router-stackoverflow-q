import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {  BrowserRouter, Route, Switch } from 'react-router-dom'


import Tee from './components/Tee'
import About from './components/About'
import Home from './components/Home'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/tee" component={Tee} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;


ReactDOM.render((
    <App />
     ),
     document.getElementById('app')
);