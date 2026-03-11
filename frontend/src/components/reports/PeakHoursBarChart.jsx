import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default function PeakHoursBarChart() {
  const data = {
    labels: ['9pm', '10pm', '11pm', '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am'],
    datasets: [
      {
        label: 'Orders',
        data: [35, 48, 62, 75, 88, 92, 85, 72, 58, 42, 28, 15],
        backgroundColor: [
          'rgba(34, 197, 94, 0.7)',   // Green - low
          'rgba(34, 197, 94, 0.7)',
          'rgba(59, 130, 246, 0.7)',  // Blue - medium
          'rgba(59, 130, 246, 0.7)',
          'rgba(255, 159, 64, 0.7)',  // Orange - high
          'rgba(255, 99, 132, 0.8)',  // Red - peak
          'rgba(255, 99, 132, 0.8)',  // Red - peak
          'rgba(255, 159, 64, 0.7)',  // Orange - high
          'rgba(59, 130, 246, 0.7)',  // Blue - medium
          'rgba(59, 130, 246, 0.7)',
          'rgba(34, 197, 94, 0.7)',   // Green - low
          'rgba(34, 197, 94, 0.7)',
        ],
        borderColor: [
          'rgb(34, 197, 94)',
          'rgb(34, 197, 94)',
          'rgb(59, 130, 246)',
          'rgb(59, 130, 246)',
          'rgb(255, 159, 64)',
          'rgb(255, 99, 132)',
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(59, 130, 246)',
          'rgb(59, 130, 246)',
          'rgb(34, 197, 94)',
          'rgb(34, 197, 94)',
        ],
        borderWidth: 1.5,
        borderRadius: 6,
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
        padding: 12,
        callbacks: {
          label: function(context) {
            return context.parsed.y + ' orders'
          },
          afterLabel: function(context) {
            const value = context.parsed.y
            if (value >= 85) return 'Peak hours'
            if (value >= 70) return 'High demand'
            if (value >= 50) return 'Medium demand'
            return 'Low demand'
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        grid: {
          color: 'rgba(255, 255, 255, 0.05)',
          drawBorder: false,
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.5)',
          font: { size: 11 },
          stepSize: 20,
        },
        title: {
          display: true,
          text: 'Number of Orders',
          color: 'rgba(255, 255, 255, 0.6)',
          font: { size: 12, weight: '500' },
        },
      },
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.6)',
          font: { size: 10, weight: '500' },
        },
        title: {
          display: true,
          text: 'Time of Day',
          color: 'rgba(255, 255, 255, 0.6)',
          font: { size: 12, weight: '500' },
        },
      },
    },
  }

  return <Bar data={data} options={options} />
}
