/**
 * @Describe : 全局mixins参数配置
 */

import navigator from './utils/modules/navigator'
import route from './router/route'
import imgUrl from './constants/imgurl'
import root from './components/root.vue'
import api from './utils/api'
import {getQueryStringByName} from './utils/string'
// import storage from './utils/modules/storage'
import modal from './utils/modules/modal'
const storage = weex.requireModule('storage')
let nav = weex.requireModule('navigator')

export default {
    components: {
        root
    },
    mounted(){

    },
    data() {
        return {
            route,
            imgUrl,
            storage,
            modal,
            android: weex.config.env && weex.config.env.platform.toLowerCase() === 'android',
            ios: weex.config.env && weex.config.env.platform.toLowerCase() === 'ios',
            web: weex.config.env.platform && weex.config.env.platform.toLowerCase() === 'web',
            bundleUrl:weex.config.bundleUrl,
        }
    },
    computed: {
    },
    created() {
        if (this.web) {
            if (window && !window.global) { // Stream.fetch jsonp调用失败，原因是找不到global
                window.global = window;
            }
            this.bundleUrl=window.location.href;
        }
    },

    methods: {
        push({route, query}) {
            if (route === this.route.web) {
                navigator.pushWeb(query.url);
                return
            }
            if (this.web) {
                this.$router.push({
                    path: route.path,
                    query: query
                });
                return
            }
            navigator.push(route, query)
        },
        pop(){
            navigator.pop()
        },
        getUrlParam(key) {
            var t = this.$getConfig().bundleUrl;
            var reg = new RegExp('[?|&]' + key + '=([^&]+)');
            var match = t.match(reg);
            return match && match[1];
        },
        /**
         * 获取QueryString的数组
         * @returns {Array|{index: number, input: string}}
         */
        gets(){
            let result =this.bundleUrl.match(new RegExp('[\?\&][^\?\&]+=[^\?\&]+', 'g'))
            console.log('result is :' + result)
            let resObj = {}
            if (result != null) {
                for (let i = 0; i < result.length; i++) {
                    result[i] = result[i].substring(1)
                    let strs = result[i].split("=");
                    resObj[strs[0]] = strs[1]
                }
            }

            return resObj
        },
        /**
         * 根据QueryString参数名称获取值
         * @param name
         * @returns {string}
         */
        input(name) {
            name = name.replace(/[\[\]]/g, '\\$&')
            let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)')
            let results = regex.exec(this.bundleUrl)
            if (!results || !results[2]) {
                console.log('empty')
                return ''
            }
            // console.log(name, decodeURIComponent(results[2].replace(/\+/g, ' ')))
            return decodeURIComponent(results[2].replace(/\+/g, ' '))
        },
        /**
         * param 将要转为URL参数字符串的对象
         * key URL参数字符串的前缀
         * encode true/false 是否进行URL编码,默认为true
         *
         * return URL参数字符串
         */
        urlEncode(param, key, encode) {
            if (param == null) {
                return ''
            }
            let paramStr = ''
            let t = typeof (param)
            if (t == 'string' || t == 'number' || t == 'boolean') {
                paramStr += '&' + key + '=' + ((encode == null || encode) ? encodeURIComponent(param) : param)
            } else {
                for (let i in param) {
                    let k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i)
                    paramStr += urlEncode(param[i], k, encode)
                }
            }
            return paramStr
        },
        /**
         * 字符串操作
         */

        /* eslint linebreak-style: [0] */
        trim(str, isGlobal) {
            let result = str.replace(/(^\s+)|(\s+$)/g, '')
            if (isGlobal) {
                result = result.replace(/\s/g, '')
            }
            return result
        },
        //    api
        get: api.get,
        post: api.post,
        del: api.del,
        put:api.put,
        getqsbyname:getQueryStringByName,


    }
}