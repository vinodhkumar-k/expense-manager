import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  TextField,
  FormControl,
  Input,
  InputLabel,
  InputAdornment,
  Select,
  NativeSelect,
} from '@material-ui/core';

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
  }
});

const AddExpenseForm = () => {
  const styles = useStyles();
  const categories = [
    'Home & Utility',
    'Transport',
    'Food & Drinks',
    'Health & Personal Care',
    'Clothing & Footwear',
    'Education',
    'Gifts',
    'Celebrations',
    'Charity',
    'Entertainment',
    'Loans',
    'Sports',
    'Others',
  ];
  const [values, setValues] = React.useState({
    amount: '',
  });
  // const [category, setCategory] = useState('');
  const category = '';

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleCategoryChange = (event, index, value) => {
    console.log(event);
    console.log(index);
  };

  return (
    <form className={styles.form}>
      <h4 className={styles.header}>Add New Expense</h4>
      {/* <TextField label="Category" className={styles.margin} /> */}
      <Box display="flex" flexDirection="row" justifyContent="center">
        <FormControl className={styles.formField}>
          <InputLabel>Category</InputLabel>
          {/* <NativeSelect
          value={category[0]}
          onChange={onCategoryChange}
          // inputProps={{
          //   name: 'category',
          //   id: 'age-native-helper',
          // }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
          {categories.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </NativeSelect> */}
          <Select
            native
            value={category}
            onChange={handleCategoryChange}
          // inputProps={{
          //   name: 'category',
          //   id: 'age-native-helper',
          // }}
          >
            {/* <option aria-label="None" value="" /> */}
            {categories.map((option) => (
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
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Box>
      <Box display="flex" flexDirection="row" justifyContent="center">
        <TextField label="Details" className={`${styles.formField}`} />
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
    </form>
  );
};

export default AddExpenseForm;
