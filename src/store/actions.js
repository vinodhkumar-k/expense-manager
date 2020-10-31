import axios from 'axios';

import config from '../configs/config.json';
import * as actionTypes from './actionTypes';

const API_BASE_URL = config.API_BASE_URL;

export const addExpenseDetails = (expenseDetails) => {
  return dispatch => {
    axios.post(`${API_BASE_URL}/expenses`, expenseDetails)
      .then(response => {
        if (response.data.ok === 1) {
          const responseData = JSON.parse(JSON.parse(response.config.data))
          if (responseData.expenses.month === expenseDetails.expenses.month) {
            dispatch({type: actionTypes.ADD_EXPENSE, payload: responseData.expenses.expenditure[0]});
          }
        }
      })
      .catch(err => console.error(err));
  };
};

export const fetchMonthlyExpenseDetails = (userId, month) => {
  return dispatch => {
    axios.get(`${API_BASE_URL}/expenses/${userId}/${month}`)
      .then(response => {
        if (response.data) {
          dispatch({type: actionTypes.SET_MONTHLY_EXPENSE_DETAILS, payload: response.data.expenditure});
        }
      })
      .catch(err => console.error(err));
  };
};

export const fetchCategoryWiseExpensesForAllMonths = (userId) => {
  return dispatch => {
    axios.get(`${API_BASE_URL}/analytics/category/${userId}`)
      .then(response => {
        if (response.data) {
          dispatch({type: actionTypes.SET_CATEGORY_WISE_EXPENSE_FOR_ALL_MONTHS, payload: response.data});
        }
      })
      .catch(err => console.error(err));
  };
};

export const fetchTotalExpensesForAllMonths = (userId) => {
  return dispatch => {
    axios.get(`${API_BASE_URL}/analytics/${userId}`)
      .then(response => {
        if (response.data) {
          dispatch({type: actionTypes.SET_TOTAL_EXPENSES_FOR_ALL_MONTHS, payload: response.data});
        }
      })
      .catch(err => console.error(err));
  };
};
