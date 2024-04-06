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
  LThemeCtr
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
    app.component('LThemeCtr', LThemeCtr)
  }
}
// individual exports
export { LButton, LDropdown, LDropdownCard, LDropdownHelper, LModal, LSwap, LThemeCtr }
