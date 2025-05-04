<template>
  <section class="hero bg-[url('/src/assets/img/background.webp')] bg-cover bg-center bg-fixed py-20 relative"
    id="hero">
    <!-- Оверлей с градиентом -->
    <div class="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50 z-0"></div>

    <!-- Декоративные элементы -->
    <div class="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-10"></div>
    <div class="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/50 to-transparent z-10"></div>

    <!-- Анимированные частицы -->
    <div class="absolute inset-0 overflow-hidden z-5">
      <div class="absolute -top-4 left-1/4 w-8 h-8 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
      <div class="absolute top-1/3 right-1/4 w-4 h-4 bg-yellow-400 rounded-full opacity-20 animate-pulse"
        style="animation-delay: 1s;"></div>
      <div class="absolute bottom-1/4 left-1/3 w-6 h-6 bg-yellow-400 rounded-full opacity-20 animate-pulse"
        style="animation-delay: 2s;"></div>
    </div>

    <div class="container mx-auto px-4 relative z-20">
      <div class="hero-content flex flex-col items-center text-center">
        <!-- Логотип -->
        <div class="mb-8 transform hover:scale-105 transition-transform duration-300">
          <img src="/src/assets/img/logo.webp" alt="Logo" class="w-32 h-32 object-contain filter drop-shadow-lg">
        </div>

        <!-- Title -->
        <h1 class="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight drop-shadow-lg">
          {{ title }} <span class="text-yellow-400">24/7</span>
        </h1>

        <!-- Description -->
        <p class="text-lg md:text-xl text-white mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-md font-light">
          {{ description }}
        </p>

        <!-- Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center">
          <a :href="'tel:' + phoneNumber"
            class="cta-button bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-4 px-8 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl group">
            <i class="fas fa-phone-alt text-lg transform group-hover:rotate-12 transition-transform"></i>
            <span>{{ ctaText }}</span>
          </a>
        </div>
      </div>
    </div>
  </section>

  <section class="about py-24 bg-gradient-to-b from-white to-gray-50" id="about">
    <div class="container mx-auto px-4 max-w-6xl">
      <div class="text-center mb-16">
        <span class="inline-block px-4 py-1 bg-yellow-100 text-yellow-600 rounded-full text-sm font-medium mb-4">О
          НАС</span>
        <h2 class="section-title text-4xl md:text-5xl font-bold text-gray-800 mb-4">{{ aboutTitle }}</h2>
        <div class="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">Выбирайте профессионалов с безупречной репутацией. Мы
          гарантируем безопасность, комфорт и пунктуальность при каждой поездке.</p>
      </div>

      <div class="features grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        <FeatureCard v-for="feature in features" :key="feature.id" :icon="feature.icon" :title="feature.title"
          :description="feature.description" :color="feature.color" />
      </div>
    </div>
  </section>

  <section class="contact bg-gradient-to-r from-amber-300 to-yellow-400 py-20" id="contact">
    <div class="container mx-auto px-4 max-w-5xl">
      <h2
        class="section-title text-4xl font-bold text-center mb-12 text-gray-800 relative after:content-[''] after:block after:w-24 after:h-1 after:bg-gray-800 after:mx-auto after:mt-4">
        Контакты</h2>

      <div class="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 text-center">
        <!-- Phone -->
        <a href="tel:+48794531342" class="text-gray-700 hover:text-green-500 transition-colors">
          <div
            class="bg-white p-4 sm:p-6 rounded-xl shadow-lg transform transition-transform hover:scale-105 duration-300">
            <div class="flex flex-col items-center">
              <div class="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
                <i class="fas fa-phone-alt text-2xl text-white"></i>
              </div>
              <h3 class="text-xl font-semibold mb-2 hover:text-green-500 transition-colors">+48 794 531 342</h3>
            </div>
          </div>
        </a>

        <!-- Facebook -->
        <a href="https://www.facebook.com/profile.php?id=61563094333642" rel="noopener" target="_blank"
          class="text-gray-700 hover:text-blue-600 transition-colors">
          <div
            class="bg-white p-4 sm:p-6 rounded-xl shadow-lg transform transition-transform hover:scale-105 duration-300">
            <div class="flex flex-col items-center">
              <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <i class="fab fa-facebook-f text-2xl text-white"></i>
              </div>
              <h3 class="text-xl font-semibold mb-2">Facebook</h3>
            </div>
          </div>
        </a>

        <!-- Instagram -->
        <a href="https://www.instagram.com/taxi_gow/" rel="noopener" target="_blank"
          class="text-gray-700 hover:text-pink-500 transition-colors">
          <div
            class="bg-white p-4 sm:p-6 rounded-xl shadow-lg transform transition-transform hover:scale-105 duration-300">
            <div class="flex flex-col items-center">
              <div
                class="w-16 h-16 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-full flex items-center justify-center mb-4">
                <i class="fab fa-instagram text-2xl text-white"></i>
              </div>
              <h3 class="text-xl font-semibold mb-2">Instagram</h3>
            </div>
          </div>
        </a>

        <!-- WhatsApp -->
        <a href="https://wa.me/48794531342" rel="noopener" target="_blank"
          class="text-gray-700 hover:text-green-500 transition-colors">
          <div
            class="bg-white p-4 sm:p-6 rounded-xl shadow-lg transform transition-transform hover:scale-105 duration-300">
            <div class="flex flex-col items-center">
              <div class="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
                <i class="fab fa-whatsapp text-2xl text-white"></i>
              </div>
              <h3 class="text-xl font-semibold mb-2">WhatsApp</h3>
            </div>
          </div>
        </a>

        <!-- Telegram -->
        <a href="https://t.me/taxi_gow" rel="noopener" target="_blank"
          class="text-gray-700 hover:text-blue-500 transition-colors">
          <div
            class="bg-white p-4 sm:p-6 rounded-xl shadow-lg transform transition-transform hover:scale-105 duration-300">
            <div class="flex flex-col items-center">
              <div class="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                <i class="fab fa-telegram text-2xl text-white"></i>
              </div>
              <h3 class="text-xl font-semibold mb-2">Telegram</h3>
            </div>
          </div>
        </a>

        <!-- Viber -->
        <a href="viber://chat?number=48794531342" rel="noopener" target="_blank"
          class="text-gray-700 hover:text-purple-600 transition-colors">
          <div
            class="bg-white p-4 sm:p-6 rounded-xl shadow-lg transform transition-transform hover:scale-105 duration-300">
            <div class="flex flex-col items-center">
              <div class="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                <i class="fab fa-viber text-2xl text-white"></i>
              </div>
              <h3 class="text-xl font-semibold mb-2">Viber</h3>
            </div>
          </div>
        </a>

      </div>

      <!-- Добавлена информация о местоположении
      <div class="mt-16 bg-white p-6 rounded-xl shadow-lg">
        <div class="flex flex-col md:flex-row items-center">
          <div class="w-full md:w-1/2 p-4">
            <h3 class="text-2xl font-semibold mb-4">Наш адрес</h3>
            <p class="text-gray-600 mb-4">ул. Примерная 123, Кемпно, Польша</p>
            <div class="flex items-center gap-2 text-gray-600 mb-2">
              <i class="fas fa-map-marker-alt text-yellow-500"></i>
              <span>Работаем по всему городу Кемпно и окрестностям</span>
            </div>
            <div class="flex items-center gap-2 text-gray-600">
              <i class="far fa-clock text-yellow-500"></i>
              <span>Доступны круглосуточно</span>
            </div>
          </div>
          <div class="w-full md:w-1/2 p-4 flex justify-center">
            <div class="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
              <i class="fas fa-map-marked-alt text-4xl text-gray-400"></i>
              <span class="ml-2 text-gray-500">Карта местоположения</span>
            </div>
          </div>
        </div>
      </div>
      -->
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import FeatureCard from './FeatureCard.vue';

const title = 'Такси в Кемпно';
const description = 'Надежное и комфортное такси в Кемпно и окрестностях. Быстрая подача автомобиля, опытные водители и конкурентные цены.';
const phoneNumber = '+48794531342';
const ctaText = 'Вызвать такси';
const aboutTitle = ref('Почему выбирают нас');
const features = ref([
  {
    id: 1,
    icon: 'fas fa-clock',
    title: '24/7 Доступность',
    description: 'Мы доступны для вас в любое время дня и ночи. Наши такси всегда готовы, когда вам это нужно, даже в праздничные дни.',
    color: 'blue'
  },
  {
    id: 2,
    icon: 'fas fa-money-bill-wave',
    title: 'Прозрачные цены',
    description: 'Мы предлагаем перевозки по самым низким ценам в Кемпно. Никаких скрытых платежей и неприятных сюрпризов.',
    color: 'green'
  },
  {
    id: 3,
    icon: 'fas fa-car',
    title: 'Комфорт и безопасность',
    description: 'Наш автопарк состоит из современных, регулярно обслуживаемых автомобилей для вашего максимального комфорта и безопасности.',
    color: 'yellow'
  }
]);
</script>