import { Box, UnstyledButton, Text, ThemeIcon, Group, Tooltip, Badge } from '@mantine/core'
import { IconArmchair, IconAlertCircle } from '@tabler/icons-react'

const tableStatusColor = {
  free:     { bg: 'var(--mantine-color-dark-5)',    border: 'var(--mantine-color-dark-4)',    text: 'var(--mantine-color-gray-5)',    icon: 'gray' },
  occupied: { bg: 'rgba(255,152,0,0.12)',            border: 'var(--mantine-color-orange-7)',  text: 'var(--mantine-color-orange-4)', icon: 'orange' },
  reserved: { bg: 'rgba(66,153,225,0.1)',            border: 'var(--mantine-color-blue-7)',    text: 'var(--mantine-color-blue-4)',   icon: 'blue' },
  dirty:    { bg: 'rgba(255, 71, 87, 0.12)',         border: 'var(--mantine-color-red-7)',     text: 'var(--mantine-color-red-4)',    icon: 'red' },
}

export default function TableTile({ table, status, guests, waiter }) {
  const style = tableStatusColor[status] || tableStatusColor.free

  return (
    <Tooltip label={`${guests ? guests + ' guests' : 'Empty'} - ${waiter || 'Unassigned'}`} withArrow>
      <UnstyledButton
        style={{
          background: style.bg,
          border: `1px solid ${style.border}`,
          borderRadius: 8,
          aspectRatio: '1',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          position: 'relative',
        }}
      >
        <ThemeIcon color={style.icon} variant="light" radius="md" size={32} mb={4}>
          <IconArmchair size={16} />
        </ThemeIcon>
        <Text size="sm" fw={700} style={{ color: style.text, lineHeight: 1 }}>#{table}</Text>
        <Text size="9px" style={{ color: style.text, opacity: 0.7, lineHeight: 1.3, textTransform: 'capitalize', marginTop: 2 }}>
          {status}
        </Text>
      </UnstyledButton>
    </Tooltip>
  )
}
