import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@material-ui/core';
import _ from 'lodash';

import DataGrid from '../DataGrid/DataGrid';
import AddExpenseForm from '../AddExpenseForm/AddExpenseForm';
import BarChart from '../../Charts/BarChart/BarChart';
import DonutChart from '../../Charts/DonutChart/DonutChart';
import dateTime from '../../../utils/dateTime';
import { fetchMonthlyExpenseDetails, fetchCategoryWiseExpensesForAllMonths,
      fetchTotalExpensesForAllMonths } from '../../../store/actions';

const Dashboard = () => {
  const columnHeaders = ['date', 'category', 'details', 'amount'];
  const expenses = useSelector(state => state.monthlyExpenseDetails);
  const categoryWiseExpensesForAllMonths = useSelector(state => state.categoryWiseExpensesForAllMonths);
  const totalExpensesForAllMonths = useSelector(state => state.totalExpensesForAllMonths);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMonthlyExpenseDetails(1239, dateTime.getCurrentMonth().toLowerCase()));
    dispatch(fetchCategoryWiseExpensesForAllMonths(1239));
    dispatch(fetchTotalExpensesForAllMonths(1239));
  }, []);
  
  useEffect(() => { }, [expenses, categoryWiseExpensesForAllMonths, totalExpensesForAllMonths]);

  return (
    <Box display="flex" flexDirection="column" mt={0.1} mb={0.1}>
      <Box display="flex" flexDirection="row" mb={0.2}>
        <DataGrid
          tableCaption={"Monthly Expenses for " + dateTime.getCurrentMonth()}
          columnHeaders={columnHeaders}
          data={_.orderBy(expenses, 'date', 'asc')}
          tableHeight="300px"
          tableWidth="50%"
        />
        <AddExpenseForm />
      </Box>
      <Box display="flex" flexDirection="row">
        <Box style={{width: '50%'}}>
          <BarChart
            data={totalExpensesForAllMonths}
            xAxisColumn="_id"
            yAxisColumn="total"
            SVGHeight={300}
            SVGWidth={500}
            containerMargin={{top: 25, right: 30, bottom: 0, left: 40}}/>
        </Box>
        {/* If legend info going down from UI reduce legendTranslate y value */}
        <DonutChart
          data={_.filter(categoryWiseExpensesForAllMonths, category => category.total > 0)}
          SVGHeight={300}
          SVGWidth={700}
          column="total"
          legendColumn="_id"
          translate={{x: 300, y: 150}}
          legendTranslate={{x: 500, y: 32}}></DonutChart> 
      </Box>
    </Box>
  );
};

export default Dashboard;
