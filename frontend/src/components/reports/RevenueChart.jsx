import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export default function RevenueChart() {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Revenue ($)',
        data: [4200, 5100, 4800, 6200, 7100, 8400, 8900],
        borderColor: 'rgb(255, 159, 64)',
        backgroundColor: 'rgba(255, 159, 64, 0.1)',
        borderWidth: 2,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: 'rgb(255, 159, 64)',
        pointBorderColor: '#1f1f1f',
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: 'rgba(255, 255, 255, 0.7)',
          font: { size: 12, weight: '500' },
          padding: 15,
        },
      },
      tooltip: {
        backgroundColor: 'rgba(31, 31, 31, 0.9)',
        titleColor: 'rgba(255, 255, 255, 1)',
        bodyColor: 'rgba(255, 255, 255, 0.8)',
        borderColor: 'rgb(255, 159, 64)',
        borderWidth: 1,
        padding: 10,
        displayColors: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(255, 255, 255, 0.05)',
          drawBorder: false,
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.5)',
          font: { size: 11 },
        },
      },
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.5)',
          font: { size: 11 },
        },
      },
    },
  }

  return <Line data={data} options={options} height={80} />
}
