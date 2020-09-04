import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header/Header'
import Stats from './components/Stats/Stats'
import Map from './components/Map/Map'
import { Card, CardContent } from '@material-ui/core';
import Table from './components/Table/Table'
import LineChart from './components/Charts/LineChart'
import Worldmap from './components/Worldmap/Worldmap'
function App() {
  return (
    <div className="app">

      <Header />
      {/*<Card className="line-chart">
        <CardContent >
          <LineChart />
        </CardContent>
  </Card>*/}
      <Card>
        <CardContent>
          <Map />
        </CardContent>
      </Card>
      <Worldmap />
      {/* sidebar with table option - dev and contact & social media icons */}

    </div>
  );
}

export default App;
