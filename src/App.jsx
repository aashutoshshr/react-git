import React, {Component} from 'react';
import {Button, ButtonToolbar} from 'react-bootstrap';
import Navigation from './Nav'
import Login from './Login'
import Slide from "./Slide"
class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <Navigation/>
                </div>
                <span> a</span>
                <div><Login /></div>
                <Button bsStyle="primary">Primary</Button>
                <Slide />
                
                <h1>
                    Testing</h1>

            </div>
        );
    }
}

export default App;