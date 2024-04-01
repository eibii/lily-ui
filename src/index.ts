import type { App } from 'vue'

import './assets/sass/tailwind.sass'
import 'bootstrap-icons/font/bootstrap-icons.css'

import { LButton, LDropdown, LDropdownCard } from './components'
// exportação padrão com instalação automática
export default {
  install(app: App): void {
    app.component('LButton', LButton)
    app.component('LDropdown', LDropdown)
    app.component('LDropdownCard', LDropdownCard)
  }
}
// exportação individual
export { LButton, LDropdown, LDropdownCard }
