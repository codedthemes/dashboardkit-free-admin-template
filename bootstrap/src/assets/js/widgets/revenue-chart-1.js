'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var options = {
      chart: {
        height: 305,
        type: 'bar',
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '50%'
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#7267ef', '#7267ef'],
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      series: [
        {
          name: 'Brazil',
          data: [44, 55, 57, 56, 61, 58, 63]
        },
        {
          name: 'New york',
          data: [76, 85, 101, 98, 87, 105, 91]
        }
      ],
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']
      },
      fill: {
        opacity: [0.5,1]
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return '$ ' + val + ' thousands';
          }
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#revenue-chart'), options);
    chart.render();
    chartInstances['revenue-chart'] = chart;
  }, 500);
});