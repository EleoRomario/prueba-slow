'use client'

import { ModalNewProperty } from '@/components/elements/modals/propiedades/ModalNewProperty'
import { TableBasic } from '@/components/elements/tables/TableBasic'
import { ColumnsProperty } from '@/components/elements/tables/layouts/LayoutColumns'
import { DataStatusProperty } from '@/data/DataStatusProperty'
import { useModal } from '@/hooks/useModal'
import {
  AutoComplete,
  Button,
  Col,
  DatePicker,
  Divider,
  Input,
  Row,
  Select,
  Slider,
} from 'antd'
import { Download, Search } from 'iconoir-react'
import { useState } from 'react'

export default function Propiedades() {
  const options = [
    {
      label: 'Propiedad 1',
      value: 'Propiedad 1',
    },
    {
      label: 'Propiedad 2',
      value: 'Propiedad 2',
    },
  ]
  const [prices, setPrices] = useState([0, 100])

  const handleChangePrices = e => {
    setPrices(e)
  }

  const [filterOrder, setFilterOrder] = useState('A - Z')

  const handleChageOrder = e => {
    setFilterOrder(e)
  }

  const [filterStatusProperty, setFilterStatusProperty] = useState(
    DataStatusProperty[0].label
  )

  const handleChangeStatusProperty = e => {
    setFilterStatusProperty(e)
  }

  const [filterDate, setFilterDate] = useState()
  const onChangeDate = (date, dateString) => {
    console.log(date, dateString)
    setFilterDate(date)
  }

  const columns = ColumnsProperty()

  const data = []

  const { isModalOpen, handleOpen, handleCancel } = useModal()

  return (
    <>
      <div className='flex flex-col gap-8'>
        <Row gutter={16} align='middle'>
          <Col span={6}>
            <AutoComplete
              allowClear
              filterOption={(inputValue, option) =>
                option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
                -1
              }
              className='w-full'
              options={options}>
              <Input
                type='text'
                prefix={<Search />}
                placeholder='Busca propiedades...'
              />
            </AutoComplete>
          </Col>
          <Col span={6}>
            <Row className='flex items-center border rounded-md' gutter={16}>
              <Col span={4}>
                <span>Precio</span>
              </Col>
              <Col span={20}>
                <div className='w-full flex flex-col'>
                  <div className='w-full flex justify-between'>
                    <span className='text-gray-400 text-xs italic'>
                      S/.{prices[0]}
                    </span>
                    <span className='text-gray-400 text-xs italic'>
                      S/.{prices[1]}
                    </span>
                  </div>
                  <Slider
                    step={1}
                    range
                    defaultValue={[50, 80]}
                    onChange={handleChangePrices}
                  />
                </div>
              </Col>
            </Row>
          </Col>
          <Col span={6}>
            <Select
              defaultValue={filterOrder}
              className='w-full'
              onChange={handleChageOrder}
              options={[
                {
                  value: 'ascendente',
                  label: 'A - Z',
                },
                {
                  value: 'descendente',
                  label: 'Z - A',
                },
              ]}
            />
          </Col>
          <Col span={6}>
            <Row gutter={16}>
              <Col span={12}>
                <Button className='w-full' type='primary' onClick={handleOpen}>
                  Nuevo
                </Button>
              </Col>
              <Col span={12}>
                <Button
                  icon={<Download />}
                  className='flex w-full'
                  type='primary'>
                  Exportar
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
        <Divider className='m-0' />
        <Row gutter={32}>
          <Col span={6}>
            <AutoComplete
              allowClear
              filterOption={(inputValue, option) =>
                option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
                -1
              }
              className='w-full'
              options={options}>
              <Input
                type='text'
                prefix={<Search />}
                placeholder='Tipo de Propiedad...'
              />
            </AutoComplete>
          </Col>
          <Col span={6}>
            <AutoComplete
              allowClear
              filterOption={(inputValue, option) =>
                option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
                -1
              }
              className='w-full'
              options={options}>
              <Input type='text' prefix={<Search />} placeholder='Zona...' />
            </AutoComplete>
          </Col>
          <Col span={6}>
            <Select
              defaultValue={filterStatusProperty}
              className='w-full'
              options={DataStatusProperty}
              onChange={handleChangeStatusProperty}
            />
          </Col>
          <Col span={6}>
            <DatePicker
              onChange={onChangeDate}
              value={filterDate}
              placeholder='Fecha'
              className='w-full'
            />
          </Col>
        </Row>
        {/* Section Table */}
        <div>
          <TableBasic columns={columns} data={data} />
        </div>
      </div>
      {/* Modal New Property */}
      <ModalNewProperty isModalOpen={isModalOpen} handleCancel={handleCancel} />
    </>
  )
}
