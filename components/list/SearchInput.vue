<template>
  <input
    :value="modelValue"
    class="w-full rounded-lg border-2 border-primary-200 bg-white px-4 py-2.5 text-slate-800 placeholder-slate-400 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
    :type="type"
    :name="name"
    :placeholder="placeholder"
    :aria-label="ariaLabel"
    @input="onInput"
  />
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string;
  type?: string;
  name?: string;
  placeholder?: string;
  ariaLabel?: string;
}>();
const emit = defineEmits(['update:modelValue']);

function onInput(event: Event) {
  const target = event.target as HTMLInputElement | null;
  emit('update:modelValue', target?.value ?? '');
}
</script>
:value="modelValue"
