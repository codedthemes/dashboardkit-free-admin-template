'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var options = {
      chart: {
        type: 'line',
        height: 80,
        sparkline: {
          enabled: true
        }
      },
      colors: ['#7267ef'],
      stroke: {
        width: 3,
        curve: 'smooth'
      },
      series: [
        {
          data: [45, 66, 41, 89, 25, 44, 9, 54]
        }
      ],
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function (seriesName) {
              return 'hii';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#hd-complited-ticket'), options);
    chart.render();
  }, 500);
});