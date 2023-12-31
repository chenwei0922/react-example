import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import './root.scss'

const RootView = () => {
  const navigate = useNavigate()
  const goComp = () => {
    navigate('/component')
  }
  return (
    <section className="root-view">
      <div className="sidebar">
        <ul>
          <li className="sidebar-item">Express</li>
          <li className="sidebar-item" onClick={goComp}>
            常用组件
          </li>
        </ul>
      </div>
      <div className="router-view">
        {/* 嵌套路由占位 */}
        <Outlet />
      </div>
    </section>
  )
}

export default RootView
