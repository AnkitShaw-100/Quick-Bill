import { Card, Text, TextInput, TimeInput, Select, Group, Button, Divider, Stack } from '@mantine/core'
import { IconClock } from '@tabler/icons-react'
import { useRef } from 'react'

export default function SettingSection({ title, description, children }) {
  return (
    <Card padding="md" radius="md" style={{ background: 'var(--mantine-color-dark-7)', border: '1px solid var(--mantine-color-dark-5)', marginBottom: 16 }}>
      <Group justify="space-between" align="flex-start" mb="md">
        <Box>
          <Text fw={700} size="sm" c="gray.2" tt="uppercase" style={{ letterSpacing: 0.8 }}>
            {title}
          </Text>
          {description && <Text size="xs" c="dimmed" mt={4}>{description}</Text>}
        </Box>
      </Group>
      <Divider color="dark.5" mb="md" />
      {children}
    </Card>
  )
}

import { Box } from '@mantine/core'
