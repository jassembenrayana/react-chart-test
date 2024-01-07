import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js'
import Chart from './Chart'
import Header from './Header';
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement)

const Container = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    generateRandomData();
  }, []);

  const generateRandomData = () => {
    const newData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          label: 'Demo Line Chart',
          data: Array.from({ length: 6 }, () => Math.floor(Math.random() * 50)),
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
        },
      ],
    };
    setChartData(newData);
  };

  const handleRegenerateData = () => {
    generateRandomData();
  };

  return (
    <div className="card border-success">
      <div className="card-header">
        <Header regenerateData={handleRegenerateData} />
      </div>
      <div className="card-body">
        <Chart chartData={chartData} />
      </div>
    </div>
  )
}

export default Container