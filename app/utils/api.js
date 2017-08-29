/**
 * API 封装工具类
 */

import qs from 'querystring'
import {urlEncode} from './string'
let stream = weex.requireModule('stream')

// http base url
const baseUrl = 'http://kongsheng.root3.cn/api.php?'

function get(base, params) {
  return new Promise((resolve, reject) => {
    console.log('request:', `${baseUrl + base}&${qs.stringify(params)}`)
    stream.fetch({
      method: 'GET',
      url: `${baseUrl + base}&${qs.stringify(params)}`,
      type: 'json'
    }, res => {
      console.log('GET res :' + res)
      if (res.ok) {
        resolve(res.data)
      } else {
        reject(res.data)
      }
    }, progress => {
      console.log('get in progress:' + progress.length)
    })
  })
}

function post(base, body) {
  return new Promise((resolve, reject) => {
    stream.fetch({
      method: 'POST',
      url: baseUrl + base,
      type: 'json',
      headers:{
          'Content-Type':'application/x-www-form-urlencoded;charset=utf-8'
      },
      body: qs.stringify(body)
      //   body:'province_id=37'
    }, res => {
      if (res.ok) {
        resolve(res.data)
      } else {
        reject(res.data)
      }
    }, progress => {
      console.log('get in progress:' + progress.length)
    })
  })
}

function del(base) {
  return new Promise((resolve, reject) => {
    stream.fetch({
      method: 'DELETE',
      url: baseUrl + base,
      type: 'json'
    }, res => {
      if (res.ok && res.data && res.data.code === 0) {
        resolve(res.data)
      } else {
        reject(res.data)
      }
    }, progress => {
      console.log('get in progress:' + progress.length)
    })
  })
}

function put(base, body) {
  return new Promise((resolve, reject) => {
    stream.fetch({
      method: 'PUT',
      url: baseUrl + base,
      type: 'json',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }, res => {
      if (res.ok && res.data && res.data.code === 0) {
        resolve(res.data)
      } else {
        reject(res.data)
      }
    }, progress => {
      console.log('get in progress:' + progress.length)
    })
  })
}

export default {
  get, post, del, put
}
