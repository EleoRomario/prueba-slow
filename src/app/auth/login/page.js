'use client'
import { ButtonBack } from '@/components/elements/buttons/ButtonBack'
import { login } from '@/redux/features/authSlice'
import { Button, Card, Form, Input, Space, Typography } from 'antd'
import { ArrowLeft, Lock, User } from 'iconoir-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Login() {
  const typeUser = useSelector(state => state.auth.userType)

  const dispatch = useDispatch()

  const router = useRouter()

  const [loading, setLoading] = useState(false)

  const onFinish = values => {
    setLoading(true)
    dispatch(login({ user: values }))
    router.push('/')

    setLoading(false)
  }

  return (
    <div className='flex justify-center items-center relative'>
      <Card>
        <Space direction='vertical' align='center' size='large'>
          <ButtonBack
            type='text'
            icon={<ArrowLeft width={15} height={15} />}
            href='/auth'
            size='small'
            className='flex justify-center items-center gap-4 text-xs text-gray-400 absolute top-2 left-2'
            text='Volver'
          />
          <Typography.Title level={3} className='font-normal text-text-title'>
            {typeUser}
          </Typography.Title>
          <Form
            name='normal_login'
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}>
            <Form.Item
              name='username'
              rules={[
                {
                  required: true,
                  message: '¡Por favor ingrese un usuario!',
                },
              ]}>
              <Input
                prefix={<User className='site-form-item-icon' />}
                placeholder='Usuario'
              />
            </Form.Item>
            <Form.Item
              name='password'
              hasFeedback
              rules={[
                {
                  required: true,
                  message: '¡Por favor ingrese una contraseña!',
                },
              ]}>
              <Input.Password
                prefix={<Lock className='site-form-item-icon' />}
                placeholder='Contraseña'
              />
            </Form.Item>
            <Form.Item>
              <a className='login-form-forgot' href=''>
                ¿Olvidaste tu contraseña?
              </a>
            </Form.Item>

            <Form.Item>
              <Space
                direction='vertical'
                size='small'
                align='center'
                className='w-full'>
                <Button
                  loading={loading}
                  type='primary'
                  htmlType='submit'
                  style={{
                    width: 250,
                  }}>
                  Ingresar
                </Button>
                {typeUser === 'CLIENTE' && (
                  <>
                    <div className='text-gray-500'>o</div>
                    <Link href='/auth/register'>
                      <Button
                        style={{
                          width: 250,
                        }}>
                        Registrarse
                      </Button>
                    </Link>
                  </>
                )}
              </Space>
            </Form.Item>
          </Form>
        </Space>
      </Card>
    </div>
  )
}
