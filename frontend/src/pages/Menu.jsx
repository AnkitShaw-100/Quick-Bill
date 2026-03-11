import { Box, Group, Text, Button, SimpleGrid, Tabs, Card, Divider } from '@mantine/core'
import { IconPlus } from '@tabler/icons-react'
import MenuItemCard from '../components/menu/MenuItemCard'

const categories = ['All Items', 'Appetizers', 'Main Courses', 'Desserts', 'Beverages']

const menuItems = [
  { id: 1, name: 'Caesar Salad', category: 'Appetizers', price: 9.99, description: 'Fresh romaine lettuce', color: 'green', icon: '🥗', available: true },
  { id: 2, name: 'Margherita Pizza', category: 'Main Courses', price: 14.99, description: 'Fresh mozzarella & basil', color: 'red', icon: '🍕', available: true },
  { id: 3, name: 'Ribeye Steak', category: 'Main Courses', price: 28.99, description: 'Premium beef cut, grilled', color: 'violet', icon: '🥩', available: true },
  { id: 4, name: 'Chocolate Mousse', category: 'Desserts', price: 7.99, description: 'Rich & creamy', color: 'orange', icon: '🍫', available: false },
  { id: 5, name: 'Iced Tea', category: 'Beverages', price: 3.99, description: 'Refreshing & cold', color: 'blue', icon: '🧋', available: true },
  { id: 6, name: 'Garlic Bread', category: 'Appetizers', price: 5.99, description: 'Crispy & aromatic', color: 'yellow', icon: '🥖', available: true },
  { id: 7, name: 'Pasta Carbonara', category: 'Main Courses', price: 16.99, description: 'Classic Italian dish', color: 'cyan', icon: '🍝', available: true },
  { id: 8, name: 'Tiramisu', category: 'Desserts', price: 8.99, description: 'Traditional Italian dessert', color: 'brown', icon: '🎂', available: true },
  { id: 9, name: 'Espresso', category: 'Beverages', price: 2.99, description: 'Strong Italian coffee', color: 'indigo', icon: '☕', available: true },
  { id: 10, name: 'Spring Rolls', category: 'Appetizers', price: 6.99, description: 'Crispy Asian appetizer', color: 'green', icon: '🥟', available: true },
  { id: 11, name: 'Grilled Salmon', category: 'Main Courses', price: 24.99, description: 'Fresh & healthy', color: 'teal', icon: '🐟', available: true },
  { id: 12, name: 'Cheesecake', category: 'Desserts', price: 6.99, description: 'Creamy & delicious', color: 'pink', icon: '🍰', available: true },
]

export default function Menu() {
  return (
    <Box style={{ padding: '20px', overflowY: 'auto', maxWidth: 1400, margin: '0 auto', width: '100%' }}>

      {/* Page header */}
      <Group justify="space-between" align="center" mb="lg">
        <Box>
          <Text fw={800} size="xl" c="gray.1">Menu</Text>
          <Text size="sm" c="dimmed" mt={2}>Browse and manage menu items</Text>
        </Box>
        <Button leftSection={<IconPlus size={16} stroke={2} />} color="orange" radius="md" size="sm">
          Add Item
        </Button>
      </Group>

      {/* Stats */}
      <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="md" mb="lg">
        <Card padding="md" radius="md" style={{ background: 'var(--mantine-color-dark-7)', border: '1px solid var(--mantine-color-dark-5)' }}>
          <Group justify="space-between">
            <Box>
              <Text size="xs" c="dimmed" fw={600} tt="uppercase">Total Items</Text>
              <Text size="xl" fw={800} c="gray.1">42</Text>
            </Box>
            <Text size="2xl">🍽️</Text>
          </Group>
        </Card>
        <Card padding="md" radius="md" style={{ background: 'var(--mantine-color-dark-7)', border: '1px solid var(--mantine-color-dark-5)' }}>
          <Group justify="space-between">
            <Box>
              <Text size="xs" c="dimmed" fw={600} tt="uppercase">Available</Text>
              <Text size="xl" fw={800} c="green.4">40</Text>
            </Box>
            <Text size="2xl">✓</Text>
          </Group>
        </Card>
        <Card padding="md" radius="md" style={{ background: 'var(--mantine-color-dark-7)', border: '1px solid var(--mantine-color-dark-5)' }}>
          <Group justify="space-between">
            <Box>
              <Text size="xs" c="dimmed" fw={600} tt="uppercase">Out of Stock</Text>
              <Text size="xl" fw={800} c="red.4">2</Text>
            </Box>
            <Text size="2xl">✗</Text>
          </Group>
        </Card>
      </SimpleGrid>

      {/* Menu items by category */}
      <Tabs defaultValue="All Items" color="orange">
        <Tabs.List>
          {categories.map((cat) => <Tabs.Tab key={cat} value={cat}>{cat}</Tabs.Tab>)}
        </Tabs.List>

        {categories.map((cat) => (
          <Tabs.Panel key={cat} value={cat} pt="md">
            <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing="md">
              {menuItems
                .filter((item) => cat === 'All Items' || item.category === cat)
                .map((item) => <MenuItemCard key={item.id} item={item} />)}
            </SimpleGrid>
          </Tabs.Panel>
        ))}
      </Tabs>

    </Box>
  )
}
