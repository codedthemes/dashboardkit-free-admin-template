'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var options = {
      chart: {
        type: 'line',
        height: 265,
        toolbar: {
          show: false
        }
      },
      colors: ['#7267ef', '#3ec9d6'],
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 2
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
          name: 'Today',
          data: [0, 0, 90, 50, 55, 0, 0, 0, 0, 60, 0, 0]
        },
        {
          name: 'Yesterday',
          data: [0, 0, 30, 60, 40, 50, 0, 0, 0, 0, 0, 0]
        }
      ],
      xaxis: {
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
    var chart = new ApexCharts(document.querySelector('#total-sales-chart'), options);
    chart.render();
    chartInstances['total-sales-chart'] = chart;
  }, 500);
});