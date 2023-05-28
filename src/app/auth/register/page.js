'use client'
import { ButtonBack } from '@/components/elements/buttons/ButtonBack'
import { login } from '@/redux/features/authSlice'
import { Button, Card, Col, Form, Input, InputNumber, Row } from 'antd'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Register() {
  const [form] = Form.useForm()

  const dispatch = useDispatch()

  const onFinish = values => {
    dispatch(login({ user: values }))
  }

  return (
    <Card className='w-[38rem]'>
      <Form
        layout='vertical'
        form={form}
        name='register'
        onFinish={onFinish}
        initialValues={{
          residence: ['zhejiang', 'hangzhou', 'xihu'],
          prefix: '86',
        }}
        style={{
          maxWidth: 600,
        }}
        scrollToFirstError>
        <Form.Item
          name='nombre'
          label='Nombre Completo'
          tooltip='¿Cómo quieres que otros te llamen?'
          hasFeedback
          rules={[
            {
              required: true,
              message: '¡Ingrese su nombre!',
              whitespace: true,
            },
          ]}>
          <Input allowClear />
        </Form.Item>

        <Form.Item
          name='email'
          label='Correo Electrónico'
          hasFeedback
          rules={[
            {
              type: 'email',
              message: '¡La entrada no es un correo electrónico válido!',
            },
            {
              required: true,
              message: '¡Ingrese su correo electrónico!',
            },
          ]}>
          <Input allowClear />
        </Form.Item>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name='password'
              label='Contraseña'
              rules={[
                {
                  required: true,
                  message: '¡Ingrese su contraseña!',
                },
              ]}
              hasFeedback>
              <Input.Password />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name='confirm'
              label='Confirmar Contraseña'
              dependencies={['password']}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: '¡Por favor, confirme su contraseña!',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve()
                    }
                    return Promise.reject(
                      new Error(
                        '¡Las dos contraseñas que ingresaste no coinciden!'
                      )
                    )
                  },
                }),
              ]}>
              <Input.Password />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name='dni'
              label='DNI'
              hasFeedback
              rules={[
                {
                  required: true,
                  message: '¡Ingrese su DNI!',
                },
              ]}>
              <InputNumber
                style={{
                  width: '100%',
                }}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name='phone'
              label='Número de teléfono'
              hasFeedback
              rules={[
                {
                  required: true,
                  message: '¡Ingrese su número de teléfono!',
                },
              ]}>
              <Input
                // addonBefore={prefixSelector}
                allowClear
                style={{
                  width: '100%',
                }}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row justify='end' align='middle' gutter={12}>
          <Col>
            <Form.Item>
              <ButtonBack text='Cancelar' href='/auth' />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item>
              <Button type='primary' htmlType='submit'>
                Registrarse
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Card>
  )
}
