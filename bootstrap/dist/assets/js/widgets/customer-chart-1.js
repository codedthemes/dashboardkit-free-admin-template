'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var options = {
      chart: {
        height: 150,
        type: 'donut'
      },
      dataLabels: {
        enabled: false
      },
      plotOptions: {
        pie: {
          donut: {
            size: '75%'
          }
        }
      },
      labels: ['New', 'Return'],
      series: [39, 15],
      legend: {
        show: false
      },
      grid: {
        padding: {
          top: 20,
          right: 0,
          bottom: 0,
          left: 0
        }
      },
      colors: ['#7267ef', '#17c666'],
      fill: {
        opacity: [1, 1]
      },
      tooltip: {
        theme: 'dark'
      },
      stroke: {
        width: 0
      }
    };
    var chart = new ApexCharts(document.querySelector('#customer-chart'), options);
    chart.render();
    chartInstances['customer-chart'] = chart;
  }, 500);
});