/**
 * @Describe : 封装weex实例对象
 */

function isIOS() {
    return weex.config.env ? weex.config.env.platform === 'ios' : false
}

function isA() {
    return weex.config.env ? weex.config.env.platform === 'android' : false
}

function isWeb() {
    return weex.config.env.platform === 'Web'
}

function getDeviceInfo() {
    let env = weex.config.env
    let deviceWidth = env.deviceWidth
    let deviceHeight = env.deviceHeight
    return {
        deviceWidth: deviceWidth,
        deviceHeight: deviceHeight
    }
}

export default {
    isIOS, isA, isWeb, getDeviceInfo
}
