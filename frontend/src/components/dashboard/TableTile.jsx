import { UnstyledButton, Text } from '@mantine/core'
import { tableStatusColor } from './constants'

export default function TableTile({ id, status }) {
  const style = tableStatusColor[status]
  return (
    <UnstyledButton
      style={{
        background: style.bg,
        border: `1px solid ${style.border}`,
        borderRadius: 6,
        aspectRatio: '1',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'transform 0.12s ease',
      }}
    >
      <Text size="10px" fw={700} style={{ color: style.text, lineHeight: 1 }}>{id}</Text>
      <Text size="9px" style={{ color: style.text, opacity: 0.75, lineHeight: 1.4, textTransform: 'capitalize' }}>
        {status}
      </Text>
    </UnstyledButton>
  )
}
