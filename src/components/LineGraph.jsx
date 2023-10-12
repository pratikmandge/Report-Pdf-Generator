import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
} from 'chart.js';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)

const LineGraph = () => {
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Arrests',
        data: [],
        borderColor: 'rgba(75, 192, 192, 1)',
      },
    ],
  });

  const fetchAndRenderChart = () => {
    // Fetch data from the API
    fetch(
      'https://api.usa.gov/crime/fbi/cde/arrest/state/AK/all?from=2015&to=2020&API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv'
    )
      .then((response) => response.json())
      .then((result) => {
        // Calculate total arrests for each year
        const years = result.data.map((item) => item.data_year);
        const totalArrests = result.data.map((item) => {
          const keys = Object.keys(item);
          return keys.slice(1).reduce((acc, key) => acc + item[key], 0);
        });

        setData({
          labels: years,
          datasets: [
            {
              label: 'Arrests',
              data: totalArrests.map((arrests) => arrests / 100),
              fill: false,
              borderColor: 'rgba(75, 192, 192, 1)',
            },
          ],
        });
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchAndRenderChart();
  }, []);

  return (
    <>
    <Line data={data} height={165} width={715}/>
    </>
  );
};

export default LineGraph;
