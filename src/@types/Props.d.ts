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

export type FooterLogo = {
  svg?: string
  imageSrc?: string
  imageClass?: string
  imageAlt?: string
  logoHover?: boolean
  textHtml?: string
}

export type FooterNewsletter = {
  title?: string
  label: string
  placeholder?: string
  btnText: string
  btnIcon?: string
  onSubmit: (email: string) => void
}

export type LayoutCount = 'default' | 'boxes' | 'labelsUnder'

export type MaskShape = 'default' | 'squircle' | 'hexagon' | 'triangle'

export type Menu = {
  svg?: string
  icon?: string
  label?: string
  link?: string
  target?: '_blank' | '_self'
  to?: any
}

export type ColMenu = {
  title?: string
  menus: Menu[]
}

export type Option = { value: string | number; label: string }

export type PositionBase =
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

export type PositionDivider = 'default' | 'start' | 'end'

export type PositionDropdown = 'default' | 'dropdown-top' | 'dropdown-bottom' | 'dropdown-end'

export type PositionDropdownCard = 'default' | 'dropdown-top' | 'dropdown-bottom' | 'dropdown-end'

export type RatingIcon = 'default' | 'heart'

export type SeverityBase = 'default' | 'info' | 'success' | 'warning' | 'danger'

export type Severity = SeverityBase | 'primary' | 'secondary' | 'accent' | 'neutral'

export type SeverityExtend = Severity | 'light' | 'dark' | 'link'

export type ShapeBase = 'default' | 'rounded' | 'circle' | 'square'

export type ShapeAvatar = ShapeBase | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'

export type ShapeImage =
  | 'default'
  | 'squircle'
  | 'heart'
  | 'hexagon'
  | 'hexagon2'
  | 'decagon'
  | 'pentagon'
  | 'diamond'
  | 'circle'
  | 'parallelogram'
  | 'parallelogram2'
  | 'parallelogram3'
  | 'parallelogram4'
  | 'star'
  | 'star2'
  | 'triangle'
  | 'triangle2'
  | 'triangle3'
  | 'triangle4'

export type SizeArtboard = 'phone1' | 'phone2' | 'phone3' | 'phone4' | 'phone5' | 'phone6'

export type SizeBase = 'default' | 'xs' | 'sm' | 'lg'

export type SocialMenu = {
  svg?: string
  icon?: string
  label?: string
  link: string
  target?: '_blank' | '_self'
}

export type StyleContentBorder = 'default' | 'border' | 'shadow'

export type TypeLoading = 'default' | 'dots' | 'ring' | 'ball' | 'bars' | 'infinity'

export type TypeTab = 'default' | 'none' | 'boxed' | 'lifted'
