import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';

import Tiles from '../Tiles/Tiles';
import DataGrid from '../DataGrid/DataGrid';
import DonutChart from '../../Charts/DonutChart/DonutChart';
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
  const dispatch = useDispatch();
  const columnHeaders = ['date', 'category', 'details', 'amount'];
  const totalExpensesForAllMonths = useSelector(state => state.totalExpensesForAllMonths);
  const monthlyExpenseDetails = useSelector(state => state.monthlyExpenseDetails);
  const [expensesMonth, setExpensesMonth] = useState('');

  const handleTileClick = (month) => dispatch(fetchMonthlyExpenseDetails(1239, month));

  useEffect(() => { fetchTotalExpensesForAllMonths(1239) }, []);
  useEffect(() => {
    setExpensesMonth(dateTime.getMonthByDate(monthlyExpenseDetails.map(obj => obj.date)[0]));
  }, [totalExpensesForAllMonths, monthlyExpenseDetails]);

  return (
    <>
      <div className={styles.tiles}>
        <Tiles title={Object.values(totalExpensesForAllMonths).map(val => val._id)}
          content={Object.values(totalExpensesForAllMonths).map(val => val.total)}
          height='160px' width='160px'
          handleTileClick={handleTileClick} />
      </div>
      <Box display="flex" flexDirection="column" justifyContent="space-between">
        <Box style={{ marginBottom: 15 }}>
          <DataGrid
            tableCaption={"Monthly Expenses for " + expensesMonth}
            columnHeaders={columnHeaders}
            data={monthlyExpenseDetails}
            tableHeight="300px"
            tableWidth="100%"
          />
        </Box>
        <DonutChart
          data={monthlyExpenseDetails}
          SVGHeight={300}
          SVGWidth={700}
          column="amount"
          legendColumn="category"
          translate={{ x: 300, y: 150 }}
          legendTranslate={{ x: 500, y: 32 }} />
      </Box>
    </>
  )
};

export default MonthlyInsights;
