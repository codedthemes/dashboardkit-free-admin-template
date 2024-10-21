'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    floatchart();
  }, 500);
});

function floatchart() {
  (function () {
    var options_invoice = {
      chart: {
        height: 300,
        type: 'line',
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          columnWidth: '50%'
        }
      },
      legend: {
        show: false
      },
      stroke: {
        width: [0, 2],
        curve: 'smooth'
      },
      dataLabels: {
        enabled: false
      },
      series: [
        {
          name: 'TEAM A',
          type: 'column',
          data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 25]
        },
        {
          name: 'TEAM B',
          type: 'line',
          data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 35]
        }
      ],
      stroke: {
        width: [0, 2],
        curve: 'smooth'
      },
      fill: {
        type: 'gradient',
        gradient: {
          inverseColors: false,
          shade: 'light',
          type: 'vertical',
          opacityFrom: [0, 1],
          opacityTo: [0.5, 1],
          stops: [0, 100],
          hover: {
            inverseColors: false,
            shade: 'light',
            type: 'vertical',
            opacityFrom: 0.15,
            opacityTo: 0.65,
            stops: [0, 96, 100]
          }
        }
      },
      markers: {
        size: 3,
        colors: '#fFF',
        strokeColors: '#ffa21d',
        strokeWidth: 2,
        shape: 'circle',
        hover: {
          size: 5
        }
      },
      colors: ['#ffa21d', '#ffa21d'],
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      yaxis: {
        tickAmount: 3
      },
      grid: {
        show: true,
        borderColor: '#00000010'
      },
      xaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        tickAmount: 11
      }
    };
    var chart = new ApexCharts(document.querySelector('#invoice-chart'), options_invoice);
    chart.render();

    var total_income_graph_options = {
      chart: {
        height: 280,
        type: 'donut'
      },
      series: [27, 23, 20, 17],
      colors: ['#ffa21d', '#17C666', '#EA4D4D', '#7267EF'],
      labels: ['Pending', 'Paid', 'Overdue', 'Draft'],
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
    var chart = new ApexCharts(document.querySelector('#total-income-graph'), total_income_graph_options);
    chart.render();
  })();
}
