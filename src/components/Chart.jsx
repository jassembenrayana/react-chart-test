import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

const Chart = ({ chartData }) => {
  return (
    <>
      {Object.keys(chartData).length > 0 && (
        <div className="chart">
          <Line data={chartData} />
        </div>
      )}
    </>
  );
}

export default Chart