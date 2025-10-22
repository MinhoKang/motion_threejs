'use client'

import { motion } from 'motion/react'
import { useState } from 'react'

export default function Step1() {
  const [count, setCount] = useState(0)
  return (
    <div className='flex items-center justify-center min-h-screen gap-10'>
      <div className='flex items-center'>
        <motion.button
          className='px-8 py-4 bg-blue-500 text-white rounded-lg font-bold'
          whileHover={{ scale: 1.1 }}
        >
          호버해보세요
        </motion.button>
        <motion.div
          className='w-60 h-40 bg-linear-to-r from-purple-500 to-pink-500 rounded-2xl'
          whileHover={{
            scale: 1.05,
            rotate: 2,
            boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
          }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          카드입니다
        </motion.div>

        <div className='min-h-screen flex flex-col gap-8 justify-center items-center bg-gray-900'>
          {/* 버튼 1: 확대 효과 */}
          <motion.button
            className='px-8 py-4 bg-blue-500 text-white rounded-lg font-bold'
            whileHover={{ scale: 1.1 }}
          >
            Scale Button
          </motion.button>

          {/* 버튼 2: 그림자 + 확대 */}
          <motion.button
            className='px-8 py-4 bg-green-500 text-white rounded-lg font-bold'
            whileHover={{
              scale: 1.05,
              boxShadow: '0 10px 40px rgba(0,255,0,0.5)',
            }}
          >
            Shadow Button
          </motion.button>

          {/* 버튼 3: 회전 + 색상 변화 */}
          <motion.button
            className='px-8 py-4 bg-purple-500 text-white rounded-lg font-bold'
            whileHover={{
              rotate: 5,
              backgroundColor: '#ec4899',
            }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Rotate Button
          </motion.button>
        </div>
      </div>
      <div className='flex flex-col gap-3'>
        <motion.button
          className='px-8 py-4 bg-blue-500 text-white rounded-lg font-bold'
          whileTap={{ scale: 0.95 }}
        >
          클릭해보세요
        </motion.button>
        <motion.button
          className='px-8 py-4 bg-purple-500 text-white rounded-lg font-bold'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          호버 + 탭
        </motion.button>
        <motion.button
          className='px-8 py-4 bg-linear-to-r from-pink-500 to-red-500 text-white rounded-lg font-bold'
          whileHover={{
            scale: 1.05,
            boxShadow: '0 10px 30px rgba(255,0,0,0.3)',
          }}
          whileTap={{
            scale: 0.95,
            rotate: -2,
            boxShadow: '13.125rem 52px 150px rgb(7, 255, 57)',
          }}
          // transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          transition={{ type: 'spring', duration: 0.4, bounce: 0.3 }}
        >
          멀티 애니메이션
        </motion.button>
        <motion.button
          className='px-12 py-6 bg-green-500 text-white rounded-2xl font-bold text-2xl'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onTap={() => setCount(count + 1)}
        >
          클릭 횟수: {count}
        </motion.button>
      </div>
    </div>
  )
}
