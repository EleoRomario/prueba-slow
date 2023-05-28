'use client'
import { LabelTitle } from '@/components/elements/labels/LabelTitle'
import { Container } from '@/components/modules/Container'
import { LayoutDashboard } from '@/components/templates/LayoutDashboard'

export default function LayoutPropiedades({ children }) {
  return (
    <LayoutDashboard>
      <LabelTitle text='Propiedades' />
      <Container>{children}</Container>
    </LayoutDashboard>
  )
}
