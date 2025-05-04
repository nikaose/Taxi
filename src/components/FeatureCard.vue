<template>
    <div class="feature-card bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-b-4"
        :class="`border-${color || 'yellow'}-400`">
        <div class="feature-icon w-20 h-20 rounded-full flex items-center justify-center mb-6"
            :class="`bg-${color || 'yellow'}-100 text-${color || 'yellow'}-500`">
            <i :class="`${icon} text-3xl`"></i>
        </div>
        <h3 class="text-xl font-bold mb-4">{{ title }}</h3>
        <p class="text-gray-600">{{ description }}</p>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
    icon: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    color: {
        type: String,
        default: 'yellow'
    }
});
</script>