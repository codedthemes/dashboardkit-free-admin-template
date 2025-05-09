'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var options = {
      chart: {
        height: 250,
        type: 'bar',
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '75%',
          borderRadius: 1,
          borderRadiusApplication: 'end'
        }
      },
      legend: {
        show: true,
        position: 'bottom'
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#7267ef', '#3ec9d6'],
      stroke: {
        show: true,
        width: 1,
        colors: ['transparent']
      },
      grid: {
        strokeDashArray: 4
      },
      series: [
        {
          name: 'Net Profit',
          data: [76, 85, 101, 98, 87]
        },
        {
          name: 'Revenue',
          data: [44, 55, 57, 56, 61]
        }
      ],
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun']
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return '$ ' + val;
          }
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#yearly-summary-chart'), options);
    chart.render();
  }, 500);
});