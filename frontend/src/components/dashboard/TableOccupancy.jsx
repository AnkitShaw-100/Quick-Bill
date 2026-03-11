import { Card, Box, Group, Text, Badge, Divider } from '@mantine/core'
import SectionHeader from './SectionHeader'
import TableTile from './TableTile'

export default function TableOccupancy({ tableGrid }) {
  const occupied    = tableGrid.filter(t => t.status === 'occupied').length
  const free        = tableGrid.filter(t => t.status === 'free').length
  const reserved    = tableGrid.filter(t => t.status === 'reserved').length
  const billing     = tableGrid.filter(t => t.status === 'billing').length
  const occupancyPct = Math.round((occupied / tableGrid.length) * 100)

  return (
    <Card
      padding="md"
      radius="md"
      style={{ background: 'var(--mantine-color-dark-7)', border: '1px solid var(--mantine-color-dark-5)' }}
    >
      <SectionHeader
        title="Table Occupancy"
        right={
          <Badge color="orange" variant="light" size="sm" radius="sm">
            {occupancyPct}% full
          </Badge>
        }
      />
      <Divider color="dark.5" mb="sm" />

      <Group gap={12} mb="sm" style={{ flexWrap: 'wrap' }}>
        {[
          { label: `${occupied} Occupied`, color: 'orange' },
          { label: `${free} Free`,         color: 'dark'   },
          { label: `${reserved} Reserved`, color: 'blue'   },
          { label: `${billing} Billing`,   color: 'green'  },
        ].map(({ label, color }) => (
          <Group key={label} gap={5}>
            <Box style={{
              width: 8, height: 8, borderRadius: 2,
              background: color === 'dark'
                ? 'var(--mantine-color-dark-4)'
                : `var(--mantine-color-${color}-6)`,
            }} />
            <Text size="xs" c="dimmed">{label}</Text>
          </Group>
        ))}
      </Group>

      <Box
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: 7,
        }}
      >
        {tableGrid.map((t) => <TableTile key={t.id} {...t} />)}
      </Box>
    </Card>
  )
}
