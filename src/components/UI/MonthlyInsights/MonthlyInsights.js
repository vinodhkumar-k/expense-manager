import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Tiles from '../Tiles/Tiles';
import DataGrid from '../DataGrid/DataGrid';
import { fetchMonthlyExpenseDetails, fetchTotalExpensesForAllMonths } from '../../../store/actions';
import dateTime from '../../../utils/dateTime';

const useStyles = makeStyles({
  tiles: {
    width: '50%',
    float: 'left'
  }
});

const MonthlyInsights = () => {
  const styles = useStyles();
  const columnHeaders = ['date', 'category', 'details', 'amount'];
  const totalExpensesForAllMonths = useSelector(state => state.totalExpensesForAllMonths);
  const monthlyExpenseDetails = useSelector(state => state.monthlyExpenseDetails);

  const handleTileClick = (month) => fetchMonthlyExpenseDetails(1239, month);

  useEffect(() => { fetchTotalExpensesForAllMonths(1239) }, []);
  useEffect(() => { console.log(monthlyExpenseDetails) }, [totalExpensesForAllMonths, monthlyExpenseDetails]);

  return (
    <>
      <div className={styles.tiles}>
        <Tiles title={Object.values(totalExpensesForAllMonths).map(val => val._id)}
          content={Object.values(totalExpensesForAllMonths).map(val => val.total)}
          height='160px' width='160px'
          handleTileClick={handleTileClick} />
      </div>
      <Box display="flex" flexDirection="column">
        <DataGrid
          tableCaption={"Monthly Expenses for " + dateTime.getCurrentMonth()}
          columnHeaders={columnHeaders}
          data={monthlyExpenseDetails}
          tableHeight="300px"
          tableWidth="50%"
        />
      </Box>
    </>
  )
};

export default MonthlyInsights;
