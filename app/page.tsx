import { Button } from '@mui/material'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='flex flex-col gap-4 justify-center items-center min-h-screen'>
      <Button variant='contained' color='primary'>
        <Link href='/day1'>Day1</Link>
      </Button>
    </main>
  )
}
