'use client'
import { selectTypeUser } from '@/redux/features/authSlice'
import { Button, Space, Typography } from 'antd'
import { CheckCircle } from 'iconoir-react'
import Link from 'next/link'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

export const CardTypeUser = ({ title, icon: Icon, href, id }) => {
  const [hover, setHover] = useState(false)

  const handleHover = () => {
    setHover(true)
  }
  const handleLeave = () => {
    setHover(false)
  }

  const dispatch = useDispatch()

  const handleOnClick = () => {
    dispatch(selectTypeUser({ userType: title.toUpperCase() }))
  }

  return (
    <div>
      <Link href={href}>
        <Button
          onClick={handleOnClick}
          className='bg-white'
          style={{
            width: 250,
            height: 250,
            borderRadius: 20,
            position: 'relative',
          }}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}>
          <Space direction='vertical' align='center'>
            <Typography.Title
              level={3}
              className={`${
                hover ? 'text-primary' : 'text-gray-600'
              } font-normal`}>
              {title}
            </Typography.Title>
            <div>
              <Icon color={hover ? 'fill-primary' : 'fill-gray-600'} />
            </div>
          </Space>
          <CheckCircle
            style={{
              position: 'absolute',
              top: 10,
              right: 10,
              display: hover ? 'block' : 'none',
            }}
            className='stroke-primary'
          />
        </Button>
      </Link>
    </div>
  )
}
