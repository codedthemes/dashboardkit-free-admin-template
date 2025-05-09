'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var options1 = {
      chart: {
        type: 'bar',
        height: 400,
        zoom: {
          enabled: false
        }
      },
      colors: ['#7267ef'],
      plotOptions: {
        bar: {
          colors: {
            ranges: [
              {
                from: 0,
                to: 15,
                color: '#EA4D4D'
              },
              {
                from: 16,
                to: 30,
                color: '#ffa21d'
              },
              {
                from: 31,
                to: 50,
                color: '#7267ef'
              },
              {
                from: 51,
                to: 100,
                color: '#0e9e4a'
              }
            ]
          },
          columnWidth: '80%'
        }
      },
      series: [
        {
          data: [
            25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 54, 25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89,
            63, 25, 44, 12, 36, 9, 25, 44, 12, 36, 9, 54
          ]
        }
      ],
      xaxis: {
        labels: {
          show: false
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
              return 'Click ';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    new ApexCharts(document.querySelector('#traffic-chart'), options1).render();
  }, 500);
});