'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var options = {
      chart: {
        height: 225,
        type: 'line',
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 3,
        curve: 'straight'
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
      },
      colors: ['#0e9e4a'],
      series: [
        {
          name: 'Hour.',
          data: [10, 41, 35, 51, 49, 52, 58, 71, 89]
        }
      ],
      grid: {
        row: {
          colors: ['#f3f6ff', 'transparent'],
          opacity: 0.5
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#time-chart'), options);
    chart.render();
  }, 500);
});