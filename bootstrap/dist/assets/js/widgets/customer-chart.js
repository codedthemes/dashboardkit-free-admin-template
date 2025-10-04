'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var options = {
      chart: {
        height: 195,
        type: 'donut'
      },
      dataLabels: {
        enabled: false
      },
      plotOptions: {
        pie: {
          donut: {
            size: '65%'
          }
        }
      },
      labels: ['New', 'Return', 'Custom'],
      series: [76.7, 15, 30],
      legend: {
        show: false
      },
      grid: {
        padding: {
          top: 20,
          right: 0,
          bottom: 0,
          left: 0
        }
      },
      colors: ['#7267ef', '#0e9e4a', '#EA4D4D']
    };
    var chart = new ApexCharts(document.querySelector('#customer-chart'), options);
    chart.render();
  }, 500);
});