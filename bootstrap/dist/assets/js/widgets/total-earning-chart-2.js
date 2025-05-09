'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var options = {
      series: [30],
      chart: {
        height: 150,
        type: 'radialBar'
      },
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: '60%',
            background: 'transparent',
            imageOffsetX: 0,
            imageOffsetY: 0,
            position: 'front'
          },
          track: {
            background: '#1DE9B650',
            strokeWidth: '50%'
          },

          dataLabels: {
            show: true,
            name: {
              show: false
            },
            value: {
              formatter: function (val) {
                return parseInt(val);
              },
              offsetY: 7,
              color: '#1DE9B6',
              fontSize: '20px',
              fontWeight: '700',
              show: true
            }
          }
        }
      },
      colors: ['#1DE9B6'],
      fill: {
        type: 'solid'
      },
      stroke: {
        lineCap: 'round'
      }
    };
    var chart = new ApexCharts(document.querySelector('#total-earning-chart-2'), options);
    chart.render();
  }, 500);
});