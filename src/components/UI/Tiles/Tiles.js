import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  tile: {
    width: props => props.width,
    // height: 160,
    height: props => props.height,
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

const Tiles = (props) => {
  const styles = useStyles({height: props.height || 160, width: props.width || 160});
  return (
    <div>
      {
        props.title.map((item, index) => (
          <div key={item} className={styles.tile}>
            <div>
              {item}
              <br />
              <span>{props.content[index]}</span>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default Tiles;
