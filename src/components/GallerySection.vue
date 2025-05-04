<template>
    <section class="gallery py-5 bg-gray-50" id="gallery">
        <div class="container mx-auto px-4 max-w-6xl">
            <div class="text-center mb-16">
                <span
                    class="inline-block px-4 py-1 bg-yellow-100 text-yellow-600 rounded-full text-sm font-medium mb-4">ГАЛЕРЕЯ</span>
                <h2 class="section-title text-4xl md:text-5xl font-bold text-gray-800 mb-4">Комфортные автомобили</h2>
                <div class="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto">Современный и хорошо обслуживаемый транспорт для
                    вашего
                    комфорта и безопасности.</p>
            </div>

            <!-- Галерея изображений -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div v-for="(image, index) in galleryImages" :key="index"
                    class="gallery-item group overflow-hidden rounded-xl shadow-lg relative">
                    <img :src="image.src" :alt="image.alt"
                        class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110">
                    <div
                        class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <p class="text-white text-lg font-medium">{{ image.description }}</p>
                    </div>
                </div>
            </div>

            <!-- Кнопка заказа такси -->
            <div class="mt-12 text-center">
                <a :href="'tel:' + phoneNumber"
                    class="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-3 px-8 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
                    <i class="fas fa-taxi mr-2"></i> Заказать такси
                </a>
            </div>
        </div>
    </section>
</template>

<script setup>
const phoneNumber = '+48794531342';
// Данные для галереи такси
const galleryImages = [
    {
        src: '/img/image2.webp',
        alt: 'Taxi Gow',
        description: null
    },
    {
        src: '/img/background.webp',
        alt: 'Taxi Gow',
        description: null
    },
    {
        src: '/img/image1.webp',
        alt: 'Taxi Gow',
        description: null
    }
];
</script>

<style scoped>
.gallery-item {
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.gallery-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}
</style>
