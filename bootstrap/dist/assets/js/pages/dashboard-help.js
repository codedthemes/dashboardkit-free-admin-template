'use strict';
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
    colors: ['#3ec9d6'],
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
  new ApexCharts(document.querySelector('#support-chart'), options1).render();
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
    colors: ['#7267EF'],
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
  new ApexCharts(document.querySelector('#support-chart1'), options1).render();
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
  new ApexCharts(document.querySelector('#support-chart2'), options1).render();
})();
// [ support-chart2 ] end

// [ satisfaction-chart ] start
(function () {
  var options = {
    chart: {
      height: 260,
      type: 'pie'
    },
    series: [66, 50, 40, 30],
    labels: ['Very Poor', 'Satisfied', 'Very Satisfied', 'Poor'],
    legend: {
      show: true,
      offsetY: 50
    },
    theme: {
      monochrome: {
        enabled: true,
        color: '#7267EF'
      }
    },
    responsive: [
      {
        breakpoint: 768,
        options: {
          chart: {
            height: 320
          },
          legend: {
            position: 'bottom',
            offsetY: 0
          }
        }
      }
    ]
  };
  var chart = new ApexCharts(document.querySelector('#satisfaction-chart'), options);
  chart.render();
})();
// [ satisfaction-chart ] end

// [ latest-scroll ] start
new SimpleBar(document.querySelector('.latest-scroll'));
// [ latest-scroll ] end
