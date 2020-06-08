import Vue from 'vue';
import Router from 'vue-router';

import Shelf from '@/components/Shelf';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('@/views/Home.vue'),
        },
        {
            path: '/shelf',
            name: 'Shelf',
            component: Shelf,
        },
    ],
});
