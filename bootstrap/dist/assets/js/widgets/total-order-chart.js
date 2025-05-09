'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var options = {
      chart: {
        type: 'area',
        height: 100,
        stacked: true,
        sparkline: { enabled: true }
      },
      colors: ['#1DE9B6'],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          type: 'vertical',
          inverseColors: false,
          opacityFrom: 0.7,
          opacityTo: 0
        }
      },
      stroke: { curve: 'smooth', width: 2 },
      series: [
        { data: [30, 60, 40, 70, 50, 90, 50, 55, 45, 60, 50, 65, 30, 60, 40, 70, 50, 90, 50, 55, 45, 60, 50, 65, 40, 70, 50, 90, 50] }
      ]
    };
    var chart = new ApexCharts(document.querySelector('#total-order-chart'), options);
    chart.render();
  }, 500);
});