// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import iView from 'iview'
import router from './router'
import store from './store';
import App from './App'
import 'iview/dist/styles/iview.css'; // 导入样式  
import  Locales from './locale/locale';
import VueI18n from 'vue-i18n';
// import zhLocale from 'iview/src/locale/lang/zh-CN';
// import enLocale from 'iview/src/locale/lang/en-US';
// import { Upload, Table } from 'iview';//按需加载
// import zhLocale from 'iview/src/locale/lang/zh-CN';
// import enLocale from 'iview/src/locale/lang/en-US';

// // 自动设置语言
// const navLang = navigator.language;
// const localLang = (navLang === 'zh-CN' || navLang === 'en-US') ? navLang : false;
// const lang = window.localStorage.lang || localLang || 'zh-CN';

// Vue.config.lang = lang;

// // 多语言配置
// const locales = Locales;
// const mergeZH = Object.assign(zhLocale, locales['zh-CN']);
// const mergeEN = Object.assign(enLocale, locales['e  n-US']);
// Vue.locale('zh-CN', mergeZH);
// Vue.locale('en-US', mergeEN);

import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
import { Base64 } from 'js-base64';
import axios from 'axios';
import fullCalendar from 'vue-fullcalendar'
import ECharts from 'vue-echarts/components/ECharts.vue'

// 手动引入 ECharts 各模块来减小打包体积
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'

// 注册组件后即可使用
Vue.component('chart', ECharts)

Vue.component('full-calendar', fullCalendar)

import VueAwesomeSwiper from 'vue-awesome-swiper';
Vue.use(VueI18n);
Vue.use(VueAwesomeSwiper)
Vue.use(iView);


// Vue.component('Upload', Upload);
// Vue.component('Table', Table);
Vue.prototype.axios = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
