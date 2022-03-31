<script setup lang="ts">
import { isDark, toggleDark } from '~/composables'
</script>

<template>
  <nav py-2 px-4 flex items-center justify-center>
    <h1>
      <b>disco</b> elysium
    </h1>
    <div class="flex-auto" />
    <a
      class="icon-btn"
      i-carbon-logo-github
      rel="noreferrer"
      href="https://github.com/antfu/disco-elysium"
      target="_blank"
      title="GitHub"
      mr-2
    />
    <button class="icon-btn !outline-none" @click="toggleDark()">
      <div v-if="isDark" i-carbon-moon />
      <div v-else i-carbon-sun />
    </button>
  </nav>
</template>
