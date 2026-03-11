import { Card, Group, Badge, Table, ScrollArea, ActionIcon, Text, Divider, Tooltip, TextInput, Select } from '@mantine/core'
import { IconSearch, IconFilter, IconEye, IconTrash, IconPrinter } from '@tabler/icons-react'
import { useState } from 'react'

const statusConfig = {
  Completed: { color: 'green',  label: 'Completed'  },
  Pending:   { color: 'orange', label: 'Pending'    },
  Cancelled: { color: 'red',    label: 'Cancelled'  },
  Processing: { color: 'blue',  label: 'Processing' },
}

export default function OrdersTable({ orders }) {
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState(null)
  
  const filtered = orders.filter(o => 
    (o.id.toLowerCase().includes(search.toLowerCase()) || 
     o.customer.toLowerCase().includes(search.toLowerCase())) &&
    (!statusFilter || o.status === statusFilter)
  )

  return (
    <Card padding="md" radius="md" style={{ background: 'var(--mantine-color-dark-7)', border: '1px solid var(--mantine-color-dark-5)' }}>
      <Group justify="space-between" align="center" mb="md">
        <Text fw={700} size="sm" c="gray.2" tt="uppercase" style={{ letterSpacing: 0.8 }}>
          All Orders
        </Text>
        <Group gap={8}>
          <TextInput placeholder="Search orders..." leftSection={<IconSearch size={14} />} size="sm" value={search} onChange={(e) => setSearch(e.currentTarget.value)} />
          <Select placeholder="Status" data={['Completed', 'Pending', 'Cancelled', 'Processing']} size="sm" value={statusFilter} onChange={setStatusFilter} clearable />
        </Group>
      </Group>
      <Divider color="dark.5" mb="md" />

      <ScrollArea>
        <Table verticalSpacing="sm" horizontalSpacing="sm" style={{ minWidth: 700 }} styles={{ thead: { background: 'var(--mantine-color-dark-6)' }, th: { color: 'var(--mantine-color-dimmed)', fontSize: 11, textTransform: 'uppercase', letterSpacing: 1, fontWeight: 600, padding: '7px 10px', borderColor: 'var(--mantine-color-dark-5)' }, td: { borderColor: 'var(--mantine-color-dark-5)' } }}>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Order ID</Table.Th>
              <Table.Th>Customer</Table.Th>
              <Table.Th>Table</Table.Th>
              <Table.Th>Items</Table.Th>
              <Table.Th>Total</Table.Th>
              <Table.Th>Status</Table.Th>
              <Table.Th>Time</Table.Th>
              <Table.Th></Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {filtered.map((o) => {
              const cfg = statusConfig[o.status] || { color: 'gray', label: o.status }
              return (
                <Table.Tr key={o.id}>
                  <Table.Td><Text size="sm" fw={700} c="orange.4">{o.id}</Text></Table.Td>
                  <Table.Td><Text size="sm" c="gray.2">{o.customer}</Text></Table.Td>
                  <Table.Td><Text size="sm" c="gray.2">{o.table}</Text></Table.Td>
                  <Table.Td><Text size="sm" c="dimmed">{o.items}</Text></Table.Td>
                  <Table.Td><Text size="sm" fw={700} c="gray.1">{o.total}</Text></Table.Td>
                  <Table.Td><Badge color={cfg.color} variant="light" size="sm" radius="sm">{cfg.label}</Badge></Table.Td>
                  <Table.Td><Text size="xs" c="dimmed">{o.time}</Text></Table.Td>
                  <Table.Td>
                    <Group gap={2}>
                      <Tooltip label="View details" withArrow><ActionIcon variant="subtle" size="sm" color="gray" radius="sm"><IconEye size={14} stroke={1.5} /></ActionIcon></Tooltip>
                      <Tooltip label="Print receipt" withArrow><ActionIcon variant="subtle" size="sm" color="gray" radius="sm"><IconPrinter size={14} stroke={1.5} /></ActionIcon></Tooltip>
                      <Tooltip label="Delete" withArrow><ActionIcon variant="subtle" size="sm" color="red" radius="sm"><IconTrash size={14} stroke={1.5} /></ActionIcon></Tooltip>
                    </Group>
                  </Table.Td>
                </Table.Tr>
              )
            })}
          </Table.Tbody>
        </Table>
      </ScrollArea>
    </Card>
  )
}
