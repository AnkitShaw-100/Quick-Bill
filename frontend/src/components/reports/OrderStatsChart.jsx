import { PolarArea } from 'react-chartjs-2'
import { Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend)

export default function OrderStatsChart() {
  const data = {
    labels: ['Ready', 'Processing', 'Pending', 'Paid', 'Cancelled'],
    datasets: [
      {
        label: 'Order Status Distribution',
        data: [35, 48, 22, 72, 8],
        backgroundColor: [
          'rgba(34, 197, 94, 0.7)',   // Green - Ready
          'rgba(59, 130, 246, 0.7)',  // Blue - Processing
          'rgba(255, 193, 7, 0.7)',   // Yellow - Pending
          'rgba(76, 175, 80, 0.7)',   // Lime - Paid
          'rgba(255, 99, 132, 0.7)',  // Red - Cancelled
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
            const value = context.parsed.r || 0
            const total = 185
            const pct = ((value / total) * 100).toFixed(1)
            return label + ': ' + value + ' orders (' + pct + '%)'
          },
        },
      },
    },
    scales: {
      r: {
        beginAtZero: true,
        grid: {
          color: 'rgba(255, 255, 255, 0.08)',
          drawBorder: true,
          borderColor: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.4)',
          font: { size: 10 },
          backdropColor: 'transparent',
        },
        pointLabels: {
          color: 'rgba(255, 255, 255, 0.7)',
          font: { size: 11, weight: '500' },
        },
      },
    },
  }

  return <PolarArea data={data} options={options} />
}
