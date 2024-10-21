'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    floatchart();
  }, 500);
});
function floatchart() {
  // [ amount-processed ] start
  (function () {
    var options = {
      chart: {
        type: 'area',
        height: 50,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#7267EF'],
      fill: {
        type: 'solid',
        opacity: 0.3
      },
      markers: {
        size: 3,
        opacity: 0.9,
        colors: '#fff',
        strokeColor: '#7267EF',
        strokeWidth: 2,
        hover: {
          size: 7
        }
      },
      stroke: {
        curve: 'straight',
        width: 3
      },
      series: [
        {
          name: 'series1',
          data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 54, 25, 66, 41, 89]
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
              return 'Amount Processed :';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#amount-processed'), options);
    chart.render();
  })();
  // [ amount-processed ] end
  // [ amount-spent ] start
  (function () {
    var options = {
      chart: {
        type: 'bar',
        height: 50,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#17C666'],
      plotOptions: {
        bar: {
          columnWidth: '60%'
        }
      },
      series: [
        {
          data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 54, 25, 66, 41, 89, 63, 25, 44, 12]
        }
      ],
      xaxis: {
        crosshairs: {
          width: 1
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
              return 'Amount Spent :';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#amount-spent'), options);
    chart.render();
  })();
  // [ amount-spent ] end
  // [ profit-processed ] start
  (function () {
    var options = {
      chart: {
        type: 'area',
        height: 50,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#ffa21d'],
      fill: {
        type: 'solid',
        opacity: 0.3
      },
      markers: {
        size: 3,
        opacity: 0.9,
        colors: '#fff',
        strokeColor: '#ffa21d',
        strokeWidth: 2,
        hover: {
          size: 7
        }
      },
      stroke: {
        curve: 'straight',
        width: 3
      },
      series: [
        {
          name: 'series1',
          data: [25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 25, 66, 41, 89, 63, 54, 25, 66, 41, 89, 63]
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
              return 'Profit Processed :';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#profit-processed'), options);
    chart.render();
  })();
  // [ profit-processed ] end
  // [ sec-ecommerce-chart-line ] start
  (function () {
    var options = {
      chart: {
        type: 'area',
        height: 50,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#fff'],
      fill: {
        type: 'solid',
        opacity: 0
      },
      markers: {
        size: 3,
        opacity: 0.9,
        colors: '#fff',
        strokeColor: '#fff',
        strokeWidth: 2,
        hover: {
          size: 4
        }
      },
      stroke: {
        curve: 'straight',
        width: 3
      },
      series: [
        {
          name: 'series1',
          data: [25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 25, 66, 41, 89, 63, 54, 25, 66, 41, 89, 63]
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
              return 'Referral :';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#sec-ecommerce-chart-line'), options);
    chart.render();
  })();
  // [ sec-ecommerce-chart-line ] end
  // [ sec-ecommerce-chart-bar ] start
  (function () {
    var options = {
      chart: {
        type: 'bar',
        height: 80,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#079e4b'],
      plotOptions: {
        bar: {
          columnWidth: '60%'
        }
      },
      series: [
        {
          data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 54, 25, 66, 41, 89]
        }
      ],
      xaxis: {
        crosshairs: {
          width: 1
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
              return 'Affiliate :';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#sec-ecommerce-chart-bar'), options);
    chart.render();
  })();
  // [ sec-ecommerce-chart-bar ] end
  // [ seo-ecommerce-barchart ] start
  (function () {
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
      colors: ['#7267EF'],
      plotOptions: {
        bar: {
          color: '#7267EF',
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
  })();
  // [ seo-ecommerce-barchart ] end
  // [ sal-income ] start
  (function () {
    var options = {
      chart: {
        type: 'area',
        height: 100,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#7267EF'],
      fill: {
        type: 'solid',
        opacity: 0.3
      },
      markers: {
        size: 0,
        opacity: 0.9,
        colors: '#fff',
        strokeColor: '#7267EF',
        strokeWidth: 2,
        hover: {
          size: 7
        }
      },
      stroke: {
        width: 3
      },
      series: [
        {
          name: 'series1',
          data: [25, 66, 41, 89, 25, 44, 12, 36, 9, 54, 25, 66, 41, 66, 41, 89]
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
              return 'Sale Income :';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#sal-income'), options);
    chart.render();
  })();
  // [ sal-income ] end
  // [ rent-income ] start
  (function () {
    var options = {
      chart: {
        type: 'area',
        height: 100,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#17C666'],
      fill: {
        type: 'solid',
        opacity: 0.3
      },
      markers: {
        size: 0,
        opacity: 0.9,
        colors: '#fff',
        strokeColor: '#17C666',
        strokeWidth: 2,
        hover: {
          size: 7
        }
      },
      stroke: {
        width: 3
      },
      series: [
        {
          name: 'series1',
          data: [9, 54, 25, 66, 41, 66, 41, 89, 25, 66, 41, 89, 25, 44, 12, 36]
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
              return 'Rent Income :';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#rent-income'), options);
    chart.render();
  })();
  // [ rent-income ] end
  // [ income-analysis ] start
  (function () {
    var options = {
      chart: {
        type: 'area',
        height: 100,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#EA4D4D'],
      fill: {
        type: 'solid',
        opacity: 0.3
      },
      markers: {
        size: 0,
        opacity: 0.9,
        colors: '#fff',
        strokeColor: '#EA4D4D',
        strokeWidth: 2,
        hover: {
          size: 7
        }
      },
      stroke: {
        width: 3
      },
      series: [
        {
          name: 'series1',
          data: [25, 66, 41, 89, 25, 44, 12, 36, 9, 54, 25, 66, 41, 66, 41, 89]
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
              return 'Income Analysis :';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#income-analysis'), options);
    chart.render();
  })();
  // [ income-analysis ] end
  // [ sale-report ] start
  (function () {
    var options = {
      chart: {
        type: 'bar',
        height: 150,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#7267EF'],
      plotOptions: {
        bar: {
          columnWidth: '60%'
        }
      },
      series: [
        {
          data: [25, 66, 41, 89, 63, 25, 44, 12, 9, 54, 25, 66, 41, 69, 23]
        }
      ],
      xaxis: {
        crosshairs: {
          width: 1
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
              return 'Daily Sales :';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#sale-report-1'), options);
    chart.render();
  })();
  (function () {
    var options = {
      chart: {
        type: 'bar',
        height: 150,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#17C666'],
      plotOptions: {
        bar: {
          columnWidth: '60%'
        }
      },
      series: [
        {
          data: [25, 66, 41, 89, 63, 25, 44, 12, 9, 54, 25, 66, 41, 69, 23]
        }
      ],
      xaxis: {
        crosshairs: {
          width: 1
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
              return 'Weekly Sales :';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#sale-report-2'), options);
    chart.render();
  })();
  (function () {
    var options = {
      chart: {
        type: 'bar',
        height: 150,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#EA4D4D'],
      plotOptions: {
        bar: {
          columnWidth: '60%'
        }
      },
      series: [
        {
          data: [25, 66, 41, 89, 63, 25, 44, 12, 9, 54, 25, 66, 41, 69, 23]
        }
      ],
      xaxis: {
        crosshairs: {
          width: 1
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
              return 'Monthly Sales :';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#sale-report-3'), options);
    chart.render();
  })();
  (function () {
    var options = {
      chart: {
        type: 'bar',
        height: 150,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#ffa21d'],
      plotOptions: {
        bar: {
          columnWidth: '60%'
        }
      },
      series: [
        {
          data: [25, 66, 41, 89, 63, 25, 44, 12, 9, 54, 25, 66, 41, 69, 23]
        }
      ],
      xaxis: {
        crosshairs: {
          width: 1
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
              return 'Yearly Sales :';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#sale-report-4'), options);
    chart.render();
  })();
  (function () {
    var options = {
      chart: {
        type: 'bar',
        height: 150,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#17C666'],
      plotOptions: {
        bar: {
          columnWidth: '60%'
        }
      },
      series: [
        {
          data: [25, 66, 41, 89, 63, 25, 44, 12, 9, 54, 25, 66, 41, 69, 23]
        }
      ],
      xaxis: {
        crosshairs: {
          width: 1
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
              return 'Income in $';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#this-month'), options);
    chart.render();
  })();
  (function () {
    var options = {
      chart: {
        type: 'line',
        height: 117,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#fff'],

      stroke: {
        curve: 'smooth',
        width: 3
      },
      series: [
        {
          name: 'series1',
          data: [55, 35, 75, 25, 90, 50]
        }
      ],
      yaxis: {
        min: 20,
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
              return 'Sales Per Day';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#sale-chart1'), options);
    chart.render();
  })();
  (function () {
    var options = {
      chart: {
        type: 'line',
        height: 117,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#fff'],

      stroke: {
        curve: 'smooth',
        width: 3
      },
      series: [
        {
          name: 'series1',
          data: [55, 35, 75, 50, 90, 50]
        }
      ],
      yaxis: {
        min: 20,
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
              return 'Orders';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#sale-chart3'), options);
    chart.render();
  })();
  (function () {
    var options = {
      chart: {
        type: 'line',
        height: 75,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#EA4D4D'],
      stroke: {
        curve: 'smooth',
        width: 3
      },
      series: [
        {
          name: 'series1',
          data: [55, 35, 75, 50, 90, 50]
        }
      ],
      yaxis: {
        min: 10,
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
              return 'Power';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#power-card-chart1'), options);
    chart.render();
  })();
  (function () {
    var options = {
      chart: {
        type: 'line',
        height: 75,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#7267EF'],
      stroke: {
        curve: 'smooth',
        width: 3
      },
      series: [
        {
          name: 'series1',
          data: [50, 90, 50, 75, 55, 80]
        }
      ],
      yaxis: {
        min: 10,
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
              return 'Water';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#power-card-chart2'), options);
    chart.render();
  })();
  (function () {
    var options = {
      chart: {
        type: 'line',
        height: 75,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#ffa21d'],
      stroke: {
        curve: 'smooth',
        width: 3
      },
      series: [
        {
          name: 'series1',
          data: [55, 35, 75, 50, 90, 50]
        }
      ],
      yaxis: {
        min: 10,
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
              return 'Temperature';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#power-card-chart3'), options);
    chart.render();
  })();
  (function () {
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
  })();
  (function () {
    var options = {
      chart: {
        type: 'bar',
        height: 200,
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
      colors: ['#fff'],
      plotOptions: {
        bar: {
          color: '#fff',
          columnWidth: '60%'
        }
      },
      fill: {
        type: 'solid',
        opacity: 1
      },
      series: [
        {
          data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 54, 25, 66, 41, 89, 63, 25, 44, 12, 36]
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
      yaxis: {
        labels: {
          style: {
            colors: '#fff'
          }
        }
      },
      grid: {
        borderColor: '#ffffff85',
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
              return 'Total Earnings';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#proj-earning'), options);
    chart.render();
  })();
  (function () {
    var lastDate = 0;
    var data = [];

    function getDayWiseTimeSeries(baseval, count, yrange) {
      var i = 0;
      while (i < count) {
        var x = baseval;
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

        data.push({
          x,
          y
        });
        lastDate = baseval;
        baseval += 86400000;
        i++;
      }
    }
    getDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 10, {
      min: 10,
      max: 90
    });

    function getNewSeries(baseval, yrange) {
      var newDate = baseval + 86400000;
      lastDate = newDate;
      data.push({
        x: newDate,
        y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
      });
    }

    function resetData() {
      data = data.slice(data.length - 10, data.length);
    }
    var options = {
      chart: {
        height: 230,
        type: 'area',
        animations: {
          enabled: true,
          easing: 'linear',
          dynamicAnimation: {
            speed: 2000
          }
        },
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      series: [
        {
          name: 'active Users :',
          data: data
        }
      ],
      colors: ['#EA4D4D'],
      fill: {
        type: 'solid',
        opacity: 0
      },
      markers: {
        size: 0
      },
      xaxis: {
        type: 'datetime',
        range: 777600000
      },
      yaxis: {
        max: 100
      },
      legend: {
        show: false
      }
    };
    var chart = new ApexCharts(document.querySelector('#realtime-visit-chart'), options);
    chart.render();
    var dataPointsLength = 10;
    window.setInterval(function () {
      getNewSeries(lastDate, {
        min: 10,
        max: 90
      });

      chart.updateSeries([
        {
          data: data
        }
      ]);
    }, 2000);
    window.setInterval(function () {
      resetData();
      chart.updateSeries(
        [
          {
            data
          }
        ],
        false,
        true
      );
    }, 60000);
  })();
  (function () {
    var options = {
      chart: {
        type: 'area',
        height: 50,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#7267EF'],
      fill: {
        type: 'solid',
        opacity: 0
      },
      grid: {
        padding: {
          left: 5,
          right: 5
        }
      },
      markers: {
        size: 3,
        opacity: 0.9,
        colors: '#7267EF',
        strokeColor: '#7267EF',
        strokeWidth: 1,
        hover: {
          size: 4
        }
      },
      stroke: {
        curve: 'straight',
        width: 2
      },
      series: [
        {
          name: 'series1',
          data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89]
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
              return 'Site Analysis :';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#seo-anlytics1'), options);
    chart.render();
  })();
  (function () {
    var options = {
      chart: {
        type: 'area',
        height: 50,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#17C666'],
      fill: {
        type: 'solid',
        opacity: 0
      },
      grid: {
        padding: {
          left: 5,
          right: 5
        }
      },
      markers: {
        size: 3,
        opacity: 0.9,
        colors: '#17C666',
        strokeColor: '#17C666',
        strokeWidth: 1,
        hover: {
          size: 4
        }
      },
      stroke: {
        curve: 'straight',
        width: 2
      },
      series: [
        {
          name: 'series1',
          data: [12, 25, 36, 9, 54, 25, 66, 66, 41, 89, 63, 25, 44, 89, 41]
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
              return 'Total Sales :';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#seo-anlytics2'), options);
    chart.render();
  })();
  (function () {
    var options = {
      chart: {
        type: 'area',
        height: 50,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#EA4D4D'],
      fill: {
        type: 'solid',
        opacity: 0
      },
      grid: {
        padding: {
          left: 5,
          right: 5
        }
      },
      markers: {
        size: 3,
        opacity: 0.9,
        colors: '#EA4D4D',
        strokeColor: '#EA4D4D',
        strokeWidth: 1,
        hover: {
          size: 4
        }
      },
      stroke: {
        curve: 'straight',
        width: 2
      },
      series: [
        {
          name: 'series1',
          data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89]
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
              return 'Total Visits :';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#seo-anlytics3'), options);
    chart.render();
  })();
  (function () {
    var options = {
      chart: {
        type: 'area',
        height: 50,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#ffa21d'],
      fill: {
        type: 'solid',
        opacity: 0
      },
      grid: {
        padding: {
          left: 5,
          right: 5
        }
      },
      markers: {
        size: 3,
        opacity: 0.9,
        colors: '#ffa21d',
        strokeColor: '#ffa21d',
        strokeWidth: 1,
        hover: {
          size: 4
        }
      },
      stroke: {
        curve: 'straight',
        width: 2
      },
      series: [
        {
          name: 'series1',
          data: [12, 25, 36, 9, 54, 25, 66, 66, 41, 89, 63, 25, 44, 89, 41]
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
              return 'Total Usage :';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#seo-anlytics4'), options);
    chart.render();
  })();
  (function () {
    var options = {
      chart: {
        type: 'area',
        height: 100,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#FFF'],
      fill: {
        type: 'solid',
        opacity: 0.4
      },
      stroke: {
        curve: 'smooth',
        width: 3
      },
      series: [
        {
          name: 'series1',
          data: [20, 10, 18, 12, 25, 10, 20]
        }
      ],
      yaxis: {
        min: 0,
        max: 30
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
              return 'Total Sales';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#total-value-graph-1'), options);
    chart.render();
  })();
  (function () {
    var options = {
      chart: {
        type: 'area',
        height: 100,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#FFF'],
      fill: {
        type: 'solid',
        opacity: 0.4
      },
      stroke: {
        curve: 'smooth',
        width: 3
      },
      series: [
        {
          name: 'series1',
          data: [10, 20, 18, 25, 12, 10, 20]
        }
      ],
      yaxis: {
        min: 0,
        max: 30
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
              return 'Total Comment';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#total-value-graph-2'), options);
    chart.render();
  })();
  (function () {
    var options = {
      chart: {
        type: 'area',
        height: 100,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#FFF'],
      fill: {
        type: 'solid',
        opacity: 0.4
      },
      stroke: {
        curve: 'smooth',
        width: 3
      },
      series: [
        {
          name: 'series1',
          data: [20, 10, 25, 18, 18, 10, 12]
        }
      ],
      yaxis: {
        min: 0,
        max: 30
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
              return 'Income Status';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#total-value-graph-3'), options);
    chart.render();
  })();
  (function () {
    var options = {
      chart: {
        type: 'area',
        height: 100,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#FFF'],
      fill: {
        type: 'solid',
        opacity: 0.4
      },
      stroke: {
        curve: 'smooth',
        width: 3
      },
      series: [
        {
          name: 'series1',
          data: [18, 10, 20, 10, 12, 25, 20]
        }
      ],
      yaxis: {
        min: 0,
        max: 30
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
              return 'Total Visitors';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#total-value-graph-4'), options);
    chart.render();
  })();
  (function () {
    var options = {
      chart: {
        type: 'area',
        height: 40,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#7267EF'],
      fill: {
        type: 'solid',
        opacity: 0.3
      },
      markers: {
        size: 2,
        opacity: 0.9,
        colors: '#7267EF',
        strokeColor: '#7267EF',
        strokeWidth: 2,
        hover: {
          size: 4
        }
      },
      stroke: {
        curve: 'straight',
        width: 3
      },
      series: [
        {
          name: 'series1',
          data: [9, 66, 41, 89, 63, 25, 44, 12, 36, 20, 54, 25, 66, 41, 89, 63, 54, 25, 66, 41, 9]
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
              return 'Monthly Profit :';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#monthlyprofit-1'), options);
    chart.render();
  })();
  (function () {
    var options = {
      chart: {
        type: 'area',
        height: 40,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#17C666'],
      fill: {
        type: 'solid',
        opacity: 0.3
      },
      markers: {
        size: 2,
        opacity: 0.9,
        colors: '#17C666',
        strokeColor: '#17C666',
        strokeWidth: 2,
        hover: {
          size: 4
        }
      },
      stroke: {
        curve: 'straight',
        width: 3
      },
      series: [
        {
          name: 'series1',
          data: [9, 66, 41, 36, 20, 54, 25, 66, 41, 89, 63, 89, 63, 25, 44, 12, 54, 25, 66, 41, 9]
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
              return 'Total Sales :';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#monthlyprofit-2'), options);
    chart.render();
  })();
  (function () {
    var options = {
      chart: {
        type: 'area',
        height: 40,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#EA4D4D'],
      fill: {
        type: 'solid',
        opacity: 0.3
      },
      markers: {
        size: 2,
        opacity: 0.9,
        colors: '#EA4D4D',
        strokeColor: '#EA4D4D',
        strokeWidth: 2,
        hover: {
          size: 4
        }
      },
      stroke: {
        curve: 'straight',
        width: 3
      },
      series: [
        {
          name: 'series1',
          data: [9, 66, 41, 89, 63, 25, 44, 12, 36, 20, 54, 25, 66, 41, 89, 63, 54, 25, 66, 41, 9]
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
              return 'Unique Visitors :';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#monthlyprofit-3'), options);
    chart.render();
  })();
  (function () {
    var options = {
      chart: {
        type: 'area',
        height: 40,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#7267EF'],
      fill: {
        type: 'solid',
        opacity: 0.3
      },
      markers: {
        size: 2,
        opacity: 0.9,
        colors: '#7267EF',
        strokeColor: '#7267EF',
        strokeWidth: 2,
        hover: {
          size: 4
        }
      },
      stroke: {
        curve: 'straight',
        width: 3
      },
      series: [
        {
          name: 'series1',
          data: [9, 66, 41, 89, 63, 25, 44, 12, 36, 20, 54, 25, 9]
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
              return 'Visits :';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#seo-chart1'), options);
    chart.render();
  })();
  (function () {
    var options = {
      chart: {
        type: 'bar',
        height: 40,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#17C666'],
      plotOptions: {
        bar: {
          columnWidth: '60%'
        }
      },
      series: [
        {
          data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63]
        }
      ],
      xaxis: {
        crosshairs: {
          width: 1
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
              return 'Bounce Rate :';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#seo-chart2'), options);
    chart.render();
  })();
  (function () {
    var options = {
      chart: {
        type: 'area',
        height: 40,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#EA4D4D'],
      fill: {
        type: 'solid',
        opacity: 0
      },
      markers: {
        size: 2,
        opacity: 0.9,
        colors: '#EA4D4D',
        strokeColor: '#EA4D4D',
        strokeWidth: 2,
        hover: {
          size: 4
        }
      },
      stroke: {
        curve: 'straight',
        width: 3
      },
      series: [
        {
          name: 'series1',
          data: [9, 66, 41, 89, 63, 25, 44, 12, 36, 20, 54, 25, 9]
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
              return 'Products :';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#seo-chart3'), options);
    chart.render();
  })();
  (function () {
    var options = {
      chart: {
        type: 'area',
        height: 70,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#7267EF'],
      fill: {
        type: 'solid',
        opacity: 0.4
      },
      stroke: {
        curve: 'smooth',
        width: 3
      },
      series: [
        {
          name: 'series1',
          data: [20, 10, 18, 12, 25, 10, 20]
        }
      ],
      yaxis: {
        min: 0,
        max: 30
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
              return 'Activity';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#client-map-1'), options);
    chart.render();
  })();
  (function () {
    var options = {
      chart: {
        type: 'area',
        height: 70,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#EA4D4D'],
      fill: {
        type: 'solid',
        opacity: 0.3
      },
      markers: {
        size: 3,
        opacity: 0.9,
        colors: '#EA4D4D',
        strokeColor: '#EA4D4D',
        strokeWidth: 2,
        hover: {
          size: 4
        }
      },
      stroke: {
        curve: 'straight',
        width: 2
      },
      series: [
        {
          name: 'series1',
          data: [9, 66, 41, 89, 63, 25, 44, 12, 36, 20, 54, 25, 66, 41, 89, 63, 54, 25, 66, 41, 9]
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
              return 'Activity :';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#client-map-2'), options);
    chart.render();
  })();
  (function () {
    var options = {
      chart: {
        type: 'bar',
        height: 70,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#17C666'],
      plotOptions: {
        bar: {
          columnWidth: '60%'
        }
      },
      series: [
        {
          data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63]
        }
      ],
      xaxis: {
        crosshairs: {
          width: 1
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
              return 'Activity :';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#client-map-3'), options);
    chart.render();
  })();
  (function () {
    var options = {
      chart: {
        type: 'area',
        height: 150,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#7267EF'],
      fill: {
        type: 'solid',
        opacity: 0.3
      },
      stroke: {
        curve: 'straight',
        width: 3
      },
      series: [
        {
          name: 'series1',
          data: [25, 66, 41, 89, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89]
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
              return 'Total Leads :';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#tot-lead'), options);
    chart.render();
  })();
  (function () {
    var options = {
      chart: {
        type: 'area',
        height: 150,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#17C666'],
      fill: {
        type: 'solid',
        opacity: 0.3
      },
      stroke: {
        curve: 'straight',
        width: 3
      },
      series: [
        {
          name: 'series1',
          data: [25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 25, 66, 41, 50]
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
              return 'Total Vendors :';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#tot-vendor'), options);
    chart.render();
  })();
  (function () {
    var options = {
      chart: {
        type: 'area',
        height: 150,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#EA4D4D'],
      fill: {
        type: 'solid',
        opacity: 0.3
      },
      stroke: {
        curve: 'straight',
        width: 3
      },
      series: [
        {
          name: 'series1',
          data: [25, 66, 41, 89, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89]
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
              return 'Invoice Generate :';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#invoice-gen'), options);
    chart.render();
  })();
  (function () {
    var options = {
      chart: {
        type: 'line',
        height: 80,
        sparkline: {
          enabled: true
        }
      },
      colors: ['#7267EF'],
      stroke: {
        width: 3,
        curve: 'smooth'
      },
      series: [
        {
          data: [45, 66, 41, 89, 25, 44, 9, 54]
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
              return 'hii';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#hd-complited-ticket'), options);
    chart.render();
  })();
  (function () {
    var options1 = {
      chart: {
        type: 'area',
        height: 215,
        sparkline: {
          enabled: true
        }
      },
      colors: ['#7267EF', '#0e9e4a', '#EA4D4D'],
      stroke: {
        curve: 'smooth',
        width: 2
      },
      series: [
        {
          name: 'series1',
          data: [20, 90, 65, 85, 20, 80, 30]
        },
        {
          name: 'series2',
          data: [70, 30, 40, 15, 60, 40, 95]
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
    new ApexCharts(document.querySelector('#account-chart'), options1).render();
  })();
  (function () {
    var options = {
      chart: {
        height: 120,
        type: 'bar',
        sparkline: {
          enabled: true
        }
      },
      colors: ['#7267EF', '#0e9e4a', '#EA4D4D'],
      plotOptions: {
        bar: {
          columnWidth: '55%',
          distributed: true
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 0
      },
      series: [
        {
          name: 'Requests',
          data: [66.6, 29.7, 32.8]
        }
      ],
      xaxis: {
        categories: ['Desktop', 'Tablet', 'Mobile']
      }
    };
    var chart = new ApexCharts(document.querySelector('#chart-percent'), options);
    chart.render();
  })();
  (function () {
    var options1 = {
      chart: {
        type: 'area',
        height: 95,
        sparkline: {
          enabled: true
        }
      },
      colors: ['#7267EF', '#3ec9d6'],
      stroke: {
        curve: 'smooth',
        width: 2
      },
      series: [
        {
          name: 'Storage',
          data: [100, 40, 28, 51, 42, 109, 100]
        },
        {
          name: 'Bandwidth',
          data: [41, 109, 45, 109, 34, 52, 41]
        }
      ],
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        marker: {
          show: false
        }
      }
    };
    new ApexCharts(document.querySelector('#storage-chart'), options1).render();
  })();
  (function () {
    var options1 = {
      chart: {
        type: 'bar',
        height: 60,
        sparkline: {
          enabled: true
        }
      },
      colors: ['#7267EF'],
      plotOptions: {
        bar: {
          columnWidth: '80%'
        }
      },
      series: [
        {
          data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
        }
      ],
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      xaxis: {
        crosshairs: {
          width: 1
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
              return 'Inbound';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    new ApexCharts(document.querySelector('#transactions1'), options1).render();
    var options2 = {
      chart: {
        type: 'bar',
        height: 60,
        sparkline: {
          enabled: true
        }
      },
      colors: ['#EA4D4D'],
      plotOptions: {
        bar: {
          columnWidth: '80%'
        }
      },
      series: [
        {
          data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
        }
      ],
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      xaxis: {
        crosshairs: {
          width: 1
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
              return 'Outbound';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    new ApexCharts(document.querySelector('#transactions2'), options2).render();
  })();
  (function () {
    var options = {
      chart: {
        height: 135,
        type: 'donut',
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      series: [66.6, 29.7, 38.6],
      labels: ['Desktop', 'Mobile', 'Tablet'],
      grid: {
        padding: {
          top: 20,
          right: 0,
          bottom: 0,
          left: 0
        }
      },
      legend: {
        show: false
      },
      responsive: [
        {
          breakpoint: 1280,
          options: {
            chart: {
              height: 100
            }
          }
        }
      ]
    };
    var chart = new ApexCharts(document.querySelector('#device-chart'), options);
    chart.render();
  })();
  (function () {
    var spark1 = {
      chart: {
        type: 'line',
        height: 30,
        sparkline: {
          enabled: true
        }
      },
      stroke: {
        curve: 'straight',
        width: 2
      },
      series: [
        {
          data: [3, 0, 1, 2, 1, 1, 2]
        }
      ],
      yaxis: {
        min: -2,
        max: 5
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
              return '';
            }
          }
        },
        marker: {
          show: false
        }
      },
      colors: ['#FF9800']
    };
    var chart = new ApexCharts(document.querySelector('#real4-chart'), spark1);
    chart.render();
    var spark2 = {
      chart: {
        type: 'line',
        height: 30,
        sparkline: {
          enabled: true
        }
      },
      stroke: {
        curve: 'straight',
        width: 2
      },
      series: [
        {
          data: [2, 1, 2, 1, 1, 3, 0]
        }
      ],
      yaxis: {
        min: -3,
        max: 5
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
              return '';
            }
          }
        },
        marker: {
          show: false
        }
      },
      colors: ['#dc6788']
    };
    var chart = new ApexCharts(document.querySelector('#real6-chart'), spark2);
    chart.render();
    var spark3 = {
      chart: {
        type: 'line',
        height: 30,
        sparkline: {
          enabled: true
        }
      },
      stroke: {
        curve: 'straight',
        width: 2
      },
      series: [
        {
          data: [3, 0, 1, 2, 1, 1, 2]
        }
      ],
      yaxis: {
        min: -3,
        max: 5
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
              return '';
            }
          }
        },
        marker: {
          show: false
        }
      },
      colors: ['#EA4D4D']
    };
    var chart = new ApexCharts(document.querySelector('#real1-chart'), spark3);
    chart.render();
    var spark4 = {
      chart: {
        type: 'line',
        height: 30,
        sparkline: {
          enabled: true
        }
      },
      stroke: {
        curve: 'straight',
        width: 2
      },
      series: [
        {
          data: [2, 1, 2, 1, 1, 3, 0]
        }
      ],
      yaxis: {
        min: -3,
        max: 5
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
              return '';
            }
          }
        },
        marker: {
          show: false
        }
      },
      colors: ['#7759de']
    };
    var chart = new ApexCharts(document.querySelector('#real5-chart'), spark4);
    chart.render();
    var spark5 = {
      chart: {
        type: 'line',
        height: 30,
        sparkline: {
          enabled: true
        }
      },
      stroke: {
        curve: 'straight',
        width: 2
      },
      series: [
        {
          data: [3, 0, 1, 2, 1, 1, 2]
        }
      ],
      yaxis: {
        min: -3,
        max: 5
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
              return '';
            }
          }
        },
        marker: {
          show: false
        }
      },
      colors: ['#7267EF']
    };
    var chart = new ApexCharts(document.querySelector('#real2-chart'), spark5);
    chart.render();
    var spark6 = {
      chart: {
        type: 'line',
        height: 30,
        sparkline: {
          enabled: true
        }
      },
      stroke: {
        curve: 'straight',
        width: 2
      },
      series: [
        {
          data: [2, 1, 2, 1, 1, 3, 0]
        }
      ],
      yaxis: {
        min: -3,
        max: 5
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
              return '';
            }
          }
        },
        marker: {
          show: false
        }
      },
      colors: ['#17C666']
    };
    var chart = new ApexCharts(document.querySelector('#real3-chart'), spark6);
    chart.render();
  })();
  (function () {
    function generateDatasehratheat(count, yrange) {
      var i = 0;
      var series = [];
      while (i < count) {
        var x = 'w' + (i + 1).toString();
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

        series.push({
          x: x,
          y: y
        });
        i++;
      }
      return series;
    }
    var options = {
      chart: {
        height: 400,
        type: 'heatmap'
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#7267EF'],
      series: [
        {
          name: 'Metric1',
          data: generateDatasehratheat(12, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Metric2',
          data: generateDatasehratheat(12, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Metric3',
          data: generateDatasehratheat(12, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Metric4',
          data: generateDatasehratheat(12, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Metric5',
          data: generateDatasehratheat(12, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Metric6',
          data: generateDatasehratheat(12, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Metric7',
          data: generateDatasehratheat(12, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Metric8',
          data: generateDatasehratheat(12, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Metric9',
          data: generateDatasehratheat(12, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Metric10',
          data: generateDatasehratheat(12, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Metric11',
          data: generateDatasehratheat(12, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Metric12',
          data: generateDatasehratheat(12, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Metric13',
          data: generateDatasehratheat(12, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Metric14',
          data: generateDatasehratheat(12, {
            min: 0,
            max: 90
          })
        }
      ]
    };
    var chart = new ApexCharts(document.querySelector('#time-user'), options);
    chart.render();
  })();
  (function () {
    var options = {
      chart: {
        height: 350,
        type: 'bar'
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            position: 'top'
          }
        }
      },
      colors: ['#7267EF', '#0e9e4a', '#EA4D4D'],
      dataLabels: {
        enabled: true,
        offsetX: -6,
        style: {
          fontSize: '12px',
          colors: ['#fff']
        }
      },
      stroke: {
        show: true,
        width: 1,
        colors: ['#fff']
      },
      series: [
        {
          name: 'India',
          data: [44, 55, 41, 64, 22]
        },
        {
          name: 'Japan',
          data: [53, 32, 33, 52, 13]
        },
        {
          name: 'London',
          data: [44, 33, 52, 13, 22]
        }
      ],
      xaxis: {
        categories: [2001, 2002, 2003, 2004, 2005]
      }
    };
    var chart = new ApexCharts(document.querySelector('#horizontal-bar-chart'), options);
    chart.render();
  })();
  (function () {
    var options1 = {
      chart: {
        type: 'bar',
        height: 65,
        sparkline: {
          enabled: true
        }
      },
      colors: ['#7267EF'],
      plotOptions: {
        bar: {
          columnWidth: '80%'
        }
      },
      series: [
        {
          data: [
            25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 54, 25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89,
            63, 25, 44, 12, 36, 9, 25, 44, 12, 36, 9, 54
          ]
        }
      ],
      xaxis: {
        crosshairs: {
          width: 1
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
              return '';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    new ApexCharts(document.querySelector('#coversions-chart'), options1).render();
  })();
  (function () {
    var optionst = {
      chart: {
        type: 'line',
        height: 135,
        sparkline: {
          enabled: true
        }
      },
      stroke: {
        curve: 'straight',
        width: 3
      },
      series: [
        {
          data: [135, 187, 180, 222, 185, 195, 158]
        }
      ],
      yaxis: {
        min: 100
      },
      colors: ['#7267EF']
    };
    var chart = new ApexCharts(document.querySelector('#site-chart'), optionst);
    chart.render();
  })();
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
      dataLabels: {
        enabled: true,
        dropShadow: {
          enabled: false
        }
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
  (function () {
    var options = {
      chart: {
        height: 325,
        type: 'donut'
      },
      dataLabels: {
        enabled: true,
        dropShadow: {
          enabled: false
        }
      },
      series: [85.7, 77.56, 20.9, 10.9, 15.8, 86.7],
      colors: ['#7267EF', '#0e9e4a', '#3ec9d6', '#ffa21d', '#EA4D4D', '#7759de'],
      labels: ['Facebook ads', 'Amazon ads', 'Youtube videos', 'Google adsense', 'Twitter ads', 'News ads'],
      legend: {
        show: true,
        position: 'bottom'
      }
    };
    var chart = new ApexCharts(document.querySelector('#traffic-chart1'), options);
    chart.render();
  })();
  (function () {
    var options1 = {
      chart: {
        type: 'area',
        height: 87,
        sparkline: {
          enabled: true
        }
      },
      colors: ['#EA4D4D'],
      stroke: {
        curve: 'straight',
        width: 3
      },
      series: [
        {
          name: 'series1',
          data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 54, 25, 66, 41, 89]
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
              return 'Page view:';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    new ApexCharts(document.querySelector('#view-chart'), options1).render();
    var options2 = {
      chart: {
        type: 'area',
        height: 87,
        sparkline: {
          enabled: true
        }
      },
      colors: ['#3ec9d6'],
      stroke: {
        curve: 'smooth',
        width: 3
      },
      series: [
        {
          name: 'series1',
          data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
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
              return 'Users:';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    new ApexCharts(document.querySelector('#view-chart1'), options2).render();
  })();
  (function () {
    var options = {
      chart: {
        height: 225,
        type: 'line',
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
      stroke: {
        width: 3,
        curve: 'straight'
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
      },
      colors: ['#0e9e4a'],
      series: [
        {
          name: 'Hour.',
          data: [10, 41, 35, 51, 49, 52, 58, 71, 89]
        }
      ],
      grid: {
        row: {
          colors: ['#f3f6ff', 'transparent'],
          opacity: 0.5
        }
      }
    };

    var chart = new ApexCharts(document.querySelector('#time-chart'), options);
    chart.render();
  })();
  (function () {
    var options1 = {
      chart: {
        type: 'bar',
        height: 230,
        sparkline: {
          enabled: true
        }
      },
      colors: ['#7267EF'],
      plotOptions: {
        bar: {
          columnWidth: '80%'
        }
      },
      series: [
        {
          data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 54, 25, 66, 41, 89, 63, 25]
        }
      ],
      xaxis: {
        crosshairs: {
          width: 1
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
              return '';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    new ApexCharts(document.querySelector('#sale-chart'), options1).render();
  })();
  (function () {
    var options1 = {
      chart: {
        type: 'bar',
        height: 65,
        sparkline: {
          enabled: true
        }
      },
      colors: ['#3ec9d6'],
      plotOptions: {
        bar: {
          columnWidth: '80%'
        }
      },
      series: [
        {
          data: [
            25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 54, 25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89,
            63, 25, 44, 12, 36, 9, 25, 44, 12, 36, 9, 54
          ]
        }
      ],
      xaxis: {
        crosshairs: {
          width: 1
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
              return '';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    new ApexCharts(document.querySelector('#coversions-chart1'), options1).render();
  })();
  (function () {
    var options = {
      chart: {
        height: 200,
        type: 'donut'
      },
      dataLabels: {
        enabled: false
      },
      labels: ['Target', 'Last week', 'Last day'],
      series: [1258, 975, 500],
      legend: {
        show: false
      },
      colors: ['#3ec9d6', '#ffa21d', '#7267EF']
    };
    var chart = new ApexCharts(document.querySelector('#revenue-chart'), options);
    chart.render();
  })();
  (function () {
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
  })();
  (function () {
    var options = {
      chart: {
        height: 200,
        type: 'donut'
      },
      dataLabels: {
        enabled: false
      },
      plotOptions: {
        pie: {
          donut: {
            size: '65%'
          }
        }
      },
      labels: ['Desktop Computers', 'Smartphones', 'Tablets'],
      series: [76.7, 15, 30],
      legend: {
        show: false
      },
      colors: ['#EA4D4D', '#ffa21d', '#3ec9d6']
    };
    var chart = new ApexCharts(document.querySelector('#type-chart'), options);
    chart.render();
  })();
  (function () {
    var options = {
      chart: {
        height: 195,
        type: 'donut'
      },
      dataLabels: {
        enabled: false
      },
      plotOptions: {
        pie: {
          donut: {
            size: '65%'
          }
        }
      },
      labels: ['New', 'Return', 'Custom'],
      series: [76.7, 15, 30],
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
      colors: ['#7267EF', '#0e9e4a', '#EA4D4D']
    };
    var chart = new ApexCharts(document.querySelector('#customer-chart'), options);
    chart.render();
  })();
  (function () {
    var lastDate = 0;
    var data = [];

    function getDayWiseTimeSeries(baseval, count, yrange) {
      var i = 0;
      while (i < count) {
        var x = baseval;
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

        data.push({
          x,
          y
        });
        lastDate = baseval;
        baseval += 86400000;
        i++;
      }
    }
    getDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 10, {
      min: 10,
      max: 90
    });

    function getNewSeries(baseval, yrange) {
      var newDate = baseval + 86400000;
      lastDate = newDate;
      data.push({
        x: newDate,
        y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
      });
    }

    function resetData() {
      data = data.slice(data.length - 10, data.length);
    }
    var options = {
      chart: {
        height: 300,
        type: 'area',
        animations: {
          enabled: true,
          easing: 'linear',
          dynamicAnimation: {
            speed: 2000
          }
        },
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      series: [
        {
          name: 'active Users :',
          data: data
        }
      ],
      colors: ['#EA4D4D'],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          type: 'horizontal',
          opacityFrom: 0.8,
          opacityTo: 0,
          stops: [0, 100]
        }
      },
      markers: {
        size: 0
      },
      xaxis: {
        type: 'datetime',
        range: 777600000
      },
      yaxis: {
        max: 100
      },
      legend: {
        show: false
      }
    };
    var chart = new ApexCharts(document.querySelector('#site-visitor-chart'), options);
    chart.render();
    var dataPointsLength = 10;
    window.setInterval(function () {
      getNewSeries(lastDate, {
        min: 10,
        max: 90
      });

      chart.updateSeries([
        {
          data: data
        }
      ]);
    }, 2000);
    window.setInterval(function () {
      resetData();
      chart.updateSeries(
        [
          {
            data
          }
        ],
        false,
        true
      );
    }, 60000);
  })();
  (function () {
    var options1 = {
      chart: {
        type: 'bar',
        height: 400,
        zoom: {
          enabled: false
        }
      },
      colors: ['#7267EF'],
      plotOptions: {
        bar: {
          colors: {
            ranges: [
              {
                from: 0,
                to: 15,
                color: '#EA4D4D'
              },
              {
                from: 16,
                to: 30,
                color: '#ffa21d'
              },
              {
                from: 31,
                to: 50,
                color: '#7267EF'
              },
              {
                from: 51,
                to: 100,
                color: '#0e9e4a'
              }
            ]
          },
          columnWidth: '80%'
        }
      },
      series: [
        {
          data: [
            25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 54, 25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89,
            63, 25, 44, 12, 36, 9, 25, 44, 12, 36, 9, 54
          ]
        }
      ],
      xaxis: {
        labels: {
          show: false
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
              return 'Click ';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    new ApexCharts(document.querySelector('#traffic-chart'), options1).render();
  })();
  (function () {
    var options1 = {
      chart: {
        type: 'area',
        height: 95,
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
              return 'Ticket ';
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
  (function () {
    var btcchartoption1 = {
      chart: {
        type: 'area',
        height: 145,
        width: '100%',
        sparkline: {
          enabled: true
        }
      },
      colors: ['#7267EF'],
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
  })();
  (function () {
    var options = {
      annotations: {
        yaxis: [
          {
            y: 30
          }
        ],
        xaxis: [
          {
            x: new Date('14 Nov 2012').getTime()
          }
        ]
      },
      chart: {
        type: 'area',
        height: 320
      },
      dataLabels: {
        enabled: false
      },
      series: [
        {
          name: 'Active Users',
          data: [
            [1327359600000, 30.95],
            [1327446000000, 31.34],
            [1327532400000, 31.18],
            [1327618800000, 31.05],
            [1327878000000, 31.0],
            [1327964400000, 30.95],
            [1328050800000, 31.24],
            [1328137200000, 31.29],
            [1328223600000, 31.85],
            [1328482800000, 31.86],
            [1328569200000, 32.28],
            [1328655600000, 32.1],
            [1328742000000, 32.65],
            [1328828400000, 32.21],
            [1329087600000, 32.35],
            [1329174000000, 32.44],
            [1329260400000, 32.46],
            [1329346800000, 32.86],
            [1329433200000, 32.75],
            [1329778800000, 32.54],
            [1329865200000, 32.33],
            [1329951600000, 32.97],
            [1330038000000, 33.41],
            [1330297200000, 33.27],
            [1330383600000, 33.27],
            [1330470000000, 32.89],
            [1330556400000, 33.1],
            [1330642800000, 33.73],
            [1330902000000, 33.22],
            [1330988400000, 31.99],
            [1331074800000, 32.41],
            [1331161200000, 33.05],
            [1331247600000, 33.64],
            [1331506800000, 33.56],
            [1331593200000, 34.22],
            [1331679600000, 33.77],
            [1331766000000, 34.17],
            [1331852400000, 33.82],
            [1332111600000, 34.51],
            [1332198000000, 33.16],
            [1332284400000, 33.56],
            [1332370800000, 33.71],
            [1332457200000, 33.81],
            [1332712800000, 34.4],
            [1332799200000, 34.63],
            [1332885600000, 34.46],
            [1332972000000, 34.48],
            [1333058400000, 34.31],
            [1333317600000, 34.7],
            [1333404000000, 34.31],
            [1333490400000, 33.46],
            [1333576800000, 33.59],
            [1333922400000, 33.22],
            [1334008800000, 32.61],
            [1334095200000, 33.01],
            [1334181600000, 33.55],
            [1334268000000, 33.18],
            [1334527200000, 32.84],
            [1334613600000, 33.84],
            [1334700000000, 33.39],
            [1334786400000, 32.91],
            [1334872800000, 33.06],
            [1335132000000, 32.62],
            [1335218400000, 32.4],
            [1335304800000, 33.13],
            [1335391200000, 33.26],
            [1335477600000, 33.58],
            [1335736800000, 33.55],
            [1335823200000, 33.77],
            [1335909600000, 33.76],
            [1335996000000, 33.32],
            [1336082400000, 32.61],
            [1336341600000, 32.52],
            [1336428000000, 32.67],
            [1336514400000, 32.52],
            [1336600800000, 31.92],
            [1336687200000, 32.2],
            [1336946400000, 32.23],
            [1337032800000, 32.33],
            [1337119200000, 32.36],
            [1337205600000, 32.01],
            [1337292000000, 31.31],
            [1337551200000, 32.01],
            [1337637600000, 32.01],
            [1337724000000, 32.18],
            [1337810400000, 31.54],
            [1337896800000, 31.6],
            [1338242400000, 32.05],
            [1338328800000, 31.29],
            [1338415200000, 31.05],
            [1338501600000, 29.82],
            [1338760800000, 30.31],
            [1338847200000, 30.7],
            [1338933600000, 31.69],
            [1339020000000, 31.32],
            [1339106400000, 31.65],
            [1339365600000, 31.13],
            [1339452000000, 31.77],
            [1339538400000, 31.79],
            [1339624800000, 31.67],
            [1339711200000, 32.39],
            [1339970400000, 32.63],
            [1340056800000, 32.89],
            [1340143200000, 31.99],
            [1340229600000, 31.23],
            [1340316000000, 31.57],
            [1340575200000, 30.84],
            [1340661600000, 31.07],
            [1340748000000, 31.41],
            [1340834400000, 31.17],
            [1340920800000, 32.37],
            [1341180000000, 32.19],
            [1341266400000, 32.51],
            [1341439200000, 32.53],
            [1341525600000, 31.37],
            [1341784800000, 30.43],
            [1341871200000, 30.44],
            [1341957600000, 30.2],
            [1342044000000, 30.14],
            [1342130400000, 30.65],
            [1342389600000, 30.4],
            [1342476000000, 30.65],
            [1342562400000, 31.43],
            [1342648800000, 31.89],
            [1342735200000, 31.38],
            [1342994400000, 30.64],
            [1343080800000, 30.02],
            [1343167200000, 30.33],
            [1343253600000, 30.95],
            [1343340000000, 31.89],
            [1343599200000, 31.01],
            [1343685600000, 30.88],
            [1343772000000, 30.69],
            [1343858400000, 30.58],
            [1343944800000, 32.02],
            [1344204000000, 32.14],
            [1344290400000, 32.37],
            [1344376800000, 32.51],
            [1344463200000, 32.65],
            [1344549600000, 32.64],
            [1344808800000, 32.27],
            [1344895200000, 32.1],
            [1344981600000, 32.91],
            [1345068000000, 33.65],
            [1345154400000, 33.8],
            [1345413600000, 33.92],
            [1345500000000, 33.75],
            [1345586400000, 33.84],
            [1345672800000, 33.5],
            [1345759200000, 32.26],
            [1346018400000, 32.32],
            [1346104800000, 32.06],
            [1346191200000, 31.96],
            [1346277600000, 31.46],
            [1346364000000, 31.27],
            [1346709600000, 31.43],
            [1346796000000, 32.26],
            [1346882400000, 32.79],
            [1346968800000, 32.46],
            [1347228000000, 32.13],
            [1347314400000, 32.43],
            [1347400800000, 32.42],
            [1347487200000, 32.81],
            [1347573600000, 33.34],
            [1347832800000, 33.41],
            [1347919200000, 32.57],
            [1348005600000, 33.12],
            [1348092000000, 34.53],
            [1348178400000, 33.83],
            [1348437600000, 33.41],
            [1348524000000, 32.9],
            [1348610400000, 32.53],
            [1348696800000, 32.8],
            [1348783200000, 32.44],
            [1349042400000, 32.62],
            [1349128800000, 32.57],
            [1349215200000, 32.6],
            [1349301600000, 32.68],
            [1349388000000, 32.47],
            [1349647200000, 32.23],
            [1349733600000, 31.68],
            [1349820000000, 31.51],
            [1349906400000, 31.78],
            [1349992800000, 31.94],
            [1350252000000, 32.33],
            [1350338400000, 33.24],
            [1350424800000, 33.44],
            [1350511200000, 33.48],
            [1350597600000, 33.24],
            [1350856800000, 33.49],
            [1350943200000, 33.31],
            [1351029600000, 33.36],
            [1351116000000, 33.4],
            [1351202400000, 34.01],
            [1351638000000, 34.02],
            [1351724400000, 34.36],
            [1351810800000, 34.39],
            [1352070000000, 34.24],
            [1352156400000, 34.39],
            [1352242800000, 33.47],
            [1352329200000, 32.98],
            [1352415600000, 32.9],
            [1352674800000, 32.7],
            [1352761200000, 32.54],
            [1352847600000, 32.23],
            [1352934000000, 32.64],
            [1353020400000, 32.65],
            [1353279600000, 32.92],
            [1353366000000, 32.64],
            [1353452400000, 32.84],
            [1353625200000, 33.4],
            [1353884400000, 33.3],
            [1353970800000, 33.18],
            [1354057200000, 33.88],
            [1354143600000, 34.09],
            [1354230000000, 34.61],
            [1354489200000, 34.7],
            [1354575600000, 35.3],
            [1354662000000, 35.4],
            [1354748400000, 35.14],
            [1354834800000, 35.48],
            [1355094000000, 35.75],
            [1355180400000, 35.54],
            [1355266800000, 35.96],
            [1355353200000, 35.53],
            [1355439600000, 37.56],
            [1355698800000, 37.42],
            [1355785200000, 37.49],
            [1355871600000, 38.09],
            [1355958000000, 37.87],
            [1356044400000, 37.71],
            [1356303600000, 37.53],
            [1356476400000, 37.55],
            [1356562800000, 37.3],
            [1356649200000, 36.9],
            [1356908400000, 37.68],
            [1357081200000, 38.34],
            [1357167600000, 37.75],
            [1357254000000, 38.13],
            [1357513200000, 37.94],
            [1357599600000, 38.14],
            [1357686000000, 38.66],
            [1357772400000, 38.62],
            [1357858800000, 38.09],
            [1358118000000, 38.16],
            [1358204400000, 38.15],
            [1358290800000, 37.88],
            [1358377200000, 37.73],
            [1358463600000, 37.98],
            [1358809200000, 37.95],
            [1358895600000, 38.25],
            [1358982000000, 38.1],
            [1359068400000, 38.32],
            [1359327600000, 38.24],
            [1359414000000, 38.52],
            [1359500400000, 37.94],
            [1359586800000, 37.83],
            [1359673200000, 38.34],
            [1359932400000, 38.1],
            [1360018800000, 38.51],
            [1360105200000, 38.4],
            [1360191600000, 38.07],
            [1360278000000, 39.12],
            [1360537200000, 38.64],
            [1360623600000, 38.89],
            [1360710000000, 38.81],
            [1360796400000, 38.61],
            [1360882800000, 38.63],
            [1361228400000, 38.99],
            [1361314800000, 38.77],
            [1361401200000, 38.34],
            [1361487600000, 38.55],
            [1361746800000, 38.11],
            [1361833200000, 38.59],
            [1361919600000, 39.6]
          ]
        }
      ],
      stroke: {
        curve: 'straight',
        width: 2
      },
      markers: {
        size: 0,
        style: 'hollow'
      },
      colors: ['#7267EF'],
      xaxis: {
        type: 'datetime',
        min: new Date('01 Mar 2012').getTime(),
        tickAmount: 6
      },
      tooltip: {
        x: {
          format: 'dd MMM yyyy'
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 100]
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#crypto-chart'), options);
    chart.render();
    var resetCssClasses = function (activeEl) {
      var els = document.querySelectorAll('button');
      Array.prototype.forEach.call(els, function (el) {
        el.classList.remove('active');
      });

      activeEl.target.classList.add('active');
    };
    document.querySelector('#one_month').addEventListener('click', function (e) {
      resetCssClasses(e);
      chart.updateOptions({
        xaxis: {
          min: new Date('28 Jan 2013').getTime(),
          max: new Date('27 Feb 2013').getTime()
        }
      });
    });
    document.querySelector('#six_months').addEventListener('click', function (e) {
      resetCssClasses(e);
      chart.updateOptions({
        xaxis: {
          min: new Date('27 Sep 2012').getTime(),
          max: new Date('27 Feb 2013').getTime()
        }
      });
    });
    document.querySelector('#one_year').addEventListener('click', function (e) {
      resetCssClasses(e);
      chart.updateOptions({
        xaxis: {
          min: new Date('27 Feb 2012').getTime(),
          max: new Date('27 Feb 2013').getTime()
        }
      });
    });
    document.querySelector('#ytd').addEventListener('click', function (e) {
      resetCssClasses(e);
      chart.updateOptions({
        xaxis: {
          min: new Date('01 Jan 2013').getTime(),
          max: new Date('27 Feb 2013').getTime()
        }
      });
    });
    document.querySelector('#all').addEventListener('click', function (e) {
      resetCssClasses(e);
      chart.updateOptions({
        xaxis: {
          min: undefined,
          max: undefined
        }
      });
    });
    document.querySelector('#ytd').addEventListener('click', function () {});
  })();
  // [ crypto-chart ] end
  (function () {
    var options = {
      chart: {
        type: 'area',
        height: 230,
        toolbar: {
          show: false
        }
      },
      colors: ['#7267EF'],
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
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 1
      },
      plotOptions: {
        bar: {
          columnWidth: '45%',
          borderRadius: 4
        }
      },
      grid: {
        strokeDashArray: 4
      },
      series: [
        {
          data: [30, 60, 40, 70, 50, 90, 50, 55, 45, 60, 50, 65]
        }
      ],
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        labels: {
          hideOverlappingLabels: true
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#customer-rate-graph'), options);
    chart.render();
  })();
  (function () {
    var options = {
      series: [
        {
          name: 'Deals',
          data: [44, 55, 41, 67, 52, 53, 13]
        },
        {
          name: 'Income Report',
          data: [13, 3, 20, 8, 13, 27, 21]
        },
        {
          name: 'Customer',
          data: [11, 17, 15, 15, 21, 14, 11]
        },
        {
          name: 'Profits',
          data: [21, 7, 25, 13, 22, 3, 44]
        }
      ],
      chart: {
        type: 'bar',
        height: 250,
        stacked: true,
        toolbar: {
          show: false
        }
      },
      colors: ['#7267EF', '#7267EF', '#7267EF', '#7C57C1'],
      fill: {
        opacity: [0.6, 1, 0.6, 1]
      },
      grid: {
        strokeDashArray: 4
      },
      dataLabels: {
        enabled: false
      },
      plotOptions: {
        bar: {
          horizontal: false
        }
      },
      xaxis: {
        categories: ['Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      legend: {
        show: false
      }
    };
    var chart = new ApexCharts(document.querySelector('#monthly-report-graph'), options);
    chart.render();
  })();
  (function () {
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
      colors: ['#7267EF', '#3ec9d6'],
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
  })();
  (function () {
    var options = {
      chart: {
        type: 'line',
        height: 230,
        toolbar: {
          show: false
        }
      },
      colors: ['#0d6efd', '#748892'],
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 2
      },
      plotOptions: {
        bar: {
          columnWidth: '45%',
          borderRadius: 4
        }
      },
      grid: {
        strokeDashArray: 4
      },
      series: [
        {
          name: 'This month',
          data: [30, 60, 40, 70, 50, 90, 50, 55, 45, 60, 50, 65]
        },
        {
          name: 'Last month',
          data: [50, 55, 45, 60, 50, 65, 30, 60, 40, 70, 50, 90]
        }
      ],
      xaxis: {
        labels: {
          hideOverlappingLabels: true
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#overview-chart-1'), options);
    chart.render();
  })();
  (function () {
    var options = {
      chart: {
        type: 'line',
        height: 230,
        toolbar: {
          show: false
        }
      },
      colors: ['#0d6efd', '#748892'],
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 2
      },
      plotOptions: {
        bar: {
          columnWidth: '45%',
          borderRadius: 4
        }
      },
      grid: {
        strokeDashArray: 4
      },
      series: [
        {
          name: 'This month',
          data: [70, 50, 90, 50, 55, 45, 30, 60, 40, 60, 50, 65]
        },
        {
          name: 'Last month',
          data: [50, 65, 30, 60, 40, 50, 55, 45, 60, 70, 50, 90]
        }
      ],
      xaxis: {
        labels: {
          hideOverlappingLabels: true
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#overview-chart-2'), options);
    chart.render();
  })();
  (function () {
    var options = {
      chart: {
        type: 'line',
        height: 265,
        toolbar: {
          show: false
        }
      },
      colors: ['#7267EF', '#3ec9d6'],
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 2
      },
      plotOptions: {
        bar: {
          columnWidth: '45%',
          borderRadius: 4
        }
      },
      grid: {
        strokeDashArray: 4
      },
      series: [
        {
          name: 'Today',
          data: [0, 0, 90, 50, 55, 0, 0, 0, 0, 60, 0, 0]
        },
        {
          name: 'Yesterday',
          data: [0, 0, 30, 60, 40, 50, 0, 0, 0, 0, 0, 0]
        }
      ],
      xaxis: {
        labels: {
          hideOverlappingLabels: true
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#total-sales-chart'), options);
    chart.render();
  })();
  (function () {
    var options = {
      chart: { type: 'bar', height: 150, sparkline: { enabled: true } },
      colors: ['#F44236', '#7267EF', '#673ab7', '#1DE9B6', '#ffa21d', '#3EBFEA'],
      plotOptions: { bar: { borderRadius: 2, columnWidth: '80%', distributed: true } },
      series: [
        {
          data: [10, 30, 40, 20, 60, 50]
        }
      ],
      xaxis: { crosshairs: { width: 1 } },
      tooltip: {
        fixed: { enabled: false },
        x: { show: false },
        y: {
          title: {
            formatter: function (seriesName) {
              return '';
            }
          }
        },
        marker: { show: false }
      }
    };
    var chart = new ApexCharts(document.querySelector('#overview-bar-chart'), options);
    chart.render();
  })();
  (function () {
    var options = {
      chart: {
        height: 250,
        type: 'donut'
      },
      series: [27, 23, 20, 17],
      colors: ['#7267EF', '#ffa21d', '#1DE9B6', '#7267EF'],
      labels: ['Total income', 'Total rent', 'Download', 'Views'],
      fill: {
        opacity: [1, 1, 1, 0.3]
      },
      legend: {
        show: false
      },
      plotOptions: {
        pie: {
          donut: {
            size: '65%',
            labels: {
              show: true,
              name: {
                show: true
              },
              value: {
                show: true
              }
            }
          }
        }
      },
      dataLabels: {
        enabled: false
      },
      responsive: [
        {
          breakpoint: 575,
          options: {
            chart: {
              height: 250
            },
            plotOptions: {
              pie: {
                donut: {
                  size: '65%',
                  labels: {
                    show: false
                  }
                }
              }
            }
          }
        }
      ]
    };
    var chart = new ApexCharts(document.querySelector('#performance-chart'), options);
    chart.render();
  })();
  (function () {
    var options = {
      chart: { type: 'bar', height: 50, sparkline: { enabled: true } },
      colors: ['#1DE9B6'],
      plotOptions: { bar: { borderRadius: 2, columnWidth: '80%' } },
      series: [
        {
          data: [10, 30, 40, 20, 60, 50, 20, 15, 20, 25, 30, 25]
        }
      ],
      xaxis: { crosshairs: { width: 1 } },
      tooltip: {
        fixed: { enabled: false },
        x: { show: false },
        y: {
          title: {
            formatter: function (seriesName) {
              return '';
            }
          }
        },
        marker: { show: false }
      }
    };
    var chart = new ApexCharts(document.querySelector('#project-rating-chart'), options);
    chart.render();
  })();
  (function () {
    var options = {
      chart: { type: 'bar', height: 60, sparkline: { enabled: true } },
      colors: ['#7267EF'],
      plotOptions: { bar: { borderRadius: 2, columnWidth: '80%' } },
      series: [
        {
          data: [10, 30, 40, 20, 60, 50, 20, 15, 20, 25, 30, 25]
        }
      ],
      xaxis: { crosshairs: { width: 1 } },
      tooltip: {
        fixed: { enabled: false },
        x: { show: false },
        y: {
          title: {
            formatter: function (seriesName) {
              return '';
            }
          }
        },
        marker: { show: false }
      }
    };
    var chart = new ApexCharts(document.querySelector('#transactions-chart'), options);
    chart.render();
  })();
  (function () {
    var options = {
      chart: {
        type: 'line',
        height: 60,
        stacked: true,
        sparkline: { enabled: true }
      },
      colors: ['#F44236'],
      stroke: { curve: 'smooth', width: 2 },
      series: [{ data: [0, 50, 4, 10, 3, 25, 5] }]
    };
    var chart = new ApexCharts(document.querySelector('#canceled-order-chart'), options);
    chart.render();
  })();
  (function () {
    var options = {
      chart: {
        type: 'area',
        height: 100,
        stacked: true,
        sparkline: { enabled: true }
      },
      colors: ['#1DE9B6'],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          type: 'vertical',
          inverseColors: false,
          opacityFrom: 0.7,
          opacityTo: 0
        }
      },
      stroke: { curve: 'smooth', width: 2 },
      series: [
        { data: [30, 60, 40, 70, 50, 90, 50, 55, 45, 60, 50, 65, 30, 60, 40, 70, 50, 90, 50, 55, 45, 60, 50, 65, 40, 70, 50, 90, 50] }
      ]
    };
    var chart = new ApexCharts(document.querySelector('#total-order-chart'), options);
    chart.render();
  })();
  (function () {
    var options = {
      chart: {
        type: 'line',
        height: 100,
        stacked: true,
        sparkline: { enabled: true }
      },
      colors: ['#ffa21d'],
      stroke: { curve: 'smooth', width: 2 },
      series: [{ data: [30, 60, 40, 70, 50, 90, 50, 55, 45, 60, 50, 65, 30, 60, 40, 70, 50] }]
    };
    var chart = new ApexCharts(document.querySelector('#total-rewards-chart'), options);
    chart.render();
  })();
  (function () {
    var options = {
      series: [30],
      chart: {
        height: 150,
        type: 'radialBar'
      },
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: '60%',
            background: 'transparent',
            imageOffsetX: 0,
            imageOffsetY: 0,
            position: 'front'
          },
          track: {
            background: '#ffa21d50',
            strokeWidth: '50%'
          },

          dataLabels: {
            show: true,
            name: {
              show: false
            },
            value: {
              formatter: function (val) {
                return parseInt(val);
              },
              offsetY: 7,
              color: '#ffa21d',
              fontSize: '20px',
              fontWeight: '700',
              show: true
            }
          }
        }
      },
      colors: ['#ffa21d'],
      fill: {
        type: 'solid'
      },
      stroke: {
        lineCap: 'round'
      }
    };
    var chart = new ApexCharts(document.querySelector('#total-earning-chart-1'), options);
    chart.render();
  })();
  (function () {
    var options = {
      series: [30],
      chart: {
        height: 150,
        type: 'radialBar'
      },
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: '60%',
            background: 'transparent',
            imageOffsetX: 0,
            imageOffsetY: 0,
            position: 'front'
          },
          track: {
            background: '#1DE9B650',
            strokeWidth: '50%'
          },

          dataLabels: {
            show: true,
            name: {
              show: false
            },
            value: {
              formatter: function (val) {
                return parseInt(val);
              },
              offsetY: 7,
              color: '#1DE9B6',
              fontSize: '20px',
              fontWeight: '700',
              show: true
            }
          }
        }
      },
      colors: ['#1DE9B6'],
      fill: {
        type: 'solid'
      },
      stroke: {
        lineCap: 'round'
      }
    };
    var chart = new ApexCharts(document.querySelector('#total-earning-chart-2'), options);
    chart.render();
  })();
  (function () {
    var options = {
      chart: {
        type: 'line',
        height: 40,
        stacked: true,
        sparkline: { enabled: true }
      },
      colors: ['#1DE9B6'],
      stroke: { curve: 'smooth', width: 2 },
      series: [{ data: [5, 25, 3, 10, 4, 50, 0] }]
    };
    var chart = new ApexCharts(document.querySelector('#bitcoin-chart-1'), options);
    chart.render();
  })();
  (function () {
    var options = {
      chart: {
        type: 'line',
        height: 40,
        stacked: true,
        sparkline: { enabled: true }
      },
      colors: ['#F44236'],
      stroke: { curve: 'smooth', width: 2 },
      series: [{ data: [0, 50, 4, 10, 3, 25, 5] }]
    };
    var chart = new ApexCharts(document.querySelector('#bitcoin-chart-2'), options);
    chart.render();
  })();
  (function () {
    var options = {
      chart: {
        type: 'line',
        height: 40,
        stacked: true,
        sparkline: { enabled: true }
      },
      colors: ['#7267EF'],
      stroke: { curve: 'smooth', width: 2 },
      series: [{ data: [5, 25, 3, 10, 4, 50, 0] }]
    };
    var chart = new ApexCharts(document.querySelector('#bitcoin-chart-3'), options);
    chart.render();
  })();
  (function () {
    var options = {
      chart: {
        type: 'line',
        height: 100,
        stacked: true,
        sparkline: { enabled: true }
      },
      colors: ['#ffa21d'],
      stroke: { curve: 'smooth', width: 2 },
      series: [{ data: [30, 60, 40, 70, 50, 90, 50, 55, 45, 60, 50, 65, 30, 60, 40, 70, 50] }]
    };
    var chart = new ApexCharts(document.querySelector('#total-rewards-chart-2'), options);
    chart.render();
  })();
  (function () {
    var options = {
      chart: {
        type: 'line',
        height: 40,
        stacked: true,
        sparkline: { enabled: true }
      },
      colors: ['#1DE9B6'],
      stroke: { curve: 'smooth', width: 2 },
      series: [{ data: [5, 25, 3, 10, 4, 50, 0] }]
    };
    var chart = new ApexCharts(document.querySelector('#timesspent-chart'), options);
    chart.render();
  })();
  (function () {
    var options = {
      chart: { type: 'bar', height: 60, sparkline: { enabled: true } },
      colors: ['#F44236'],
      plotOptions: { bar: { borderRadius: 2, columnWidth: '80%' } },
      states: {
        normal: {
          filter: {
            type: 'lighten',
            value: 0.7
          }
        },
        hover: {
          filter: {
            type: 'lighten',
            value: 0
          }
        }
      },
      series: [
        {
          data: [10, 30, 40, 20, 60, 50, 20, 15, 20, 25, 30, 25]
        }
      ],
      xaxis: { crosshairs: { width: 1 } },
      tooltip: {
        fixed: { enabled: false },
        x: { show: false },
        y: {
          title: {
            formatter: function (seriesName) {
              return '';
            }
          }
        },
        marker: { show: false }
      }
    };
    var chart = new ApexCharts(document.querySelector('#new-visitor-chart'), options);
    chart.render();
  })();
  (function () {
    var options = {
      chart: {
        type: 'area',
        height: 250,
        toolbar: {
          show: false
        }
      },
      colors: ['#7267EF', '#0e9e4a', '#EA4D4D'],
      fill: {
        opacity: 0.1,
        type: 'solid'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 1
      },
      plotOptions: {
        bar: {
          columnWidth: '45%',
          borderRadius: 4
        }
      },
      grid: {
        strokeDashArray: 4
      },
      series: [
        {
          name: 'Tomorow',
          data: [30, 60, 40, 70, 50, 90, 50, 55, 45, 60, 50, 65]
        },
        {
          name: 'Today',
          data: [50, 55, 45, 60, 50, 65, 30, 60, 40, 70, 50, 90]
        },
        {
          name: 'Yesterday',
          data: [60, 50, 65, 30, 60, 40, 70, 50, 55, 45, 50, 90]
        }
      ],
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        labels: {
          hideOverlappingLabels: true
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#reports-chart'), options);
    chart.render();
    document.querySelector('#chart-line').addEventListener('click', function (e) {
      chart.updateOptions({
        chart: {
          type: 'line'
        },
        fill: {
          type: 'solid'
        }
      });
    });
    document.querySelector('#chart-area').addEventListener('click', function (e) {
      chart.updateOptions({
        chart: {
          type: 'area'
        },
        fill: {
          type: 'gradient'
        }
      });
    });
    document.querySelector('#chart-bar').addEventListener('click', function (e) {
      chart.updateOptions({
        chart: {
          type: 'bar'
        },
        fill: {
          type: 'solid'
        }
      });
    });
  })();
}
