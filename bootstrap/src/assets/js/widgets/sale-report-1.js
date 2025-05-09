'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var options = {
      chart: {
        type: 'bar',
        height: 150,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#7267ef'],
      plotOptions: {
        bar: {
          columnWidth: '60%'
        }
      },
      series: [
        {
          data: [25, 66, 41, 89, 63, 25, 44, 12, 9, 54, 25, 66, 41, 69, 23]
        }
      ],
      xaxis: {
        crosshairs: {
          width: 1
        }
      },
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function (seriesName) {
              return 'Daily Sales :';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#sale-report-1'), options);
    chart.render();
  }, 500);
});