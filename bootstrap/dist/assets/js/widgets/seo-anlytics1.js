'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var options = {
      chart: {
        type: 'area',
        height: 50,
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
        opacity: 0
      },
      grid: {
        padding: {
          left: 5,
          right: 5
        }
      },
      markers: {
        size: 3,
        opacity: 0.9,
        colors: '#7267ef',
        strokeColor: '#7267ef',
        strokeWidth: 1,
        hover: {
          size: 4
        }
      },
      stroke: {
        curve: 'straight',
        width: 2
      },
      series: [
        {
          name: 'series1',
          data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89]
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
              return 'Site Analysis :';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#seo-anlytics1'), options);
    chart.render();
  }, 500);
});