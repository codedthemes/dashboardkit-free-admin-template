'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var options = {
      chart: {
        height: 200,
        type: 'donut'
      },
      dataLabels: {
        enabled: false
      },
      labels: ['Target', 'Last week', 'Last day'],
      series: [1258, 975, 500],
      legend: {
        show: false
      },
      colors: ['#3ec9d6', '#ffa21d', '#7267ef']
    };
    var chart = new ApexCharts(document.querySelector('#revenue-chart'), options);
    chart.render();
  }, 500);
});