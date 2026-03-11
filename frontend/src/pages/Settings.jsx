import { Box, Text, Group, TextInput, NumberInput, Select, Switch, Button, SimpleGrid, Card, Divider, Stack } from '@mantine/core'
import { IconSettings, IconClock, IconPhone, IconMail, IconMapPin } from '@tabler/icons-react'

export default function Settings() {
  return (
    <Box style={{ padding: '20px', overflowY: 'auto', maxWidth: 800, margin: '0 auto', width: '100%' }}>

      {/* Page header */}
      <Group align="center" mb="lg">
        <Box>
          <Text fw={800} size="xl" c="gray.1">Settings</Text>
          <Text size="sm" c="dimmed" mt={2}>Configure your restaurant preferences</Text>
        </Box>
      </Group>

      {/* Restaurant Info */}
      <Card padding="md" radius="md" style={{ background: 'var(--mantine-color-dark-7)', border: '1px solid var(--mantine-color-dark-5)', marginBottom: 16 }}>
        <Group mb="md">
          <IconSettings size={18} color="var(--mantine-color-orange-5)" />
          <Text fw={700} size="sm" c="gray.2" tt="uppercase" style={{ letterSpacing: 0.8 }}>
            Restaurant Info
          </Text>
        </Group>
        <Divider color="dark.5" mb="md" />
        <Stack gap={12}>
          <TextInput label="Restaurant Name" placeholder="DineFlow Restaurant" defaultValue="DineFlow" size="sm" />
          <TextInput leftSection={<IconMapPin size={14} />} label="Address" placeholder="123 Main St, City" defaultValue="123 Main Street" size="sm" />
          <TextInput leftSection={<IconPhone size={14} />} label="Phone" placeholder="+1 (555) 000-0000" defaultValue="+1 (555) 234-5678" size="sm" />
          <TextInput leftSection={<IconMail size={14} />} label="Email" placeholder="hello@dineflow.com" defaultValue="contact@dineflow.com" size="sm" />
        </Stack>
      </Card>

      {/* Business Hours */}
      <Card padding="md" radius="md" style={{ background: 'var(--mantine-color-dark-7)', border: '1px solid var(--mantine-color-dark-5)', marginBottom: 16 }}>
        <Group mb="md">
          <IconClock size={18} color="var(--mantine-color-blue-5)" />
          <Text fw={700} size="sm" c="gray.2" tt="uppercase" style={{ letterSpacing: 0.8 }}>
            Business Hours
          </Text>
        </Group>
        <Divider color="dark.5" mb="md" />
        <Stack gap={12}>
          {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
            <Group key={day} justify="space-between" align="center">
              <Text size="sm" c="gray.3" fw={500} style={{ minWidth: 80 }}>{day}</Text>
              <Group gap={8}>
                <TextInput placeholder="09:00" size="xs" style={{ width: 80 }} />
                <Text size="sm" c="dimmed">-</Text>
                <TextInput placeholder="22:00" size="xs" style={{ width: 80 }} />
              </Group>
            </Group>
          ))}
        </Stack>
      </Card>

      {/* Payment Methods */}
      <Card padding="md" radius="md" style={{ background: 'var(--mantine-color-dark-7)', border: '1px solid var(--mantine-color-dark-5)', marginBottom: 16 }}>
        <Text fw={700} size="sm" c="gray.2" tt="uppercase" style={{ letterSpacing: 0.8, marginBottom: 12 }}>
          Payment Methods
        </Text>
        <Divider color="dark.5" mb="md" />
        <Stack gap={8}>
          {[
            { name: 'Cash',        enabled: true },
            { name: 'Credit Card',  enabled: true },
            { name: 'Debit Card',   enabled: true },
            { name: 'Mobile Pay',   enabled: false },
          ].map(({ name, enabled }) => (
            <Group key={name} justify="space-between" align="center">
              <Text size="sm" c="gray.2">{name}</Text>
              <Switch checked={enabled} onChange={() => {}} color="orange" />
            </Group>
          ))}
        </Stack>
      </Card>

      {/* Notification Settings */}
      <Card padding="md" radius="md" style={{ background: 'var(--mantine-color-dark-7)', border: '1px solid var(--mantine-color-dark-5)', marginBottom: 16 }}>
        <Text fw={700} size="sm" c="gray.2" tt="uppercase" style={{ letterSpacing: 0.8, marginBottom: 12 }}>
          Notifications
        </Text>
        <Divider color="dark.5" mb="md" />
        <Stack gap={8}>
          {[
            { name: 'Order Alerts',    enabled: true },
            { name: 'Kitchen Alerts',  enabled: true },
            { name: 'Payment Alerts',  enabled: false },
            { name: 'Low Stock Alerts', enabled: true },
          ].map(({ name, enabled }) => (
            <Group key={name} justify="space-between" align="center">
              <Text size="sm" c="gray.2">{name}</Text>
              <Switch checked={enabled} onChange={() => {}} color="orange" />
            </Group>
          ))}
        </Stack>
      </Card>

      {/* Preferences */}
      <Card padding="md" radius="md" style={{ background: 'var(--mantine-color-dark-7)', border: '1px solid var(--mantine-color-dark-5)', marginBottom: 16 }}>
        <Text fw={700} size="sm" c="gray.2" tt="uppercase" style={{ letterSpacing: 0.8, marginBottom: 12 }}>
          Preferences
        </Text>
        <Divider color="dark.5" mb="md" />
        <Stack gap={12}>
          <Select label="Currency" placeholder="Select currency" data={['USD ($)', 'EUR (€)', 'GBP (£)']} defaultValue="USD ($)" size="sm" />
          <Select label="Date Format" placeholder="Select format" data={['MM/DD/YYYY', 'DD/MM/YYYY', 'YYYY-MM-DD']} defaultValue="MM/DD/YYYY" size="sm" />
          <Select label="Theme" placeholder="Select theme" data={['Dark', 'Light', 'Auto']} defaultValue="Dark" size="sm" />
          <NumberInput label="Table Count" placeholder="Enter number" defaultValue={20} size="sm" />
        </Stack>
      </Card>

      {/* Actions */}
      <Group justify="space-between" gap="md">
        <Button variant="default" radius="md" size="sm">
          Reset to Defaults
        </Button>
        <Group gap={8}>
          <Button variant="default" radius="md" size="sm">
            Cancel
          </Button>
          <Button color="orange" radius="md" size="sm">
            Save Changes
          </Button>
        </Group>
      </Group>

    </Box>
  )
}
