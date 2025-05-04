<template>
  <section class="hero bg-[url('/img/background.webp')] bg-cover bg-center bg-fixed py-20 relative" id="hero">
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
          <img src="/img/logo.webp" alt="Logo" class="w-32 h-32 object-contain filter drop-shadow-lg">
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
            <font-awesome-icon :icon="['fas', 'phone']" class="text-lg transform group-hover:rotate-12 transition-transform" />
            <span>{{ ctaText }}</span>
          </a>
        </div>
      </div>
    </div>
  </section>

  <About />
  <GallerySection />

  <section class="contact bg-gradient-to-r from-amber-300 to-yellow-400 py-10" id="contact">
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
                <font-awesome-icon :icon="['fas', 'phone']" class="text-2xl text-white" />
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
                <font-awesome-icon :icon="['fab', 'facebook-f']" class="text-2xl text-white" />
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
                <font-awesome-icon :icon="['fab', 'instagram']" class="text-2xl text-white" />
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
                <font-awesome-icon :icon="['fab', 'whatsapp']" class="text-2xl text-white" />
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
                <font-awesome-icon :icon="['fab', 'telegram']" class="text-2xl text-white" />
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
                <font-awesome-icon :icon="['fab', 'viber']" class="text-2xl text-white" />
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
import About from './About.vue';
import GallerySection from './GallerySection.vue';

const title = 'Taxi Gow';
const description = 'Надежное и комфортное такси в Кемпно и окрестностях. Быстрая подача автомобиля, опытные водители и конкурентные цены.';
const phoneNumber = '+48794531342';
const ctaText = 'Вызвать такси';
</script>
