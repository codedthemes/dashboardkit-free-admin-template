'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var options = {
      chart: {
        height: 200,
        type: 'bar',
        stacked: true,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        sparkline: {
          enabled: true
        }
      },
      colors: ['#E0291D', '#3C5A99', '#42C0FB'],
      plotOptions: {
        bar: {
          horizontal: false
        }
      },
      series: [
        {
          name: 'Youtube',
          data: [44, 50, 41, 67, 22, 43, 44, 50, 41, 52, 22, 43]
        },
        {
          name: 'Facebook',
          data: [13, 23, 20, 8, 13, 27, 13, 23, 20, 8, 13, 27]
        },
        {
          name: 'Twitter',
          data: [11, 17, 15, 15, 21, 14, 11, 17, 15, 15, 21, 14]
        }
      ],
      xaxis: {
        type: 'datetime',
        categories: [
          '01/01/2011 GMT',
          '01/02/2011 GMT',
          '01/03/2011 GMT',
          '01/04/2011 GMT',
          '01/05/2011 GMT',
          '01/06/2011 GMT',
          '01/07/2011 GMT',
          '01/08/2011 GMT',
          '01/09/2011 GMT',
          '01/10/2011 GMT',
          '01/11/2011 GMT',
          '01/12/2011 GMT'
        ]
      },
      legend: {
        show: false
      },
      fill: {
        opacity: 1
      }
    };
    var chart = new ApexCharts(document.querySelector('#market-chart'), options);
    chart.render();
  }, 500);
});