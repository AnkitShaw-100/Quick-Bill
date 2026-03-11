import { Card, Group, Badge, Box, Text, Divider, ThemeIcon, ScrollArea, Tooltip } from '@mantine/core'
import { IconChefHat } from '@tabler/icons-react'
import SectionHeader from './SectionHeader'
import KitchenCard from './KitchenCard'

export default function KitchenQueue({ activeOrders }) {
  return (
    <Card
      padding="md"
      radius="md"
      style={{ background: 'var(--mantine-color-dark-7)', border: '1px solid var(--mantine-color-dark-5)' }}
    >
      <SectionHeader
        title="Kitchen Queue"
        right={
          <Group gap={6}>
            <Badge color="blue" variant="light" size="sm" radius="sm">{activeOrders.length} active</Badge>
            <Tooltip label="Managed by kitchen staff" withArrow>
              <ThemeIcon variant="transparent" size={16} color="gray">
                <IconChefHat size={14} stroke={1.5} />
              </ThemeIcon>
            </Tooltip>
          </Group>
        }
      />
      <Divider color="dark.5" mb="sm" />

      <Group gap={12} mb="sm">
        {[
          { label: 'On time', color: 'green'  },
          { label: 'Delayed', color: 'yellow' },
          { label: 'Overdue', color: 'red'    },
        ].map(({ label, color }) => (
          <Group key={label} gap={5}>
            <Box style={{ width: 8, height: 8, borderRadius: '50%', background: `var(--mantine-color-${color}-5)` }} />
            <Text size="xs" c="dimmed">{label}</Text>
          </Group>
        ))}
      </Group>

      <ScrollArea h={320}>
        {activeOrders.map((o, i) => (
          <KitchenCard key={i} {...o} />
        ))}
      </ScrollArea>
    </Card>
  )
}
