<script setup>
import DefaultTheme from 'vitepress/theme'
import PagefindSearch from '../components/PagefindSearch.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #nav-bar-content-before>
      <div style="flex: 1" />
      <div style="position: relative;">
        <PagefindSearch />
      </div>
    </template>
  </Layout>
</template>