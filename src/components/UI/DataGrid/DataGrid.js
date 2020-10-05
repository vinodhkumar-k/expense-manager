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
  },
  tableBody: {
  },
  tableFooter: {
    right: 0,
  },
});

const DataGrid = (props) => {
  
  const styles = useStyles();

  return (
    <>
      <TableContainer
        style={{ height: props.tableHeight, width: props.tableWidth }}
      >
        <Table stickyHeader className={styles.table}>
          <TableHead>
            <TableRow>
              <TableCell
                colSpan={props.columnHeaders.length}
                style={{ textAlign: 'center' }}
              >
                {props.tableCaption}
              </TableCell>
            </TableRow>
            <TableRow>
              {props.columnHeaders.map((column) => (
                <TableCell key={column}>{column}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody className={styles.tableBody}>
            {props.data.map((row, index) => (
              <TableRow key={index}>
                {props.columnHeaders.map((column) => (
                  <TableCell key={column}>
                    {/* {column === 'No.' ? index + 1 : row[column]} */}
                    {row[column]}
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
