import axios from 'axios';
import { dispatch } from 'd3';

import config from '../configs/config.json';
import * as actionTypes from './actionTypes';

const API_BASE_URL = config.API_BASE_URL;

export const addExpenseDetails = (expenseDetails) => {
  return dispatch => {
    axios.post(`${API_BASE_URL}/expenses`, expenseDetails)
      .then(response => {
        if (response.data.ok === 1) {
          dispatch({type: actionTypes.ADD_EXPENSE, payload: expenseDetails});
        }
      })
      .catch(err => console.error(err));
  };
};

export const fetchMonthlyExpenseDetails = (userId, month) => {
  return dispatch => {
    axios.post(`${API_BASE_URL}/expenses/${userId}/${month}`)
      .then(response => {
        console.log(response);
      });
  };
};
