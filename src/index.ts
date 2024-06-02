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
  LCheckbox,
  LFileInput,
  LRadio,
  LRange,
  LRating,
  LSelect,
  LInput,
  LTextarea,
  LToggle,
  LArtboard,
  LDivider,
  LDrawer,
  LFooter,
  LHero,
  LIndicator,
  LJoin,
  LJoinItem,
  LImgShape,
  LStack,
  LStackItem,
  LMBrowser,
  LMCode,
  LMPhone,
  LMWindow
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
    app.component('LFileInput', LFileInput)
    app.component('LRadio', LRadio)
    app.component('LRange', LRange)
    app.component('LRating', LRating)
    app.component('LSelect', LSelect)
    app.component('LInput', LInput)
    app.component('LTextarea', LTextarea)
    app.component('LToggle', LToggle)
    app.component('LArtboard', LArtboard)
    app.component('LDivider', LDivider)
    app.component('LDrawer', LDrawer)
    app.component('LFooter', LFooter)
    app.component('LHero', LHero)
    app.component('LIndicator', LIndicator)
    app.component('LJoin', LJoin)
    app.component('LJoinItem', LJoinItem)
    app.component('LImgShape', LImgShape)
    app.component('LStack', LStack)
    app.component('LStackItem', LStackItem)
    app.component('LMBrowser', LMBrowser)
    app.component('LMCode', LMCode)
    app.component('LMPhone', LMPhone)
    app.component('LMWindow', LMWindow)
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
  LFileInput,
  LRadio,
  LRange,
  LRating,
  LSelect,
  LInput,
  LTextarea,
  LToggle,
  LArtboard,
  LDivider,
  LDrawer,
  LFooter,
  LHero,
  LIndicator,
  LJoin,
  LJoinItem,
  LImgShape,
  LStack,
  LStackItem,
  LMBrowser,
  LMCode,
  LMPhone,
  LMWindow,
  // directives
  vTooltip
}
