import React from 'react';
import { Box } from '@material-ui/core';
import _ from 'lodash';

import DataGrid from '../../components/UI/DataGrid/DataGrid';
import AddExpenseForm from '../../components/UI/AddExpenseForm/AddExpenseForm';
import BarChart from '../../components/Charts/BarChart/BarChart';
import DonutChart from '../../components/Charts/DonutChart/DonutChart';
import dateTime from '../../utils/dateTime';

import expensesData from '../../assets/data/expenses.json';

const Dashboard = () => {
  const columnHeaders = ['DATE', 'CATEGORY', 'DETAILS', 'AMOUNT'];
  return (
    <Box display="flex" flexDirection="column" mt={0.1} mb={0.1}>
      <Box display="flex" flexDirection="row" mb={0.2}>
        <DataGrid
          tableCaption={"Monthly Expenses for " + dateTime.getCurrentMonth()}
          columnHeaders={columnHeaders}
          data={_.orderBy(expensesData.expenses, 'DATE', 'asc')}
          tableHeight="300px"
          tableWidth="50%"
        />
        <AddExpenseForm />
      </Box>
      <Box display="flex" flexDirection="row">
        <Box style={{width: '50%'}}>
          <BarChart
            data={expensesData.expenses}
            xAxisColumn="DATE"
            yAxisColumn="AMOUNT"
            SVGHeight={300}
            SVGWidth={500}
            containerMargin={{top: 25, right: 30, bottom: 0, left: 40}}/>
        </Box>
        <DonutChart
          data={expensesData.expenses}
          SVGHeight={300}
          SVGWidth={700}
          column="AMOUNT"
          legendColumn="CATEGORY"
          translate={{x: 300, y: 150}}
          legendTranslate={{x: 500, y: 40}}></DonutChart>
      </Box>
    </Box>
  );
};

export default Dashboard;
