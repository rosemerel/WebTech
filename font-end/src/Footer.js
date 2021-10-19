import './Footer.css';
import React from 'react';

var moment = require('moment');
var date = moment().format('MMMM Do YYYY, h:mm:ss a');

export default ({styles}) => {
    return(
      <footer className="App-footer" style={styles.footer}>
        <p> {date} </p>
      </footer>
    )
}