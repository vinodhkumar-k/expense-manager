import React, { useState } from 'react';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  TextField,
  FormControl,
  Input,
  InputLabel,
  InputAdornment,
  Select,
  Button
} from '@material-ui/core';

import { CATEGORIES } from '../../../constants';

const useStyles = makeStyles({
  form: {
    width: '50%',
  },
  header: {
    color: 'rgba(0, 0, 0, 0.54)',
    justifySelf: 'center',
  },
  formField: {
    width: 250,
  },
  margin: {
    margin: '0px 5px',
  },
  width: {
    width: 200
  },
  button: {
    backgroundColor: '#007fad',
    marginTop: 10,
    '&:hover': {
      backgroundColor: '#007fad',
    },
  }
});

const AddExpenseForm = () => {
  const styles = useStyles();

  const [values, setValues] = useState({
    amount: '',
    category: '',
    details: '',
    date: ''
  });

  const handleChange = (prop) => (event) => {
    setValues({
      ...values,
      [prop]: prop === 'date' ? moment(event.target.value).format('DD-MM-YYYY') :  event.target.value
    });
  };

  const handleSave = () => {
    console.log(values);
  }

  return (
    <form className={styles.form}>
      <h4 className={styles.header}>Add New Expense</h4>
      <Box display="flex" flexDirection="row" justifyContent="center">
        <FormControl className={styles.formField}>
          <InputLabel>Category</InputLabel>
          <Select
            native
            values={values['category']}
            onChange={handleChange('category')}>
            {CATEGORIES.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
        </FormControl>
        <TextField
          id="date"
          label="Birthday"
          type="date"
          format="dd/MM/yyyy"
          className={`${styles.width} ${styles.margin}`}
          onChange={handleChange('date')}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Box>
      <Box display="flex" flexDirection="row" justifyContent="center">
        <TextField label="Details" className={`${styles.formField}`} onChange={handleChange('details')} />
        <FormControl className={`${styles.width} ${styles.margin}`}>
          <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
          <Input
            id="standard-adornment-amount"
            value={values.amount}
            onChange={handleChange('amount')}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </FormControl>
      </Box>
      <Button variant="contained" color="primary" className={styles.button} onClick={handleSave}>
        Save
      </Button>
    </form>
  );
};
export default AddExpenseForm;
