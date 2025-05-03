<template>
  <section class="hero bg-yellow-100 py-16" id="hero">
    <div class="container mx-auto px-4">
      <div class="hero-content flex flex-col items-center text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4 text-yellow-700">{{ title }}</h1>
        <p class="text-lg md:text-xl text-gray-700 mb-6">{{ description }}</p>
        <a :href="'tel:' + phoneNumber"
          class="cta-button bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-8 rounded-full shadow transition">{{
            ctaText }}</a>
      </div>
    </div>
  </section>
  <section class="about bg-white py-16" id="about">
    <div class="container mx-auto px-4">
      <h2 class="section-title text-3xl font-bold text-center mb-10 text-gray-800">{{ aboutTitle }}</h2>
      <div class="features grid grid-cols-1 md:grid-cols-3 gap-8">
        <feature-card v-for="feature in features" :key="feature.id" :icon="feature.icon" :title="feature.title"
          :description="feature.description" />
      </div>
    </div>
  </section>
  <section class="contact bg-yellow-50 py-16" id="contact">
    <div class="container mx-auto px-4">
      <h2 class="section-title text-3xl font-bold text-center mb-8 text-gray-800">Контакты</h2>
      <div class="flex flex-col items-center space-y-4 text-lg text-gray-700">
        <div>
          <i class="fas fa-phone-alt mr-2 text-yellow-600"></i>
          <a href="tel:+48503680490" class="hover:underline">+48 503 680 490</a>
        </div>
        <div>
          <i class="fab fa-facebook-square mr-2 text-blue-600"></i>
          <a href="https://facebook.com/yourpage" target="_blank" class="hover:underline">Facebook</a>
        </div>
        <div>
          <i class="fab fa-instagram mr-2 text-pink-500"></i>
          <a href="https://instagram.com/yourpage" target="_blank" class="hover:underline">Instagram</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import FeatureCard from './FeatureCard.vue';

const title = ref('Быстро и удобно по Кемпно');
const description = ref('Мы предлагаем надежные услуги такси 24/7. Профессиональные водители, комфортабельные автомобили и доступные цены.');
const phoneNumber = ref('+48503680490');
const ctaText = ref('Позвонить сейчас');
const aboutTitle = ref('Почему мы?');
const features = ref([
  {
    id: 1,
    icon: 'fas fa-clock',
    title: '24/7 Доступность',
    description: 'Мы доступны для вас 24/7. Мы всегда готовы, когда вам это нужно.'
  },
  {
    id: 2,
    icon: 'fas fa-money-bill-wave',
    title: 'Конкурентоспособные цены',
    description: 'Мы предлагаем перевозки по самым низким ценам в Кемпно. Без скрытых платежей и сюрпризов.'
  },
  {
    id: 3,
    icon: 'fas fa-car',
    title: 'Комфортные автомобили',
    description: 'Наша автопарк состоит из современных, регулярно обслуживаемых автомобилей для вашего комфорта и безопасности.'
  }
]);
</script>