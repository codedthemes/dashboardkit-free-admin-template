'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    // [ support-chart ] start
    (function () {
      var options1 = {
        chart: {
          type: 'area',
          height: 100,
          sparkline: {
            enabled: true
          }
        },
        colors: ['#ffa21d'],
        stroke: {
          curve: 'smooth',
          width: 2
        },
        series: [
          {
            name: 'series1',
            data: [0, 20, 10, 45, 30, 55, 20, 30, 0]
          }
        ],
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
      var chart = new ApexCharts(document.querySelector('#support-chart'), options1);
      chart.render();
      chartInstances['support-chart'] = chart;
    })();
    // [ support-chart ] end
    // [ support-chart1 ] start
    (function () {
      var options1 = {
        chart: {
          type: 'area',
          height: 100,
          sparkline: {
            enabled: true
          }
        },
        colors: ['#7267ef'],
        stroke: {
          curve: 'smooth',
          width: 2
        },
        series: [
          {
            name: 'series1',
            data: [0, 20, 10, 45, 30, 55, 20, 30, 0]
          }
        ],
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
      var chart = new ApexCharts(document.querySelector('#support-chart1'), options1);
      chart.render();
      chartInstances['support-chart1'] = chart;
    })();
    // [ support-chart1 ] end
    // [ support-chart2 ] start
    (function () {
      var options1 = {
        chart: {
          type: 'area',
          height: 100,
          sparkline: {
            enabled: true
          }
        },
        colors: ['#17C666'],
        stroke: {
          curve: 'smooth',
          width: 2
        },
        series: [
          {
            name: 'series1',
            data: [0, 20, 10, 45, 30, 55, 20, 30, 0]
          }
        ],
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
      var chart = new ApexCharts(document.querySelector('#support-chart2'), options1);
      chart.render();
      chartInstances['support-chart2'] = chart;
    })();
    // [ support-chart2 ] end

  }, 500);
});