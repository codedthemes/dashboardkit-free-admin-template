'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    floatchart();
  }, 500);
});

function floatchart() {
  const dataTable1 = new simpleDatatables.DataTable('#pc-dt-simple-1', { sortable: false });
  const dataTable2 = new simpleDatatables.DataTable('#pc-dt-simple-2', { sortable: false });
  const dataTable3 = new simpleDatatables.DataTable('#pc-dt-simple-3', { sortable: false });
  const dataTable4 = new simpleDatatables.DataTable('#pc-dt-simple-4', { sortable: false });
  (function () {
    var total_invoice_1_chart_options = {
      chart: {
        type: 'area',
        height: 55,
        sparkline: {
          enabled: true
        }
      },
      colors: ['#2ca87f'],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          type: 'vertical',
          inverseColors: false,
          opacityFrom: 0.5,
          opacityTo: 0
        }
      },
      stroke: {
        curve: 'smooth',
        width: 2
      },
      series: [
        {
          data: [0, 20, 10, 45, 30, 55, 20, 30]
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
              return 'Ticket ';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#total-invoice-1-chart'), total_invoice_1_chart_options);
    chart.render();

    var total_invoice_2_chart_options = {
      chart: {
        type: 'area',
        height: 55,
        sparkline: {
          enabled: true
        }
      },
      colors: ['#e58a00'],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          type: 'vertical',
          inverseColors: false,
          opacityFrom: 0.5,
          opacityTo: 0
        }
      },
      stroke: {
        curve: 'smooth',
        width: 2
      },
      series: [
        {
          data: [30, 20, 55, 30, 45, 10, 20, 0]
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
              return 'Ticket ';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#total-invoice-2-chart'), total_invoice_2_chart_options);
    chart.render();

    var total_invoice_3_chart_options = {
      chart: {
        type: 'area',
        height: 55,
        sparkline: {
          enabled: true
        }
      },
      colors: ['#dc2626'],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          type: 'vertical',
          inverseColors: false,
          opacityFrom: 0.5,
          opacityTo: 0
        }
      },
      stroke: {
        curve: 'smooth',
        width: 2
      },
      series: [
        {
          data: [0, 20, 10, 45, 30, 55, 20, 30]
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
              return 'Ticket ';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#total-invoice-3-chart'), total_invoice_3_chart_options);
    chart.render();
  })();
}
