import home from './components/home.vue';
import services from './components/services.vue';
import about from './components/about.vue';
import blog from './components/blog.vue';
import team from './components/team.vue';
import contact from './components/contact.vue';
import singleServices from './components/single-services.vue';

const routes = [
    {path:'/home',component:home},
    {path:'/services',component:services},
    {path:'/about',component:about},
    {path:'/blog',component:blog},
    {path:'/team',component:team},
    {path:'/contact',component:contact},
    {path:'/single-services',component:singleServices},
    {path:'/',redirect:'/home'}
];

export default routes;