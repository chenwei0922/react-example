import React from 'react'
import { Outlet } from 'react-router-dom'
import './root.scss'

const RootView = () => {
  return (
    <section className="root-view">
      <div className="sidebar">
        <ul>
          <li className="sidebar-item">按钮</li>
          <li className="sidebar-item">输入框</li>
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
