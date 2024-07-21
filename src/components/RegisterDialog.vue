<template>
  <div>
    <AModal
      :open="open"
      title="Basic Modal"
      :update:open="open"
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </AModal>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  open: boolean;
}>();
</script>
