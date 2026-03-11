import { useState } from 'react'
import { AppShell, Box, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import Menu from './pages/Menu'
import Orders from './pages/Orders'
import Report from './pages/Report'
import Table from './pages/Table'
import Settings from './pages/Settings'


function ComingSoon({ label }) {
  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '60vh',
        gap: 8,
      }}
    >
      <Text size="lg" fw={600} c="gray.4">{label}</Text>
      <Text size="sm" c="dimmed">This section is under construction</Text>
    </Box>
  )
}

const pageMap = {
  Dashboard: () => <Dashboard />,
  Orders:    () => <Orders />,
  Tables:    () => <Table />,
  Menu:      () => <Menu />,
  Reports:   () => <Report />,
  Settings:  () => <Settings />,
}

export default function App() {
  const [activePage, setActivePage] = useState('Dashboard')
  const [opened, { toggle, close }] = useDisclosure(false)

  const PageComponent = pageMap[activePage] ?? pageMap.Dashboard

  return (
    <AppShell
      navbar={{ width: 240, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      header={{ height: 64 }}
    >
      <AppShell.Header
        style={{
          background: 'var(--mantine-color-dark-7)',
          borderBottom: '1px solid var(--mantine-color-dark-5)',
          padding: 0,
        }}
      >
        <Header activePage={activePage} opened={opened} toggle={toggle} />
      </AppShell.Header>

      <AppShell.Navbar
        style={{
          background: 'var(--mantine-color-dark-8)',
          borderRight: '1px solid var(--mantine-color-dark-5)',
          padding: 0,
        }}
      >
        <Sidebar active={activePage} onNav={(p) => { setActivePage(p); close() }} />
      </AppShell.Navbar>

      <AppShell.Main style={{ background: 'var(--mantine-color-dark-8)' }}>
        <PageComponent />
      </AppShell.Main>
    </AppShell>
  )
}

