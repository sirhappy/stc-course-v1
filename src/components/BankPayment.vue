<template>
  <div class="text-16">
    <ASteps
      :current="currentStepKey"
      direction="vertical"
      :responsive="false"
      class="cursor-default!"
      @change="onStepChangedByClick"
    >
      <AStep :disabled="currentStepKey !== 0">
        <template #title>
          <p class="font-700">
            Thông tin thanh toán và chuyển khoản
          </p>
        </template>
        <template #description>
          <div>
            <div class="card-warp">
              <div class="flex-bc flex-wrap font-600">
                <p class="text-gray">
                  Tổng học phí:
                </p>
                <p class="text-18 text-green">
                  {{ formatVND(BASE_PRICE) }}
                </p>
              </div>
            </div>
            <div class="card-warp mt-16 flex gap-16">
              <div class="flex-1">
                <h6 class="bank-highlight">
                  Thông tin học viên
                </h6>
                <AForm

                  :model="formState"
                >
                  <AFormItem name="name" v-bind="validateInfos.name">
                    <p class="mb-4 text-14 text-gray-7 font-500">
                      Họ và tên
                    </p>
                    <AInput
                      :value="formState.name"
                      :maxlength="50"
                      @input="onInputNameHandler"
                    />
                  </AFormItem>

                  <AFormItem name="phone" v-bind="validateInfos.phone">
                    <p class="mb-4 text-14 text-gray-7 font-500">
                      Số điện thoại
                    </p>
                    <AInput
                      :value="formState.phone"
                      :maxlength="12"
                      @input="onInputPhoneHandler"
                    />
                  </AFormItem>
                </AForm>

                <hr class="my-18">

                <h6 class="bank-highlight">
                  Chuyển khoản ngân hàng Việt Nam
                </h6>

                <!-- info -->
                <div class="grid mt-16 flex-1 gap-8 font-500">
                  <template v-for="item in bankInfo" :key="item.key">
                    <template v-if="item.key !== 'payment-content'">
                      <div class="flex-bc flex-wrap">
                        <p class="min-w-150 text-gray">
                          {{ item.title }}
                        </p>
                        <div>
                          <CopyableText
                            :copyContent="item.copyContent || ''"
                            showIcon
                            class="overflow-warp max-w-300 cursor-pointer"
                          >
                            {{ item.displayContent }}
                          </CopyableText>
                        </div>
                      </div>
                    </template>

                    <template v-else>
                      <div class="flex flex-wrap justify-between">
                        <p class="min-w-150 text-gray">
                          {{ item.title }}
                        </p>
                        <p v-if="!paymentContent" class="max-w-200 text-right text-12 text-red-3">
                          Nội dung này sẽ được tạo tự động. <span class="block">Vui lòng điền tên và SĐT của bạn</span>
                        </p>
                        <CopyableText
                          v-else
                          :copyContent="paymentContent || ''"
                          showIcon
                          class="cursor-pointer whitespace-nowrap whitespace-nowrap text-right"
                        >
                          {{ paymentContent }}
                        </CopyableText>
                      </div>
                    </template>
                  </template>
                </div>

                <!-- confirm -->
                <p class="mt-32 md:mt-50">
                  <i class="i-iconamoon:information-circle-fill text-blue-5" />
                  <span class="text-14 text-red1 font-600">
                    Chụp lại màn hình chuyển khoản để xác nhận thanh toán
                  </span>
                </p>
                <div class="mt-16 text-center">
                  <AButton
                    :disabled="!paymentContent"
                    class="bg-green text-white font-500 hover:!text-gray-3"
                    @click="onClickTransferredHandler"
                  >
                    Đã thanh toán
                  </AButton>
                </div>
              </div>
              <div class="hidden flex-1 b-l-2 b-abd md:block">
                <div class="mx-auto h-7/8 w-fit overflow-hidden rounded-20">
                  <img
                    class="h-full"
                    :src="getImg('qr-25tr.png')"
                    alt="qr payment"
                  >
                </div>
              </div>
            </div>
          </div>
        </template>
      </AStep>

      <AStep>
        <template #title>
          <div class="font-700" :class="{ 'text-green': currentStepKey > 0 }">
            Xác nhận thanh toán  <i class="i-lets-icons:done-ring-round" />
          </div>
        </template>
        <template #description>
          <div
            v-if="currentStepKey === 1 && paymentContent"
            class="cursor-pointer text-blue hover:underline"
            @click="onClickRedirectToPaymentGoogleForm"
          >
            Điều hướng đến Form xác nhận thanh toán
            <i class="i-material-symbols:arrow-outward-rounded" />
          </div>
          <p v-else class="text-16 text-gray font-500">
            Xác nhận <span class="font-600">"Đã thanh toán"</span> trước khi chuyển đến bước này
          </p>
        </template>
      </AStep>
    </ASteps>
  </div>
