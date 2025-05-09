'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var options = {
      chart: {
        type: 'line',
        height: 230,
        toolbar: {
          show: false
        }
      },
      colors: ['#0d6efd', '#748892'],
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
          name: 'This month',
          data: [70, 50, 90, 50, 55, 45, 30, 60, 40, 60, 50, 65]
        },
        {
          name: 'Last month',
          data: [50, 65, 30, 60, 40, 50, 55, 45, 60, 70, 50, 90]
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
    var chart = new ApexCharts(document.querySelector('#overview-chart-2'), options);
    chart.render();
  }, 500);
});