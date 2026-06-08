<template>
  <div id="pagefind-search" />
  <div v-if="isOpen" class="pagefind-overlay" @click="closeSearch" />
</template>

<script setup>
import { onMounted, ref } from 'vue'

const isOpen = ref(false)

function closeSearch() {
  const clearBtn = document.querySelector('.pagefind-ui__search-clear')
  if (clearBtn) clearBtn.click()
  isOpen.value = false
}

onMounted(() => {
  // NO cargamos pagefind-ui.css, usamos nuestros propios estilos
  const script = document.createElement('script')
  script.src = '/pagefind/pagefind-ui.js'
  script.onload = () => {
    new window.PagefindUI({
      element: '#pagefind-search',
      showSubResults: true,
      excerptLength: 50,
    })

    const input = document.querySelector('.pagefind-ui__search-input')
    if (input) {
      input.addEventListener('input', () => {
        isOpen.value = input.value.length > 0
      })
    }

    // Quitar SVG del DOM
    const svg = document.querySelector('.pagefind-ui__form label svg')
    if (svg) svg.remove()
  }
  document.head.appendChild(script)
})
</script>

<style>
#pagefind-search {
  width: 400px;
}

.pagefind-overlay {
  position: fixed;
  inset: 0;
  z-index: 9998;
}

.pagefind-ui__form {
  position: relative;
  margin: 0;
}

.pagefind-ui__form label {
  display: block;
  background: none !important;
  background-image: none !important;
}

.pagefind-ui__search-input {
  all: unset !important;
  display: block !important;
  width: 100% !important;
  height: 32px !important;
  background-color: var(--vp-c-bg-soft) !important;
  color: var(--vp-c-text-1) !important;
  border: 1px solid var(--vp-c-divider) !important;
  border-radius: 8px !important;
  font-size: 0.85em !important;
  padding: 0 70px 0 12px !important;
  box-sizing: border-box !important;
}

.pagefind-ui__search-input::placeholder {
  color: var(--vp-c-text-3) !important;
}

.pagefind-ui__search-input:focus {
  border-color: var(--vp-c-brand-1) !important;
  outline: none !important;
}

.pagefind-ui__search-clear {
  background-color: var(--vp-c-brand-1) !important;
  color: white !important;
  border-radius: 6px !important;
  border: none !important;
  padding: 0 8px !important;
  height: 22px !important;
  font-size: 0.75em !important;
  line-height: 22px !important;
  position: absolute !important;
  top: 50% !important;
  transform: translateY(-50%) !important;
  right: 6px !important;
  cursor: pointer !important;
}

.pagefind-ui__results-area {
  position: fixed !important;
  top: 64px !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
  width: 600px !important;
  max-height: 70vh !important;
  overflow-y: auto !important;
  background: var(--vp-c-bg) !important;
  border: 1px solid var(--vp-c-divider) !important;
  border-radius: 12px !important;
  box-shadow: 0 8px 32px rgba(0,0,0,0.4) !important;
  z-index: 9999 !important;
  padding: 12px !important;
}

.pagefind-ui__result {
  border-bottom: 1px solid var(--vp-c-divider) !important;
  padding: 12px 0 !important;
}

.pagefind-ui__result-title a {
  color: var(--vp-c-brand-1) !important;
  font-weight: 600 !important;
  text-decoration: none !important;
}

.pagefind-ui__result-excerpt {
  color: var(--vp-c-text-2) !important;
  font-size: 0.9em !important;
}

.pagefind-ui__button {
  background: var(--vp-c-brand-1) !important;
  color: white !important;
  border-radius: 8px !important;
  border: none !important;
  margin: 8px auto !important;
  display: block !important;
  cursor: pointer !important;
}

mark {
  background-color: var(--vp-c-yellow-soft) !important;
  color: var(--vp-c-text-1) !important;
  border-radius: 3px !important;
}
</style>