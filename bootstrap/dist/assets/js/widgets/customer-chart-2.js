'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var options1 = {
      chart: {
        height: 150,
        type: 'donut'
      },
      dataLabels: {
        enabled: false
      },
      plotOptions: {
        pie: {
          donut: {
            size: '75%'
          }
        }
      },
      labels: ['Desktop', 'Mobile'],
      series: [39, 8],
      legend: {
        show: false
      },
      grid: {
        padding: {
          top: 20,
          right: 0,
          bottom: 0,
          left: 0
        }
      },
      colors: ['#fff', '#fff'],
      fill: {
        opacity: [1, 0.3]
      },
      tooltip: {
        fillSeriesColor: false,
        theme: 'dark'
      },
      stroke: {
        width: 0
      }
    };
    var chart = new ApexCharts(document.querySelector('#customer-chart1'), options1);
    chart.render();
    chartInstances['customer-chart1'] = chart;
  }, 500);
});