import React, { Component } from 'react';
//import {Button, Form, FromGroup, Lable, Input} from 'react-bootstrap';
import { Button, Alert, Form, FormControl } from 'react-bootstrap';
// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//import { FacebookLoginButton } from 'react-social-button';

class Loginform extends Component {

  render() {
    return (
      <div>
      <h2>
        <span className="font-weight-bold">ActiveWeather</span>.com
      </h2>
      <Form className="col-sm-6 offset-sm-3 mb-3" onSubmit={this.loginHandler}>
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
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </div>
      // <h2> Welcome </h2>
    );
  }
}

export default Loginform;
