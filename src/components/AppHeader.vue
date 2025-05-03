<template>
    <header class="header bg-yellow-500 text-white shadow">
        <div class="container mx-auto px-4 py-3 flex justify-between items-center">
            <div class="logo flex items-center gap-2 text-xl font-bold">
                <i class="fas fa-taxi"></i> Taksi Kępno
            </div>
            <button class="mobile-menu-btn md:hidden" @click="$emit('toggle-menu')">
                <i class="fas" :class="isMenuOpen ? 'fa-times' : 'fa-bars'"></i>
            </button>
            <nav :class="['transition-all', isMenuOpen ? 'block' : 'hidden', 'md:block']">
                <ul class="flex flex-col md:flex-row gap-4">
                    <li v-for="item in menuItems" :key="item.id">
                        <a href="#" @click.prevent="$emit('nav-to-section', item.id)" class="hover:underline">
                            {{ item.label }}
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script setup>
import { ref } from 'vue';
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    isMenuOpen: Boolean
});
const emit = defineEmits(['toggle-menu', 'nav-to-section']);

const menuItems = ref([
    { id: 'hero', label: 'Главная' },
    { id: 'about', label: 'О Нас' },
    { id: 'contact', label: 'Контакты' }
]);
</script>
