<template>
  <div>
    <!-- Hero Section -->
    <section class="relative py-20 bg-gradient-to-b from-gray-900 to-dark-300">
      <div class="container mx-auto px-4 py-16">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">เพลงของเรา</h1>
          <p class="text-xl text-gray-300 max-w-2xl mx-auto animate-slide-up">
            รับฟังเพลงและอัลบั้มทั้งหมดของ MOUSIQUA ได้ที่นี่
          </p>
        </div>
      </div>
    </section>

    <!-- Latest Album Section -->
    <section class="py-16 bg-white dark:bg-dark-300">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <div class="relative group">
              <img src="https://images.unsplash.com/photo-1671726203454-88bf7f92b24b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG11c2ljJTIwYWxidW18ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" 
                   alt="Latest Album" 
                   class="w-full h-auto rounded-xl shadow-lg transform transition-transform duration-500 group-hover:scale-105">
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6 rounded-xl">
                <button class="bg-primary-500 hover:bg-primary-600 text-white rounded-full p-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div>
            <span class="text-sm font-medium text-primary-500 mb-2 block">อัลบั้มล่าสุด</span>
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Neon Dreams</h2>
            <p class="text-gray-600 dark:text-gray-400 mb-6">
              อัลบั้มล่าสุดของเราที่ผสมผสานดนตรี Electronic และ Rock เข้าด้วยกัน สะท้อนเรื่องราวของชีวิตในเมืองใหญ่และความฝันของคนรุ่นใหม่
            </p>
            <div class="flex items-center mb-6">
              <div class="flex">
                <span v-for="i in 5" :key="i" class="text-yellow-400">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </span>
              </div>
              <span class="ml-2 text-gray-600 dark:text-gray-400">4.9 (128 รีวิว)</span>
            </div>
            <div class="flex flex-wrap gap-3 mb-8">
              <span class="px-3 py-1 bg-gray-100 dark:bg-dark-200 rounded-full text-sm">Electronic</span>
              <span class="px-3 py-1 bg-gray-100 dark:bg-dark-200 rounded-full text-sm">Rock</span>
              <span class="px-3 py-1 bg-gray-100 dark:bg-dark-200 rounded-full text-sm">Alternative</span>
            </div>
            <div class="flex flex-wrap gap-4">
              <a href="#" class="inline-flex items-center px-5 py-2 bg-gradient-to-r from-primary-500 to-purple-600 text-white font-medium rounded-lg transition-transform hover:scale-105">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                </svg>
                ฟังเลย
              </a>
              <a href="#" class="inline-flex items-center px-5 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-dark-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                ดาวน์โหลด
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Music Player Section -->
    <section class="py-16 bg-gray-50 dark:bg-dark-200">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">เครื่องเล่นเพลง</h2>
          <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            ฟังเพลงของเราได้ทุกที่ทุกเวลาด้วยเครื่องเล่นเพลงออนไลน์
          </p>
        </div>
        
        <AudioPlayer />
      </div>
    </section>

    <!-- Albums Section -->
    <section class="py-16 bg-white dark:bg-dark-300">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">อัลบั้มทั้งหมด</h2>
          <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            รวมอัลบั้มทั้งหมดของ MOUSIQUA ตั้งแต่อดีตจนถึงปัจจุบัน
          </p>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(album, index) in albums" :key="index" class="album-card group">
            <div class="relative overflow-hidden rounded-xl shadow-lg mb-4">
              <img :src="album.cover" :alt="album.title" class="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-105">
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button class="bg-primary-500 hover:bg-primary-600 text-white rounded-full p-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  </svg>
                </button>
              </div>
            </div>
            <h3 class="text-xl font-bold mb-1">{{ album.title }}</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-2">{{ album.year }}</p>
            <div class="flex items-center">
              <div class="flex">
                <span v-for="i in 5" :key="i" class="text-yellow-400">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </span>
              </div>
              <span class="ml-2 text-sm text-gray-600 dark:text-gray-400">{{ album.rating }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Streaming Platforms -->
    <section class="py-16 bg-gray-50 dark:bg-dark-200">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">ฟังเราได้ที่</h2>
          <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            ติดตามและฟังเพลงของเราได้บนแพลตฟอร์มสตรีมมิ่งชั้นนำทั่วโลก
          </p>
        </div>
        
        <div class="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <a href="#" class="grayscale hover:grayscale-0 transition-all duration-300">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/1024px-Spotify_logo_without_text.svg.png" alt="Spotify" class="h-12">
          </a>
          <a href="#" class="grayscale hover:grayscale-0 transition-all duration-300">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Apple_Music_icon.svg/1024px-Apple_Music_icon.svg.png" alt="Apple Music" class="h-12">
          </a>
          <a href="#" class="grayscale hover:grayscale-0 transition-all duration-300">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/YouTube_social_white_squircle.svg/1024px-YouTube_social_white_squircle.svg.png" alt="YouTube Music" class="h-12">
          </a>
          <a href="#" class="grayscale hover:grayscale-0 transition-all duration-300">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/SoundCloud_logo.svg/1024px-SoundCloud_logo.svg.png" alt="SoundCloud" class="h-8">
          </a>
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="py-16 bg-gradient-to-r from-primary-600 to-purple-700 text-white">
      <div class="container mx-auto px-4">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-3xl font-bold mb-4">รับข่าวสารล่าสุด</h2>
          <p class="mb-8">
            สมัครรับจดหมายข่าวเพื่อรับข้อมูลล่าสุดเกี่ยวกับเพลงใหม่ อัลบั้ม และทัวร์คอนเสิร์ต
          </p>
          <form class="flex flex-col sm:flex-row gap-2">
            <input type="email" placeholder="อีเมลของคุณ" class="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-gray-800">
            <button type="submit" class="px-6 py-3 bg-white text-primary-600 font-medium rounded-lg hover:bg-gray-100 transition-colors">
              สมัครรับข่าวสาร
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Sample data for albums
const albums = [
  {
    title: 'Neon Dreams',
    year: '2025',
    cover: 'https://images.unsplash.com/photo-1671726203454-88bf7f92b24b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG11c2ljJTIwYWxidW18ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    rating: '4.9 (128)'
  },
  {
    title: 'Electric Soul',
    year: '2023',
    cover: 'https://images.unsplash.com/photo-1619983081563-430f63602796?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bXVzaWMlMjBhbGJ1bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    rating: '4.8 (95)'
  },
  {
    title: 'Urban Jungle',
    year: '2021',
    cover: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bXVzaWMlMjBhbGJ1bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    rating: '4.7 (82)'
  },
  {
    title: 'Midnight Tales',
    year: '2020',
    cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWMlMjBhbGJ1bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    rating: '4.5 (76)'
  },
  {
    title: 'First Light',
    year: '2018',
    cover: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bXVzaWMlMjBhbGJ1bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    rating: '4.3 (64)'
  }
]
</script>

<style scoped>
/* Add any page-specific styles here */
</style>
