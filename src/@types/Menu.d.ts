export type Item = {
  title?: string
  titleClass?: string
  label?: string
  labelClass?: string
  iconClass?: string
  to?: any
  tooltip?: string
  tooltipPosition?: 'top' | 'right' | 'bottom' | 'left'
  disabled?: boolean
  badge?: string
  active?: boolean
  collapsed?: boolean
  items?: Item[]
}
