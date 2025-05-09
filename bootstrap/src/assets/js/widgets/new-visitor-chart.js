'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var options = {
      chart: { type: 'bar', height: 60, sparkline: { enabled: true } },
      colors: ['#F44236'],
      plotOptions: { bar: { borderRadius: 2, columnWidth: '80%' } },
      states: {
        normal: {
          filter: {
            type: 'lighten',
            value: 0.7
          }
        },
        hover: {
          filter: {
            type: 'lighten',
            value: 0
          }
        }
      },
      series: [
        {
          data: [10, 30, 40, 20, 60, 50, 20, 15, 20, 25, 30, 25]
        }
      ],
      xaxis: { crosshairs: { width: 1 } },
      tooltip: {
        fixed: { enabled: false },
        x: { show: false },
        y: {
          title: {
            formatter: function (seriesName) {
              return '';
            }
          }
        },
        marker: { show: false }
      }
    };
    var chart = new ApexCharts(document.querySelector('#new-visitor-chart'), options);
    chart.render();
  }, 500);
});