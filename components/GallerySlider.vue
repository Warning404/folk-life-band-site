<template>
  <div class="gallery-slider relative">
    <!-- Main Slider -->
    <div class="overflow-hidden rounded-xl">
      <div class="relative flex transition-transform duration-500 ease-in-out" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div v-for="(item, index) in items" :key="index" class="w-full flex-shrink-0">
          <!-- Image -->
          <div v-if="item.type === 'image'" class="relative aspect-video">
            <img :src="item.src" :alt="item.caption" class="w-full h-full object-cover">
            <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
              <p class="text-white text-sm md:text-base">{{ item.caption }}</p>
            </div>
          </div>
          
          <!-- Video -->
          <div v-else-if="item.type === 'video'" class="relative aspect-video">
            <iframe 
              class="w-full h-full" 
              :src="item.src" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Navigation Arrows -->
    <button 
      @click="prevSlide" 
      class="absolute top-1/2 left-2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-colors z-10"
      :class="{ 'opacity-50 cursor-not-allowed': currentIndex === 0 }"
      :disabled="currentIndex === 0"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    
    <button 
      @click="nextSlide" 
      class="absolute top-1/2 right-2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-colors z-10"
      :class="{ 'opacity-50 cursor-not-allowed': currentIndex === items.length - 1 }"
      :disabled="currentIndex === items.length - 1"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>
    
    <!-- Thumbnails -->
    <div class="mt-4 grid grid-cols-5 gap-2">
      <div 
        v-for="(item, index) in items" 
        :key="index" 
        @click="goToSlide(index)"
        class="cursor-pointer rounded-md overflow-hidden aspect-video relative"
        :class="{ 'ring-2 ring-primary-500': currentIndex === index }"
      >
        <!-- Image Thumbnail -->
        <img v-if="item.type === 'image'" :src="item.src" :alt="item.caption" class="w-full h-full object-cover">
        
        <!-- Video Thumbnail -->
        <div v-else-if="item.type === 'video'" class="bg-gray-800 w-full h-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        
        <!-- Overlay for active state -->
        <div 
          class="absolute inset-0 bg-black transition-opacity"
          :class="{ 'opacity-50': currentIndex !== index, 'opacity-0': currentIndex === index }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    required: true
  },
  autoplay: {
    type: Boolean,
    default: true
  },
  interval: {
    type: Number,
    default: 5000
  }
})

const currentIndex = ref(0)
let autoplayInterval = null

const nextSlide = () => {
  if (currentIndex.value < props.items.length - 1) {
    currentIndex.value++
  } else if (props.autoplay) {
    // Loop back to first slide if autoplay is enabled
    currentIndex.value = 0
  }
}

const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}

const goToSlide = (index) => {
  currentIndex.value = index
  resetAutoplay()
}

const resetAutoplay = () => {
  if (props.autoplay) {
    clearInterval(autoplayInterval)
    startAutoplay()
  }
}

const startAutoplay = () => {
  if (props.autoplay) {
    autoplayInterval = setInterval(() => {
      nextSlide()
    }, props.interval)
  }
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
  }
})
</script>
