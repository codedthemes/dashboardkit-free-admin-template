'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var options = {
      chart: {
        height: 325,
        type: 'donut'
      },
      dataLabels: {
        enabled: true,
        dropShadow: {
          enabled: false
        }
      },
      series: [85.7, 77.56, 20.9, 10.9, 15.8, 86.7],
      colors: ['#7267ef', '#0e9e4a', '#3ec9d6', '#ffa21d', '#EA4D4D', '#7759de'],
      labels: ['Facebook ads', 'Amazon ads', 'Youtube videos', 'Google adsense', 'Twitter ads', 'News ads'],
      legend: {
        show: true,
        position: 'bottom'
      }
    };
    var chart = new ApexCharts(document.querySelector('#traffic-chart1'), options);
    chart.render();
  }, 500);
});