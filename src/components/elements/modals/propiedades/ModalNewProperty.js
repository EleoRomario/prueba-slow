import { Button, Form, Modal, Typography, message } from 'antd'
import { FormNewProperty } from '../../forms/FormNewProperty'
import { useState } from 'react'

const key = 'updatable'

export const ModalNewProperty = ({ isModalOpen, handleCancel }) => {
  const [loading, setLoading] = useState(false)

  const [messageApi, contextHolder] = message.useMessage()

  const handleSubmit = () => {
    setLoading(true)
    messageApi.open({
      key,
      type: 'loading',
      content: 'Guardando datos...',
    })
    setTimeout(() => {
      setLoading(false)
      messageApi.open({
        key,
        type: 'success',
        content: 'Datos guardados con éxito!',
        duration: 2,
      })
      handleCancel()
    }, 2500)
  }

  return (
    <>
      {contextHolder}
      <Modal
        title={
          <Typography.Title level={3} className='text-center text-text-title'>
            Nueva Propiedad
          </Typography.Title>
        }
        style={{ top: 20 }}
        width={1000}
        open={isModalOpen}
        onOk={handleSubmit}
        onCancel={handleCancel}
        footer={[
          <Button key='back' onClick={handleCancel}>
            Cancelar
          </Button>,
          <Button
            key='submit'
            className='bg-primary hover:bg-primary-700 text-white'
            loading={loading}
            onClick={handleSubmit}>
            Guardar propiedad
          </Button>,
        ]}>
        <Form layout='vertical'>
          <FormNewProperty />
        </Form>
      </Modal>
    </>
  )
}
