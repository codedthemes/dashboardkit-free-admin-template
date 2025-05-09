'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var btcchartoption1 = {
      chart: {
        type: 'area',
        height: 145,
        width: '100%',
        sparkline: {
          enabled: true
        }
      },
      colors: ['#7267ef'],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.8,
          opacityTo: 0.4,
          stops: [0, 80, 100]
        }
      },
      stroke: {
        curve: 'smooth',
        width: 2
      },
      series: [
        {
          name: 'series1',
          data: [40, 60, 35, 55, 35, 75, 50]
        }
      ],
      yaxis: {
        min: 0,
        max: 100
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
              return '$';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    new ApexCharts(document.querySelector('#average-chart11'), btcchartoption1).render();
    var btcchartoption2 = {
      chart: {
        type: 'area',
        height: 145,
        sparkline: {
          enabled: true
        }
      },
      colors: ['#0e9e4a'],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.8,
          opacityTo: 0.4,
          stops: [0, 90, 100]
        }
      },
      stroke: {
        curve: 'smooth',
        width: 2
      },
      series: [
        {
          name: 'series1',
          data: [40, 55, 35, 75, 50, 70, 50]
        }
      ],
      yaxis: {
        min: 0,
        max: 100
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
              return '$';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    new ApexCharts(document.querySelector('#average-chart12'), btcchartoption2).render();
    var btcchartoption7 = {
      chart: {
        type: 'area',
        height: 145,
        sparkline: {
          enabled: true
        }
      },
      colors: ['#FFF'],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.5,
          opacityTo: 0.4,
          stops: [0, 100]
        }
      },
      stroke: {
        curve: 'smooth',
        width: 2
      },
      series: [
        {
          name: 'series1',
          data: [40, 60, 35, 70, 50]
        }
      ],
      yaxis: {
        min: 0,
        max: 100
      },
      tooltip: {
        theme: 'dark',
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function (seriesName) {
              return '$';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    new ApexCharts(document.querySelector('#average-chart3'), btcchartoption7).render();
    var btcchartoption8 = {
      chart: {
        type: 'area',
        height: 145,
        sparkline: {
          enabled: true
        }
      },
      colors: ['#FFF'],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.5,
          opacityTo: 0.4,
          stops: [0, 100]
        }
      },
      stroke: {
        curve: 'smooth',
        width: 2
      },
      series: [
        {
          name: 'series1',
          data: [65, 45, 60, 40, 80]
        }
      ],
      yaxis: {
        min: 0,
        max: 100
      },
      tooltip: {
        theme: 'dark',
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function (seriesName) {
              return '$';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    new ApexCharts(document.querySelector('#average-chart4'), btcchartoption8).render();
  }, 500);
});