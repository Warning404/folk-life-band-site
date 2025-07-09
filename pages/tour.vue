<template>
  <div>
    <!-- Hero Section -->
    <section class="relative py-20 bg-gradient-to-b from-gray-900 to-dark-300">
      <div class="container mx-auto px-4 py-16">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">ทัวร์และอีเวนต์</h1>
          <p class="text-xl text-gray-300 max-w-2xl mx-auto animate-slide-up">
            พบกับ MOUSIQUA ในคอนเสิร์ตและอีเวนต์ต่างๆ ทั่วประเทศ
          </p>
        </div>
      </div>
    </section>

    <!-- Current Tour Section -->
    <section class="py-16 bg-white dark:bg-dark-300">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <span class="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 rounded-full text-sm font-medium mb-2">กำลังดำเนินอยู่</span>
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Neon Dreams Tour 2025</h2>
          <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            ทัวร์คอนเสิร์ตเพื่อโปรโมทอัลบั้มล่าสุด "Neon Dreams" ทั่วประเทศไทยและเอเชียตะวันออกเฉียงใต้
          </p>
        </div>
        
        <div class="relative max-w-4xl mx-auto mb-12">
          <img src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
               alt="Neon Dreams Tour" 
               class="w-full h-auto rounded-xl shadow-lg">
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8 rounded-xl">
            <div>
              <h3 class="text-2xl font-bold text-white mb-2">Neon Dreams Tour 2025</h3>
              <p class="text-gray-300">กรกฎาคม - ธันวาคม 2025</p>
            </div>
          </div>
        </div>
        
        <div class="flex flex-wrap justify-center gap-4 mb-12">
          <a href="#" class="px-6 py-3 bg-gradient-to-r from-primary-500 to-purple-600 text-white font-medium rounded-full transition-transform hover:scale-105">
            ซื้อบัตร VIP
          </a>
          <a href="#" class="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-full hover:bg-gray-50 dark:hover:bg-dark-200 transition-colors">
            ดูรายละเอียดทัวร์
          </a>
        </div>
      </div>
    </section>

    <!-- Upcoming Events Section -->
    <section class="py-16 bg-gray-50 dark:bg-dark-200">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">อีเวนต์ที่กำลังจะมาถึง</h2>
          <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            รายละเอียดคอนเสิร์ตและอีเวนต์ที่กำลังจะมาถึงของ MOUSIQUA
          </p>
        </div>
        
        <div class="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
          <div v-for="(event, index) in upcomingEvents" :key="index" class="bg-white dark:bg-dark-300 rounded-xl shadow-md overflow-hidden">
            <div class="flex flex-col md:flex-row">
              <!-- Event Date -->
              <div class="bg-primary-500 text-white p-6 flex flex-col items-center justify-center md:w-48">
                <span class="text-2xl font-bold">{{ formatDate(event.date, 'day') }}</span>
                <span class="text-lg">{{ formatDate(event.date, 'month') }}</span>
                <span class="text-lg">{{ formatDate(event.date, 'year') }}</span>
              </div>
              
              <!-- Event Details -->
              <div class="p-6 flex-grow">
                <div class="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 class="text-xl font-bold mb-2">{{ event.title }}</h3>
                    <p class="text-gray-600 dark:text-gray-400 mb-4">{{ event.location }}</p>
                  </div>
                  <div class="md:text-right">
                    <p class="text-gray-600 dark:text-gray-400 mb-2">เริ่ม {{ event.time }}</p>
                    <p class="font-medium text-primary-600 dark:text-primary-400">{{ event.price }}</p>
                  </div>
                </div>
                <p class="text-gray-600 dark:text-gray-400 mb-4">{{ event.description }}</p>
                <div class="flex flex-wrap gap-3">
                  <a :href="event.ticketLink" class="px-4 py-2 bg-gradient-to-r from-primary-500 to-purple-600 text-white font-medium rounded-lg transition-transform hover:scale-105">
                    ซื้อบัตร
                  </a>
                  <a href="#" class="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-dark-200 transition-colors">
                    รายละเอียดเพิ่มเติม
                  </a>
                  <a href="#" class="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-dark-200 transition-colors">
                    เพิ่มลงปฏิทิน
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Past Events Section -->
    <section class="py-16 bg-white dark:bg-dark-300">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">อีเวนต์ที่ผ่านมา</h2>
          <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            ย้อนดูคอนเสิร์ตและอีเวนต์ที่ผ่านมาของ MOUSIQUA
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(event, index) in pastEvents" :key="index" class="bg-gray-50 dark:bg-dark-200 rounded-xl overflow-hidden group">
            <div class="relative h-48 overflow-hidden">
              <img :src="event.image" :alt="event.title" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                <div>
                  <h3 class="text-lg font-bold text-white">{{ event.title }}</h3>
                  <p class="text-gray-300 text-sm">{{ formatDate(event.date, 'full') }}</p>
                </div>
              </div>
            </div>
            <div class="p-4">
              <p class="text-gray-600 dark:text-gray-400 text-sm mb-3">{{ event.location }}</p>
              <div class="flex gap-2">
                <a href="#" class="text-sm text-primary-600 dark:text-primary-400 hover:underline">ดูภาพ</a>
                <span class="text-gray-400">|</span>
                <a href="#" class="text-sm text-primary-600 dark:text-primary-400 hover:underline">ดูวิดีโอ</a>
              </div>
            </div>
          </div>
        </div>
        
        <div class="text-center mt-10">
          <button class="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-full hover:bg-gray-50 dark:hover:bg-dark-200 transition-colors">
            โหลดอีเวนต์เพิ่มเติม
          </button>
        </div>
      </div>
    </section>

    <!-- Tour Map Section -->
    <section class="py-16 bg-gray-50 dark:bg-dark-200">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">แผนที่ทัวร์</h2>
          <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            ติดตามการเดินทางของ MOUSIQUA ทั่วประเทศและทั่วโลก
          </p>
        </div>
        
        <div class="bg-white dark:bg-dark-300 rounded-xl shadow-md p-4 max-w-5xl mx-auto">
          <div class="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
            <!-- Placeholder for map, in real app would be replaced with actual map component -->
            <div class="w-full h-full bg-gray-200 dark:bg-dark-400 flex items-center justify-center">
              <p class="text-gray-500 dark:text-gray-400">แผนที่ทัวร์จะแสดงที่นี่</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="py-16 bg-gradient-to-r from-primary-600 to-purple-700 text-white">
      <div class="container mx-auto px-4">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-3xl font-bold mb-4">ไม่พลาดทุกอีเวนต์</h2>
          <p class="mb-8">
            สมัครรับจดหมายข่าวเพื่อรับข้อมูลล่าสุดเกี่ยวกับทัวร์คอนเสิร์ตและอีเวนต์ต่างๆ ของเรา
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
// Format date helper function
const formatDate = (dateString, format) => {
  const date = new Date(dateString);
  const months = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'];
  
  if (format === 'day') {
    return date.getDate();
  } else if (format === 'month') {
    return months[date.getMonth()];
  } else if (format === 'year') {
    return date.getFullYear();
  } else if (format === 'full') {
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
  }
  
  return dateString;
};