</template>

<script lang="ts" setup>
import type { Rule } from 'ant-design-vue/es/form';
import { Form } from 'ant-design-vue';
import { formatVND, getImg } from '@/utils/common.util';

const useForm = Form.useForm;

const BASE_PRICE = 25000000;

const currentStepKey = ref<number>(0);
const formState = reactive({
  name: '',
  phone: '',
});
const rulesRef = reactive({
  name: [{ validator: checkName, trigger: 'change', warningOnly: true }],
  phone: [{ required: true, validator: checkPhone, trigger: 'change' }],
});

const { validate, validateInfos } = useForm(formState, rulesRef);

const paymentContent = computed(() => {
  const isValidatePhoneSuccess = validateInfos?.phone?.validateStatus === 'success';
  const isValidateNameSuccess = validateInfos?.name?.validateStatus === 'success';

  if (!isValidatePhoneSuccess || !isValidateNameSuccess)
    return null;

  const name = formState.name.trim().normalize('NFD').replace(/[\u0300-\u036F]/g, '');

  return `STCK03 ${name.toUpperCase()} ${formState.phone}`;
});

const bankInfo = [
  {
    key: 'bank',
    title: 'Ngân hàng',
    displayContent: 'Vietcombank',
    copyContent: 'Vietcombank',
  },
  {
    key: 'bank-id',
    title: 'Số tài khoản',
    displayContent: '02 310 0062 6961',
    copyContent: '0231000626961',
  },
  {
    key: 'bank-account-name',
    title: 'Tên tài khoản',
    displayContent: 'NGUYEN MINH PHUC',
    copyContent: 'NGUYEN MINH PHUC',
  },
  {
    key: 'bank-branch',
    title: 'Chi nhánh',
    displayContent: 'Đắk Lắk',
    copyContent: 'Dak Lak',
  },
  {
    key: 'payment-content',
    title: 'Nội dung chuyển khoản',
  },
];

function onStepChangedByClick(step: number) {
  if (!(currentStepKey.value === 1 && step === 2))
    return;
  currentStepKey.value = step;
};

function onClickRedirectToPaymentGoogleForm() {
  try {
    window?.open('https://stccapital.larksuite.com/share/base/form/shrusXEGjWPhtBFiMSK9VLOXBpc', '_blank');
  } catch (e) {
    console.error('cannot redirect');
  }
};

async function checkName(_rule: Rule, value: string) {
  const trimmedName = value.trim();
  if (!trimmedName)
    return Promise.reject(new Error('Nhập tên của bạn'));

  if (trimmedName.length < 5)
    return Promise.reject(new Error('Tên chưa đúng định dạng'));

  if (!trimmedName.includes(' '))
    return Promise.reject(new Error('Xin hãy nhập tên đầy đủ (họ và tên)'));

  return Promise.resolve();
};

async function checkPhone(_rule: Rule, value: string) {
  const isEmpty = !value?.toString();
  const isNaN = typeof Number(value) !== 'number';
  const isValidBegin = value.slice(0, 2) === '84' || value.charAt(0) === '0';
  if (isEmpty)
    return Promise.reject(new Error('Nhập số điện thoại của bạn'));

  if (isNaN || !isValidBegin || value?.length < 8 || value.length > 12)
    return Promise.reject(new Error('Số điện thoại chưa đúng định dạng'));

  return Promise.resolve();
};

function onInputPhoneHandler(e: any) {
  currentStepKey.value = 0;
  const text = e?.target?.value ?? '';
  const numericValue = text.replace(/\D/g, '');
  formState.phone = numericValue;
  e.target.value = numericValue;
};

function onInputNameHandler(e: any) {
  currentStepKey.value = 0;
  const text = e?.target?.value ?? '';
  if (text.charAt(0) === ' ') {
    formState.name = '';
    e.target.value = '';

    return;
  }

  if (text.slice(-2) === '  ') {
    formState.name = text.slice(0, -1);
    e.target.value = text.slice(0, -1);

    return;
  }
  formState.name = text;
  e.target.value = text;
};

async function onClickTransferredHandler() {
  try {
    await validate();
    currentStepKey.value = 1;
  } catch (error) {
    currentStepKey.value = 0;
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
