import './App.css';
import './Footer.css'
/** @jsx jsx */
import { jsx } from '@emotion/core'

var moment = require('moment');
var date = moment().format('MMMM Do YYYY, h:mm:ss a');


export default () => {
  return (
    <footer className="App-footer">
      <p> {date} </p>
    </footer>
  );
}
