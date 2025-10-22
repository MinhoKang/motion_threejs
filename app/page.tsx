import { Button, ButtonProps } from '@mui/material'
import Link from 'next/link'

const MuiButtonColors: NonNullable<ButtonProps['color']>[] = [
  'primary',
  'secondary',
  'success',
  'error',
  'info',
  'warning',
]

const BUTTON_MAP = [
  { title: 'Day1', link: '/day1' },
  { title: 'Day2', link: '/day2' },
]

export default function Home() {
  return (
    <main className='flex flex-col gap-4 justify-center items-center min-h-screen'>
      {BUTTON_MAP.map((item, index) => (
        <Button
          key={item.title}
          variant='contained'
          color={MuiButtonColors[index % MuiButtonColors.length]}
        >
          <Link href={item.link}>{item.title}</Link>
        </Button>
      ))}
    </main>
  )
}
