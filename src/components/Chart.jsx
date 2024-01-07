import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

const Chart = ({ chartData }) => {
  return (
    <div className="card-body">
      {Object.keys(chartData).length > 0 && (
        <div className="chart">
          <Line data={chartData} />
        </div>
      )}
    </div>
  );
}

export default Chart