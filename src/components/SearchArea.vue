
<script setup lang="ts">
import { handleSearch, text } from '~/logics'
</script>

<template>
  <div class="flex gap-4 py-4">
    <input v-model="text" class="input w-full" placeholder="text" type="text" @change="handleSearch">
  </div>
</template>
