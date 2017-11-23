import React, {Component} from 'react';
import {Button, ButtonToolbar} from 'react-bootstrap';
import Navigation from './Nav'
import Login from './Login'
import Slide from "./Slide"
import Button1 from './Button'
import Form from './Form'
import './App.css'

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <Navigation/>
                </div>
                <span>
                    a</span>
                <div><Login/></div>

                <Button1/>
                <span>a</span>

                <h1>
                    Testing</h1>
                <Form/>
            </div>
        );
    }
}

export default App;