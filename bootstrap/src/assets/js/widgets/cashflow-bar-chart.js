'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var cashflow_bar_chart_options = {
      chart: {
        type: 'bar',
        height: 255,
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          columnWidth: '70%',
          borderRadius: 2
        }
      },
      fill: {
        opacity: [1, 1]
      },
      stroke: {
        show: true,
        width: 3,
        colors: ['transparent']
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left',
        show: true,
        markers: {
          width: 8,
          height: 8,
          radius: 8,
          offsexX: 2,
          offsexY: 2
        },
        itemMargin: {
          horizontal: 10,
          vertical: 4
        }
      },
      colors: ['#17c666', '#ea4d4d'],
      series: [
        {
          name: 'Income',
          data: [180, 90, 135, 114, 120, 145, 180, 90, 135, 114, 120, 145]
        },
        {
          name: 'Expends',
          data: [120, 45, 78, 150, 168, 99, 120, 45, 78, 150, 168, 99]
        }
      ],
      grid: {
        borderColor: '#00000010'
      },
      yaxis: {
        show: false
      }
    };
    var chart = new ApexCharts(document.querySelector('#cashflow-bar-chart'), cashflow_bar_chart_options);
    chart.render();
  }, 500);
});