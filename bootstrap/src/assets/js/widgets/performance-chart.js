'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var options = {
      chart: {
        height: 250,
        type: 'donut'
      },
      series: [27, 23, 20, 17],
      colors: ['#7267ef', '#ffa21d', '#1DE9B6', '#7267ef'],
      labels: ['Total income', 'Total rent', 'Download', 'Views'],
      fill: {
        opacity: [1, 1, 1, 0.3]
      },
      legend: {
        show: false
      },
      plotOptions: {
        pie: {
          donut: {
            size: '65%',
            labels: {
              show: true,
              name: {
                show: true
              },
              value: {
                show: true
              }
            }
          }
        }
      },
      dataLabels: {
        enabled: false
      },
      responsive: [
        {
          breakpoint: 575,
          options: {
            chart: {
              height: 250
            },
            plotOptions: {
              pie: {
                donut: {
                  size: '65%',
                  labels: {
                    show: false
                  }
                }
              }
            }
          }
        }
      ]
    };
    var chart = new ApexCharts(document.querySelector('#performance-chart'), options);
    chart.render();
  }, 500);
});