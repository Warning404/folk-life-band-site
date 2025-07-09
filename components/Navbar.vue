<template>
  <nav class="fixed top-0 left-0 w-full z-50 transition-all duration-300" 
       :class="{ 'bg-transparent': !scrolled, 'bg-white/80 dark:bg-dark-200/90 backdrop-blur-md shadow-md': scrolled }">
    <div class="container mx-auto px-4 py-4 flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink to="/" class="text-2xl font-bold tracking-tighter">
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-purple-600">MOUSIQUA</span>
      </NuxtLink>

      <!-- Mobile Menu Button -->
      <button @click="isMenuOpen = !isMenuOpen" class="md:hidden text-gray-800 dark:text-white">
        <span v-if="!isMenuOpen">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </span>
        <span v-else>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </span>
      </button>

      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center space-x-8">
        <NuxtLink v-for="(item, index) in menuItems" :key="index" :to="item.path"
          class="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300">
          {{ item.name }}
        </NuxtLink>
        
        <!-- Dark Mode Toggle -->
        <button @click="toggleColorMode" class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-dark-100 transition-colors">
          <svg v-if="$colorMode.value === 'dark'" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isMenuOpen" class="md:hidden bg-white dark:bg-dark-200 shadow-lg absolute w-full">
      <div class="container mx-auto px-4 py-4">
        <div class="flex flex-col space-y-4">
          <NuxtLink v-for="(item, index) in menuItems" :key="index" :to="item.path"
            class="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 py-2 transition-colors duration-300"
            @click="isMenuOpen = false">
            {{ item.name }}
          </NuxtLink>
          
          <!-- Dark Mode Toggle (Mobile) -->
          <button @click="toggleColorMode" class="flex items-center py-2 text-gray-700 dark:text-gray-300">
            <span v-if="$colorMode.value === 'dark'" class="mr-2">Light Mode</span>
            <span v-else class="mr-2">Dark Mode</span>
            <svg v-if="$colorMode.value === 'dark'" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
const colorMode = useColorMode()
const isMenuOpen = ref(false)
const scrolled = ref(false)

const menuItems = [
  { name: 'หน้าแรก', path: '/' },
  { name: 'เพลง', path: '/music' },
  { name: 'เกี่ยวกับเรา', path: '/about' },
  { name: 'ทัวร์', path: '/tour' },
  { name: 'แกลเลอรี่', path: '/gallery' },
  { name: 'ติดต่อ', path: '/contact' }
]

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

// Handle scroll event to change navbar style
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}
</script>
