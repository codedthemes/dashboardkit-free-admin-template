export function SalesCustomerSatisfactionChartData() {
  return {
    height: 260,
    options: {
      chart: {
        background: 'transparent'
      },
      labels: ['extremely Satisfied', 'Satisfied', 'Poor', 'Very Poor'],
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
        mode: 'light',
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
    },
    series: [66, 50, 40, 30]
  };
}
