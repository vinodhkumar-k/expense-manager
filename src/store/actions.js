import axios from 'axios';

import config from '../configs/config.json';
import * as actionTypes from './actionTypes';

const API_BASE_URL = config.API_BASE_URL;

export const addExpenseDetails = (expenseDetails) => {
  return dispatch => {
    axios.post(`${API_BASE_URL}/expenses`, expenseDetails)
      .then(response => {
        if (response.data.ok === 1) {
          dispatch({type: actionTypes.ADD_EXPENSE, payload: JSON.parse(response.config.data).expenses.expenditure[0]});
        }
      })
      .catch(err => console.error(err));
  };
};

export const fetchMonthlyExpenseDetails = (userId, month) => {
  return dispatch => {
    axios.get(`${API_BASE_URL}/expenses/${userId}/${month}`)
      .then(response => {
        dispatch({type: actionTypes.SET_MONTHLY_EXPENSE_DETAILS, payload: response.data.expenditure});
      })
      .catch(err => console.error(err));
  };
};
