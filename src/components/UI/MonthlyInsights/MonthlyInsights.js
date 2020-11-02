import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Tiles from '../Tiles/Tiles';

const months = ['January', 'February', 'March', 'April', 'May', 'June'];
const expensesByMonths = ['$250', '$359', '$260', '$450', '$289', '$369'];

const expensesByMonth = {
  'January': '$250',
  'February': '$359',
  'March': '$260',
  'April': '$450',
  'May': '$289',
  'June': '$369',
  'July': '$458',
  'August': '$698',
  'September': '$595',
  'October': '$398',
  'November': '$288',
  'December': '$199',
}

const useStyles = makeStyles({
  tiles: {
    width: '50%',
    float: 'left'
  }
});

// const MonthlyInsights = () => <h1 style={{ height: 45 }}>MonthlyInsights</h1>;
const MonthlyInsights = () => {
  const styles = useStyles();
  return (
    <div className={styles.tiles}>
      <Tiles title={Object.keys(expensesByMonth)}
        content={Object.values(expensesByMonth)}
        height='160px' width='160px' />
    </div>
  )
};

export default MonthlyInsights;
