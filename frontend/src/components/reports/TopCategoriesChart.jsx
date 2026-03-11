import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default function TopCategoriesChart() {
  const data = {
    labels: ['Main Courses', 'Beverages', 'Desserts', 'Appetizers'],
    datasets: [
      {
        label: 'Orders',
        data: [42, 28, 22, 18],
        backgroundColor: [
          'rgba(255, 159, 64, 0.8)',
          'rgba(75, 192, 192, 0.8)',
          'rgba(153, 102, 255, 0.8)',
          'rgba(255, 99, 132, 0.8)',
        ],
        borderColor: [
          'rgb(255, 159, 64)',
          'rgb(75, 192, 192)',
          'rgb(153, 102, 255)',
          'rgb(255, 99, 132)',
        ],
        borderWidth: 1.5,
        borderRadius: 5,
      },
    ],
  }

  const options = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: 'rgba(255, 255, 255, 0.7)',
          font: { size: 11, weight: '500' },
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
        callbacks: {
          label: function(context) {
            return context.parsed.x + ' orders'
          },
        },
      },
    },
    scales: {
      x: {
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
      y: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.6)',
          font: { size: 11, weight: '500' },
        },
      },
    },
  }

  return <Bar data={data} options={options} height={150} />
}
