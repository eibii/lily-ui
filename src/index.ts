import type { App } from 'vue'

import './assets/sass/tailwind.sass'
import 'bootstrap-icons/font/bootstrap-icons.css'

import {
  LButton,
  LDropdown,
  LDropdownCard,
  LDropdownHelper,
  LModal,
  LSwap,
  LThemeMode,
  LAccordion,
  LAccordionGroup,
  LAvatar,
  LAvatarGroup,
  LBadge,
  LCard,
  LCarousel,
  LChat,
  LCollapse,
  LCountdown,
  LCountdownTime,
  LDiff
} from './components'
// standard export with automatic installation
export default {
  install(app: App): void {
    app.component('LButton', LButton)
    app.component('LDropdown', LDropdown)
    app.component('LDropdownCard', LDropdownCard)
    app.component('LDropdownHelper', LDropdownHelper)
    app.component('LModal', LModal)
    app.component('LSwap', LSwap)
    app.component('LThemeMode', LThemeMode)
    app.component('LAccordion', LAccordion)
    app.component('LAccordionGroup', LAccordionGroup)
    app.component('LAvatar', LAvatar)
    app.component('LAvatarGroup', LAvatarGroup)
    app.component('LBadge', LBadge)
    app.component('LCard', LCard)
    app.component('LCarousel', LCarousel)
    app.component('LChat', LChat)
    app.component('LCollapse', LCollapse)
    app.component('LCountdown', LCountdown)
    app.component('LCountdownTime', LCountdownTime)
    app.component('LDiff', LDiff)
  }
}
// individual exports
export {
  LButton,
  LDropdown,
  LDropdownCard,
  LDropdownHelper,
  LModal,
  LSwap,
  LThemeMode,
  LAccordion,
  LAccordionGroup,
  LAvatar,
  LAvatarGroup,
  LBadge,
  LCard,
  LCarousel,
  LChat,
  LCollapse,
  LCountdown,
  LCountdownTime,
  LDiff
}
