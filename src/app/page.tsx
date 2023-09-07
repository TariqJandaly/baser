'use client'

import Baser from '@/logic/index'

import { useEffect, useState } from 'react'

export default function Home() {
  const [base, setBase] = useState<number>(Math.floor(Math.random() * 63))
  const [number, setNumber] = useState(Math.floor(Math.random() * 1_000))

  const [resulte, setResulte] = useState<string>('')
  const [steps, setSteps] = useState<string[]>([])

  const Convert = () => {
    try {
      if(base < 2) return
      if(base > 64) return

      const baser = Baser(base, number)

      setResulte(baser.resulte)
      setSteps(baser.steps)
    } catch (error) {

    }
  }

  useEffect(() => {
    Convert()
  }, [])

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <p className='absolute top-0 mt-16 text-3xl'>
        Baser
      </p>
      <div className='flex flex-wrap justify-center gap-10'>
        <div>
          <p>
            Base
          </p>
          <input
            className='border px-3 py-1'
            type="text"
            value={base}
            onChange={e => setBase(parseInt(e.target.value) || 0)}
          />
        </div>
        <div>
          <p>
            Number
            <span className='text-[10px] text-gray-700'>
              (Base10)
            </span>
          </p>
          <input
            className='border px-3 py-1'
            type="text"
            value={number}
            onChange={e => setNumber(parseInt(e.target.value) || 0)}
          />
        </div>
      </div>
      <div>
        <button
          className='flex bg-teal-500 text-white py-1 px-5 rounded m-5'
          onClick={Convert}
        >
          Convert
        </button>
      </div>
      <div className='flex flex-col items-start gap-10 w-[500px]'>
        <div className='w-full'>
          <p className='text-xl font-bold'>
            Resulte
          </p>
          <p className='overflow-x-auto w-fulll pr-5'>
            { resulte }
          </p>
        </div>
        <div className='w-full'>
          <p className='text-xl font-bold'>
            Steps
          </p>
          <div className='overflow-y-auto h-[250px] pr-5'>
            { steps.map((step, i) => {
              return <p key={i}>
                { step }
              </p>
            }) }
          </div>
        </div>
      </div>
    </div>
  )
}