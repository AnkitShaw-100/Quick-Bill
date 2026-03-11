export const statusConfig = {
  Ready:      { color: 'green',  label: 'Ready'      },
  Processing: { color: 'yellow', label: 'Processing' },
  Pending:    { color: 'orange', label: 'Pending'    },
  Paid:       { color: 'gray',   label: 'Paid'       },
}

export const tableStatusColor = {
  free:     { bg: 'var(--mantine-color-dark-5)',    border: 'var(--mantine-color-dark-4)',    text: 'var(--mantine-color-gray-6)'   },
  occupied: { bg: 'rgba(255,152,0,0.12)',            border: 'var(--mantine-color-orange-7)',  text: 'var(--mantine-color-orange-4)' },
  reserved: { bg: 'rgba(66,153,225,0.1)',            border: 'var(--mantine-color-blue-7)',    text: 'var(--mantine-color-blue-4)'   },
  billing:  { bg: 'rgba(72,199,116,0.1)',            border: 'var(--mantine-color-green-7)',   text: 'var(--mantine-color-green-4)'  },
}
