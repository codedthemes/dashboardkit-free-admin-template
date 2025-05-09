'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var options1 = {
      chart: {
        type: 'area',
        height: 95,
        sparkline: {
          enabled: true
        }
      },
      colors: ['#7267ef', '#3ec9d6'],
      stroke: {
        curve: 'smooth',
        width: 2
      },
      series: [
        {
          name: 'Storage',
          data: [100, 40, 28, 51, 42, 109, 100]
        },
        {
          name: 'Bandwidth',
          data: [41, 109, 45, 109, 34, 52, 41]
        }
      ],
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        marker: {
          show: false
        }
      }
    };
    new ApexCharts(document.querySelector('#storage-chart'), options1).render();
  }, 500);
});