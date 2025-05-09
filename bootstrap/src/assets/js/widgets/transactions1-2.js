'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var options1 = {
      chart: {
        type: 'bar',
        height: 60,
        sparkline: {
          enabled: true
        }
      },
      colors: ['#7267ef'],
      plotOptions: {
        bar: {
          columnWidth: '80%'
        }
      },
      series: [
        {
          data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
        }
      ],
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
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
              return 'Inbound';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    new ApexCharts(document.querySelector('#transactions1'), options1).render();
    var options2 = {
      chart: {
        type: 'bar',
        height: 60,
        sparkline: {
          enabled: true
        }
      },
      colors: ['#EA4D4D'],
      plotOptions: {
        bar: {
          columnWidth: '80%'
        }
      },
      series: [
        {
          data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
        }
      ],
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
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
              return 'Outbound';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    new ApexCharts(document.querySelector('#transactions2'), options2).render();
  }, 500);
});