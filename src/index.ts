import type { App } from 'vue'

import vTooltip from './directives/Tooltip'

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
  LDiff,
  LKbd,
  LStatGroup,
  LStat,
  LTimeline,
  LTimelineText,
  LBreadcrumbs,
  LBottomNav,
  LLink,
  LMenu,
  LNavbar,
  LPagination,
  LSteps,
  LTabs,
  LTab,
  LAlert,
  LLoading,
  LProgress,
  LRadialProgress,
  LSkeleton,
  LToast,
  LCheckbox
} from './components'
// standard export with automatic installation
export default {
  install(app: App): void {
    // components
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
    app.component('LKbd', LKbd)
    app.component('LStatGroup', LStatGroup)
    app.component('LStat', LStat)
    app.component('LTimeline', LTimeline)
    app.component('LTimelineText', LTimelineText)
    app.component('LBreadcrumbs', LBreadcrumbs)
    app.component('LBottomNav', LBottomNav)
    app.component('LLink', LLink)
    app.component('LMenu', LMenu)
    app.component('LNavbar', LNavbar)
    app.component('LPagination', LPagination)
    app.component('LSteps', LSteps)
    app.component('LTabs', LTabs)
    app.component('LTab', LTab)
    app.component('LAlert', LAlert)
    app.component('LLoading', LLoading)
    app.component('LProgress', LProgress)
    app.component('LRadialProgress', LRadialProgress)
    app.component('LSkeleton', LSkeleton)
    app.component('LToast', LToast)
    app.component('LCheckbox', LCheckbox)

    // directives
    app.directive('tooltip', vTooltip)
  }
}
// individual exports
export {
  // components
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
  LDiff,
  LKbd,
  LStatGroup,
  LStat,
  LTimeline,
  LTimelineText,
  LBreadcrumbs,
  LBottomNav,
  LLink,
  LMenu,
  LNavbar,
  LPagination,
  LSteps,
  LTabs,
  LTab,
  LAlert,
  LLoading,
  LProgress,
  LRadialProgress,
  LSkeleton,
  LToast,
  LCheckbox,
  // directives
  vTooltip
}
