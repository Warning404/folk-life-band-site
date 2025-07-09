<template>
  <div>
    <!-- Hero Section -->
    <section class="relative py-20 bg-gradient-to-b from-gray-900 to-dark-300">
      <div class="container mx-auto px-4 py-16">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">เกี่ยวกับเรา</h1>
          <p class="text-xl text-gray-300 max-w-2xl mx-auto animate-slide-up">
            รู้จัก MOUSIQUA และเรื่องราวของพวกเรา
          </p>
        </div>
      </div>
    </section>

    <!-- Band Story Section -->
    <section class="py-16 bg-white dark:bg-dark-300">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <img src="https://images.unsplash.com/photo-1598387993281-cecf8b71a8f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80" 
                 alt="MOUSIQUA Band" 
                 class="w-full h-auto rounded-xl shadow-lg">
          </div>
          <div>
            <h2 class="text-3xl md:text-4xl font-bold mb-6">เรื่องราวของเรา</h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              MOUSIQUA ก่อตั้งขึ้นในปี 2018 โดยกลุ่มเพื่อนนักดนตรีที่มีความหลงใหลในดนตรีแนว Electronic Rock และ Alternative Pop 
              พวกเราเริ่มต้นจากการเล่นดนตรีในผับและคลับเล็กๆ ในกรุงเทพฯ ก่อนที่จะได้รับความนิยมมากขึ้นเรื่อยๆ
            </p>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              ชื่อ "MOUSIQUA" มาจากการผสมผสานระหว่างคำว่า "Mouse" (หนู) ซึ่งสื่อถึงความคล่องแคล่วและความเล็กแต่แข็งแกร่ง 
              กับคำว่า "Musique" (ดนตรีในภาษาฝรั่งเศส) สะท้อนถึงแนวดนตรีที่มีความเป็นสากลของเรา
            </p>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              ตลอดระยะเวลาที่ผ่านมา เราได้ปล่อยอัลบั้มมาแล้ว 5 อัลบั้ม และได้รับรางวัลมากมาย รวมถึงรางวัล 
              "Best New Artist" ในปี 2019 และ "Album of the Year" ในปี 2023
            </p>
            <p class="text-gray-600 dark:text-gray-400">
              พวกเราเชื่อว่าดนตรีคือภาษาสากลที่สามารถเชื่อมโยงผู้คนเข้าด้วยกัน และเราหวังว่าเพลงของเราจะสร้างแรงบันดาลใจและความสุขให้กับผู้ฟังทุกคน
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Band Members Section -->
    <section class="py-16 bg-gray-50 dark:bg-dark-200">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">สมาชิกในวง</h2>
          <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            รู้จักกับสมาชิกทุกคนในวง MOUSIQUA
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <MemberCard v-for="(member, index) in bandMembers" :key="index" :member="member" />
        </div>
      </div>
    </section>

    <!-- Timeline Section -->
    <section class="py-16 bg-white dark:bg-dark-300">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">เส้นทางของเรา</h2>
          <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            ติดตามเส้นทางการเติบโตของ MOUSIQUA ตั้งแต่วันแรกจนถึงปัจจุบัน
          </p>
        </div>
        
        <div class="relative">
          <!-- Timeline Line -->
          <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700"></div>
          
          <!-- Timeline Items -->
          <div class="relative z-10">
            <div v-for="(item, index) in timeline" :key="index" class="mb-12">
              <div class="flex items-center justify-center mb-4">
                <div class="bg-primary-500 text-white text-lg font-bold rounded-full w-12 h-12 flex items-center justify-center z-10">
                  {{ item.year }}
                </div>
              </div>
              <div class="bg-white dark:bg-dark-200 p-6 rounded-xl shadow-md max-w-lg mx-auto">
                <h3 class="text-xl font-bold mb-2">{{ item.title }}</h3>
                <p class="text-gray-600 dark:text-gray-400">{{ item.description }}</p>
                <div v-if="item.image" class="mt-4">
                  <img :src="item.image" :alt="item.title" class="w-full h-auto rounded-lg">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Awards Section -->
    <section class="py-16 bg-gray-50 dark:bg-dark-200">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">รางวัลและความสำเร็จ</h2>
          <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            รางวัลและความสำเร็จที่เราภาคภูมิใจ
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(award, index) in awards" :key="index" class="bg-white dark:bg-dark-300 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div class="flex items-center mb-4">
              <div class="bg-yellow-100 dark:bg-yellow-900 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold">{{ award.title }}</h3>
            </div>
            <p class="text-gray-600 dark:text-gray-400 mb-2">{{ award.organization }} - {{ award.year }}</p>
            <p class="text-gray-600 dark:text-gray-400">{{ award.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Quote Section -->
    <section class="py-16 bg-gradient-to-r from-primary-600 to-purple-700 text-white">
      <div class="container mx-auto px-4 text-center">
        <div class="max-w-3xl mx-auto">
          <svg class="w-12 h-12 mx-auto mb-6 text-white/50" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p class="text-2xl md:text-3xl font-medium mb-6">
            "ดนตรีคือภาษาที่ไม่ต้องการคำพูด เป็นสิ่งที่เชื่อมโยงผู้คนเข้าด้วยกันโดยไม่มีข้อจำกัด เราสร้างดนตรีเพื่อแบ่งปันความรู้สึกและประสบการณ์ของเรากับทุกคน"
          </p>
          <p class="text-lg font-medium">— นนท์ วงศ์สว่าง, นักร้องนำ</p>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-16 bg-white dark:bg-dark-300">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">คำถามที่พบบ่อย</h2>
          <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            คำตอบสำหรับคำถามที่เรามักได้รับบ่อยๆ
          </p>
        </div>
        
        <div class="max-w-3xl mx-auto">
          <div v-for="(item, index) in faq" :key="index" class="mb-6">
            <div class="flex justify-between items-center p-4 bg-gray-50 dark:bg-dark-200 rounded-lg cursor-pointer">
              <h3 class="text-lg font-medium">{{ item.question }}</h3>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div class="p-4 bg-white dark:bg-dark-300 rounded-b-lg border-t border-gray-100 dark:border-gray-700">
              <p class="text-gray-600 dark:text-gray-400">{{ item.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Sample data for band members
const bandMembers = [
  {
    name: 'นนท์ วงศ์สว่าง',
    role: 'นักร้องนำ / กีตาร์',
    image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    bio: 'นนท์เป็นผู้ก่อตั้งวง MOUSIQUA และเป็นผู้แต่งเพลงหลักของวง เขามีประสบการณ์ในวงการดนตรีมากว่า 10 ปี',
    socialLinks: [
      { icon: 'facebook', url: '#' },
      { icon: 'twitter', url: '#' },
      { icon: 'instagram', url: '#' }
    ]
  },
  {
    name: 'มินตรา ดวงแก้ว',
    role: 'เบส / นักร้องประสาน',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80',
    bio: 'มินตราเข้าร่วมวงในปี 2019 เธอมีพื้นฐานด้านดนตรีคลาสสิกและนำความรู้นั้นมาผสมผสานกับดนตรีร็อค',
    socialLinks: [
      { icon: 'facebook', url: '#' },
      { icon: 'instagram', url: '#' }
    ]
  },
  {
    name: 'ธีรพงษ์ สุขสันต์',
    role: 'กลอง',
    image: 'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
    bio: 'ธีรพงษ์เป็นมือกลองที่มีสไตล์การเล่นที่เป็นเอกลักษณ์ เขาเคยเล่นให้กับวงดนตรีหลายวงก่อนจะมาร่วมกับ MOUSIQUA',
    socialLinks: [
      { icon: 'facebook', url: '#' },
      { icon: 'twitter', url: '#' },
      { icon: 'youtube', url: '#' }
    ]
  },
  {
    name: 'วิชชุดา เมธาวี',
    role: 'คีย์บอร์ด / ซินธิไซเซอร์',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
    bio: 'วิชชุดาเป็นผู้เชี่ยวชาญด้านการผลิตเพลงและการทำดนตรีอิเล็กทรอนิกส์ เธอเป็นผู้อยู่เบื้องหลังซาวด์ที่เป็นเอกลักษณ์ของวง',
    socialLinks: [
      { icon: 'facebook', url: '#' },
      { icon: 'instagram', url: '#' },
      { icon: 'soundcloud', url: '#' }
    ]
  }
];

// Sample data for timeline
const timeline = [
  {
    year: '2018',
    title: 'การก่อตั้งวง',
    description: 'MOUSIQUA ก่อตั้งขึ้นโดย นนท์ วงศ์สว่าง และเพื่อนนักดนตรีอีก 3 คน เริ่มเล่นในผับและคลับเล็กๆ ในกรุงเทพฯ',
    image: 'https://images.unsplash.com/photo-1501612780327-45045538702b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
  },
  {
    year: '2019',
    title: 'อัลบั้มแรก "First Light"',
    description: 'ปล่อยอัลบั้มแรก "First Light" และได้รับรางวัล "Best New Artist" จากเวที Thailand Music Awards',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bXVzaWMlMjBhbGJ1bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    year: '2020',
    title: 'อัลบั้มที่สอง "Midnight Tales"',
    description: 'ปล่อยอัลบั้มที่สอง "Midnight Tales" และเริ่มทัวร์คอนเสิร์ตทั่วประเทศไทย',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWMlMjBhbGJ1bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    year: '2021',
    title: 'อัลบั้มที่สาม "Urban Jungle"',
    description: 'ปล่อยอัลบั้มที่สาม "Urban Jungle" และได้รับความนิยมในระดับภูมิภาคเอเชียตะวันออกเฉียงใต้',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bXVzaWMlMjBhbGJ1bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    year: '2023',
    title: 'อัลบั้มที่สี่ "Electric Soul"',
    description: 'ปล่อยอัลบั้มที่สี่ "Electric Soul" และได้รับรางวัล "Album of the Year" จากเวที Thailand Music Awards',
    image: 'https://images.unsplash.com/photo-1619983081563-430f63602796?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bXVzaWMlMjBhbGJ1bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    year: '2025',
    title: 'อัลบั้มที่ห้า "Neon Dreams"',
    description: 'ปล่อยอัลบั้มที่ห้า "Neon Dreams" และเตรียมทัวร์คอนเสิร์ตระดับนานาชาติ',
    image: 'https://images.unsplash.com/photo-1671726203454-88bf7f92b24b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG11c2ljJTIwYWxidW18ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
  }
];

// Sample data for awards
const awards = [
  {
    title: 'Best New Artist',
    organization: 'Thailand Music Awards',
    year: '2019',
    description: 'รางวัลศิลปินหน้าใหม่ยอดเยี่ยมจากอัลบั้มแรก "First Light"'
  },
  {
    title: 'Best Rock Album',
    organization: 'Bangkok Music Festival',
    year: '2020',
    description: 'รางวัลอัลบั้มร็อคยอดเยี่ยมจากอัลบั้ม "Midnight Tales"'
  },
  {
    title: 'Song of the Year',
    organization: 'T-Pop Music Awards',
    year: '2021',
    description: 'รางวัลเพลงยอดเยี่ยมแห่งปีจากเพลง "City Lights" ในอัลบั้ม "Urban Jungle"'
  },
  {
    title: 'Best Music Video',
    organization: 'Thailand Entertainment Awards',
    year: '2022',
    description: 'รางวัลมิวสิควิดีโอยอดเยี่ยมจากเพลง "Neon City" ในอัลบั้ม "Urban Jungle"'
  },
  {
    title: 'Album of the Year',
    organization: 'Thailand Music Awards',
    year: '2023',
    description: 'รางวัลอัลบั้มยอดเยี่ยมแห่งปีจากอัลบั้ม "Electric Soul"'
  },
  {
    title: 'Best Live Performance',
    organization: 'Asian Music Awards',
    year: '2024',
    description: 'รางวัลการแสดงสดยอดเยี่ยมจากทัวร์คอนเสิร์ต "Electric Soul Tour"'
  }
];

// Sample data for FAQ
const faq = [
  {
    question: 'วงของคุณได้รับแรงบันดาลใจจากศิลปินคนไหนบ้าง?',
    answer: 'พวกเราได้รับแรงบันดาลใจจากศิลปินหลากหลายแนว ทั้ง Coldplay, Imagine Dragons, The 1975, Tame Impala และศิลปินไทยอย่าง Bodyslam และ Slot Machine'
  },
  {
    question: 'ทำไมถึงเลือกชื่อวง MOUSIQUA?',
    answer: 'ชื่อ "MOUSIQUA" มาจากการผสมผสานระหว่างคำว่า "Mouse" (หนู) ซึ่งสื่อถึงความคล่องแคล่วและความเล็กแต่แข็งแกร่ง กับคำว่า "Musique" (ดนตรีในภาษาฝรั่งเศส) สะท้อนถึงแนวดนตรีที่มีความเป็นสากลของเรา'
  },
  {
    question: 'วงมีกระบวนการสร้างสรรค์เพลงอย่างไร?',
    answer: 'โดยทั่วไป นนท์จะเป็นผู้เริ่มต้นเขียนเนื้อเพลงและทำนอง จากนั้นทุกคนในวงจะร่วมกันพัฒนาและปรับแต่งจนได้เพลงที่สมบูรณ์ วิชชุดาจะเป็นผู้ดูแลการผลิตและมิกซ์เสียงในขั้นตอนสุดท้าย'
  },
  {
    question: 'มีแผนจะทัวร์คอนเสิร์ตต่างประเทศหรือไม่?',
    answer: 'ใช่ เรากำลังวางแผนทัวร์คอนเสิร์ตในเอเชียตะวันออกเฉียงใต้ในปลายปี 2025 และมีแผนจะขยายไปยังประเทศอื่นๆ ในปี 2026 ติดตามข่าวสารได้ทางโซเชียลมีเดียของเรา'
  },
  {
    question: 'สามารถติดต่อเพื่อจ้างงานหรือสัมภาษณ์ได้อย่างไร?',
    answer: 'คุณสามารถติดต่อเราได้ผ่านทางอีเมล booking@mousiqua.com หรือกรอกแบบฟอร์มในหน้าติดต่อของเว็บไซต์ ทีมงานของเราจะติดต่อกลับภายใน 48 ชั่วโมง'
  }
];
</script>

<style scoped>
/* Add any page-specific styles here */
</style>