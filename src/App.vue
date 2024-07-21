<template>
  <AConfigProvider
    :locale="viVn"
    :theme="seedTokenGlobalConfig"
  >
    <RouterView #="{ Component }">
      <Component :is="Component" />
    </RouterView>
  </AConfigProvider>
</template>

<script setup lang="ts">
import viVn from 'ant-design-vue/es/locale/vi_VN';
import type { ThemeConfig } from 'ant-design-vue/es/config-provider/context';

const seedTokenGlobalConfig: ThemeConfig = {
  token: {
    colorPrimary: '#eebe05',
    fontFamily: 'Signika, sans-serif',
    borderRadius: 15,
    fontSize: 16,
  },
};
</script>
