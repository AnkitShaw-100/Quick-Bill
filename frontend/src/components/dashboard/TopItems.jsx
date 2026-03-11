import { Card, Box, Text, Group, Divider } from '@mantine/core'
import { IconStar } from '@tabler/icons-react'
import SectionHeader from './SectionHeader'

export default function TopItems({ topItems }) {
  return (
    <Card
      padding="md"
      radius="md"
      style={{ background: 'var(--mantine-color-dark-7)', border: '1px solid var(--mantine-color-dark-5)' }}
    >
      <SectionHeader
        title="Top Selling Items — Today's Shift"
        right={<IconStar size={16} color="var(--mantine-color-yellow-5)" />}
      />
      <Divider color="dark.5" mb="sm" />

      <Box
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))',
          gap: 10,
        }}
      >
        {topItems.map((item, i) => (
          <Box
            key={item.name}
            style={{
              padding: '10px 12px',
              borderRadius: 8,
              background: 'var(--mantine-color-dark-6)',
              border: '1px solid var(--mantine-color-dark-5)',
              display: 'flex',
              alignItems: 'center',
              gap: 10,
            }}
          >
            <Box
              style={{
                width: 28, height: 28,
                borderRadius: 7,
                background: `var(--mantine-color-${item.color}-9)`,
                border: `1px solid var(--mantine-color-${item.color}-7)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Text size="xs" fw={800} c={item.color + '.4'}>#{i + 1}</Text>
            </Box>
            <Box style={{ minWidth: 0 }}>
              <Text size="xs" fw={600} c="gray.2" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {item.name}
              </Text>
              <Group gap={6} mt={2}>
                <Text size="xs" c="dimmed">{item.sold} sold</Text>
                <Text size="xs" c={item.color + '.4'} fw={600}>{item.revenue}</Text>
              </Group>
            </Box>
          </Box>
        ))}
      </Box>
    </Card>
  )
}
