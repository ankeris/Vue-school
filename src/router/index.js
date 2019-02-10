import Vue from 'vue';
import Router from 'vue-router';
import PageHome from '@/pages/PageHome';
import PageThreadShow from '@/pages/PageThreadShow';
import PageCategory from '@/pages/PageCategory';
import PageForum from '@/pages/PageForum';
import NotFound from '@/pages/NotFound';
import PageProfile from '@/pages/PageProfile';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: PageHome,
        },
        {
            path: '/category/:id',
            name: 'PageCategory',
            component: PageCategory,
            props: true,
        },
        {
            path: '/forum/:id',
            name: 'PageForum',
            component: PageForum,
            props: true,
        },
        {
            path: '/thread/:id',
            name: 'PageThreadShow',
            component: PageThreadShow,
            props: true,
        },
        {
            path: '/me',
            name: 'PageProfile',
            component: PageProfile,
            props: true,
        },
        {
            path: '*',
            name: 'NotFound',
            component: NotFound,
        },
    ],
    mode: 'history',
});
