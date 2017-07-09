import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import routes from './routes.config';

//全局引入
//css
// import './assets/css/bootstrap.min.css';
// import './assets/css/animate.css';
// import './assets/css/jquery-ui.min.css';
// import './assets/css/meanmenu.min.css';
// import './assets/css/owl.carousel.css';
// import './assets/css/font-awesome.min.css';
// import './assets/inc/custom-slider/css/nivo-slider.css';
// import './assets/inc/custom-slider/css/preview.css';
// import './assets/inc/3dslider/css/style.css';
// import './assets/css/responsive.css';
// import './assets/js/vendor/modernizr-2.8.3.min';
//js
// import './assets/js/vendor/jquery-1.12.0.min';
// import './assets/js/bootstrap.min';
// import './assets/js/owl.carousel.min';
// import './assets/js/jquery.meanmenu';
// import './assets/js/jquery-ui.min';
// import './assets/js/wow.min';
// import './assets/inc/custom-slider/js/jquery.nivo.slider';
// import './assets/inc/custom-slider/home';
// import './assets/inc/3dslider/js/jquery.gallery';
// import './assets/inc/3dslider/js/modernizr.custom.53451';
// import './assets/js/plugins';
// import './assets/js/main';

//创建路由实例
const router = new VueRouter({
  routes,
  mode : 'history'
});

new Vue({
  el: '#app',
  render: h => h(App),
  router
});
