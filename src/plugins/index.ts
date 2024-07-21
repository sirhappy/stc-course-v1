import type { App } from 'vue';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import LocalizedFormat from 'dayjs/plugin/localizedFormat.js';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import Antd from 'ant-design-vue';
import { setupAssets } from './asset-setup';

const store = createPinia();

const piniaSetup = (app: App) => {
  app.use(store);
};

const dayjsSetup = () => {
  dayjs.extend(relativeTime);
  dayjs.extend(isSameOrAfter);
  dayjs.extend(LocalizedFormat);
  dayjs.extend(isSameOrBefore);
  dayjs.locale('en');
};

const andDesignSetup = (app: App) => {
  app.use(Antd);
};

export const setupAppPlugins = (app: App) => {
  setupAssets();
  dayjsSetup();
  piniaSetup(app);
  andDesignSetup(app);
};
