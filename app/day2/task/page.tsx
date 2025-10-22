'use client'

import { motion } from 'motion/react'

export default function TaskPage() {
  return (
    <div className='w-full h-full flex flex-col gap-4 justify-center items-center min-h-screen'>
      <motion.div
        className='w-[320px] h-[200px] rounded-3xl bg-red-500 shadow-white flex items-center justify-center'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, bounce: 0.25, type: 'spring' }}
      >
        <p>Card1</p>
      </motion.div>
      <motion.div
        className='w-[320px] h-[200px] rounded-3xl bg-green-500 shadow-white flex items-center justify-center'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, bounce: 0.25, delay: 0.2, type: 'spring' }}
      >
        <p>Card1</p>
      </motion.div>
      <motion.div
        className='w-[320px] h-[200px] rounded-3xl bg-purple-500 shadow-white flex items-center justify-center'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, bounce: 0.25, delay: 0.4, type: 'spring' }}
      >
        <p>Card1</p>
      </motion.div>
    </div>
  )
}
