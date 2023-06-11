const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage2.vue') }],
  },
  {
    path: '/werkbladfabriek',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'menu',
        component: () => import('pages/indexPage2.vue'),
      },
      {
        path: 'tafelsVariabel',
        component: () =>
          import('pages/werkbladfabriek/werkbladTafelsVariabel.vue'),
      },
      {
        path: 'playground',
        component: () => import('pages/werkbladfabriek/werkbladPlayground.vue'),
      },
      {
        path: 'tafelDrill',
        component: () => import('pages/werkbladfabriek/werkbladTafelDrill.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
