<script setup lang="ts"></script>

<template>
  <div class="flex gap-2">
    <Sidebar />
    <main class="relative z-0 flex-1 p-6">
      <slot />
    </main>
  </div>
</template>
