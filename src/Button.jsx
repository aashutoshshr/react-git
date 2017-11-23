import React, {Component} from 'react';

class Button1 extends Component {
    render() {
        return (

            <div className="btn-group">
                <button type="button" className="btn btn-danger">Action</button>
  <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <span className="caret"></span>
    <span className="sr-only">Toggle Dropdown</span>
  </button>
  <ul className="dropdown-menu">
    <li><a href="#">Action</a></li>
    <li><a href="#">Another action</a></li>
    <li><a href="#">Something else here</a></li>
    <li role="separator" className="divider"></li>
    <li><a href="#">Separated link</a></li>
  </ul>
            </div>
        );
    }
}

export default Button1;