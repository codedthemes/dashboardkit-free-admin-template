'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    floatchart();
  }, 100);
  // [ campaign-scroll ] start
  new SimpleBar(document.querySelector('.product-scroll'));
  // [ campaign-scroll ] end
  peity.defaults.donut = {
    delimiter: null,
    fill: ['#ff9900', '#fff4dd', '#ffd592'],
    height: null,
    innerRadius: null,
    radius: 8,
    width: null
  };
  document.querySelectorAll('.donut').forEach((e) => peity(e, 'donut'));
});

function floatchart() {
  // [ revenue-chart ] start
  (function () {
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
      colors: ['#c7d9ff', '#7267EF'],
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
        opacity: 1
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
  })();
  // [ revenue-chart ] end
  // [ customer-chart ] start
  (function () {
    var options = {
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
      labels: ['New', 'Return'],
      series: [39, 15],
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
      colors: ['#7267EF', '#7267EF'],
      fill: {
        opacity: [1, 0.3]
      },
      tooltip: {
        theme: 'dark'
      },
      stroke: {
        width: 0
      }
    };
    var chart = new ApexCharts(document.querySelector('#customer-chart'), options);
    chart.render();
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
      labels: ['New', 'Return'],
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
  })();
  // [ customer-chart ] end
}
