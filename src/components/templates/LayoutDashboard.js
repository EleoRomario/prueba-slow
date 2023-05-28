'use client'
import { Layout } from 'antd'
import { Sidebar } from '../modules/Sidebar'
import { Header } from '../modules/Header'
import { Footer } from '../modules/Footer'

const { Content } = Layout
export const LayoutDashboard = ({ children }) => {
  return (
    <Layout
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'row',
      }}>
      <Sidebar />
      <Layout className='bg-bg'>
        <Header />
        <Content className='m-5'>{children}</Content>
        <Footer />
      </Layout>
    </Layout>
  )
}
