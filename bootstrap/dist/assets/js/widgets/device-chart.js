'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var options = {
      chart: {
        height: 135,
        type: 'donut',
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      series: [66.6, 29.7, 38.6],
      labels: ['Desktop', 'Mobile', 'Tablet'],
      grid: {
        padding: {
          top: 20,
          right: 0,
          bottom: 0,
          left: 0
        }
      },
      legend: {
        show: false
      },
      responsive: [
        {
          breakpoint: 1280,
          options: {
            chart: {
              height: 100
            }
          }
        }
      ]
    };
    var chart = new ApexCharts(document.querySelector('#device-chart'), options);
    chart.render();
  }, 500);
});