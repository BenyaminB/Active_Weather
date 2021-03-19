import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import {Button, Form, FromGroup, Lable, Input} from 'react-bootstrap';
import { Button, Alert, Form, FormControl } from 'react-bootstrap';
// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//import { FacebookLoginButton } from 'react-social-button';
// import { useForm } from "react-hook-form"; // two forms submit as 1 => part 1
import Selectactivities from './Selectactivities';

class Signinform extends Component {

  constructor() {
    super();
    this.state = {nextActive : false};
  }

  render() {
    return (
      // <Form className="Loginform"> Login Page
      <div>
      <h2>
        <span className="font-weight-bold offset-sm-2"><em>SignIn</em></span>
      </h2>
      <Form className="col-sm-6 offset-sm-3 mb-3">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" onClick={this.makeSelectformVisi}>
          {this.state.nextActive ? 'Disabled' : 'Next'}
        </Button>
      </Form>
      </div>
    );
  }

  makeSelectformVisi() {
    ReactDOM.render(<Selectactivities />, document.getElementById('selectactivities'));
    //{this.state.nextActive = true};
  }
}

export default Signinform;
