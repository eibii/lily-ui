export type AlignBase = 'default' | 'center' | 'end'

export type AlignDropdown = 'default' | 'dropdown-left' | 'dropdown-right'

export type AnimateBase = 'default' | 'rotate' | 'flip'

export type AnimationCount = 'default' | 'jump' | 'flip' | 'fade'

export type AspectBase =
  | 'default'
  | 'auto'
  | 'square'
  | 'video'
  | '16/9'
  | '16/4'
  | '4/3'
  | '1/1'
  | '3/4'
  | '9/16'
  | '4/16'
  | '3/16'
  | '2/16'
  | '1/16'

export type CollapseIcon = 'default' | 'arrow' | 'plus'

export type DefaultMode = 'light' | 'dark'

export type EffectGhost = 'default' | 'ghost'

export type EffectBase = 'default' | 'glass' | 'ghost'

export type Effect = EffectBase | 'link'

export type LayoutCount = 'default' | 'boxes' | 'labelsUnder'

export type MaskShape = 'default' | 'squircle' | 'hexagon' | 'triangle'

export type Option = { value: string | number; label: string }

export type PositionDropdown = 'default' | 'dropdown-top' | 'dropdown-bottom' | 'dropdown-end'

export type PositionDropdownCard = 'default' | 'dropdown-top' | 'dropdown-bottom' | 'dropdown-end'

export type PositionToast =
  | 'default'
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'middle-left'
  | 'middle-center'
  | 'middle-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right'

export type RatingIcon = 'default' | 'heart'

export type SeverityBase = 'default' | 'info' | 'success' | 'warning' | 'danger'

export type Severity = SeverityBase | 'primary' | 'secondary' | 'accent' | 'neutral'

export type SeverityExtend = Severity | 'light' | 'dark' | 'link'

export type ShapeBase = 'default' | 'rounded' | 'circle' | 'square'

export type ShapeAvatar = ShapeBase | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'

export type SizeBase = 'default' | 'xs' | 'sm' | 'lg'

export type TypeLoading = 'default' | 'dots' | 'ring' | 'ball' | 'bars' | 'infinity'

export type TypeTab = 'default' | 'none' | 'boxed' | 'lifted'
