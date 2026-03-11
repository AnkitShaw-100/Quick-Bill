import { Card, Group, Box, Text, Divider } from '@mantine/core'

export default function TableLegend() {
  const statuses = [
    { label: 'Free',     color: 'dark',   count: 8 },
    { label: 'Occupied', color: 'orange', count: 7 },
    { label: 'Reserved', color: 'blue',   count: 3 },
    { label: 'Dirty',    color: 'red',    count: 2 },
  ]

  return (
    <Card padding="md" radius="md" style={{ background: 'var(--mantine-color-dark-7)', border: '1px solid var(--mantine-color-dark-5)' }}>
      <Text fw={700} size="sm" c="gray.2" tt="uppercase" style={{ letterSpacing: 0.8, marginBottom: 12 }}>
        Table Status
      </Text>
      <Divider color="dark.5" mb="md" />
      <Group align="center" justify="space-around">
        {statuses.map(({ label, color, count }) => (
          <Group key={label} gap={8}>
            <Box style={{
              width: 12, height: 12, borderRadius: 3,
              background: color === 'dark'
                ? 'var(--mantine-color-dark-4)'
                : `var(--mantine-color-${color}-5)`,
            }} />
            <div>
              <Text size="xs" c="dimmed">{label}</Text>
              <Text size="sm" fw={700} c="gray.1">{count}</Text>
            </div>
          </Group>
        ))}
      </Group>
    </Card>
  )
}
