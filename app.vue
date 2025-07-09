<template>
  <div class="min-h-screen font-sans antialiased transition-colors duration-300" :class="{ 'dark:bg-dark-300 dark:text-white': $colorMode.value === 'dark' }">
    <Navbar />
    <main>
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<script setup>
const colorMode = useColorMode()

useHead({
  htmlAttrs: {
    class: () => colorMode.value
  }
})
</script>

<style>
html {
  scroll-behavior: smooth;
}

body {
  @apply bg-white text-gray-800 dark:bg-dark-300 dark:text-gray-100;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
