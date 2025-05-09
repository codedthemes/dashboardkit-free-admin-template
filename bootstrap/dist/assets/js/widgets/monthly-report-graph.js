'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var options = {
      series: [
        {
          name: 'Deals',
          data: [44, 55, 41, 67, 52, 53, 13]
        },
        {
          name: 'Income Report',
          data: [13, 3, 20, 8, 13, 27, 21]
        },
        {
          name: 'Customer',
          data: [11, 17, 15, 15, 21, 14, 11]
        },
        {
          name: 'Profits',
          data: [21, 7, 25, 13, 22, 3, 44]
        }
      ],
      chart: {
        type: 'bar',
        height: 250,
        stacked: true,
        toolbar: {
          show: false
        }
      },
      colors: ['#7267ef', '#7267ef', '#7267ef', '#7C57C1'],
      fill: {
        opacity: [0.6, 1, 0.6, 1]
      },
      grid: {
        strokeDashArray: 4
      },
      dataLabels: {
        enabled: false
      },
      plotOptions: {
        bar: {
          horizontal: false
        }
      },
      xaxis: {
        categories: ['Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      legend: {
        show: false
      }
    };
    var chart = new ApexCharts(document.querySelector('#monthly-report-graph'), options);
    chart.render();
  }, 500);
});