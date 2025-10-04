'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var options = {
      chart: {
        type: 'area',
        height: 250,
        toolbar: {
          show: false
        }
      },
      colors: ['#7267ef', '#0e9e4a', '#EA4D4D'],
      fill: {
        opacity: 0.1,
        type: 'solid'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 1
      },
      plotOptions: {
        bar: {
          columnWidth: '45%',
          borderRadius: 4
        }
      },
      grid: {
        strokeDashArray: 4
      },
      series: [
        {
          name: 'Tomorow',
          data: [30, 60, 40, 70, 50, 90, 50, 55, 45, 60, 50, 65]
        },
        {
          name: 'Today',
          data: [50, 55, 45, 60, 50, 65, 30, 60, 40, 70, 50, 90]
        },
        {
          name: 'Yesterday',
          data: [60, 50, 65, 30, 60, 40, 70, 50, 55, 45, 50, 90]
        }
      ],
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        labels: {
          hideOverlappingLabels: true
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#reports-chart'), options);
    chart.render();
    document.querySelector('#chart-line').addEventListener('click', function (e) {
      chart.updateOptions({
        chart: {
          type: 'line'
        },
        fill: {
          type: 'solid'
        }
      });
    });
    document.querySelector('#chart-area').addEventListener('click', function (e) {
      chart.updateOptions({
        chart: {
          type: 'area'
        },
        fill: {
          type: 'gradient'
        }
      });
    });
    document.querySelector('#chart-bar').addEventListener('click', function (e) {
      chart.updateOptions({
        chart: {
          type: 'bar'
        },
        fill: {
          type: 'solid'
        }
      });
    });
  }, 500);
});