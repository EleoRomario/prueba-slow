import { ConfigProvider } from 'antd'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const ThemeAntdProvider = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#2A3080',
          // fontFamily: poppins,
          colorText: '#747f93',
        },
      }}>
      {children}
    </ConfigProvider>
  )
}
