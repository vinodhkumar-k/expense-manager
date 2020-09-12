import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
// import { makeStyles } from '@material-ui/core/styles';
import { Tabs, Tab } from '@material-ui/core';

import Dashboard from '../Dashboard/Dashboard';
import MonthlyInsights from '../MonthlyInsights/MonthlyInsights';

// const useStyles = makeStyles({});

const MainLayout = () => {
  // const styles = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderComponent = () => {
    if (value === 0) return <Dashboard />;
    if (value === 1) return <MonthlyInsights />;
  };
  return (
    <>
      <Tabs
        value={value}
        variant="fullWidth"
        style={{ backgroundColor: 'rgb(0, 188, 212)' }}
        onChange={handleChange}
      >
        <Tab label="Dashboard" component={Link} to="/"></Tab>
        <Tab label="Monthly Insights" component={Link} to="/"></Tab>
      </Tabs>
      <Switch>
        <Route path="/" component={renderComponent} />
      </Switch>
    </>
  );
};

export default MainLayout;
