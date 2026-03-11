import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

export default function PeakHoursChart() {
  const data = {
    labels: ['9pm', '10pm', '11pm', '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am'],
    datasets: [
      {
        data: [35, 48, 62, 75, 88, 92, 85, 72, 58, 42, 28, 15],
        backgroundColor: [
          'rgba(34, 197, 94, 0.8)',   // Green - on time
          'rgba(34, 197, 94, 0.8)',
          'rgba(34, 197, 94, 0.8)',
          'rgba(34, 197, 94, 0.8)',
          'rgba(34, 197, 94, 0.8)',
          'rgba(255, 159, 64, 0.8)',  // Orange - delayed
          'rgba(255, 159, 64, 0.8)',
          'rgba(255, 159, 64, 0.8)',
          'rgba(255, 99, 132, 0.8)',  // Red - overdue
          'rgba(255, 99, 132, 0.8)',
          'rgba(34, 197, 94, 0.8)',
          'rgba(34, 197, 94, 0.8)',
        ],
        borderColor: 'rgba(31, 31, 31, 0.8)',
        borderWidth: 1.5,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false,
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
            return context.label + ': ' + context.parsed + ' orders'
          },
        },
      },
    },
  }

  return <Doughnut data={data} options={options} />
}
