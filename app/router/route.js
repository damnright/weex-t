/**
 * route name config
 */
import index from '../pages/index.vue'

//异步加载：
// const list = resolve => require(['../pages/product/list.vue'], resolve);

export default {
    index: {
        title: '首页',
        path: '/',
        jsPath: 'index',
        component: index
    },
}