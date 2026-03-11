import { Box, Group, Text, Button, SimpleGrid } from '@mantine/core'
import { IconPlus } from '@tabler/icons-react'
import {
  IconCurrencyDollar, IconShoppingBag, IconTrendingUp, IconUsers,
} from '@tabler/icons-react'

import StatCard       from '../components/dashboard/StatCard'
import RevenueTarget  from '../components/dashboard/RevenueTarget'
import TableOccupancy from '../components/dashboard/TableOccupancy'
import OrdersTable    from '../components/dashboard/OrdersTable'
import KitchenQueue   from '../components/dashboard/KitchenQueue'
import TopItems       from '../components/dashboard/TopItems'

// ─── Mock data ─────────────────────────────────────────────────────────────────

const stats = [
  { label: "Today's Revenue", value: '$4,280', trend: '+12%', trendUp: true,  trendSub: 'vs yesterday', icon: IconCurrencyDollar, color: 'green',  progress: 72 },
  { label: 'Orders Today',    value: '142',    trend: '+8',   trendUp: true,  trendSub: 'vs yesterday', icon: IconShoppingBag,    color: 'orange', progress: 60 },
  { label: 'Guests Served',   value: '381',    trend: '+21',  trendUp: true,  trendSub: 'vs yesterday', icon: IconUsers,          color: 'blue',   progress: 68 },
  { label: 'Avg Order Value', value: '$30.14', trend: '+4%',  trendUp: true,  trendSub: 'vs last week', icon: IconTrendingUp,     color: 'violet', progress: 55 },
]

const orders = [
  { id: '#0042', table: 'Table 3',  waiter: 'Sofia R.', items: 4, total: '$48.50', status: 'Ready',      time: '2 min ago'  },
  { id: '#0041', table: 'Table 7',  waiter: 'James K.', items: 2, total: '$22.00', status: 'Processing', time: '5 min ago'  },
  { id: '#0040', table: 'Table 11', waiter: 'Sofia R.', items: 6, total: '$78.90', status: 'Paid',       time: '8 min ago'  },
  { id: '#0039', table: 'Table 2',  waiter: 'Lena M.',  items: 3, total: '$34.00', status: 'Pending',    time: '11 min ago' },
  { id: '#0038', table: 'Table 5',  waiter: 'James K.', items: 5, total: '$61.25', status: 'Paid',       time: '14 min ago' },
  { id: '#0037', table: 'Table 9',  waiter: 'Lena M.',  items: 1, total: '$15.00', status: 'Paid',       time: '18 min ago' },
]

const activeOrders = [
  { table: 'Table 3',  waiter: 'Sofia R.', items: ['Burger x1', 'Fries x2', 'Coke x1'],  elapsedLabel: '12 min', elapsedPct: 48,  status: 'Ready'      },
  { table: 'Table 7',  waiter: 'James K.', items: ['Pizza x1', 'Salad x1'],               elapsedLabel: '22 min', elapsedPct: 88,  status: 'Processing' },
  { table: 'Table 2',  waiter: 'Lena M.',  items: ['Pasta x2', 'Wine x1'],                elapsedLabel: '8 min',  elapsedPct: 32,  status: 'Pending'    },
  { table: 'Table 11', waiter: 'Sofia R.', items: ['Steak x2', 'Soup x2', 'Dessert x2'], elapsedLabel: '30 min', elapsedPct: 100, status: 'Processing' },
]

const tableGrid = [
  { id:  1, status: 'occupied' }, { id:  2, status: 'occupied' }, { id:  3, status: 'billing'  }, { id:  4, status: 'free'     }, { id:  5, status: 'occupied' },
  { id:  6, status: 'free'     }, { id:  7, status: 'occupied' }, { id:  8, status: 'reserved' }, { id:  9, status: 'free'     }, { id: 10, status: 'occupied' },
  { id: 11, status: 'occupied' }, { id: 12, status: 'free'     }, { id: 13, status: 'reserved' }, { id: 14, status: 'free'     }, { id: 15, status: 'occupied' },
  { id: 16, status: 'free'     }, { id: 17, status: 'free'     }, { id: 18, status: 'occupied' }, { id: 19, status: 'billing'  }, { id: 20, status: 'free'     },
]

const topItems = [
  { name: 'Classic Burger',   sold: 34, revenue: '$340', color: 'orange' },
  { name: 'Margherita Pizza', sold: 28, revenue: '$392', color: 'red'    },
  { name: 'Caesar Salad',     sold: 22, revenue: '$198', color: 'green'  },
  { name: 'Ribeye Steak',     sold: 18, revenue: '$630', color: 'violet' },
  { name: 'Pasta Carbonara',  sold: 17, revenue: '$255', color: 'blue'   },
]

// ─── Dashboard ─────────────────────────────────────────────────────────────────

export default function Dashboard() {
  return (
    <Box style={{ padding: '20px', overflowY: 'auto', maxWidth: 1400, margin: '0 auto', width: '100%' }}>

      {/* Page header */}
      <Group justify="space-between" align="center" mb="lg">
        <Box>
          <Text fw={800} size="xl" c="gray.1">Dashboard</Text>
          <Text size="sm" c="dimmed" mt={2}>Here is what is happening at DineFlow today.</Text>
        </Box>
        <Button leftSection={<IconPlus size={16} stroke={2} />} color="orange" radius="md" size="sm">
          New Order
        </Button>
      </Group>

      {/* Stat cards */}
      <SimpleGrid cols={{ base: 1, sm: 2, xl: 4 }} spacing="md" mb="md">
        {stats.map((s) => <StatCard key={s.label} {...s} />)}
      </SimpleGrid>

      {/* Revenue target + Table occupancy */}
      <SimpleGrid cols={{ base: 1, md: 2 }} spacing="md" mb="md">
        <RevenueTarget />
        <TableOccupancy tableGrid={tableGrid} />
      </SimpleGrid>

      {/* Recent orders + Kitchen queue */}
      <Box
        className="responsive-grid"
        style={{ display: 'grid', gap: 16, alignItems: 'start', marginBottom: 16 }}
      >
        <OrdersTable orders={orders} />
        <KitchenQueue activeOrders={activeOrders} />
      </Box>

      {/* Top selling items */}
      <TopItems topItems={topItems} />

    </Box>
  )
}
