'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var options2 = {
      chart: {
        type: 'bar',
        height: 85,
        sparkline: {
          enabled: true
        }
      },
      colors: ['#7267ef'],
      plotOptions: {
        bar: {
          columnWidth: '70%'
        }
      },
      series: [
        {
          data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 25, 44, 12, 36, 9, 54]
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
              return '';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#support-chart1'), options2);
    chart.render();
    chartInstances['support-chart1'] = chart;

  }, 500);
});