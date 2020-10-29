import * as actionTypes from './actionTypes';

const initialState = {
  monthlyExpenseDetails: [],
  totalExpensesForAllMonths: [],
  categoryWiseExpensesForAMonth: [],
  categoryWiseExpensesForAllMonths: []
}

const reducer = (action, state = initialState) => {
  switch (action.type) {
    case actionTypes.ADD_EXPENSE:
      return Object.assign({}, state, {
        monthlyExpenseDetails: [...state.monthlyExpenseDetails, action.payload]
      });
  
    case actionTypes.SET_MONTHLY_EXPENSE_DETAILS:
      return Object.assign({}, state, {
        monthlyExpenseDetails: action.payload
      });

    case actionTypes.SET_CATEGORY_WISE_EXPENSE_FOR_ALL_MONTHS:
      return Object.assign({}, state, {
        categoryWiseExpensesForAllMonths: action.payload
      });
    
    case actionTypes.SET_TOTAL_EXPENSES_FOR_ALL_MONTHS:
      return Object.assign({}, state, {
        totalExpensesForAllMonths: action.payload
      });

    default:
      return state;
  }
};

export default reducer;
