'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var options = {
      chart: { type: 'bar', height: 150, sparkline: { enabled: true } },
      colors: ['#F44236', '#7267ef', '#673ab7', '#1DE9B6', '#ffa21d', '#3EBFEA'],
      plotOptions: { bar: { borderRadius: 2, columnWidth: '80%', distributed: true } },
      series: [
        {
          data: [10, 30, 40, 20, 60, 50]
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
    var chart = new ApexCharts(document.querySelector('#overview-bar-chart'), options);
    chart.render();
  }, 500);
});