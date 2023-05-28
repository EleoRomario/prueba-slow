'use client'
import { Button } from 'antd'
import Link from 'next/link'

export const ButtonBack = props => {
  const { text, href } = props

  return (
    <Link href={href}>
      <Button {...props}>{text}</Button>
    </Link>
  )
}
