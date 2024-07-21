<template>
  <div class="main-page details-page font-page mx-auto max-w-1000 px-16">
    <AConfigProvider
      :theme="seedTokenGlobalConfig"
    >
      <div class="tag-container">
        <ATabs v-model:activeKey="activeKey">
          <!-- Tab1 -->
          <ATabPane key="bank">
            <template #tab>
              <span class="tag-title">Chuyển khoản ngân hàng</span>
            </template>

            <template #default>
              <BankPayment />
            </template>
          </ATabPane>

          <!-- Tab2 -->
          <ATabPane key="crypto">
            <template #tab>
              <span class="tag-title">Donate bằng Cryto</span>
            </template>

            <template #default>
              <CryptoPayment />
            </template>
          </ATabPane>
        </ATabs>
      </div>
    </AConfigProvider>
  </div>
</template>

<script setup lang=ts>
import type { ThemeConfig } from 'ant-design-vue/es/config-provider/context';

const seedTokenGlobalConfig: ThemeConfig = {
  token: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: 16,
    borderRadius: 10,
  },
};

const activeKey = ref('bank');
</script>

<style scoped lang="less">
.tag-title{
  @apply text-20 font-600;
}
</style>
