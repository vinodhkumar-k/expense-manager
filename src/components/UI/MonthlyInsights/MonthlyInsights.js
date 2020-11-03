import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

import Tiles from '../Tiles/Tiles';
import { fetchMonthlyExpenseDetails, fetchTotalExpensesForAllMonths } from '../../../store/actions';

const useStyles = makeStyles({
  tiles: {
    width: '50%',
    float: 'left'
  }
});

const MonthlyInsights = () => {
  const styles = useStyles();
  const totalExpensesForAllMonths = useSelector(state => state.totalExpensesForAllMonths);

  const handleTileClick = (month) => { fetchMonthlyExpenseDetails(1239, month); };

  useEffect(() => {fetchTotalExpensesForAllMonths(1239)}, []);
  useEffect(() => {}, [totalExpensesForAllMonths]);

  return (
    <div className={styles.tiles}>
      <Tiles title={Object.values(totalExpensesForAllMonths).map(val => val._id)}
        content={Object.values(totalExpensesForAllMonths).map(val => val.total)}
        height='160px' width='160px'
        handleTileClick={handleTileClick} />
    </div>
  )
};

export default MonthlyInsights;
