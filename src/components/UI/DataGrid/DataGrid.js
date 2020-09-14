import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  TableFooter,
} from '@material-ui/core';

import expensesData from '../../../assets/data/expenses.json';

const useStyles = makeStyles({
  table: {
    //width: '50%',
    // height: '50%',
  },
  tableBody: {
    // height: '50%',
  },
  tableFooter: {
    right: 0,
  },
});

const DataGrid = (props) => {
  
  // ToDo: Column Headers & row data should come as props
  const styles = useStyles();
  const columnHeaders = ['No.', 'DATE', 'CATEGORY', 'DETAILS', 'AMOUNT'];

  return (
    <>
      <TableContainer
        style={{ height: props.tableHeight, width: props.tableWidth }}
      >
        <Table stickyHeader className={styles.table}>
          <TableHead>
            <TableRow>
              <TableCell
                colSpan={columnHeaders.length}
                style={{ textAlign: 'center' }}
              >
                {props.tableCaption}
              </TableCell>
            </TableRow>
            <TableRow>
              {columnHeaders.map((column) => (
                <TableCell key={column}>{column}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody className={styles.tableBody}>
            {expensesData.expenses.map((row, index) => (
              <TableRow key={index}>
                {columnHeaders.map((column) => (
                  <TableCell key={column}>
                    {column === 'No.' ? index + 1 : row[column]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default DataGrid;
