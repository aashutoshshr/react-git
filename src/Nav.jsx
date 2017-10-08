import React, { Component } from 'react';
import {Nav,NavItem,NavDropdown,MenuItem} from 'react-bootstrap'
class Navigation extends Component {
    handleSelect=(e)=> {
        // e.preventDefault();(
        console.log("Event log",e)
      }
    
      render() {
        return (
          <Nav bsStyle="tabs" activeKey="1" onClick={this.handleSelect}>
            <NavItem value="1" href="/home">Home</NavItem>
            <NavItem value="2" title="Item">Services</NavItem>
            <NavItem eventKey="3" disabled>About</NavItem>
            <NavDropdown eventKey="4" title="Dropdown" id="nav-dropdown">
              <MenuItem eventKey="4.1">Action</MenuItem>
              <MenuItem eventKey="4.2">Another action</MenuItem>
              <MenuItem eventKey="4.3">Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey="4.4">Separated link</MenuItem>
            </NavDropdown>
          </Nav>
        );
      }
}

export default Navigation;

