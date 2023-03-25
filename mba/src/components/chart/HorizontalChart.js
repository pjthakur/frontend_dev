import React from 'react';
import Chart from 'chart.js/auto';

const HorizontalChart = ({ chartData }) => {

  const chartRef = React.useRef(null);

  React.useEffect(() => {
    if (chartRef && chartRef.current) {
      const newChartInstance = new Chart(chartRef.current, {
        type: 'horizontalBar',
        data: chartData,
        options: {
          scales: {
            x: {
              ticks: {
                beginAtZero: true,
              },
            },
          },
        },
      });
      return () => {
        newChartInstance.destroy();
      };
    }
  }, [chartData]);

  return <canvas ref={chartRef} />;
};

export default HorizontalChart;
