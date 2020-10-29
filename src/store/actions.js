import axios from 'axios';

import config from '../configs/config.json';

const API_BASE_URL = config.API_BASE_URL;

export const addExpenseDetails = (expenseDetails) => {
  console.log('addExpenseDetails');
  return dipatch => {
    axios.post(`${API_BASE_URL}/expenses`, expenseDetails)
      .then(response => {
        console.log(response);
      })
      .catch(err => console.error(err));
  };
};
