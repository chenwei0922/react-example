import React from 'react'
import './index.scss'

/**
 * type of button
 */
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
/**
 * size of button
 */
export enum ButtonSize {
  default = 'default',
  small = 'small',
  large = 'large'
}

export interface ButtonProp {
  type: ButtonType | string
  size: ButtonSize | string
  // text button ?
  text: boolean
  // disabled button ?
  disabled: boolean
  children?: React.ReactNode
}

const GCButton = (props: ButtonProp) => {
  const getClassesName = React.useMemo(() => {
    const arr = ['gc-button']
    if (props.type) {
      arr.push(props.type)
    }
    if (props.size) {
      arr.push('gc-button--' + props.size)
    }
    if (props.text) {
      arr.push('text')
    }
    if (props.disabled) {
      arr.push('disabled')
    }
    return arr
  }, [props])

  return <span className={getClassesName.join(' ')}>{props.children}</span>
}
// GCButton.propTypes = {}
GCButton.defaultProps = {
  type: ButtonType.default,
  size: ButtonSize.default,
  text: false,
  disabled: false
}
export default GCButton
