import { Card, Box, Group, Text, RingProgress, Progress, Divider } from '@mantine/core'
import SectionHeader from './SectionHeader'

const hourlyData = [30, 55, 42, 70, 88, 61, 75, 95, 71]

export default function RevenueTarget() {
  return (
    <Card
      padding="md"
      radius="md"
      style={{ background: 'var(--mantine-color-dark-7)', border: '1px solid var(--mantine-color-dark-5)' }}
    >
      <SectionHeader
        title="Daily Revenue Target"
        right={<Text size="xs" c="dimmed">Resets at midnight</Text>}
      />
      <Divider color="dark.5" mb="md" />

      <Group align="center" gap="lg">
        <RingProgress
          size={100}
          thickness={9}
          roundCaps
          sections={[{ value: 71, color: 'orange' }]}
          label={
            <Box style={{ textAlign: 'center' }}>
              <Text size="md" fw={800} c="orange.4">71%</Text>
            </Box>
          }
        />
        <Box style={{ flex: 1 }}>
          <Group justify="space-between" mb={5}>
            <Text size="xs" c="dimmed">Collected</Text>
            <Text size="xs" fw={700} c="gray.1">$4,280</Text>
          </Group>
          <Group justify="space-between" mb={5}>
            <Text size="xs" c="dimmed">Target</Text>
            <Text size="xs" fw={700} c="gray.1">$6,000</Text>
          </Group>
          <Group justify="space-between" mb={10}>
            <Text size="xs" c="dimmed">Remaining</Text>
            <Text size="xs" fw={700} c="orange.4">$1,720</Text>
          </Group>
          <Progress value={71} color="orange" size={5} radius="xl" />
        </Box>
      </Group>

      <Divider color="dark.5" mt="md" mb="sm" />
      <Text size="xs" c="dimmed" fw={600} tt="uppercase" style={{ letterSpacing: 1, marginBottom: 8 }}>
        Hourly Breakdown
      </Text>
      <Group gap={4} align="flex-end" style={{ height: 36 }}>
        {hourlyData.map((v, i) => (
          <Box key={i} style={{ flex: 1 }}>
            <Box
              style={{
                height: v * 0.36,
                borderRadius: 3,
                background: i === hourlyData.length - 1
                  ? 'var(--mantine-color-orange-5)'
                  : 'var(--mantine-color-dark-5)',
              }}
            />
          </Box>
        ))}
      </Group>
      <Group justify="space-between" mt={4}>
        <Text size="10px" c="dimmed">9 AM</Text>
        <Text size="10px" c="dimmed">Now</Text>
      </Group>
    </Card>
  )
}
