import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const months = ['January', 'February', 'March', 'April', 'May', 'June']; // Move this to helpers file

const useStyles = makeStyles({
  tile: {
    width: 160,
    height: 160,
    background: '#329eac',
    margin: 5,
    float: 'left',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Roboto, sans-serif',
    color: '#FFF',
    '&:hover': {
      background: '#0d6672',
      cursor: 'pointer'
    }
  }
})

const Tiles = () => {
  const styles = useStyles();
  return (
    <div>
      {
        months.map((item, index) => (
          <div key={item} className={styles.tile}>{item}</div>
        ))
      }
    </div>
  );
};

export default Tiles;
