'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var options = {
      chart: {
        type: 'area',
        height: 100,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#EA4D4D'],
      fill: {
        type: 'solid',
        opacity: 0.3
      },
      markers: {
        size: 0,
        opacity: 0.9,
        colors: '#fff',
        strokeColor: '#EA4D4D',
        strokeWidth: 2,
        hover: {
          size: 7
        }
      },
      stroke: {
        width: 3
      },
      series: [
        {
          name: 'series1',
          data: [25, 66, 41, 89, 25, 44, 12, 36, 9, 54, 25, 66, 41, 66, 41, 89]
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
              return 'Income Analysis :';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#income-analysis'), options);
    chart.render();
  }, 500);
});