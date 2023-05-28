import {
  Calculator,
  Community,
  HomeAlt,
  HomeUser,
  MultiplePages,
  PageEdit,
  Settings,
  UserScan,
} from 'iconoir-react'
import Link from 'next/link'

export const DataSidebar = [
  {
    key: 'propiedades',
    label: <Link href='/propiedades'> Propiedades</Link>,
    icon: <HomeAlt />,
  },
  {
    key: 'propietarios',
    label: <Link href='/propietarios'> Propietarios</Link>,
    icon: <HomeUser />,
  },
  {
    key: 'clientes',
    label: <Link href='/clientes'> Clientes</Link>,
    icon: <Community />,
  },
  {
    key: 'cotizaciones',
    label: <Link href='/cotizaciones'> Cotizaciones</Link>,
    icon: <PageEdit />,
  },
  {
    key: 'valorizaciones-tasaciones',
    label: (
      <Link href='/valorizaciones-tasaciones'>
        {' '}
        Valorizaciones y Tasaciones
      </Link>
    ),
    icon: <Calculator />,
  },
  {
    key: 'trabajadores',
    label: <Link href='/trabajadores'> Trabajadores</Link>,
    icon: <UserScan />,
  },
  {
    type: 'divider',
  },
  {
    key: 'reportes',
    label: <Link href='/reportes'> Reportes</Link>,
    icon: <MultiplePages />,
  },
  {
    key: 'configuracion',
    label: <Link href='/configuracion'> Configuración</Link>,
    icon: <Settings />,
  },
]
