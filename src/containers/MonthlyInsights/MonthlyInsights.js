import React from 'react';
import Tiles from '../../components/UI/Tiles/Tiles';

const months = ['January', 'February', 'March', 'April', 'May', 'June'];
const expensesByMonths = ['$250', '$359', '$260', '$450', '$289', '$369'];

const expensesByMonth = {
  'January': '$250',
  'February': '$359',
  'March': '$260',
  'April': '$450',
  'May': '$289',
  'June': '$369'
}

// const MonthlyInsights = () => <h1 style={{ height: 45 }}>MonthlyInsights</h1>;
const MonthlyInsights = () => {
  return (
    <Tiles title={Object.keys(expensesByMonth)}
      content={Object.values(expensesByMonth)}
      height='160px' width='160px' />
  )
};

export default MonthlyInsights;

