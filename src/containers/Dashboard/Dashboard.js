import React from 'react';
import { Box } from '@material-ui/core';

import DataGrid from '../../components/UI/DataGrid/DataGrid';
import AddExpenseForm from '../../components/UI/AddExpenseForm/AddExpenseForm';
import BarChart from '../../components/Charts/BarChart/BarChart';
import DonutChart from '../../components/Charts/DonutChart/DonutChart';

import expensesData from '../../assets/data/expenses.json';

const Dashboard = () => {
  return (
    <Box display="flex" flexDirection="column" mt={0.1} mb={0.1}>
      <Box display="flex" flexDirection="row" mb={0.2}>
        <DataGrid
          tableCaption="Monthly Expenses for --"
          tableHeight="300px"
          tableWidth="50%"
        />
        <AddExpenseForm />
      </Box>
      <Box display="flex" flexDirection="row">
        {/* <DataGrid
          tableCaption="Monthly Expenses for --"
          tableHeight="300px"
          tableWidth="50%"
        /> */}
        <Box style={{width: '50%'}}>
          <BarChart
            data={expensesData.expenses}
            SVGHeight={300}
            SVGWidth={500}
            containerMargin={{top: 25, right: 30, bottom: 0, left: 40}}/>
        </Box>
        <DonutChart
          data={expensesData.expenses}
          SVGHeight={300}
          SVGWidth={700}
          translate={{x: 300, y: 150}}
          legendColumn="CATEGORY"></DonutChart>
      </Box>
    </Box>
  );
};

export default Dashboard;
