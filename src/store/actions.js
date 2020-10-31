import axios from 'axios';
import moment from 'moment';
import _ from 'lodash';

import config from '../configs/config.json';
import * as actionTypes from './actionTypes';
import dateTime from '../utils/dateTime';

const API_BASE_URL = config.API_BASE_URL;

export const addExpenseDetails = (expenseDetails) => {
  return dispatch => {
    axios.post(`${API_BASE_URL}/expenses`, expenseDetails)
      .then(response => {
        if (response.data.ok === 1) {
          const responseData = JSON.parse(response.config.data);
          if (responseData.expenses.month === dateTime.getCurrentMonth().toLowerCase()) {
            dispatch({type: actionTypes.ADD_EXPENSE, payload: responseData.expenses.expenditure[0]});
          }
          dispatch(fetchTotalExpensesForAllMonths(responseData.userId));
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
          dispatch({type: actionTypes.SET_TOTAL_EXPENSES_FOR_ALL_MONTHS, payload: _.sortBy(response.data, o => new moment().month(o._id))});
        }
      })
      .catch(err => console.error(err));
  };
};
