import { Box, Card, Group, Text, SimpleGrid, Divider, Button, SegmentedControl } from '@mantine/core'
import { IconDownload } from '@tabler/icons-react'
import { useState } from 'react'
import RevenueChart from '../components/reports/RevenueChart'
import TopCategoriesChart from '../components/reports/TopCategoriesChart'
import PeakHoursBarChart from '../components/reports/PeakHoursBarChart'
import OrderStatsPieChart from '../components/reports/OrderStatsPieChart'

export default function Report() {
  const [period, setPeriod] = useState('weekly')

  return (
    <Box style={{ padding: '20px', overflowY: 'auto', maxWidth: 1400, margin: '0 auto', width: '100%' }}>

      {/* Page header */}
      <Group justify="space-between" align="center" mb="lg">
        <Box>
          <Text fw={800} size="xl" c="gray.1">Reports</Text>
          <Text size="sm" c="dimmed" mt={2}>View sales analytics and performance metrics</Text>
        </Box>
        <Button leftSection={<IconDownload size={16} stroke={2} />} color="orange" radius="md" size="sm">
          Export
        </Button>
      </Group>

      {/* Period selector */}
      <Card padding="md" radius="md" style={{ background: 'var(--mantine-color-dark-7)', border: '1px solid var(--mantine-color-dark-5)', marginBottom: 16 }}>
        <Group justify="space-between" align="center">
          <Text size="sm" fw={600} c="gray.3">Select Period:</Text>
          <SegmentedControl
            value={period}
            onChange={setPeriod}
            data={[
              { label: 'Daily',   value: 'daily' },
              { label: 'Weekly',  value: 'weekly' },
              { label: 'Monthly', value: 'monthly' },
            ]}
            color="orange"
          />
        </Group>
      </Card>

      {/* Revenue overview */}
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="md" mb="lg">
        <Card padding="md" radius="md" style={{ background: 'var(--mantine-color-dark-7)', border: '1px solid var(--mantine-color-dark-5)' }}>
          <Text size="xs" c="dimmed" fw={600} tt="uppercase" mb={8}>Total Revenue</Text>
          <Text size="xl" fw={800} c="orange.4" mb={2}>$28,450</Text>
          <Text size="xs" c="green.4" fw={600}>+14% vs last {period}</Text>
        </Card>
        <Card padding="md" radius="md" style={{ background: 'var(--mantine-color-dark-7)', border: '1px solid var(--mantine-color-dark-5)' }}>
          <Text size="xs" c="dimmed" fw={600} tt="uppercase" mb={8}>Total Orders</Text>
          <Text size="xl" fw={800} c="blue.4" mb={2}>1,284</Text>
          <Text size="xs" c="green.4" fw={600}>+9% vs last {period}</Text>
        </Card>
        <Card padding="md" radius="md" style={{ background: 'var(--mantine-color-dark-7)', border: '1px solid var(--mantine-color-dark-5)' }}>
          <Text size="xs" c="dimmed" fw={600} tt="uppercase" mb={8}>Avg Order Value</Text>
          <Text size="xl" fw={800} c="violet.4" mb={2}>$22.14</Text>
          <Text size="xs" c="green.4" fw={600}>+5% vs last {period}</Text>
        </Card>
      </SimpleGrid>

      {/* Detailed charts */}
      <SimpleGrid cols={{ base: 1, lg: 2 }} spacing="md" mb="lg">
        <Card padding="md" radius="md" style={{ background: 'var(--mantine-color-dark-7)', border: '1px solid var(--mantine-color-dark-5)' }}>
          <Text fw={700} size="sm" c="gray.2" tt="uppercase" style={{ letterSpacing: 0.8 }} mb="md">
            Revenue Trend
          </Text>
          <Divider color="dark.5" mb="md" />
          <Box style={{ height: 280 }}>
            <RevenueChart />
          </Box>
        </Card>

        <Card padding="md" radius="md" style={{ background: 'var(--mantine-color-dark-7)', border: '1px solid var(--mantine-color-dark-5)' }}>
          <Text fw={700} size="sm" c="gray.2" tt="uppercase" style={{ letterSpacing: 0.8 }} mb="md">
            Top Categories
          </Text>
          <Divider color="dark.5" mb="md" />
          <Box style={{ height: 280 }}>
            <TopCategoriesChart />
          </Box>
        </Card>
      </SimpleGrid>

      {/* Peak hours and Order stats */}
      <SimpleGrid cols={{ base: 1, lg: 2 }} spacing="md">
        <Card padding="lg" radius="md" style={{ background: 'var(--mantine-color-dark-7)', border: '1px solid var(--mantine-color-dark-5)' }}>
          <Text fw={700} size="sm" c="gray.2" tt="uppercase" style={{ letterSpacing: 0.8 }} mb="md">
            Peak Hours Distribution
          </Text>
          <Divider color="dark.5" mb="md" />
          <Box style={{ height: 412, width: '100%', padding: '16px 0' }}>
            <PeakHoursBarChart />
          </Box>
        </Card>

        <Card padding="lg" radius="md" style={{ background: 'var(--mantine-color-dark-7)', border: '1px solid var(--mantine-color-dark-5)' }}>
          <Text fw={700} size="sm" c="gray.2" tt="uppercase" style={{ letterSpacing: 0.8 }} mb="md">
            Order Status Stats
          </Text>
          <Divider color="dark.5" mb="md" />
          <SimpleGrid cols={2} spacing="md">
            <Box style={{ height: 380, width: '100%', padding: '16px 0' }}>
              <OrderStatsPieChart />
            </Box>
            <Box style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
              <Card padding="md" radius="md" style={{ background: 'var(--mantine-color-dark-8)', border: '1px solid var(--mantine-color-dark-6)' }}>
                <Text size="xs" c="dimmed" fw={600} tt="uppercase" mb={4}>Ready</Text>
                <Text size="lg" fw={700} c="green.4">35</Text>
              </Card>
              <Card padding="md" radius="md" style={{ background: 'var(--mantine-color-dark-8)', border: '1px solid var(--mantine-color-dark-6)' }}>
                <Text size="xs" c="dimmed" fw={600} tt="uppercase" mb={4}>Processing</Text>
                <Text size="lg" fw={700} c="blue.4">48</Text>
              </Card>
              <Card padding="md" radius="md" style={{ background: 'var(--mantine-color-dark-8)', border: '1px solid var(--mantine-color-dark-6)' }}>
                <Text size="xs" c="dimmed" fw={600} tt="uppercase" mb={4}>Pending</Text>
                <Text size="lg" fw={700} c="yellow.4">22</Text>
              </Card>
              <Card padding="md" radius="md" style={{ background: 'var(--mantine-color-dark-8)', border: '1px solid var(--mantine-color-dark-6)' }}>
                <Text size="xs" c="dimmed" fw={600} tt="uppercase" mb={4}>Paid</Text>
                <Text size="lg" fw={700} c="lime.4">72</Text>
              </Card>
              <Card padding="md" radius="md" style={{ background: 'var(--mantine-color-dark-8)', border: '1px solid var(--mantine-color-dark-6)' }}>
                <Text size="xs" c="dimmed" fw={600} tt="uppercase" mb={4}>Cancelled</Text>
                <Text size="lg" fw={700} c="red.4">8</Text>
              </Card>
            </Box>
          </SimpleGrid>
        </Card>
      </SimpleGrid>

    </Box>
  )
}
