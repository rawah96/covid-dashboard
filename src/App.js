import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Stats from './components/Stats/Stats'
import Map from './components/Map/Map'
import { Card, CardContent } from '@material-ui/core';
import Table from './components/Table/Table'
import Line from './components/Charts/Line'
function App() {
  return (
    <div className="app">
      <Header />
      {/* circles/boxes of stats */}

      <Card className="section2">
        <CardContent>
          {/* chart */}
          <Line />
          <Map />
        </CardContent>
      </Card>

      {/* The table is going to be in the sidebar option */}
      <Table />
      {/* sidebar with table option - dev and contact & social media icons */}

    </div>
  );
}

export default App;
