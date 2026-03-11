import { Card, Box, Group, Text, Badge, Button, ActionIcon, Divider } from '@mantine/core'
import { IconShoppingCart, IconEdit, IconTrash } from '@tabler/icons-react'

export default function MenuItemCard({ item }) {
  return (
    <Card
      padding="sm"
      radius="md"
      style={{
        background: 'var(--mantine-color-dark-7)',
        border: '1px solid var(--mantine-color-dark-5)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <Box
        mb="sm"
        style={{
          width: '100%',
          height: 120,
          borderRadius: 6,
          background: `var(--mantine-color-${item.color}-9)`,
          border: `1px solid var(--mantine-color-${item.color}-7)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text size="3xl" fw={800} c={item.color + '.4'}>
          {item.icon}
        </Text>
      </Box>

      <Text size="sm" fw={700} c="gray.1" mb={2}>
        {item.name}
      </Text>
      <Text size="xs" c="dimmed" mb="xs" style={{ flex: 1 }}>
        {item.description}
      </Text>

      <Group justify="space-between" align="center" mb="xs">
        <Text size="lg" fw={800} c="orange.4">
          ${item.price}
        </Text>
        <Badge color={item.available ? 'green' : 'red'} variant="light" size="sm" radius="sm">
          {item.available ? 'Available' : 'Out'}
        </Badge>
      </Group>

      <Divider color="dark.5" my="xs" />

      <Group gap={6}>
        <Button leftSection={<IconShoppingCart size={14} />} color="orange" variant="light" size="xs" radius="md" style={{ flex: 1 }}>
          Add
        </Button>
        <ActionIcon variant="subtle" size="sm" color="gray" radius="sm">
          <IconEdit size={14} />
        </ActionIcon>
        <ActionIcon variant="subtle" size="sm" color="red" radius="sm">
          <IconTrash size={14} />
        </ActionIcon>
      </Group>
    </Card>
  )
}
