'use client'
import { TableBasic } from '@/components/elements/tables/TableBasic'
import { ColumnsOwners } from '@/components/elements/tables/layouts/LayoutColumns'
import { DataPropietarios } from '@/data/DataPropietarios'
import { Button, Col, Row, Space } from 'antd'
import { Download } from 'iconoir-react'

export default function Propietarios() {
  const columns = ColumnsOwners()

  return (
    <Space direction='vertical' className='w-full' size='large'>
      <Row justify='end'>
        <Col span={24} className='flex gap-2 justify-end'>
          <Button type='primary'>Nuevo Propietario</Button>
          <Button icon={<Download />} className='flex' type='primary'>
            Exportar
          </Button>
        </Col>
      </Row>
      <Row>
        <TableBasic columns={columns} data={DataPropietarios} />
      </Row>
    </Space>
  )
}
