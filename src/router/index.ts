import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Root',
      redirect: { name: 'Main' },
      component: () => import('@/layouts/main-layout.vue'),
      children: [
        {
          path: '/',
          name: 'Main',
          component: () => import('@/views/home.vue'),
        },
        {
          path: '/course-details',
          name: 'Details',
          component: () => import('@/views/course-details.vue'),
        },
        {
          path: '/payment',
          name: 'Payment',
          component: () => import('@/views/payment.vue'),
        },
      ],
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', redirect: { name: 'Root' } },
  ],
});

export default router;
