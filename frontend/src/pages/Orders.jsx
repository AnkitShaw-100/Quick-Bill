import { Box, Group, Text, Button, SimpleGrid } from '@mantine/core'
import { IconPlus } from '@tabler/icons-react'
import { IconShoppingBag, IconCheck, IconClock, IconX } from '@tabler/icons-react'
import OrderStatCard from '../components/orders/OrderStatCard'
import OrdersTable from '../components/orders/OrdersTable'

const orderStats = [
  { icon: IconShoppingBag, color: 'orange', value: '287', label: 'Total Orders', trend: '+15%' },
  { icon: IconCheck,       color: 'green',  value: '261', label: 'Completed', trend: '+12%' },
  { icon: IconClock,       color: 'yellow', value: '16',  label: 'In Progress', trend: '-3%' },
  { icon: IconX,           color: 'red',    value: '10',  label: 'Cancelled', trend: '+2%' },
]

const mockOrders = [
  { id: '#0042', customer: 'John Smith', table: 'Table 3', items: 4, total: '$48.50', status: 'Completed', time: '2 min ago' },
  { id: '#0041', customer: 'Sarah Doe', table: 'Table 7', items: 2, total: '$22.00', status: 'Processing', time: '5 min ago' },
  { id: '#0040', customer: 'Mike Johnson', table: 'Table 11', items: 6, total: '$78.90', status: 'Completed', time: '8 min ago' },
  { id: '#0039', customer: 'Emily Brown', table: 'Table 2', items: 3, total: '$34.00', status: 'Pending', time: '11 min ago' },
  { id: '#0038', customer: 'David Wilson', table: 'Table 5', items: 5, total: '$61.25', status: 'Completed', time: '14 min ago' },
  { id: '#0037', customer: 'Lisa Chen', table: 'Table 9', items: 1, total: '$15.00', status: 'Completed', time: '18 min ago' },
]

export default function Orders() {
  return (
    <Box style={{ padding: '20px', overflowY: 'auto', maxWidth: 1400, margin: '0 auto', width: '100%' }}>
      
      {/* Page header */}
      <Group justify="space-between" align="center" mb="lg">
        <Box>
          <Text fw={800} size="xl" c="gray.1">Orders</Text>
          <Text size="sm" c="dimmed" mt={2}>Manage and track all restaurant orders</Text>
        </Box>
        <Button leftSection={<IconPlus size={16} stroke={2} />} color="orange" radius="md" size="sm">
          New Order
        </Button>
      </Group>

      {/* Order stats */}
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="md" mb="md">
        {orderStats.map((s) => <OrderStatCard key={s.label} {...s} />)}
      </SimpleGrid>

      {/* Orders table */}
      <OrdersTable orders={mockOrders} />

    </Box>
  )
}
