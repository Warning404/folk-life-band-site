<template>
  <div class="audio-player bg-white dark:bg-dark-200 rounded-xl shadow-xl p-4 md:p-6 w-full max-w-3xl mx-auto">
    <div class="flex flex-col">
      <!-- Current Track Info -->
      <div class="flex items-center mb-6">
        <div class="w-16 h-16 md:w-20 md:h-20 rounded-md overflow-hidden mr-4 flex-shrink-0">
          <img :src="currentTrack.cover" :alt="currentTrack.title" class="w-full h-full object-cover">
        </div>
        <div class="flex-grow">
          <h3 class="text-lg md:text-xl font-semibold text-gray-900 dark:text-white truncate">{{ currentTrack.title }}</h3>
          <p class="text-sm md:text-base text-gray-600 dark:text-gray-300">{{ currentTrack.artist }}</p>
        </div>
      </div>

      <!-- Progress Bar -->
      <div class="mb-4">
        <div class="relative h-1 bg-gray-200 dark:bg-gray-700 rounded-full cursor-pointer" @click="seek">
          <div class="absolute top-0 left-0 h-full bg-gradient-to-r from-primary-500 to-purple-600 rounded-full" :style="{ width: `${progress}%` }"></div>
        </div>
        <div class="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
          <span>{{ formatTime(currentTime) }}</span>
          <span>{{ formatTime(duration) }}</span>
        </div>
      </div>

      <!-- Controls -->
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-4">
          <!-- Shuffle -->
          <button class="text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
          
          <!-- Previous -->
          <button @click="prevTrack" class="text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <!-- Play/Pause -->
          <button @click="togglePlay" class="bg-gradient-to-r from-primary-500 to-purple-600 text-white rounded-full p-3 hover:opacity-90 transition-opacity">
            <svg v-if="!isPlaying" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
          
          <!-- Next -->
          <button @click="nextTrack" class="text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          <!-- Repeat -->
          <button class="text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
        </div>
        
        <!-- Volume -->
        <div class="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          </svg>
          <input type="range" min="0" max="100" v-model="volume" @input="updateVolume" class="w-20 accent-primary-500">
        </div>
      </div>
    </div>

    <!-- Playlist -->
    <div class="mt-8">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">เพลย์ลิสต์</h3>
      <div class="space-y-2 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
        <div 
          v-for="(track, index) in playlist" 
          :key="index" 
          @click="playTrack(index)"
          class="flex items-center p-2 rounded-lg cursor-pointer transition-colors"
          :class="{ 'bg-gray-100 dark:bg-dark-100': currentTrackIndex === index, 'hover:bg-gray-50 dark:hover:bg-dark-100/50': currentTrackIndex !== index }"
        >
          <div class="w-10 h-10 rounded overflow-hidden mr-3 flex-shrink-0">
            <img :src="track.cover" :alt="track.title" class="w-full h-full object-cover">
          </div>
          <div class="flex-grow">
            <h4 class="text-sm font-medium text-gray-900 dark:text-white truncate">{{ track.title }}</h4>
            <p class="text-xs text-gray-500 dark:text-gray-400">{{ track.artist }}</p>
          </div>
          <div class="text-xs text-gray-500 dark:text-gray-400">{{ track.duration }}</div>
        </div>
      </div>
    </div>

    <!-- Hidden Audio Element -->
    <audio ref="audioPlayer" @timeupdate="onTimeUpdate" @loadedmetadata="onLoadedMetadata" @ended="onEnded"></audio>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'

// Sample playlist data
const playlist = ref([
  {
    title: 'Midnight Serenade',
    artist: 'MOUSIQUA',
    cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWMlMjBhbGJ1bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    duration: '3:45'
  },
  {
    title: 'Electric Dreams',
    artist: 'MOUSIQUA',
    cover: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bXVzaWMlMjBhbGJ1bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    duration: '4:20'
  },
  {
    title: 'Neon Lights',
    artist: 'MOUSIQUA',
    cover: 'https://images.unsplash.com/photo-1619983081563-430f63602796?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bXVzaWMlMjBhbGJ1bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    duration: '3:15'
  },
  {
    title: 'Urban Jungle',
    artist: 'MOUSIQUA',
    cover: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bXVzaWMlMjBhbGJ1bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    duration: '5:10'
  },
  {
    title: 'Sunset Boulevard',
    artist: 'MOUSIQUA',
    cover: 'https://images.unsplash.com/photo-1671726203454-88bf7f92b24b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG11c2ljJTIwYWxidW18ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
    duration: '4:05'
  }
])

const audioPlayer = ref(null)
const currentTrackIndex = ref(0)
const isPlaying = ref(false)
const currentTime = ref(0)
const duration = ref(0)
const volume = ref(80)

const currentTrack = computed(() => playlist.value[currentTrackIndex.value])
const progress = computed(() => (currentTime.value / duration.value) * 100 || 0)

// Methods
const togglePlay = () => {
  if (audioPlayer.value.paused) {
    audioPlayer.value.play()
    isPlaying.value = true
  } else {
    audioPlayer.value.pause()
    isPlaying.value = false
  }
}

const playTrack = (index) => {
  currentTrackIndex.value = index
  isPlaying.value = false
  
  // Need to wait for the next tick to ensure the src has been updated
  nextTick(() => {
    audioPlayer.value.src = currentTrack.value.src
    audioPlayer.value.load()
    audioPlayer.value.play()
    isPlaying.value = true
  })
}

const nextTrack = () => {
  currentTrackIndex.value = (currentTrackIndex.value + 1) % playlist.value.length
  playTrack(currentTrackIndex.value)
}

const prevTrack = () => {
  currentTrackIndex.value = (currentTrackIndex.value - 1 + playlist.value.length) % playlist.value.length
  playTrack(currentTrackIndex.value)
}

const seek = (event) => {
  const rect = event.target.getBoundingClientRect()
  const percent = (event.clientX - rect.left) / rect.width
  audioPlayer.value.currentTime = percent * duration.value
}

const updateVolume = () => {
  audioPlayer.value.volume = volume.value / 100
}

const onTimeUpdate = () => {
  currentTime.value = audioPlayer.value.currentTime
}

const onLoadedMetadata = () => {
  duration.value = audioPlayer.value.duration
}

const onEnded = () => {
  nextTrack()
}

const formatTime = (time) => {
  if (isNaN(time)) return '0:00'
  
  const minutes = Math.floor(time / 60)
  const seconds = Math.floor(time % 60)
  return `${minutes}:${seconds.toString().padStart(2, '0')}`
}

// Initialize audio player
onMounted(() => {
  audioPlayer.value.volume = volume.value / 100
  audioPlayer.value.src = currentTrack.value.src
})

// Watch for track changes
watch(currentTrackIndex, () => {
  audioPlayer.value.src = currentTrack.value.src
  if (isPlaying.value) {
    audioPlayer.value.play()
  }
})
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: rgba(156, 163, 175, 0.5);
  border-radius: 20px;
}

input[type="range"] {
  -webkit-appearance: none;
  height: 4px;
  border-radius: 2px;
  background: #e5e7eb;
}

.dark input[type="range"] {
  background: #4b5563;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #0ea5e9;
  cursor: pointer;
}
</style>
