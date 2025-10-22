'use client'

import { motion } from 'motion/react'

export default function QuizPage() {
  return (
    <div className='w-full h-full flex flex-col gap-4'>
      <motion.div
        className='rounded-full w-24 h-24 aspect-square'
        initial={{ backgroundColor: '#ff0000', x: '-100vw', scale: 1 }}
        animate={{ backgroundColor: '#0000ff', x: 0, scale: 2 }}
        transition={{
          duration: 1,
          bounce: 0.3,
          type: 'spring',
        }}
      ></motion.div>
    </div>
  )
}
