import { Card, Group, Badge, Table, ScrollArea, ActionIcon, Text, Divider, Tooltip } from '@mantine/core'
import { IconEye, IconReceipt, IconDots } from '@tabler/icons-react'
import SectionHeader from './SectionHeader'
import StatusBadge from './StatusBadge'

export default function OrdersTable({ orders }) {
  return (
    <Card
      padding="md"
      radius="md"
      style={{ background: 'var(--mantine-color-dark-7)', border: '1px solid var(--mantine-color-dark-5)' }}
    >
      <SectionHeader
        title="Recent Orders"
        right={
          <Group gap={8}>
            <Badge color="orange" variant="light" size="sm" radius="sm">Live</Badge>
            <ActionIcon variant="subtle" color="gray" size="sm" radius="sm">
              <IconDots size={14} />
            </ActionIcon>
          </Group>
        }
      />
      <Divider color="dark.5" mb="sm" />

      <ScrollArea>
        <Table
          verticalSpacing="xs"
          horizontalSpacing="sm"
          style={{ minWidth: 520 }}
          styles={{
            thead: { background: 'var(--mantine-color-dark-6)' },
            th: {
              color: 'var(--mantine-color-dimmed)',
              fontSize: 11,
              textTransform: 'uppercase',
              letterSpacing: 1,
              fontWeight: 600,
              padding: '7px 10px',
              borderColor: 'var(--mantine-color-dark-5)',
            },
            td: { borderColor: 'var(--mantine-color-dark-5)' },
          }}
        >
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Order</Table.Th>
              <Table.Th>Table</Table.Th>
              <Table.Th>Waiter</Table.Th>
              <Table.Th>Items</Table.Th>
              <Table.Th>Total</Table.Th>
              <Table.Th>Status</Table.Th>
              <Table.Th>Time</Table.Th>
              <Table.Th></Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {orders.map((o) => (
              <Table.Tr key={o.id}>
                <Table.Td>
                  <Text size="sm" fw={700} c="orange.4" style={{ fontVariantNumeric: 'tabular-nums' }}>
                    {o.id}
                  </Text>
                </Table.Td>
                <Table.Td>
                  <Text size="sm" c="gray.2" fw={500}>{o.table}</Text>
                </Table.Td>
                <Table.Td>
                  <Text size="xs" c="dimmed">{o.waiter}</Text>
                </Table.Td>
                <Table.Td>
                  <Text size="sm" c="dimmed">{o.items} item{o.items !== 1 ? 's' : ''}</Text>
                </Table.Td>
                <Table.Td>
                  <Text size="sm" fw={700} c="gray.1">{o.total}</Text>
                </Table.Td>
                <Table.Td><StatusBadge status={o.status} /></Table.Td>
                <Table.Td>
                  <Text size="xs" c="dimmed" style={{ whiteSpace: 'nowrap' }}>{o.time}</Text>
                </Table.Td>
                <Table.Td>
                  <Group gap={2}>
                    <Tooltip label="View order" withArrow>
                      <ActionIcon variant="subtle" size="sm" color="gray" radius="sm">
                        <IconEye size={14} stroke={1.5} />
                      </ActionIcon>
                    </Tooltip>
                    <Tooltip label="Print receipt" withArrow>
                      <ActionIcon variant="subtle" size="sm" color="gray" radius="sm">
                        <IconReceipt size={14} stroke={1.5} />
                      </ActionIcon>
                    </Tooltip>
                  </Group>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </ScrollArea>
    </Card>
  )
}
