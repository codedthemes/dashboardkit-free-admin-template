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
      plotOptions: {
        pie: {
          donut: {
            size: '65%'
          }
        }
      },
      labels: ['Desktop Computers', 'Smartphones', 'Tablets'],
      series: [76.7, 15, 30],
      legend: {
        show: false
      },
      colors: ['#EA4D4D', '#ffa21d', '#3ec9d6']
    };
    var chart = new ApexCharts(document.querySelector('#type-chart'), options);
    chart.render();
  }, 500);
});