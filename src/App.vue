<script setup lang="ts">
import { useHead } from '@vueuse/head'
import './styles/globals.css'
import './styles/fonts.css'

useHead({
  title: 'Dragan Websites',
  meta: [
    { name: 'description', content: 'Dragan Websites' },
  ],
})
</script>

<template>
  <router-view />
</template>
