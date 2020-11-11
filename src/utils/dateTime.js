import moment from 'moment';
import _ from 'lodash';

const dateTime = (() => {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  const getCurrentMonth = () => {
    return months[moment().month()];
  };

  const getMonthByDate = (date) => {
    return months[moment(date, 'DD/MM/YYYY').format('M') - 1];
  };

  const getCurrentTimestamp = () => {
    return new Date().getTime();
  };

  const formatDate = (date) => {
    return moment(date).format('DD-MM-YYYY');
  };

  const sortByMonth = (data) => {
    const sortedDataByMonth = [];
    _.forEach(months, (month) => {
      const dataForTheMonth = _.find(data, {_id: month.toLowerCase()});
      if(dataForTheMonth) {
        sortedDataByMonth.push(dataForTheMonth);
      }
    });
    return sortedDataByMonth;
  };

  return {
    months,
    getCurrentMonth,
    getMonthByDate,
    getCurrentTimestamp,
    formatDate,
    sortByMonth
  };
})();

export default dateTime;
