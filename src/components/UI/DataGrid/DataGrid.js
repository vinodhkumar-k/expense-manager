import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableFooter,
} from '@material-ui/core';

import expensesData from '../../../assets/data/expenses.json';

const useStyles = makeStyles({
  table: {
    width: '50%',
    height: '50%',
  },
  tableBody: {
    height: '50%',
  },
  tableFooter: {
    right: 0,
  },
});

const DataGrid = () => {
  const styles = useStyles();
  const columnHeaders = ['No.', 'DATE', 'CATEGORY', 'DETAILS', 'AMOUNT'];

  return (
    <>
      <Table className={styles.table}>
        <TableHead>
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
        {/* <TableFooter>Total</TableFooter> */}
      </Table>
    </>
  );
};

export default DataGrid;
