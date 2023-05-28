import { DataPropietarios } from '@/data/DataPropietarios'
import { DataStatusProperty } from '@/data/DataStatusProperty'
import {
  AutoComplete,
  Button,
  Checkbox,
  Col,
  Divider,
  Form,
  Input,
  Row,
  Select,
  Space,
  Upload,
} from 'antd'
import { Upload as IUpload, Search } from 'iconoir-react'
import { useState } from 'react'
import { LabelForm } from '../labels/LabelForm'
import TextArea from 'antd/es/input/TextArea'

export const FormNewProperty = () => {
  const fileList = [
    {
      uid: '0',
      name: 'aaa.png',
      status: 'uploading',
      percent: 33,
    },
    {
      uid: '-1',
      name: 'yyy.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      thumbUrl:
        'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
  ]

  const [enabledProperty, setEnabledProperty] = useState(true)

  const handleEnabled = e => {
    setEnabledProperty(e.target.checked)
  }

  return (
    <>
      <Form.Item label={<LabelForm text='Agregar imagenes:' />}>
        <Upload
          action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
          listType='picture'
          defaultFileList={[...fileList]}>
          <Button icon={<IUpload />} className='flex'>
            Subir imagen
          </Button>
        </Upload>
      </Form.Item>
      <Form.Item label={<LabelForm text='Agregar Video:' />}>
        <Space direction='vertical' className='w-full'>
          <Upload
            action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
            listType='picture'
            defaultFileList={[...fileList]}>
            <Button icon={<IUpload />} className='flex'>
              Subir video
            </Button>
          </Upload>
          <Input placeholder='Link del video' />
        </Space>
      </Form.Item>

      <Divider />
      <Row gutter={16}>
        <Col span={8}>
          <Form.Item label={<LabelForm text='Nombre de la propiedad:' />}>
            <Input placeholder='Nombre de la propiedad' />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label={<LabelForm text='Propietario:' />}>
            <AutoComplete
              allowClear
              options={DataPropietarios}
              filterOption={(inputValue, option) =>
                option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
                -1
              }>
              <Input placeholder='Buscar Propietario' prefix={<Search />} />
            </AutoComplete>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label={<LabelForm text='Tipo de propiedad:' />}>
            <Input placeholder='Tipo de propiedad' />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={8}>
          <Form.Item
            label={
              <LabelForm
                text='Precio:
              '
              />
            }>
            <Input placeholder='Precio' />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label={<LabelForm text='Dirección:' />}>
            <Input placeholder='Dirección' />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label={<LabelForm text='Zona:' />}>
            <Input placeholder='Zona' />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={8}>
          <Form.Item label={<LabelForm text='Asignar estado:' />}>
            <Select
              allowClear
              placeholder='Asignar estado'
              options={DataStatusProperty}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label={<LabelForm text='Habilitar / Deshabilitar propiedad' />}>
            <Checkbox
              defaultChecked
              onChange={handleEnabled}
              className={enabledProperty ? `text-green-500` : 'text-red-500'}>
              {enabledProperty ? 'Habilitado' : 'Deshabilitado'}
            </Checkbox>
          </Form.Item>
        </Col>
      </Row>
      <Divider />
      <Row gutter={16}>
        <Col span={24}>
          <Form.Item label={<LabelForm text='Descripción:' />}>
            <Input.TextArea autoSize placeholder='Descripción' />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item label={<LabelForm text='Características:' />}>
            <Input.TextArea autoSize placeholder='Características' />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <Form.Item label={<LabelForm text='Metraje:' />}>
            <Input placeholder='Metraje' />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label={<LabelForm text='Área libre:' />}>
            <Input placeholder='Área libre' />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label={<LabelForm text='Cochera adicional:' />}>
            <Input placeholder='Cochera adicional' />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label={<LabelForm text='Porcentaje de comisión:' />}>
            <Input placeholder='Porcentaje de comisión' />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <Form.Item label={<LabelForm text='Observaciones:' />}>
            <TextArea autoSize placeholder='Observaciones' />
          </Form.Item>
        </Col>
      </Row>
      <Divider orientation='left'>Datos del agente:</Divider>
      <Row gutter={16}>
        <Col span={8}>
          <Form.Item label={<LabelForm text='Nombre completo:' />}>
            <Input placeholder='Nombre completo' />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label={<LabelForm text='Correo electrónico:' />}>
            <Input type='email' placeholder='Correo electrónico' />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label={<LabelForm text='Celular:' />}>
            <Input placeholder='Celular' />
          </Form.Item>
        </Col>
      </Row>
    </>
  )
}
