import { Card, Box, Group, Text, ThemeIcon, Progress } from '@mantine/core'
import { IconArrowUpRight, IconArrowDownRight } from '@tabler/icons-react'

export default function StatCard({ label, value, trend, trendUp, trendSub, icon: Icon, color, progress }) {
  const TrendIcon = trendUp ? IconArrowUpRight : IconArrowDownRight
  const trendColor = trendUp ? 'green' : 'red'

  return (
    <Card
      padding="md"
      radius="md"
      style={{
        background: 'var(--mantine-color-dark-7)',
        border: '1px solid var(--mantine-color-dark-5)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* colored top stripe */}
      <Box
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: 3,
          background: `var(--mantine-color-${color}-6)`,
          borderRadius: '8px 8px 0 0',
        }}
      />

      <Group justify="space-between" align="flex-start" mb={10} mt={4}>
        <Text size="xs" fw={600} c="dimmed" tt="uppercase" style={{ letterSpacing: 1 }}>
          {label}
        </Text>
        <ThemeIcon color={color} variant="light" radius="md" size={32}>
          <Icon size={16} stroke={1.5} />
        </ThemeIcon>
      </Group>

      <Text fw={800} c="gray.1" style={{ fontSize: '1.4rem', lineHeight: 1, marginBottom: 8 }}>
        {value}
      </Text>

      <Group gap={5} mb={10}>
        <ThemeIcon color={trendColor} variant="light" radius="xl" size={18}>
          <TrendIcon size={11} stroke={2.5} />
        </ThemeIcon>
        <Text size="xs" c={trendColor + '.4'} fw={700}>{trend}</Text>
        <Text size="xs" c="dimmed">{trendSub}</Text>
      </Group>

      <Progress value={progress} color={color} size={3} radius="xl" />
    </Card>
  )
}
