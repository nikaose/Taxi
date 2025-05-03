<template>
  <div class="app-container">
    <app-header :isMenuOpen="isMenuOpen" @toggle-menu="toggleMenu" @nav-to-section="scrollToSection" />

    <main>
      <main-section />
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import AppHeader from './components/AppHeader.vue';
import MainSection from './components/MainSection.vue';

const isMenuOpen = ref(false);
const currentYear = computed(() => new Date().getFullYear());

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    isMenuOpen.value = false;
  }
};
</script>