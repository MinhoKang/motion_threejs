import { MuiButtonColors } from '@/app/page'
import { Button } from '@mui/material'
import Link from 'next/link'

const BUTTON_MAP = [
  { title: 'Step1', link: '/day2/practice/step1' },
  { title: 'Step2', link: '/day2/practice/step2' },
]

export default function PracticePage() {
  return (
    <div className='flex items-center justify-center min-h-screen gap-10'>
      {BUTTON_MAP.map((item, index) => (
        <Button
          key={item.title}
          variant='contained'
          color={MuiButtonColors[index % MuiButtonColors.length]}
        >
          <Link href={item.link}>{item.title}</Link>
        </Button>
      ))}
    </div>
  )
}
