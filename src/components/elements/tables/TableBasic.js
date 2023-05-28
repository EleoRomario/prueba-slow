import { Table } from 'antd'

export const TableBasic = ({ columns, data }) => {
  return (
    <Table
      columns={columns}
      dataSource={data}
      scroll={{
        x: 1500,
        y: 'max-content',
      }}
    />
  )
}
