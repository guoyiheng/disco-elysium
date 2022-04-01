
<script setup lang="ts">
import { inputText } from '~/logics'
</script>

<template>
  <div class="flex gap-4 py-4">
    <input v-model="inputText" class="input w-full" placeholder="keywords" type="text">
  </div>
</template>
