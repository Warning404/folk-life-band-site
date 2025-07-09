<template>
  <div>
    <!-- Hero Section -->
    <section class="relative py-20 bg-gradient-to-b from-gray-900 to-dark-300">
      <div class="container mx-auto px-4 py-16">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">แกลเลอรี่</h1>
          <p class="text-xl text-gray-300 max-w-2xl mx-auto animate-slide-up">
            ภาพและวิดีโอจากคอนเสิร์ตและการแสดงของ MOUSIQUA
          </p>
        </div>
      </div>
    </section>

    <!-- Filter Section -->
    <section class="py-8 bg-white dark:bg-dark-300 border-b border-gray-200 dark:border-gray-700 sticky top-20 z-30 backdrop-blur-md bg-white/90 dark:bg-dark-300/90">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div class="flex flex-wrap items-center gap-3">
            <button 
              v-for="category in categories" 
              :key="category.id"
              @click="activeCategory = category.id"
              class="px-4 py-2 rounded-full text-sm font-medium transition-colors"
              :class="activeCategory === category.id ? 'bg-primary-500 text-white' : 'bg-gray-100 dark:bg-dark-200 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-100'"
            >
              {{ category.name }}
            </button>
          </div>
          
          <div class="flex items-center gap-3">
            <button class="p-2 rounded-full bg-gray-100 dark:bg-dark-200 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-100">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </button>
            <button class="p-2 rounded-full bg-gray-100 dark:bg-dark-200 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-100">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery Grid Section -->
    <section class="py-16 bg-gray-50 dark:bg-dark-200">
      <div class="container mx-auto px-4">
        <!-- Gallery Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div 
            v-for="(item, index) in filteredGalleryItems" 
            :key="index" 
            class="gallery-item group cursor-pointer"
            @click="openLightbox(index)"
          >
            <div class="relative overflow-hidden rounded-lg shadow-md aspect-w-3 aspect-h-2">
              <!-- Image -->
              <img 
                v-if="item.type === 'image'" 
                :src="item.src" 
                :alt="item.title" 
                class="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              >
              
              <!-- Video Thumbnail -->
              <div v-if="item.type === 'video'" class="relative w-full h-full">
                <img 
                  :src="item.thumbnail" 
                  :alt="item.title" 
                  class="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                >
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="bg-black/50 rounded-full p-3 transform transition-transform duration-300 group-hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <!-- Overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div>
                  <h3 class="text-white font-medium">{{ item.title }}</h3>
                  <p class="text-gray-300 text-sm">{{ item.date }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Load More Button -->
        <div class="text-center mt-12">
          <button class="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-full hover:bg-gray-50 dark:hover:bg-dark-300 transition-colors">
            โหลดรูปภาพเพิ่มเติม
          </button>
        </div>
      </div>
    </section>

    <!-- Featured Albums Section -->
    <section class="py-16 bg-white dark:bg-dark-300">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">อัลบั้มที่แนะนำ</h2>
          <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            คอลเลกชันภาพและวิดีโอจากคอนเสิร์ตและอีเวนต์ที่สำคัญของเรา
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(album, index) in featuredAlbums" :key="index" class="group cursor-pointer">
            <div class="relative overflow-hidden rounded-xl shadow-md mb-4">
              <img 
                :src="album.coverImage" 
                :alt="album.title" 
                class="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-105"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <p class="text-white text-sm mb-1">{{ album.itemCount }} รูปภาพ</p>
                  <h3 class="text-white text-xl font-bold">{{ album.title }}</h3>
                </div>
              </div>
            </div>
            <h3 class="text-xl font-bold mb-1">{{ album.title }}</h3>
            <p class="text-gray-600 dark:text-gray-400">{{ album.date }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Behind the Scenes Section -->
    <section class="py-16 bg-gray-50 dark:bg-dark-200">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">เบื้องหลังการถ่ายทำ</h2>
          <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            ชมภาพเบื้องหลังการถ่ายทำมิวสิควิดีโอและการทำงานในสตูดิโอของเรา
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div class="relative aspect-w-16 aspect-h-9 rounded-xl overflow-hidden mb-4">
              <iframe 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                title="Behind the Scenes" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
                class="w-full h-full"
              ></iframe>
            </div>
            <h3 class="text-xl font-bold mb-2">เบื้องหลังการถ่ายทำ MV "Neon Dreams"</h3>
            <p class="text-gray-600 dark:text-gray-400">
              ชมเบื้องหลังการถ่ายทำมิวสิควิดีโอเพลงเปิดตัวอัลบั้มล่าสุดของเรา
            </p>
          </div>
          
          <div>
            <div class="relative aspect-w-16 aspect-h-9 rounded-xl overflow-hidden mb-4">
              <iframe 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                title="Studio Session" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
                class="w-full h-full"
              ></iframe>
            </div>
            <h3 class="text-xl font-bold mb-2">การทำงานในสตูดิโอ</h3>
            <p class="text-gray-600 dark:text-gray-400">
              ติดตามกระบวนการทำงานและการอัดเสียงในสตูดิโอของเรา
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Lightbox -->
    <div v-if="lightboxOpen" class="fixed inset-0 z-50 bg-black/90 flex items-center justify-center" @click="closeLightbox">
      <div class="relative max-w-5xl w-full p-4" @click.stop>
        <!-- Close Button -->
        <button @click="closeLightbox" class="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <!-- Navigation Buttons -->
        <button @click.stop="prevItem" class="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button @click.stop="nextItem" class="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        <!-- Content -->
        <div v-if="currentItem">
          <!-- Image -->
          <img 
            v-if="currentItem.type === 'image'" 
            :src="currentItem.src" 
            :alt="currentItem.title" 
            class="max-h-[80vh] mx-auto"
          >
          
          <!-- Video -->
          <div v-if="currentItem.type === 'video'" class="aspect-w-16 aspect-h-9">
            <iframe 
              :src="currentItem.videoUrl" 
              :title="currentItem.title" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen
              class="w-full h-full"
            ></iframe>
          </div>
          
          <!-- Caption -->
          <div class="text-white text-center mt-4">
            <h3 class="text-xl font-bold">{{ currentItem.title }}</h3>
            <p class="text-gray-300">{{ currentItem.date }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// Categories
const categories = [
  { id: 'all', name: 'ทั้งหมด' },
  { id: 'concerts', name: 'คอนเสิร์ต' },
  { id: 'backstage', name: 'เบื้องหลัง' },
  { id: 'studio', name: 'สตูดิโอ' },
  { id: 'videos', name: 'วิดีโอ' }
];

const activeCategory = ref('all');

// Gallery Items
const galleryItems = [
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    title: 'Live at Summer Festival 2025',
    date: '15 สิงหาคม 2025',
    category: 'concerts'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    title: 'Electric Soul Tour - Bangkok',
    date: '10 ธันวาคม 2024',
    category: 'concerts'
  },
  {
    type: 'video',
    thumbnail: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    title: 'Neon Dreams - Official Music Video',
    date: '5 กรกฎาคม 2025',
    category: 'videos'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1598387993281-cecf8b71a8f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80',
    title: 'Studio Session - Neon Dreams Album',
    date: '20 มีนาคม 2025',
    category: 'studio'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    title: 'Music in the Park',
    date: '5 ตุลาคม 2024',
    category: 'concerts'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    title: 'Electric Soul Tour - Final Show',
    date: '15 ธันวาคม 2024',
    category: 'concerts'
  },
  {
    type: 'video',
    thumbnail: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    title: 'Behind the Scenes - Electric Soul MV',
    date: '30 ตุลาคม 2023',
    category: 'backstage'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    title: 'Singapore Music Festival',
    date: '22 สิงหาคม 2024',
    category: 'concerts'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1619983081563-430f63602796?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bXVzaWMlMjBhbGJ1bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    title: 'Electric Soul Album Launch',
    date: '30 พฤศจิกายน 2023',
    category: 'concerts'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bXVzaWMlMjBhbGJ1bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    title: 'Urban Jungle Tour - Bangkok',
    date: '20 พฤษภาคม 2022',
    category: 'concerts'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1574154894481-21d30c9010ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    title: 'Recording Session - Electric Soul',
    date: '15 กันยายน 2023',
    category: 'studio'
  },
  {
    type: 'video',
    thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    title: 'City Lights - Official Music Video',
    date: '10 มิถุนายน 2021',
    category: 'videos'
  }
];

// Featured Albums
const featuredAlbums = [
  {
    title: 'Neon Dreams Tour 2025',
    date: 'กรกฎาคม - ธันวาคม 2025',
    coverImage: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    itemCount: 24
  },
  {
    title: 'Electric Soul Tour',
    date: 'มกราคม - ธันวาคม 2024',
    coverImage: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    itemCount: 42
  },
  {
    title: 'Studio Sessions',
    date: '2023 - 2025',
    coverImage: 'https://images.unsplash.com/photo-1598387993281-cecf8b71a8f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80',
    itemCount: 18
  }
];

// Filter gallery items based on active category
const filteredGalleryItems = computed(() => {
  if (activeCategory.value === 'all') {
    return galleryItems;
  }
  return galleryItems.filter(item => item.category === activeCategory.value);
});

// Lightbox functionality
const lightboxOpen = ref(false);
const currentIndex = ref(0);
const currentItem = computed(() => filteredGalleryItems.value[currentIndex.value]);

const openLightbox = (index) => {
  currentIndex.value = index;
  lightboxOpen.value = true;
  document.body.style.overflow = 'hidden';
};

const closeLightbox = () => {
  lightboxOpen.value = false;
  document.body.style.overflow = '';
};

const nextItem = () => {
  currentIndex.value = (currentIndex.value + 1) % filteredGalleryItems.value.length;
};

const prevItem = () => {
  currentIndex.value = (currentIndex.value - 1 + filteredGalleryItems.value.length) % filteredGalleryItems.value.length;
};

// Handle keyboard navigation
const handleKeyDown = (e) => {
  if (!lightboxOpen.value) return;
  
  if (e.key === 'Escape') {
    closeLightbox();
  } else if (e.key === 'ArrowRight') {
    nextItem();
  } else if (e.key === 'ArrowLeft') {
    prevItem();
  }
};

// Add and remove event listeners
onMounted(() => {
  window.addEventListener('keydown', handleKeyDown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown);
});
</script>

<style scoped>
/* Aspect ratio utilities */
.aspect-w-3 {
  position: relative;
  padding-bottom: calc(2 / 3 * 100%);
}

.aspect-w-16 {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
}

.aspect-w-3 > *,
.aspect-w-16 > * {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
