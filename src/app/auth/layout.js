'use client'

import { Typography } from 'antd'
import Image from 'next/image'
import Logo from '@/assets/images/logo-rocarey.png'

export default function Layout({ children }) {
  return (
    <div className='h-screen bg-bg'>
      <div className='justify-center items-center w-full grid grid-cols-3 p-4'>
        <Image
          src={Logo}
          alt='Inmobiliaria Roca Rey'
          width={100}
          height='auto'
        />
        <Typography.Title level={3} className='font-light text-center'>
          Inicio de Sesión
        </Typography.Title>
        <div />
      </div>
      <div className='w-full h-[calc(100%_-_90px)] flex justify-center items-center'>
        {children}
      </div>
    </div>
  )
}
