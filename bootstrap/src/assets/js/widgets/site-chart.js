'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var optionst = {
      chart: {
        type: 'line',
        height: 135,
        sparkline: {
          enabled: true
        }
      },
      stroke: {
        curve: 'straight',
        width: 3
      },
      series: [
        {
          data: [135, 187, 180, 222, 185, 195, 158]
        }
      ],
      yaxis: {
        min: 100
      },
      colors: ['#7267ef']
    };
    var chart = new ApexCharts(document.querySelector('#site-chart'), optionst);
    chart.render();
  }, 500);
});