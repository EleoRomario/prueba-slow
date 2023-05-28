'use client'
import { IconAdmin } from '@/assets/icons/IconAdmin'
import { IconClients } from '@/assets/icons/IconClients'
import { IconWorkers } from '@/assets/icons/IconWorkers'
import { CardTypeUser } from '@/components/elements/cards/CardTypeUser'
import { Space } from 'antd'

export default function Auth() {
  const typesUser = [
    {
      id: 'admin',
      title: 'Administrativo',
      icon: IconAdmin,
      href: '/auth/login',
    },
    {
      id: 'worker',
      title: 'Trabajador',
      icon: IconWorkers,
      href: '/auth/login',
    },
    {
      id: 'client',
      title: 'Cliente',
      icon: IconClients,
      href: '/auth/login',
    },
  ]

  return (
    <div className='flex flex-col items-center justify-center'>
      <Space direction='horizontal' align='center' size='large'>
        {typesUser.map((typeUser, index) => {
          return (
            <CardTypeUser
              key={index}
              title={typeUser.title}
              icon={typeUser.icon}
              href={typeUser.href}
              id={typeUser.id}
            />
          )
        })}
      </Space>
    </div>
  )
}
