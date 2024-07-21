<template>
  <main>
    <RouterView #="{ Component }">
      <Transition name="slide" mode="out-in">
        <Component :is="Component" />
      </Transition>
    </RouterView>
  </main>
</template>

<script setup lang="ts">

</script>

<style scoped lang="less">
main {
  @apply relative h-screen overflow-x-hidden overflow-y-scroll;
  @apply bg-abg;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

.slide-enter-active,
.slide-leave-active {
  transition: 0.45s ease-out;
}
</style>
