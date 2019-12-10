import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible'
import '@/assets/css/reset.css'
import '@/assets/css/animate.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import '@/assets/css/animate.css'
import {
    Button,
    Dialog,
    PullRefresh,
    Divider,
    Tab,
    Tabs,
    Tabbar,
    TabbarItem,
    Icon,
    Toast,
    NavBar,
    Checkbox,
    CheckboxGroup,
    Stepper,
    Popup
} from 'vant'
// Dialog({
//   message: '提示'
// });
Vue.use(Popup).use(Stepper).use(Button).use(Dialog).use(PullRefresh).use(Divider).use(Tab).use(Tabs).use(Tabbar).use(TabbarItem).use(Icon).use(Toast).use(NavBar).use(Checkbox).use(CheckboxGroup);

import {
    RadioGroup,
    RadioButton,
    Input
} from 'element-ui';
Vue.use(RadioGroup).use(RadioButton).use(Input);
// Dialog({
//   message: '提示'
// });
Vue.use(Button).use(Dialog);



// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */ )


Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')