import React from 'react'
import './root.scss'
import Requests from '../utils/request'
import type { AxiosResponse } from 'axios'
const RootView = () => {
  const [data, setData] = React.useState<AxiosResponse | null | void>(null)

  React.useEffect(() => {
    console.log('开始请求')
    Requests.get({ path: '/api/user' }).then(res => {
      console.log(res)
      setData(res)
    })
  }, [])
  return (
    <section className="app-container">
      <p>请求结果: {JSON.stringify(data)}</p>
    </section>
  )
}

export default RootView
