import { Box, Group, Text, Button, SimpleGrid, Card, Divider } from '@mantine/core'
import { IconPlus } from '@tabler/icons-react'
import { IconLayoutGrid } from '@tabler/icons-react'
import TableTile from '../components/tables/TableTile'
import TableLegend from '../components/tables/TableLegend'

const mockTables = [
  { id: 1,  status: 'occupied', guests: 4, waiter: 'Sofia R.' },
  { id: 2,  status: 'occupied', guests: 2, waiter: 'James K.' },
  { id: 3,  status: 'free',     guests: 0, waiter: null },
  { id: 4,  status: 'reserved', guests: 0, waiter: null },
  { id: 5,  status: 'occupied', guests: 6, waiter: 'Sofia R.' },
  { id: 6,  status: 'free',     guests: 0, waiter: null },
  { id: 7,  status: 'occupied', guests: 3, waiter: 'Lena M.' },
  { id: 8,  status: 'dirty',    guests: 0, waiter: null },
  { id: 9,  status: 'free',     guests: 0, waiter: null },
  { id: 10, status: 'occupied', guests: 5, waiter: 'James K.' },
  { id: 11, status: 'occupied', guests: 8, waiter: 'Sofia R.' },
  { id: 12, status: 'free',     guests: 0, waiter: null },
  { id: 13, status: 'reserved', guests: 0, waiter: null },
  { id: 14, status: 'free',     guests: 0, waiter: null },
  { id: 15, status: 'occupied', guests: 2, waiter: 'Lena M.' },
  { id: 16, status: 'free',     guests: 0, waiter: null },
  { id: 17, status: 'free',     guests: 0, waiter: null },
  { id: 18, status: 'occupied', guests: 4, waiter: 'James K.' },
  { id: 19, status: 'dirty',    guests: 0, waiter: null },
  { id: 20, status: 'free',     guests: 0, waiter: null },
]

export default function Table() {
  return (
    <Box style={{ padding: '20px', overflowY: 'auto', maxWidth: 1400, margin: '0 auto', width: '100%' }}>

      {/* Page header */}
      <Group justify="space-between" align="center" mb="lg">
        <Box>
          <Text fw={800} size="xl" c="gray.1">Tables</Text>
          <Text size="sm" c="dimmed" mt={2}>Manage seating and table assignments</Text>
        </Box>
        <Button leftSection={<IconPlus size={16} stroke={2} />} color="orange" radius="md" size="sm">
          Add Table
        </Button>
      </Group>

      {/* Legend and quick stats */}
      <SimpleGrid cols={{ base: 1, md: 2 }} spacing="md" mb="md">
        <TableLegend />
        <Card padding="md" radius="md" style={{ background: 'var(--mantine-color-dark-7)', border: '1px solid var(--mantine-color-dark-5)' }}>
          <Text fw={700} size="sm" c="gray.2" tt="uppercase" style={{ letterSpacing: 0.8, marginBottom: 12 }}>
            Quick Stats
          </Text>
          <Divider color="dark.5" mb="md" />
          <Group justify="space-around">
            <div style={{ textAlign: 'center' }}>
              <Text size="lg" fw={800} c="orange.4">70%</Text>
              <Text size="xs" c="dimmed">Occupancy</Text>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Text size="lg" fw={800} c="gray.1">42</Text>
              <Text size="xs" c="dimmed">Guests</Text>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Text size="lg" fw={800} c="gray.1">3.5h</Text>
              <Text size="xs" c="dimmed">Avg. Stay</Text>
            </div>
          </Group>
        </Card>
      </SimpleGrid>

      {/* Table grid */}
      <Card padding="md" radius="md" style={{ background: 'var(--mantine-color-dark-7)', border: '1px solid var(--mantine-color-dark-5)' }}>
        <Group mb="md">
          <IconLayoutGrid size={18} />
          <Text fw={700} size="sm" c="gray.2" tt="uppercase" style={{ letterSpacing: 0.8 }}>
            Floor Layout
          </Text>
        </Group>
        <Divider color="dark.5" mb="md" />
        <Box style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: 12 }}>
          {mockTables.map((t) => <TableTile key={t.id} table={t.id} status={t.status} guests={t.guests} waiter={t.waiter} />)}
        </Box>
      </Card>

    </Box>
  )
}
