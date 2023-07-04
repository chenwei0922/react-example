import React from 'react'
import './index.scss'

export enum ButtonType {
  default = 'default',
  primary = 'primary',
  weak = 'weak',
  icon = 'icon',
  success = 'success',
  info = 'info',
  warn = 'warn',
  danger = 'danger'
}
export enum ButtonSize {
  default = 'default',
  small = 'small',
  large = 'large'
}
export interface ButtonProp {
  type: ButtonType
  size: ButtonSize
  children?: React.ReactNode
}

const GCButton = (props: ButtonProp) => {
  return <div className={`gc-button ${props.type} ${props.size}`}>{props.children}</div>
}
// QYFlatListView.propTypes = {}
GCButton.defaultProps = {
  type: ButtonType.default,
  size: ButtonSize.default
}
export default GCButton
