import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Loginform from './Loginform';
import Signinform from './Signinform';
import Selectactivities from './Selectactivities';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
// import 'bootstrap/dist/css/bootstrap.css;';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
<Button variant="primary" type="button" onclick={makeLoginVisi()}>
  Login
</Button>
ReactDOM.render(<Signinform />, document.getElementById('signinform'));
// ReactDOM.render(<Selectactivities />, document.getElementById('selectactivities'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

function makeLoginVisi() {
  ReactDOM.render(<Loginform />, document.getElementById('loginform'));
}
