<template>
  <div class="event-card bg-white dark:bg-dark-200 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
    <div class="relative">
      <img :src="event.image" :alt="event.title" class="w-full h-48 object-cover">
      <div class="absolute top-0 left-0 bg-primary-700 text-white px-3 py-1 rounded-br-lg font-medium">
        {{ formatDate(event.date) }}
      </div>
    </div>
    <div class="p-5">
      <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">{{ event.title }}</h3>
      <div class="flex items-center text-gray-600 dark:text-gray-300 mb-3">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-earth-600 dark:text-earth-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <span>{{ event.location }}</span>
      </div>
      <div class="flex items-center text-gray-600 dark:text-gray-300 mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-earth-600 dark:text-earth-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>{{ event.time }}</span>
      </div>
      <p class="text-gray-600 dark:text-gray-400 mb-5">{{ event.description }}</p>
      <div class="flex justify-between items-center">
        <span class="text-lg font-bold text-accent-600 dark:text-accent-400">{{ event.price }}</span>
        <a :href="event.ticketLink" target="_blank" class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-accent-500 to-accent-700 text-white rounded-lg font-medium transition-transform hover:scale-105">
          ซื้อตั๋ว
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  event: {
    type: Object,
    required: true
  }
})

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('th-TH', { day: 'numeric', month: 'short' }).format(date)
}
</script>
