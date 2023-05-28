import { Button, Popconfirm, Space, Tag, Tooltip } from 'antd'
import { Download, EditPencil, Trash } from 'iconoir-react'

export const ColumnsProperty = () => {
  return [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
      render: index => index,
    },
    {
      title: 'Imagenes',
      dataIndex: 'imagenes',
      key: 'imagenes',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Videos',
      dataIndex: 'videos',
      key: 'videos',
    },
    {
      title: 'Nombre',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Propietario',
      key: 'propietario',
      dataIndex: 'propietario',
      render: (_, { tags }) => (
        <>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green'
            if (tag === 'loser') {
              color = 'volcano'
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            )
          })}
        </>
      ),
    },
    {
      title: 'Tipo',
      key: 'type',
      render: (_, record) => (
        <Space size='middle'>
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
    {
      title: 'Precio',
      key: 'precio',
    },
    {
      title: 'Dirección',
      key: 'address',
    },
    {
      title: 'Zona',
      key: 'zona',
    },
    {
      title: 'Estado',
      key: 'estado',
    },
    {
      title: 'Habilitar',
      key: 'habilitar',
    },
    {
      title: 'Detalles',
      key: 'detalles',
    },
    {
      title: 'Acciones',
      key: 'actions',
      fixed: 'right',
      width: 100,
      render: () => <a>action</a>,
    },
  ]
}

export const ColumnsOwners = () => {
  return [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
      width: 50,
    },
    {
      title: 'Nombre completo',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'DNI',
      dataIndex: 'dni',
      key: 'dni',
    },
    {
      title: 'Dirección',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Celular',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Tipo de propiedad',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Acciones',
      dataIndex: 'actions',
      key: 'actions',
      fixed: 'right',
      width: 150,
      render: () => (
        <div className='flex justify-between'>
          <Tooltip title='Descargar'>
            <Button
              className='flex justify-center items-center'
              icon={<Download />}
            />
          </Tooltip>
          <Tooltip title='Editar'>
            <Button
              className='flex justify-center items-center'
              icon={<EditPencil />}
            />
          </Tooltip>
          <Popconfirm
            placement='left'
            title='¿Está seguro de eliminar el registro?'
            onConfirm={() => console.log('confirm')}
            okText='Si'
            cancelText='No'>
            <Button
              className='flex justify-center items-center'
              icon={<Trash />}
              danger
            />
          </Popconfirm>
        </div>
      ),
    },
  ]
}
