'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var options = {
      chart: {
        type: 'bar',
        height: 170,
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
      colors: ['#7267ef'],
      plotOptions: {
        bar: {
          color: '#7267ef',
          columnWidth: '60%'
        }
      },
      fill: {
        type: 'solid'
      },
      series: [
        {
          data: [
            25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 54, 25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89,
            63, 25, 44, 12
          ]
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
      grid: {
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
              return 'Active Users :';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#seo-ecommerce-barchart'), options);
    chart.render();
  }, 500);
});