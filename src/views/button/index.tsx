import React from 'react'

import { GCButton, ButtonType } from '../../components'

const ButtonView = () => {
  return (
    <section className="app-container">
      <h2>按钮组件使用说明</h2>
      <GCButton type={ButtonType.danger}>danger 按钮</GCButton>
      <GCButton type={ButtonType.success}>success 按钮</GCButton>
      <GCButton type={ButtonType.info}>info 按钮</GCButton>
      <GCButton type={ButtonType.warn}>warn 按钮</GCButton>
      <br />
      <GCButton text>danger 按钮</GCButton>
      <GCButton type={ButtonType.danger} text>
        danger 按钮
      </GCButton>
      <GCButton type={ButtonType.success} text>
        success 按钮
      </GCButton>
      <GCButton type={ButtonType.info} text>
        info 按钮
      </GCButton>
      <GCButton type={ButtonType.warn} text>
        warn 按钮
      </GCButton>
    </section>
  )
}

export default ButtonView
