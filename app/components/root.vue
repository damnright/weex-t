<template>

    <div class="root"  @viewappear="onviewappear" @viewdisappear="onviewdisappear">
        <div v-if="isIOS"
             :style="{position:'absolute',left:'0',right:'0',top:'0', height: '41px', backgroundImage: backgroundImage}"></div>
        <div class="wrapper"
             :style="{position: 'absolute',left:'0',right:'0',bottom:'0',top:isIOS?'40px':'0'}">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
    .root {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
</style>

<script>
    const storage = weex.requireModule('storage')
    const modal = weex.requireModule('modal')
    export default {
        props: {
            backgroundImage: {default: 'linear-gradient(to right, #AEFFFC, #FFFFC2)'}
        },
        data () {
            return {
                ios: weex.config.env && weex.config.env.platform.toLowerCase() === 'ios'
            }
        },
        computed:{
            isIOS(){
//                model.toast({message:this.ios.toString(),duration:3})
//                model.alert({message:weex.config.bundleUrl})
                return this.ios
            }
        },
        methods:{
            onviewappear (event) {
                // const modal = weex.requireModule('modal')
                // modal.toast({message:"quanjuappera",duration:3})
                // var pageurl = weex.config.bundleUrl;
//                modal.toast({message:'ttttttttttttttttttttttttttttttttttt:'+event.timestamp})
                this.$emit('viewappear',event)

            },
            onviewdisappear (event) {
                this.$emit('viewdisappear',event)
            },
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
        }

    }
</script>

