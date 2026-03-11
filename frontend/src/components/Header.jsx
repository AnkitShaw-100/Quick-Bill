import { useState, useEffect } from 'react'
import { Group, Text, Avatar, Badge, Box, ActionIcon, Tooltip, Burger, Divider } from '@mantine/core'
import { IconBell, IconPrinter } from '@tabler/icons-react'

export default function Header({ activePage, opened, toggle }) {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const formatDate = (d) =>
    d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })

  const formatTime = (d) =>
    d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })

  return (
    <Box
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
        height: 64,
        width: '100%',
      }}
    >
      {/* Left: burger (mobile) + page title */}
      <Group gap={12}>
        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="sm"
          color="var(--mantine-color-gray-4)"
        />
        <Box>
          <Text fw={700} size="md" c="gray.1" style={{ lineHeight: 1 }}>
            {activePage}
          </Text>
          <Text size="xs" c="dimmed" hiddenFrom="sm" visibleFrom="" style={{ lineHeight: 1.4 }}>
            DineFlow POS
          </Text>
        </Box>
      </Group>

      {/* Right */}
      <Group gap={0}>
        {/* Clock — hidden on mobile */}
        <Box
          visibleFrom="sm"
          style={{ textAlign: 'right', paddingRight: 16, marginRight: 16, borderRight: '1px solid var(--mantine-color-dark-5)' }}
        >
          <Text size="xs" c="dimmed" style={{ lineHeight: 1.2 }}>
            {formatDate(time)}
          </Text>
          <Text
            size="sm"
            fw={600}
            c="orange.4"
            style={{ fontVariantNumeric: 'tabular-nums', lineHeight: 1.4 }}
          >
            {formatTime(time)}
          </Text>
        </Box>

        {/* Status */}
        <Group gap={4} style={{ paddingRight: 16, marginRight: 16, borderRight: '1px solid var(--mantine-color-dark-5)' }}>
          <Tooltip label="Network online">
            <Badge color="green" variant="dot" size="sm" visibleFrom="xs">Online</Badge>
          </Tooltip>
          <Tooltip label="Printer ready">
            <ActionIcon variant="subtle" color="gray" size="md">
              <IconPrinter size={17} stroke={1.5} />
            </ActionIcon>
          </Tooltip>
          <Tooltip label="Notifications">
            <Box style={{ position: 'relative', display: 'inline-flex' }}>
              <ActionIcon variant="subtle" color="gray" size="md">
                <IconBell size={17} stroke={1.5} />
              </ActionIcon>
              <Box
                style={{
                  position: 'absolute',
                  top: 6,
                  right: 6,
                  width: 7,
                  height: 7,
                  borderRadius: '50%',
                  background: 'var(--mantine-color-orange-5)',
                  border: '1.5px solid var(--mantine-color-dark-7)',
                }}
              />
            </Box>
          </Tooltip>
        </Group>

        {/* User */}
        <Group gap={10}>
          <Box visibleFrom="sm" style={{ textAlign: 'right' }}>
            <Text size="sm" fw={600} c="gray.1" style={{ lineHeight: 1.2 }}>Alex Morgan</Text>
            <Text size="xs" c="dimmed" style={{ lineHeight: 1.4 }}>Cashier</Text>
          </Box>
          <Avatar radius="xl" size={36} color="orange" variant="filled">
            AM
          </Avatar>
        </Group>
      </Group>
    </Box>
  )
}

