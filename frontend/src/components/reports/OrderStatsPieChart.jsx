import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

export default function OrderStatsPieChart() {
  const data = {
    labels: ['Ready', 'Processing', 'Pending', 'Paid', 'Cancelled'],
    datasets: [
      {
        label: 'Order Status Distribution',
        data: [35, 48, 22, 72, 8],
        backgroundColor: [
          'rgba(34, 197, 94, 0.8)',   // Green - Ready
          'rgba(59, 130, 246, 0.8)',  // Blue - Processing
          'rgba(255, 193, 7, 0.8)',   // Yellow - Pending
          'rgba(76, 175, 80, 0.8)',   // Lime - Paid
          'rgba(255, 99, 132, 0.8)',  // Red - Cancelled
        ],
        borderColor: [
          'rgb(34, 197, 94)',
          'rgb(59, 130, 246)',
          'rgb(255, 193, 7)',
          'rgb(76, 175, 80)',
          'rgb(255, 99, 132)',
        ],
        borderWidth: 2,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          color: 'rgba(255, 255, 255, 0.7)',
          font: { size: 12, weight: '500' },
          padding: 15,
          usePointStyle: true,
        },
      },
      tooltip: {
        backgroundColor: 'rgba(31, 31, 31, 0.9)',
        titleColor: 'rgba(255, 255, 255, 1)',
        bodyColor: 'rgba(255, 255, 255, 0.8)',
        borderColor: 'rgb(255, 159, 64)',
        borderWidth: 1,
        padding: 12,
        callbacks: {
          label: function(context) {
            const label = context.label || ''
            const value = context.parsed || 0
            const total = 185
            const pct = ((value / total) * 100).toFixed(1)
            return label + ': ' + value + ' orders (' + pct + '%)'
          },
        },
      },
    },
  }

  return <Pie data={data} options={options} />
}
