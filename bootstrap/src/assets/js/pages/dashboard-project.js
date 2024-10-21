'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    floatchart();
  }, 500);
  if (!!document.querySelector('.user-scroll')) {
    new SimpleBar(document.querySelector('.user-scroll'));
  }
  if (!!document.querySelector('.feed-scroll')) {
    new SimpleBar(document.querySelector('.feed-scroll'));
  }
});

function floatchart() {
  // [ proj-earning ] start
  (function () {
    var options = {
      chart: {
        type: 'bar',
        height: 200,
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#fff'],
      plotOptions: {
        bar: {
          color: '#fff',
          columnWidth: '60%'
        }
      },
      fill: {
        type: 'solid',
        opacity: 1
      },
      series: [
        {
          data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 54, 25, 66, 41, 89, 63, 25, 44, 12, 36]
        }
      ],
      xaxis: {
        crosshairs: {
          width: 1
        },
        labels: {
          show: false
        }
      },
      yaxis: {
        labels: {
          style: {
            colors: '#fff'
          }
        }
      },
      grid: {
        borderColor: '#ffffff85',
        padding: {
          bottom: 0,
          left: 10
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
              return 'Total Earnings';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#proj-earning'), options);
    chart.render();
  })();
  // [ proj-earning ] end
}
