<template>
    <root :backgroundImage="iosTopBg">
        <h2>hello weex!</h2>
    </root>
</template>

<style scoped>
    h2{
    text-align:center;
    }
</style>

<script>
    import mixins from '../mixins'

    export default {
        mixins: [mixins],
        data(){
            return {
                iosTopBg: 'linear-gradient(to right, #9de352, #70c343)',

            }
        },
    }

</script>