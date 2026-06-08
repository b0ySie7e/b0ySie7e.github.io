import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import PagefindSearch from '../components/PagefindSearch.vue'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('PagefindSearch', PagefindSearch)
  }
}