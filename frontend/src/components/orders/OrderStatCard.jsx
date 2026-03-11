import { ThemeIcon, Group, Text } from '@mantine/core'

export default function OrderStatCard({ icon: Icon, color, value, label, trend }) {
  const trendUp = trend?.startsWith('+')
  const trendColor = trendUp ? 'green' : 'red'
  
  return (
    <Group gap="md" p="md" style={{ background: 'var(--mantine-color-dark-7)', borderRadius: 8, border: '1px solid var(--mantine-color-dark-5)' }}>
      <ThemeIcon color={color} variant="light" radius="md" size={40}>
        <Icon size={20} stroke={1.5} />
      </ThemeIcon>
      <Group justify="space-between" style={{ flex: 1 }}>
        <div>
          <Text size="sm" c="dimmed" fw={600} tt="uppercase">
            {label}
          </Text>
          <Text size="lg" fw={700} c="gray.1">
            {value}
          </Text>
        </div>
        {trend && <Text size="sm" c={trendColor + '.4'} fw={700}>{trend}</Text>}
      </Group>
    </Group>
  )
}
