import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import PagefindSearch from '../components/PagefindSearch.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('PagefindSearch', PagefindSearch)
  }
}