<template>
  <div>
    <!-- Hero Section -->
    <section class="relative h-screen flex items-center justify-center overflow-hidden">
      <!-- Background Image -->
      <div class="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1501612780327-45045538702b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
             alt="MOUSIQUA Band" 
             class="w-full h-full object-cover object-center">
        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30"></div>
      </div>
      
      <!-- Content -->
      <div class="container mx-auto px-4 z-10 text-center">
        <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-purple-500">MOUSIQUA</span>
        </h1>
        <p class="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto animate-slide-up">
          วงดนตรีที่จะพาคุณไปสู่โลกแห่งเสียงเพลงที่ไม่เหมือนใคร
        </p>
        
        <!-- Social Media Links -->
        <div class="flex justify-center space-x-4 mb-10 animate-slide-up" style="animation-delay: 0.2s;">
          <a href="#" class="text-white hover:text-primary-400 transition-colors">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path>
            </svg>
          </a>
          <a href="#" class="text-white hover:text-primary-400 transition-colors">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
            </svg>
          </a>
          <a href="#" class="text-white hover:text-primary-400 transition-colors">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path>
            </svg>
          </a>
          <a href="#" class="text-white hover:text-primary-400 transition-colors">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clip-rule="evenodd" />
            </svg>
          </a>
        </div>
        
        <!-- Play Button -->
        <a href="#music" class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent-600 to-primary-700 text-white font-medium rounded-full transition-transform hover:scale-105 animate-slide-up" style="animation-delay: 0.4s;">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          ฟังเพลงของเรา
        </a>
      </div>
      
      <!-- Scroll Down Indicator -->
      <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>

    <!-- Music Player Section -->
    <section id="music" class="py-20 bg-gray-50 dark:bg-dark-200">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">เพลงของเรา</h2>
          <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            รับฟังเพลงล่าสุดและยอดนิยมของเราได้ที่นี่ พร้อมด้วยเครื่องเล่นเพลงที่ใช้งานง่าย
          </p>
        </div>
        
        <AudioPlayer />
      </div>
    </section>

    <!-- About Preview Section -->
    <section class="py-20 bg-white dark:bg-dark-300">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div class="order-2 md:order-1">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">เกี่ยวกับ MOUSIQUA</h2>
            <p class="text-gray-600 dark:text-gray-400 mb-6">
              MOUSIQUA เป็นวงดนตรีที่มีเอกลักษณ์เฉพาะตัว ผสมผสานดนตรีหลากหลายแนวเข้าด้วยกัน ทั้ง Rock, Electronic และ Pop 
              ก่อตั้งขึ้นในปี 2018 โดยกลุ่มเพื่อนที่มีความหลงใหลในดนตรีเหมือนกัน
            </p>
            <p class="text-gray-600 dark:text-gray-400 mb-8">
              พวกเราสร้างสรรค์ผลงานเพลงที่มีความหมายและสะท้อนเรื่องราวชีวิตของคนรุ่นใหม่ ด้วยซาวด์ที่ทันสมัยและเนื้อหาที่เข้าถึงง่าย
            </p>
            <NuxtLink to="/about" class="inline-flex items-center px-5 py-2 bg-gradient-to-r from-accent-500 to-accent-700 text-white font-medium rounded-lg transition-transform hover:scale-105">
              อ่านเพิ่มเติม
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </NuxtLink>
          </div>
          <div class="order-1 md:order-2">
            <img src="https://images.unsplash.com/photo-1598387993281-cecf8b71a8f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80" 
                 alt="MOUSIQUA Band" 
                 class="w-full h-auto rounded-xl shadow-lg">
          </div>
        </div>
      </div>
    </section>

    <!-- Upcoming Events Preview -->
    <section class="py-20 bg-gray-50 dark:bg-dark-200">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">อีเวนต์ที่กำลังจะมาถึง</h2>
          <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            พบกับเราในคอนเสิร์ตและอีเวนต์ต่างๆ ที่กำลังจะมาถึงเร็วๆ นี้
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <EventCard v-for="(event, index) in upcomingEvents" :key="index" :event="event" />
        </div>
        
        <div class="text-center mt-10">
          <NuxtLink to="/tour" class="inline-flex items-center px-5 py-2 bg-gradient-to-r from-accent-500 to-accent-700 text-white font-medium rounded-lg transition-transform hover:scale-105">
            ดูอีเวนต์ทั้งหมด
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Gallery Preview -->
    <section class="py-20 bg-white dark:bg-dark-300">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">แกลเลอรี่</h2>
          <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            ภาพและวิดีโอจากคอนเสิร์ตและการแสดงของเรา
          </p>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div v-for="(image, index) in galleryImages.slice(0, 4)" :key="index" class="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <img :src="image.src" :alt="image.alt" class="w-full h-64 object-cover transform transition-transform hover:scale-105">
          </div>
        </div>
        
        <div class="text-center mt-10">
          <NuxtLink to="/gallery" class="inline-flex items-center px-5 py-2 bg-gradient-to-r from-accent-500 to-accent-700 text-white font-medium rounded-lg transition-transform hover:scale-105">
            ดูแกลเลอรี่ทั้งหมด
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Contact CTA -->
    <section class="py-20 bg-gray-50 dark:bg-dark-200">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">ติดต่อเรา</h2>
        <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
          สนใจจ้างงาน ติดต่อสัมภาษณ์ หรือมีคำถามใดๆ เกี่ยวกับวงของเรา ติดต่อเราได้เลย
        </p>
        <NuxtLink to="/contact" class="inline-flex items-center px-6 py-3 bg-accent-600 text-white font-medium rounded-full transition-transform hover:scale-105 hover:bg-accent-700">
          ติดต่อเรา
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
// Sample data for upcoming events
const upcomingEvents = [
  {
    title: 'Summer Music Festival',
    date: '2025-08-15',
    time: '18:00 น.',
    location: 'สวนลุมพินี, กรุงเทพฯ',
    description: 'เทศกาลดนตรีฤดูร้อนที่ยิ่งใหญ่ที่สุดแห่งปี พบกับศิลปินชั้นนำมากมาย',
    price: '฿1,500',
    ticketLink: '#',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
  },
  {
    title: 'Club Night Live',
    date: '2025-09-05',
    time: '21:00 น.',
    location: 'Route66 Club, กรุงเทพฯ',
    description: 'ค่ำคืนแห่งดนตรีสุดมันส์ที่คุณไม่ควรพลาด',
    price: '฿800',
    ticketLink: '#',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    title: 'University Tour',
    date: '2025-10-12',
    time: '17:30 น.',
    location: 'จุฬาลงกรณ์มหาวิทยาลัย',
    description: 'ทัวร์มหาวิทยาลัยครั้งแรกของวง MOUSIQUA',
    price: '฿500',
    ticketLink: '#',
    image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  }
]

// Sample data for gallery images
const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    alt: 'Concert Performance'
  },
  {
    src: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    alt: 'Live Show'
  },
  {
    src: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    alt: 'Band Practice'
  },
  {
    src: 'https://images.unsplash.com/photo-1598387993281-cecf8b71a8f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80',
    alt: 'Studio Session'
  }
]
</script>

<style scoped>
/* Add any page-specific styles here */
</style>
