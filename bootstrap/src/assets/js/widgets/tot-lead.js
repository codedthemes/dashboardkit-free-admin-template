'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var options = {
      chart: {
        type: 'area',
        height: 150,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#7267ef'],
      fill: {
        type: 'solid',
        opacity: 0.3
      },
      stroke: {
        curve: 'straight',
        width: 3
      },
      series: [
        {
          name: 'series1',
          data: [25, 66, 41, 89, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89]
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
              return 'Total Leads :';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#tot-lead'), options);
    chart.render();
  }, 500);
});