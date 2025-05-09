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
      colors: ['#7267ef'],
      fill: {
        type: 'solid',
        opacity: 0.3
      },
      markers: {
        size: 2,
        opacity: 0.9,
        colors: '#7267ef',
        strokeColor: '#7267ef',
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
          data: [9, 66, 41, 89, 63, 25, 44, 12, 36, 20, 54, 25, 9]
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
              return 'Visits :';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#seo-chart1'), options);
    chart.render();
  }, 500);
});