<template>
  <div class="text-16">
    <ASteps
      v-model:current="currentStep"
      direction="vertical"
      :responsive="false"
    >
      <AStep disabled>
        <template #title>
          Xác nhận học phí
        </template>
        <template #description>
          <div class="card-warp">
            <div class="flex-bc flex-wrap font-600">
              <p class="text-gray">
                Tổng học phí:
              </p>
              <p class="text-18 text-green">
                {{ BASE_PRICE.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) }}
              </p>
            </div>
          </div>
        </template>
      </AStep>

      <AStep>
        <template #title>
          Thông tin donate
        </template>
        <template #description>
          <div class="card-warp">
            <h6 class="bank-highlight text-gray-6">
              Donate trực tiếp <span class="text-red1">USDT, USDC</span> vào địa chỉ ví
            </h6>
            <div class="pl-16">
              <CopyableText
                copyContent="0x0268Cdc83FDb61755215EC044A676140913389dc"
                showIcon
                class="cursor-pointer hover:text-yel1"
              >
                <ATooltip title="0x0268Cdc83FDb61755215EC044A676140913389dc">
                  0x0268C...13389dc
                </ATooltip>
              </CopyableText>
            </div>
            <p class="mt-4 pl-16 text-14">
              Mạng: <span class="font-600">ERC20</span> / <span class="font-600">Arbitrum One</span> / <span class="font-600">Base</span> / <span class="font-600">BEP20</span>
            </p>

            <h6 class="bank-highlight mt-32 text-gray-6">
              Link donate Copperx
            </h6>
            <div class="pl-16">
              <a
                class="cursor-pointer text-blue-5 font-300 hover:underline"
                href="https://buy.copperx.io/payment/payment-link/a4d5cf71-986f-4dc1-8b24-2df63df8bc35"
                target="_blank"
              >
                https://buy.copperx.io/payment/payment-link/a4d5cf71-986f-4dc1-8b24-2df63df8bc35
              </a>
            </div>
          </div>
        </template>
      </AStep>

      <AStep>
        <template #title>
          <div class="font-700">
            Xác nhận thanh toán  <i class="i-lets-icons:done-ring-round" />
          </div>
        </template>
        <template #description>
          <div class="cursor-pointer text-blue hover:underline" @click="onClickRedirectToPaymentGoogleForm">
            Điều hướng đến Form xác nhận thanh toán
            <i class="i-material-symbols:arrow-outward-rounded" />
          </div>
        </template>
      </AStep>
    </ASteps>
  </div>
</template>

<script lang="ts" setup>
const BASE_PRICE = 999;
const currentStep = ref<number>(1);

function onClickRedirectToPaymentGoogleForm() {
  try {
    window?.open('https://stccapital.larksuite.com/share/base/form/shrusXEGjWPhtBFiMSK9VLOXBpc', '_blank');
  } catch (e) {
    console.error('cannot redirect');
  }
};
</script>

<style scoped lang="less">
.bank-highlight {
@apply relative ml-8;
@apply font-600;
  &::after {
  @apply absolute left--8 top-4;
  @apply  h-1/2 w-3 rounded-1/2 bg-red1;
    content: '';
  }
}
.card-title {
@apply font-700 text-18 mb-8 text-gray-6;
}

.card-warp {
@apply p-16 rounded-18 b b-abd bg-white;
}
</style>
