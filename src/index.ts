import { App } from 'vue'
import Button from './components/Button.vue'
import Tag from './components/Tag.vue'

// https://fhaladin-dev.medium.com/step-by-step-guide-to-building-a-vue-js-ui-component-library-a74e155facfc

export default {
  install: (app: App<Element>) => {
    app.component('UiButton', Button)
    app.component('UiTag', Tag)
  }
}