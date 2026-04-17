<template>
  <div>
    <button
      type="button"
      class="rounded-lg bg-black px-6 py-2.5 font-bold text-white shadow-lg transition-colors hover:bg-gray-800 mt-4 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
      @click="showDialog = true"
      :aria-label="ariaLabel"
    >
      <slot>Reservar</slot>
    </button>
    <Dialog
      :open="showDialog"
      :title="dialogTitle"
      :message="dialogMessage"
      :accept-text="acceptText"
      :cancel-text="cancelText"
      @accept="handleAccept"
      @cancel="showDialog = false"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Dialog from '~/components/common/Dialog.vue';

const props = defineProps<{
  dialogTitle?: string;
  dialogMessage?: string;
  acceptText?: string;
  cancelText?: string;
  ariaLabel?: string;
}>();
const emit = defineEmits(['accept']);

const showDialog = ref(false);

function handleAccept() {
  showDialog.value = false;
  emit('accept');
}
</script>
