'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var options = {
      chart: {
        type: 'area',
        height: 40,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#17C666'],
      fill: {
        type: 'solid',
        opacity: 0.3
      },
      markers: {
        size: 2,
        opacity: 0.9,
        colors: '#17C666',
        strokeColor: '#17C666',
        strokeWidth: 2,
        hover: {
          size: 4
        }
      },
      stroke: {
        curve: 'straight',
        width: 3
      },
      series: [
        {
          name: 'series1',
          data: [9, 66, 41, 36, 20, 54, 25, 66, 41, 89, 63, 89, 63, 25, 44, 12, 54, 25, 66, 41, 9]
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
              return 'Total Sales :';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#monthlyprofit-2'), options);
    chart.render();
  }, 500);
});