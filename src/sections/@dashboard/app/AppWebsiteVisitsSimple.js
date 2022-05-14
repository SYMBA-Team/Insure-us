import PropTypes from 'prop-types';
import merge from 'lodash/merge';
import ReactApexChart from 'react-apexcharts';
// @mui
import { Card, CardHeader, Box } from '@mui/material';
// components
import { BaseOptionChart } from '../../../components/chart';

// ----------------------------------------------------------------------

AppWebsiteVisitsSimple.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  chartData: PropTypes.array.isRequired,
  chartLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default function AppWebsiteVisitsSimple({ title, subheader,type="line", chartLabels, chartData,height=364, ...other }) {
  const chartOptions = merge(BaseOptionChart(), {
    name:'',
    plotOptions: { 
      bar: { columnWidth: '16%' },
      radialBar: {
       hollow: {
         size: '70%',
      }
    }, },
    fill: { type: chartData.map((i) => i.fill) },
    labels: chartLabels,
    
   yaxis:{
       labels:{show:false}
   },
    xaxis: { type: 'datetime' },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (y) => {
          if (typeof y !== 'undefined') {
            return `${y.toFixed(0)} visits`;
          }
          return y;
        },
      },
    },
  });

  return (
    
        <ReactApexChart type={type} series={chartData} options={chartOptions} height={height} />
    
  );
}
