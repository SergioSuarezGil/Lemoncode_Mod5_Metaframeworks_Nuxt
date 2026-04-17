<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :class="['inline-block', 'mr-2', `h-${size}`, `w-${size}`]"
    fill="none"
    viewBox="0 0 24 24"
    :stroke="color"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 10c-4.418 0-8-1.79-8-4V6a2 2 0 012-2h2m12 0h2a2 2 0 012 2v8c0 2.21-3.582 4-8 4z"
    />
  </svg>
</template>

<script setup lang="ts">
defineProps({
  size: {
    type: [String, Number],
    default: 5,
  },
  color: {
    type: String,
    default: 'currentColor',
  },
});
</script>
