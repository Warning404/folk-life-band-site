<template>
    <div>
      <!-- Hero Section -->
      <section class="relative py-20 bg-gradient-to-b from-gray-900 to-dark-300">
        <div class="container mx-auto px-4 py-16">
          <div class="text-center">
            <h1 class="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">ติดต่อเรา</h1>
            <p class="text-xl text-gray-300 max-w-2xl mx-auto animate-slide-up">
              มีคำถามหรือข้อเสนอแนะ? ติดต่อเราได้ที่นี่
            </p>
          </div>
        </div>
      </section>
  
      <!-- Contact Form Section -->
      <section class="py-16 bg-white dark:bg-dark-300">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <!-- Contact Form -->
            <div>
              <h2 class="text-3xl font-bold mb-6">ส่งข้อความถึงเรา</h2>
              <form @submit.prevent="submitForm" class="space-y-6">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label for="firstName" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">ชื่อ</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      v-model="form.firstName" 
                      class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-200 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                      required
                    >
                  </div>
                  <div>
                    <label for="lastName" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">นามสกุล</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      v-model="form.lastName" 
                      class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-200 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                      required
                    >
                  </div>
                </div>
                
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">อีเมล</label>
                  <input 
                    type="email" 
                    id="email" 
                    v-model="form.email" 
                    class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-200 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    required
                  >
                </div>
                
                <div>
                  <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">หัวข้อ</label>
                  <select 
                    id="subject" 
                    v-model="form.subject" 
                    class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-200 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    required
                  >
                    <option value="" disabled selected>เลือกหัวข้อ</option>
                    <option value="booking">การจองคอนเสิร์ต</option>
                    <option value="press">สื่อและการประชาสัมพันธ์</option>
                    <option value="collaboration">ความร่วมมือ</option>
                    <option value="fanclub">แฟนคลับ</option>
                    <option value="other">อื่นๆ</option>
                  </select>
                </div>
                
                <div>
                  <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">ข้อความ</label>
                  <textarea 
                    id="message" 
                    v-model="form.message" 
                    rows="5" 
                    class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-200 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    required
                  ></textarea>
                </div>
                
                <div class="flex items-center">
                  <input 
                    type="checkbox" 
                    id="newsletter" 
                    v-model="form.newsletter" 
                    class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  >
                  <label for="newsletter" class="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                    สมัครรับจดหมายข่าวและอัพเดทล่าสุด
                  </label>
                </div>
                
                <div>
                  <button 
                    type="submit" 
                    class="w-full px-6 py-3 bg-gradient-to-r from-primary-500 to-purple-600 text-white font-medium rounded-lg transition-transform hover:scale-105"
                    :disabled="isSubmitting"
                  >
                    {{ isSubmitting ? 'กำลังส่ง...' : 'ส่งข้อความ' }}
                  </button>
                </div>
              </form>
            </div>
            
            <!-- Contact Info -->
            <div>
              <h2 class="text-3xl font-bold mb-6">ข้อมูลการติดต่อ</h2>
              
              <div class="space-y-8">
                <div class="flex items-start">
                  <div class="flex-shrink-0 bg-primary-100 dark:bg-primary-900 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div class="ml-4">
                    <h3 class="text-lg font-medium text-gray-900 dark:text-white">อีเมล</h3>
                    <p class="mt-1 text-gray-600 dark:text-gray-400">info@mousiqua.com</p>
                    <p class="mt-1 text-gray-600 dark:text-gray-400">booking@mousiqua.com (สำหรับการจอง)</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="flex-shrink-0 bg-primary-100 dark:bg-primary-900 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div class="ml-4">
                    <h3 class="text-lg font-medium text-gray-900 dark:text-white">โทรศัพท์</h3>
                    <p class="mt-1 text-gray-600 dark:text-gray-400">+66 2 123 4567</p>
                    <p class="mt-1 text-gray-600 dark:text-gray-400">+66 8 1234 5678 (มือถือ)</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="flex-shrink-0 bg-primary-100 dark:bg-primary-900 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div class="ml-4">
                    <h3 class="text-lg font-medium text-gray-900 dark:text-white">ที่อยู่</h3>
                    <p class="mt-1 text-gray-600 dark:text-gray-400">
                      123 อาคารมิวสิค ชั้น 5<br>
                      ถนนสุขุมวิท 21 แขวงคลองเตยเหนือ<br>
                      เขตวัฒนา กรุงเทพฯ 10110
                    </p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="flex-shrink-0 bg-primary-100 dark:bg-primary-900 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div class="ml-4">
                    <h3 class="text-lg font-medium text-gray-900 dark:text-white">เวลาทำการ</h3>
                    <p class="mt-1 text-gray-600 dark:text-gray-400">
                      จันทร์ - ศุกร์: 9:00 - 18:00 น.<br>
                      เสาร์: 10:00 - 15:00 น.<br>
                      อาทิตย์: ปิดทำการ
                    </p>
                  </div>
                </div>
              </div>
              
              <!-- Social Media -->
              <div class="mt-8">
                <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-4">ติดตามเรา</h3>
                <div class="flex space-x-4">
                  <a href="#" class="bg-primary-100 dark:bg-primary-900 p-3 rounded-full text-primary-600 dark:text-primary-400 hover:bg-primary-200 dark:hover:bg-primary-800 transition-colors">
                    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" class="bg-primary-100 dark:bg-primary-900 p-3 rounded-full text-primary-600 dark:text-primary-400 hover:bg-primary-200 dark:hover:bg-primary-800 transition-colors">
                    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="#" class="bg-primary-100 dark:bg-primary-900 p-3 rounded-full text-primary-600 dark:text-primary-400 hover:bg-primary-200 dark:hover:bg-primary-800 transition-colors">
                    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                    </svg>
                  </a>
                  <a href="#" class="bg-primary-100 dark:bg-primary-900 p-3 rounded-full text-primary-600 dark:text-primary-400 hover:bg-primary-200 dark:hover:bg-primary-800 transition-colors">
                    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Map Section -->
      <section class="py-16 bg-gray-50 dark:bg-dark-200">
        <div class="container mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">ที่ตั้งของเรา</h2>
            <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              พบกับเราที่สำนักงานใหญ่ในกรุงเทพมหานคร
            </p>
          </div>
          
          <div class="bg-white dark:bg-dark-300 rounded-xl shadow-md p-4 max-w-5xl mx-auto">
            <div class="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <!-- Placeholder for map, in real app would be replaced with actual map component -->
              <div class="w-full h-full bg-gray-200 dark:bg-dark-400 flex items-center justify-center">
                <p class="text-gray-500 dark:text-gray-400">แผนที่จะแสดงที่นี่</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- FAQ Section -->
      <section class="py-16 bg-white dark:bg-dark-300">
        <div class="container mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">คำถามที่พบบ่อย</h2>
            <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              คำตอบสำหรับคำถามที่พบบ่อยเกี่ยวกับการติดต่อและการทำงานร่วมกับเรา
            </p>
          </div>
          
          <div class="max-w-3xl mx-auto">
            <div v-for="(faq, index) in faqs" :key="index" class="mb-6">
              <button 
                @click="toggleFaq(index)" 
                class="flex justify-between items-center w-full text-left px-6 py-4 bg-gray-50 dark:bg-dark-200 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-100 transition-colors"
              >
                <span class="text-lg font-medium">{{ faq.question }}</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  class="h-5 w-5 transform transition-transform" 
                  :class="{ 'rotate-180': faq.isOpen }"
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div 
                v-show="faq.isOpen" 
                class="px-6 py-4 bg-gray-50 dark:bg-dark-200 rounded-b-lg mt-1"
              >
                <p class="text-gray-600 dark:text-gray-400">{{ faq.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Contact form data
  const form = ref({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
    newsletter: false
  });
  
  const isSubmitting = ref(false);
  
  // Form submission handler
  const submitForm = async () => {
    isSubmitting.value = true;
    
    try {
      // In a real application, you would send the form data to a server here
      console.log('Form submitted:', form.value);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Reset form after successful submission
      form.value = {
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
        newsletter: false
      };
      
      alert('ขอบคุณสำหรับข้อความของคุณ! เราจะติดต่อกลับโดยเร็วที่สุด');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('เกิดข้อผิดพลาดในการส่งข้อความ โปรดลองอีกครั้งในภายหลัง');
    } finally {
      isSubmitting.value = false;
    }
  };
  
  // FAQ data
  const faqs = ref([
    {
      question: 'ฉันจะจองวง MOUSIQUA สำหรับอีเวนต์ส่วนตัวได้อย่างไร?',
      answer: 'คุณสามารถส่งอีเมลไปที่ booking@mousiqua.com พร้อมรายละเอียดของอีเวนต์ วันที่ สถานที่ และข้อมูลติดต่อของคุณ ทีมงานของเราจะติดต่อกลับภายใน 48 ชั่วโมง',
      isOpen: false
    },
    {
      question: 'MOUSIQUA รับงานนอกกรุงเทพฯ หรือต่างประเทศหรือไม่?',
      answer: 'ใช่ เรารับงานทั้งในและนอกกรุงเทพฯ รวมถึงงานต่างประเทศ โปรดติดต่อเราล่วงหน้าอย่างน้อย 3 เดือนสำหรับงานต่างประเทศเพื่อจัดการเรื่องตารางงานและการเดินทาง',
      isOpen: false
    },
    {
      question: 'ฉันสามารถขอสัมภาษณ์วง MOUSIQUA สำหรับสื่อได้อย่างไร?',
      answer: 'สำหรับคำขอสัมภาษณ์และการประชาสัมพันธ์ โปรดส่งอีเมลไปที่ press@mousiqua.com พร้อมรายละเอียดของสื่อของคุณ หัวข้อที่ต้องการสัมภาษณ์ และกำหนดเวลาที่ต้องการ',
      isOpen: false
    },
    {
      question: 'MOUSIQUA มีเพลงให้ใช้ในโครงการของฉันได้หรือไม่?',
      answer: 'เรายินดีพิจารณาการอนุญาตให้ใช้เพลงของเราในโครงการต่างๆ โปรดส่งรายละเอียดโครงการของคุณ วัตถุประสงค์การใช้งาน และขอบเขตการเผยแพร่มาที่ info@mousiqua.com',
      isOpen: false
    },
    {
      question: 'ฉันจะสมัครเป็นสมาชิกแฟนคลับได้อย่างไร?',
      answer: 'คุณสามารถสมัครเป็นสมาชิกแฟนคลับอย่างเป็นทางการได้ที่หน้า "แฟนคลับ" บนเว็บไซต์ของเรา หรือส่งอีเมลมาที่ fanclub@mousiqua.com สมาชิกแฟนคลับจะได้รับสิทธิพิเศษมากมาย รวมถึงบัตรคอนเสิร์ตก่อนใคร และการพบปะกับวง',
      isOpen: false
    }
  ]);
  
  // Toggle FAQ open/close
  const toggleFaq = (index) => {
    faqs.value[index].isOpen = !faqs.value[index].isOpen;
  };
  </script>
  
  <style scoped>
  /* Aspect ratio utilities */
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

  /* Form input focus effects */
  input:focus, 
  textarea:focus, 
  select:focus {
    box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.2);
  }

  /* Button hover animation */
  button[type="submit"]:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(79, 70, 229, 0.15);
  }

  /* FAQ transition */
  .faq-answer-enter-active,
  .faq-answer-leave-active {
    transition: all 0.3s ease;
    max-height: 500px;
    overflow: hidden;
  }

  .faq-answer-enter-from,
  .faq-answer-leave-to {
    max-height: 0;
    opacity: 0;
  }

  /* Contact info hover effects */
  .contact-info-item:hover .icon-wrapper {
    transform: scale(1.1);
  }

  .icon-wrapper {
    transition: transform 0.3s ease;
  }

  /* Social media hover animations */
  .social-icon {
    transition: all 0.3s ease;
  }

  .social-icon:hover {
    transform: translateY(-3px);
  }
  </style>