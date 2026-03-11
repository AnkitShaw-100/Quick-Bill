import { Badge } from '@mantine/core'
import { statusConfig } from './constants'

export default function StatusBadge({ status }) {
  const cfg = statusConfig[status] || { color: 'gray', label: status }
  return (
    <Badge color={cfg.color} variant="light" size="sm" radius="sm" style={{ fontWeight: 600 }}>
      {cfg.label}
    </Badge>
  )
}
