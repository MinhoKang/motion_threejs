import { Button } from '@mui/material'
import Link from 'next/link'

export default function Day1() {
  return (
    <div className='flex flex-col gap-4 justify-center items-center h-full'>
      <Button variant='contained' color='primary'>
        <Link href='/day1/practice'>Practice</Link>
      </Button>
      <Button variant='contained' color='error'>
        <Link href='/day1/quiz'>Quiz</Link>
      </Button>
      <Button variant='contained' color='success'>
        <Link href='/day1/task'>Task</Link>
      </Button>
    </div>
  )
}
