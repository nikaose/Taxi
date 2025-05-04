<template>
    <div class="feature-card bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-b-4"
        :class="getBorderClass()">
        <div class="feature-icon w-20 h-20 rounded-full flex items-center justify-center mb-6" :class="getIconClass()">
            <font-awesome-icon :icon="icon" class="text-3xl" />
        </div>
        <h3 class="text-xl font-bold mb-4">{{ title }}</h3>
        <p class="text-gray-600">{{ description }}</p>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    icon: {
        type: Array,
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

const getBorderClass = () => {
    const colorMap = {
        'blue': 'border-blue-400',
        'green': 'border-green-400',
        'yellow': 'border-yellow-400',
        // добавьте другие цвета по необходимости
    };
    return colorMap[props.color] || 'border-yellow-400';
};

const getIconClass = () => {
    const colorMap = {
        'blue': 'bg-blue-100 text-blue-500',
        'green': 'bg-green-100 text-green-500',
        'yellow': 'bg-yellow-100 text-yellow-500',
        // добавьте другие цвета по необходимости
    };
    return colorMap[props.color] || 'bg-yellow-100 text-yellow-500';
};
</script>