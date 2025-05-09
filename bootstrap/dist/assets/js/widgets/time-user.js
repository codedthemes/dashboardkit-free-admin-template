'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    function generateDatasehratheat(count, yrange) {
      var i = 0;
      var series = [];
      while (i < count) {
        var x = 'w' + (i + 1).toString();
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

        series.push({
          x: x,
          y: y
        });
        i++;
      }
      return series;
    }
    var options = {
      chart: {
        height: 400,
        type: 'heatmap'
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#7267ef'],
      series: [
        {
          name: 'Metric1',
          data: generateDatasehratheat(12, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Metric2',
          data: generateDatasehratheat(12, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Metric3',
          data: generateDatasehratheat(12, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Metric4',
          data: generateDatasehratheat(12, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Metric5',
          data: generateDatasehratheat(12, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Metric6',
          data: generateDatasehratheat(12, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Metric7',
          data: generateDatasehratheat(12, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Metric8',
          data: generateDatasehratheat(12, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Metric9',
          data: generateDatasehratheat(12, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Metric10',
          data: generateDatasehratheat(12, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Metric11',
          data: generateDatasehratheat(12, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Metric12',
          data: generateDatasehratheat(12, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Metric13',
          data: generateDatasehratheat(12, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Metric14',
          data: generateDatasehratheat(12, {
            min: 0,
            max: 90
          })
        }
      ]
    };
    var chart = new ApexCharts(document.querySelector('#time-user'), options);
    chart.render();
  }, 500);
});