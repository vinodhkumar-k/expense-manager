import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  TextField,
  FormControl,
  Input,
  InputLabel,
  InputAdornment,
  DatePicker,
} from '@material-ui/core';

const useStyles = makeStyles({
  form: {
    width: '50%',
  },
  header: {
    color: 'rgba(0, 0, 0, 0.54)',
    // alignSelf: 'center',
    justifySelf: 'center',
  },
  formField: {
    maxWidth: 250,
  },
  margin: {
    margin: '0px 5px',
  },
});
const AddExpenseForm = () => {
  const styles = useStyles();
  const [values, setValues] = React.useState({
    amount: '',
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <form className={styles.form}>
      <h4 className={styles.header}>Add New Expense</h4>
      <TextField label="Category" className={styles.margin} />
      <TextField
        id="date"
        label="Birthday"
        type="date"
        format="dd/MM/yyyy"
        className={styles.margin}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField label="Details" className={styles.margin} />
      <FormControl className={`${styles.maxWidth} ${styles.margin}`}>
        <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
        <Input
          id="standard-adornment-amount"
          value={values.amount}
          onChange={handleChange('amount')}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
        />
      </FormControl>
    </form>
  );
};

export default AddExpenseForm;
