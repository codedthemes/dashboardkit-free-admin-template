'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var options = {
      chart: {
        height: 220,
        type: 'line',
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 2,
        curve: 'smooth'
      },
      series: [
        {
          name: 'Market Days',
          data: [20, 50, 30, 60, 30, 50, 40]
        },
        {
          name: 'Market Days ALL',
          data: [40, 20, 50, 15, 40, 65, 20]
        }
      ],
      xaxis: {
        type: 'datetime',
        categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000']
      },
      colors: ['#448aff', '#17C666'],
      fill: {
        type: 'solid'
      },
      markers: {
        size: 5,
        colors: ['#448aff', '#17C666'],
        opacity: 0.9,
        strokeWidth: 2,
        hover: {
          size: 7
        }
      },
      grid: {
        borderColor: '#e2e5e885'
      },
      yaxis: {
        title: {
          text: 'Revenue Market'
        },
        min: 10,
        max: 70
      }
    };
    var chart = new ApexCharts(document.querySelector('#revenue-map'), options);
    chart.render();
  }, 500);
});