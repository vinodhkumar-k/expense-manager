import React from 'react';
import { Toolbar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import './App.css';

const useStyles = makeStyles({
  header: {
    backgroundColor: '#5b616c',
    minHeight: 45,
    maxHeight: 45,
    // font: 'Charlie Text',
    color: 'white'
  },
  footer: {
    bottom: 0,
    minWidth: '100%',
    color: 'white',
    backgroundColor: '#343a40',
    height: 45,
    fontSize: 12,
    margin: 0,
    padding: 0,
    lineHeight: '45px',
    position: 'fixed'
  }
});

function App() {
  const styles = useStyles();

  return (
    <div className="App">
      <header>
        <Toolbar className={styles.header}>Expenses Manager</Toolbar>
      </header>
      <footer className={styles.footer}>Footer goes here</footer>
    </div>
  );
}

export default App;
