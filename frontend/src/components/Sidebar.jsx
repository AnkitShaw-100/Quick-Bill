import { Stack, Text, Divider, Box, UnstyledButton, Group } from '@mantine/core'
import {
  IconLayoutDashboard,
  IconShoppingBag,
  IconArmchair,
  IconToolsKitchen2,
  IconChartBar,
  IconSettings,
  IconFlame,
} from '@tabler/icons-react'

const navItems = [
  { label: 'Dashboard', icon: IconLayoutDashboard },
  { label: 'Orders',    icon: IconShoppingBag     },
  { label: 'Tables',    icon: IconArmchair        },
  { label: 'Menu',      icon: IconToolsKitchen2   },
  { label: 'Reports',   icon: IconChartBar        },
]

function NavItem({ label, icon: Icon, active, onClick }) {
  return (
    <UnstyledButton
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '10px 12px',
        borderRadius: 8,
        width: '100%',
        fontWeight: active ? 600 : 400,
        fontSize: 14,
        color: active
          ? 'var(--mantine-color-orange-4)'
          : 'var(--mantine-color-gray-4)',
        background: active
          ? 'var(--mantine-color-dark-6)'
          : 'transparent',
        borderLeft: active
          ? '3px solid var(--mantine-color-orange-5)'
          : '3px solid transparent',
        transition: 'all 0.15s ease',
      }}
    >
      <Icon
        size={18}
        stroke={active ? 2 : 1.5}
        color={
          active
            ? 'var(--mantine-color-orange-4)'
            : 'var(--mantine-color-gray-5)'
        }
      />
      {label}
    </UnstyledButton>
  )
}

export default function Sidebar({ active, onNav }) {
  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        background: 'var(--mantine-color-dark-8)',
      }}
    >
      {/* Brand */}
      <Box
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          padding: '0 20px',
          height: 64,
          borderBottom: '1px solid var(--mantine-color-dark-5)',
          flexShrink: 0,
        }}
      >
        <Box
          style={{
            width: 32,
            height: 32,
            borderRadius: 8,
            background: 'var(--mantine-color-orange-7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <IconFlame size={18} color="#fff" stroke={2} />
        </Box>
        <Box>
          <Text fw={800} size="md" c="gray.1" style={{ letterSpacing: 0.5, lineHeight: 1 }}>
            DineFlow
          </Text>
        </Box>
      </Box>

      {/* Navigation */}
      <Box style={{ flex: 1, padding: '16px 12px', overflow: 'auto' }}>
        <Text
          size="10px"
          c="dimmed"
          fw={700}
          tt="uppercase"
          style={{ letterSpacing: 1.5, padding: '0 12px', marginBottom: 8 }}
        >
          Navigation
        </Text>
        <Stack gap={2}>
          {navItems.map(({ label, icon }) => (
            <NavItem
              key={label}
              label={label}
              icon={icon}
              active={active === label}
              onClick={() => onNav(label)}
            />
          ))}
        </Stack>
      </Box>

      {/* Bottom system section */}
      <Box
        style={{
          padding: '12px',
          borderTop: '1px solid var(--mantine-color-dark-5)',
        }}
      >
        <Text
          size="10px"
          c="dimmed"
          fw={700}
          tt="uppercase"
          style={{ letterSpacing: 1.5, padding: '0 12px', marginBottom: 8 }}
        >
          System
        </Text>
        <NavItem
          label="Settings"
          icon={IconSettings}
          active={active === 'Settings'}
          onClick={() => onNav('Settings')}
        />
        <Text
          size="10px"
          c="dimmed"
          style={{ padding: '12px 12px 0', textAlign: 'center' }}
        >
          v1.0.0
        </Text>
      </Box>
    </Box>
  )
}
