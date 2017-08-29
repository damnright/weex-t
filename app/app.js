import app from './app.web.vue'
import router from './router/webrouter'

new Vue({
    el:'#root',
    router,
    render:h=>h(app)
});

// new Vue(Vue.util.extend({ el: '#root', router}, app))


