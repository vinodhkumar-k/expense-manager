import * as actionTypes from './actionTypes';

const initialState = {
  monthlyExpenseDetails: [],
  categoryWiseExpenseForAMonth: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_EXPENSE:
      return Object.assign({}, state, {
        monthlyExpenseDetails: [...state.monthlyExpenseDetails, action.payload]
      });
  
    case actionTypes.SET_MONTHLY_EXPENSE_DETAILS:
      return Object.assign({}, state, {
        monthlyExpenseDetails: action.payload
      });
    default:
      return state;
  }
};

export default reducer;
