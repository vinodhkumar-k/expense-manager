import React from 'react';
import { Box } from '@material-ui/core';

import DataGrid from '../../components/UI/DataGrid/DataGrid';
import AddExpenseForm from '../../components/UI/AddExpenseForm/AddExpenseForm';

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
        <DataGrid
          tableCaption="Monthly Expenses for --"
          tableHeight="300px"
          tableWidth="50%"
        />
        <DataGrid
          tableCaption="Monthly Expenses for --"
          tableHeight="300px"
          tableWidth="50%"
        />
      </Box>
    </Box>
  );
};

export default Dashboard;
