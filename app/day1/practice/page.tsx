'use client'

import { motion } from 'motion/react'

export default function PracticePage() {
  return (
    <div>
      <div className='flex gap-4'>
        <motion.div
          className='w-32 h-32'
          initial={{
            opacity: 0,
            scale: 0.5,
            y: -100,
            rotate: 0,
            backgroundColor: '#ff0000',
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
            rotate: 45,
            backgroundColor: 'blue',
          }}
          transition={{
            duration: 2,
            delay: 0,
            ease: 'easeOut',
            type: 'spring',
            bounce: 1,
            mass: 10,
          }}
        ></motion.div>

        {/* 1. 빠르고 간단하게 */}
        <motion.div
          className='w-24 h-24 bg-blue-500 rounded-lg'
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* 2. 스프링 효과 (통통 튀는 느낌) */}
        <motion.div
          className='w-24 h-24 bg-green-500 rounded-lg'
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 10 }}
        />

        {/* 3. 지연 후 부드럽게 */}
        <motion.div
          className='w-24 h-24 bg-purple-500 rounded-lg'
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
        />
        <motion.div
          className='w-24 h-24 bg-yellow-500 rounded-lg'
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            opacity: { duration: 0.3 },
            scale: { type: 'spring', stiffness: 200 },
          }}
        />

        <div className='space-y-4 w-full max-w-2xl'>
          {/* 1. stiffness/damping - 많이 튕김 */}
          <div className='space-y-2'>
            <p className='text-sm'>1. stiffness: 100, damping: 5 (많이 튕김)</p>
            <motion.div
              className='w-32 h-16 bg-blue-500 rounded'
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 5,
              }}
            />
          </div>

          {/* 2. stiffness/damping - 적당히 튕김 */}
          <div className='space-y-2'>
            <p className='text-sm'>
              2. stiffness: 300, damping: 25 (적당히 튕김)
            </p>
            <motion.div
              className='w-32 h-16 bg-green-500 rounded'
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 25,
              }}
            />
          </div>

          {/* 3. bounce - 안 튕김 */}
          <div className='space-y-2'>
            <p className='text-sm'>3. duration: 0.6, bounce: 0 (안 튕김)</p>
            <motion.div
              className='w-32 h-16 bg-purple-500 rounded'
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{
                type: 'spring',
                duration: 0.6,
                bounce: 0,
              }}
            />
          </div>

          {/* 4. bounce - 많이 튕김 */}
          <div className='space-y-2'>
            <p className='text-sm'>4. duration: 0.8, bounce: 0.6 (많이 튕김)</p>
            <motion.div
              className='w-32 h-16 bg-orange-500 rounded'
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{
                type: 'spring',
                duration: 0.8,
                bounce: 0.6,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
