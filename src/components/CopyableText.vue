<template>
  <!--  <div class="flex items-center gap-8"> -->
  <component
    :is="tag || 'p'"
    v-bind="$attrs"
    @click="onClickCopyHandler()"
  >
    <slot>
      {{ copyContent }}
    </slot>
    <i
      v-if="showIcon"
      class="i-material-symbols:content-copy-rounded ml-4 cursor-pointer text-gray hover:text-yel1"
    />
  </component>
</template>

<script lang="ts" setup>
import { message } from 'ant-design-vue';

defineOptions({ inheritAttrs: false });

const props = defineProps<{
  copyContent: string | number;
  showIcon?: boolean;
  tag?: HTMLName;
}>();

type HTMLName = 'ul' | 'span';

const {
  copyContent,
  showIcon,
} = toRefs(props);
message.config({ maxCount: 1 });
async function handleCopy() {
  try {
    await navigator.clipboard.writeText(copyContent.value.toString());
    message.success({
      content: `Đã sao chép: ${copyContent.value}`,
      duration: 2,
    });
  } catch (e) {
    message.error({
      content: 'Sao chép thất bại',
      duration: 2,
      key: 'copy-message',
    });
  }
}

const onClickCopyHandler = async () => {
  handleCopy();
};
</script>
