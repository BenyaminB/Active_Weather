import React, { Component } from 'react';
//import {Button, Form, FromGroup, Lable, Input} from 'react-bootstrap';
import { Button, Alert, Form, FormControl } from 'react-bootstrap';
// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//import { FacebookLoginButton } from 'react-social-button';
// import { useForm } from "react-hook-form"; //two forms as 1 => part 2

class Selectactivities extends Component {

  render() {
    return (
      // <Form className="Loginform"> Login Page
      <div>
      <h2>
        <span className="font-weight-bold">ActiveWeather</span>.com
      </h2>
      <p style={{fontSize: 10,}} className="col-sm-9 offset-sm-3 mb-3"> <em>Our app will provide you with hourly weather details, and suggest you sports we recommend you play based off the weather.
      As an option you can select your favourite sports now which causes these sports to be suggested as the 'top suggested sport' when it weather is right.
      You can skip this, add your favourites later and edit your favourites later.</em>
      </p>
        <Form className="col-sm-5 offset-sm-3">
          <Form.Group controlId="exampleForm.SelectCustom">
          <Form.Label>Select up to 5 favourite sports</Form.Label>
            <ol>
              <li><Form.Control as="select" custom>
              <option></option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              </Form.Control></li>
              <li><Form.Control as="select" custom>
              <option></option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              </Form.Control></li>
              <li><Form.Control as="select" custom>
              <option></option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              </Form.Control></li>
              <li><Form.Control as="select" custom>
              <option></option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              </Form.Control></li>
              <li><Form.Control as="select" custom>
              <option></option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              </Form.Control></li>
            </ol>
          </Form.Group>
          <div style={{textAlign: "center"}}>
          <Button variant="success" className="m-3">Submit</Button>{' '}
          <Button variant="warning" className="m-3">&nbsp; Skip &nbsp;</Button>{' '}
          </div>
        </Form>
      </div>
    );
  }
}

export default Selectactivities;
