<template>
    <section class="about py-24 bg-gradient-to-b from-white to-gray-50" id="about">
        <div class="container mx-auto px-4 max-w-6xl">
            <div class="text-center mb-16">
                <span
                    class="inline-block px-4 py-1 bg-yellow-100 text-yellow-600 rounded-full text-sm font-medium mb-4">О
                    НАС</span>
                <h2 class="section-title text-4xl md:text-5xl font-bold text-gray-800 mb-4">{{ aboutTitle }}</h2>
                <div class="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                    Выбирайте профессионалов с безупречной репутацией. Мы гарантируем безопасность, комфорт и
                    пунктуальность при каждой поездке.
                </p>
            </div>
            <div class="features grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                <FeatureCard v-for="feature in features" :key="feature.id" :icon="feature.icon" :title="feature.title"
                    :description="feature.description" :color="feature.color" />
            </div>
        </div>
    </section>
</template>

<script setup>
import FeatureCard from './FeatureCard.vue';

const aboutTitle = 'Почему выбирают нас';
const features = [
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
];
</script>