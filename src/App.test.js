import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './Login'
import Button1 from './Button'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Login />, div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button1 />, div);
});

