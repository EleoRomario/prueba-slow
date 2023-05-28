'use client'
import { Divider, Layout, Menu } from 'antd'
import Logo from '@/assets/images/logo-rocarey.png'
import Image from 'next/image'
import { DataSidebar } from '@/data/DataSidebar'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

const { Sider } = Layout

export const Sidebar = () => {
  const pathname = usePathname()

  const [routeActive, setRouteActive] = useState('')

  useEffect(() => {
    setRouteActive(
      DataSidebar.find(item => item.key === pathname.replace('/', '')).key
    )
  }, [pathname])

  return (
    <Sider
      breakpoint='lg'
      collapsedWidth='0'
      zeroWidthTriggerStyle={{
        top: 10,
        background: '#fff',
      }}
      theme='light'
      className='sticky top-0 h-screen left-0'>
      <div className='w-full flex justify-center p-4'>
        <Image src={Logo} alt='Logo' width={100} height='auto' />
      </div>
      <Divider className='mt-0' />
      <Menu
        theme='light'
        mode='inline'
        selectedKeys={[routeActive]}
        items={DataSidebar}>
        {/* {DataSidebar.map(item => (
          <Menu.Item key={item.key} icon={item.icon}>
            {item.label}
          </Menu.Item>
        ))} */}
      </Menu>
    </Sider>
  )
}
