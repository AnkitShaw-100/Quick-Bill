import { Group, Text } from '@mantine/core'

export default function SectionHeader({ title, right }) {
  return (
    <Group justify="space-between" align="center" mb="sm">
      <Text fw={700} size="sm" c="gray.2" tt="uppercase" style={{ letterSpacing: 0.8 }}>
        {title}
      </Text>
      {right}
    </Group>
  )
}
