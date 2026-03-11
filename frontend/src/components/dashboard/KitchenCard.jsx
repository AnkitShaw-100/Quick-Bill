import { Box, Group, Text, Badge, Progress, ActionIcon } from '@mantine/core'
import { IconDots, IconClock } from '@tabler/icons-react'
import { statusConfig } from './constants'

export default function KitchenCard({ table, waiter, items, elapsedLabel, elapsedPct, status }) {
  const cfg = statusConfig[status] || { color: 'gray' }
  const urgencyColor = elapsedPct >= 90 ? 'red' : elapsedPct >= 65 ? 'yellow' : 'green'

  return (
    <Box
      style={{
        padding: '12px',
        borderRadius: 8,
        background: 'var(--mantine-color-dark-6)',
        border: '1px solid var(--mantine-color-dark-5)',
        borderLeft: `3px solid var(--mantine-color-${cfg.color}-5)`,
        marginBottom: 8,
      }}
    >
      <Group justify="space-between" mb={6}>
        <Box>
          <Text size="sm" fw={700} c="gray.1">{table}</Text>
          <Text size="xs" c="dimmed">{waiter}</Text>
        </Box>
        <Group gap={6}>
          <Badge color={cfg.color} variant="dot" size="xs">{status}</Badge>
          <ActionIcon variant="subtle" color="gray" size="xs" radius="sm">
            <IconDots size={12} />
          </ActionIcon>
        </Group>
      </Group>

      <Group gap={6} style={{ flexWrap: 'wrap' }} mb={8}>
        {items.map((item, i) => (
          <Badge
            key={i}
            size="xs"
            radius="sm"
            variant="outline"
            style={{
              borderColor: 'var(--mantine-color-dark-4)',
              color: 'var(--mantine-color-gray-4)',
            }}
          >
            {item}
          </Badge>
        ))}
      </Group>

      <Group justify="space-between" mb={3}>
        <Group gap={4}>
          <IconClock size={11} color={`var(--mantine-color-${urgencyColor}-5)`} stroke={1.5} />
          <Text size="10px" c={urgencyColor + '.4'} fw={600}>{elapsedLabel}</Text>
        </Group>
        <Text size="10px" c="dimmed">Target: 25 min</Text>
      </Group>
      <Progress value={elapsedPct} color={urgencyColor} size={3} radius="xl" />
    </Box>
  )
}
