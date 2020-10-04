import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const months = ['January', 'February', 'March', 'April', 'May', 'June']; // Move this to helpers file

const useStyles = makeStyles({
  tile: {
    width: '10em',
    height: '10em',
    background: '#00BCD4',
    margin: 5,
    float: 'left',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    //fontFamily: Roboto, sans-serif
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
          <div key={item}>{item}</div>
        ))
      }
    </div>
  );
};

export default Tiles;