// Sample data for upcoming events
const upcomingEvents = [
  {
    title: 'Summer Music Festival',
    date: '2025-08-15',
    time: '18:00 น.',
    location: 'สวนลุมพินี, กรุงเทพฯ',
    description: 'เทศกาลดนตรีฤดูร้อนที่ยิ่งใหญ่ที่สุดแห่งปี พบกับศิลปินชั้นนำมากมาย รวมถึง MOUSIQUA ที่จะมาสร้างความสนุกให้กับทุกคน',
    price: '฿1,500',
    ticketLink: '#',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
  },
  {
    title: 'Club Night Live',
    date: '2025-09-05',
    time: '21:00 น.',
    location: 'Route66 Club, กรุงเทพฯ',
    description: 'ค่ำคืนแห่งดนตรีสุดมันส์ที่คุณไม่ควรพลาด พบกับ MOUSIQUA ในบรรยากาศสุดเอ็กซ์คลูซีฟ',
    price: '฿800',
    ticketLink: '#',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    title: 'University Tour',
    date: '2025-10-12',
    time: '17:30 น.',
    location: 'จุฬาลงกรณ์มหาวิทยาลัย',
    description: 'ทัวร์มหาวิทยาลัยครั้งแรกของวง MOUSIQUA พบกับเพลงฮิตและเพลงใหม่จากอัลบั้ม Neon Dreams',
    price: '฿500',
    ticketLink: '#',
    image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    title: 'Bangkok International Music Conference',
    date: '2025-11-20',
    time: '14:00 น.',
    location: 'ศูนย์ประชุมแห่งชาติสิริกิติ์, กรุงเทพฯ',
    description: 'การประชุมดนตรีนานาชาติประจำปี พบกับ MOUSIQUA ในฐานะวิทยากรพิเศษและการแสดงพิเศษ',
    price: '฿1,200',
    ticketLink: '#',
    image: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1262&q=80'
  }
];

// Sample data for past events
const pastEvents = [
  {
    title: 'Electric Soul Tour - Final Show',
    date: '2024-12-15',
    location: 'Impact Arena, เมืองทองธานี',
    image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    title: 'Music in the Park',
    date: '2024-10-05',
    location: 'สวนเบญจกิติ, กรุงเทพฯ',
    image: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    title: 'Singapore Music Festival',
    date: '2024-08-22',
    location: 'Gardens by the Bay, สิงคโปร์',
    image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
  },
  {
    title: 'Charity Concert for Children',
    date: '2024-07-10',
    location: 'หอประชุมใหญ่, จุฬาลงกรณ์มหาวิทยาลัย',
    image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    title: 'Electric Soul Album Launch',
    date: '2023-11-30',
    location: 'Central World, กรุงเทพฯ',
    image: 'https://images.unsplash.com/photo-1619983081563-430f63602796?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bXVzaWMlMjBhbGJ1bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    title: 'Urban Jungle Tour - Bangkok',
    date: '2022-05-20',
    location: 'Thunder Dome, เมืองทองธานี',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bXVzaWMlMjBhbGJ1bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
  }
];
</script>

<style scoped>
/* Add any page-specific styles here */
.aspect-w-16 {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
}

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
