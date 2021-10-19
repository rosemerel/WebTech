import './Header.css';
import React from 'react';



export default ({styles}) =>{
    return(
        <header className="App-header" style={styles.header}>
                <h1> Welcome on our chat Application </h1>
        </header>
    );
}
