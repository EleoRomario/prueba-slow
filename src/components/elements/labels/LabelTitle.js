import { Typography } from 'antd'

export const LabelTitle = ({ text }) => {
  return (
    <Typography.Title level={2} className='text-text-title'>
      {text}
    </Typography.Title>
  )
}
