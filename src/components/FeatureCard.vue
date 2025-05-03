<template>
    <div class="feature-card bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
        <div class="feature-icon text-yellow-500 text-4xl mb-4">
            <i :class="icon"></i>
        </div>
        <h3 class="text-lg font-semibold mb-2">{{ title }}</h3>
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
    }
});
</script>