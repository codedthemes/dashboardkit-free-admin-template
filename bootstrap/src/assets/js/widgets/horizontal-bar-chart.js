'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var options = {
      chart: {
        height: 350,
        type: 'bar'
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            position: 'top'
          }
        }
      },
      colors: ['#7267ef', '#0e9e4a', '#EA4D4D'],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 1,
        colors: ['#fff']
      },
      series: [
        {
          name: 'India',
          data: [44, 55, 41, 64, 22]
        },
        {
          name: 'Japan',
          data: [53, 32, 33, 52, 13]
        },
        {
          name: 'London',
          data: [44, 33, 52, 13, 22]
        }
      ],
      xaxis: {
        categories: [2001, 2002, 2003, 2004, 2005]
      }
    };
    var chart = new ApexCharts(document.querySelector('#horizontal-bar-chart'), options);
    chart.render();
    chartInstances['horizontal-bar-chart'] = chart;
  }, 500);
});