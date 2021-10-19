import React from 'react';

var moment = require('moment');
var date = moment().format('MMMM Do YYYY, h:mm:ss a');

export default ({styles}) =>{
    return(
        <header className="App-header" style={styles.header}>
                <h1>{date}</h1>
        </header>
    );
}
