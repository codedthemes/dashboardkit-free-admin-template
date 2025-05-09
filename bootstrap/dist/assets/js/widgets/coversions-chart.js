'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var options1 = {
      chart: {
        type: 'bar',
        height: 65,
        sparkline: {
          enabled: true
        }
      },
      colors: ['#7267ef'],
      plotOptions: {
        bar: {
          columnWidth: '80%'
        }
      },
      series: [
        {
          data: [
            25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 54, 25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89,
            63, 25, 44, 12, 36, 9, 25, 44, 12, 36, 9, 54
          ]
        }
      ],
      xaxis: {
        crosshairs: {
          width: 1
        }
      },
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
              return '';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    new ApexCharts(document.querySelector('#coversions-chart'), options1).render();
  }, 500);
});