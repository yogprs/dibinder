<script setup lang="ts">
import { useThemeStore } from "./stores/theme";

const themeStore = useThemeStore();

onMounted(() => {
  themeStore.initTheme();
});
</script>

<template>
  <div
    class="w-full h-screen font-lora bg-background-light dark:bg-background-dark antialiased dark:selection:bg-dark-primary dark:selection:text-white text-light-text-main dark:text-white"
  >
    <UApp>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UApp>
  </div>
</template>
