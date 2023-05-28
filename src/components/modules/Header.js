import { logout } from '@/redux/features/authSlice'
import { Dropdown, Layout, Space, Typography } from 'antd'
import { LogOut, NavArrowDown } from 'iconoir-react'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'

const { Header: AHeader } = Layout

export const Header = () => {
  const typeUser = useSelector(state => state.auth.userType)
  const dispatch = useDispatch()
  const router = useRouter()

  const handleLogout = () => {
    dispatch(logout())
    router.push('/auth')
  }

  const items = [
    {
      key: '1',
      label: (
        <Space direction='vertical' className='flex items-center'>
          <Typography.Text level={4} strong>
            Nombre Usuario
          </Typography.Text>
          <Typography.Text className='text-xs' type='secondary' italic>
            {typeUser}
          </Typography.Text>
        </Space>
      ),
      disabled: true,
    },
    {
      type: 'divider',
    },
    {
      key: '3',
      label: (
        <Space>
          <Typography.Text>Configuracion</Typography.Text>
        </Space>
      ),
    },
    {
      key: '4',
      type: 'divider',
    },
    {
      key: '5',
      label: (
        <Space align='center'>
          <Typography.Text onClick={handleLogout}>
            Cerrar Sesión
          </Typography.Text>
          <LogOut />
        </Space>
      ),
      type: 'button',
    },
  ]

  return (
    <AHeader className='bg-white flex justify-end sticky top-0 z-50'>
      <div className='flex justify-center items-center'>
        <Dropdown
          className='cursor-pointer'
          arrow
          placement='bottomRight'
          menu={{
            items,
          }}
          trigger={['click']}>
          <Space align='center'>
            <Typography.Text>Usuario</Typography.Text>
            <NavArrowDown />
          </Space>
        </Dropdown>
      </div>
    </AHeader>
  )
}
