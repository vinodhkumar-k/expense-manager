import React from 'react';

import { Tabs, Tab } from 'material-ui';
import { MuiThemeProvider } from 'material-ui/styles';

const MainLayout = () => {
  return (
    <>
      <MuiThemeProvider>
        <Tabs initialSelectedIndex={0}>
          <Tab label="Dashboard"></Tab>
          <Tab label="Monthly Insights"></Tab>
          <Tab label="Other Insights"></Tab>
        </Tabs>
      </MuiThemeProvider>
    </>
  );
};

export default MainLayout;
