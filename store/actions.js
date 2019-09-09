import { __wxMaLogin, __getMer, __getWallet } from '@/service/mer'
import { __getGoodList } from '@/service/goods'
import { STATE_OK } from '../config/config'
import * as types from './mutation_types'

const actions = {
	login({ commit }, params) {
    return new Promise((resolve, reject) => {
      __wxMaLogin(params).then(res => {
        if (res.code === STATE_OK) {
          let data = res ? res.data : null
          if (!data) {
            console.log(res)
            reject('微信登陆获取用户信息失败')
            return
          }
          commit(types.SET_USER, data)
          commit(types.SET_TOKEN, data.token)
          resolve()
        } else {
          reject(res.msg)
        }
      }).catch(err => {
        reject(err)
      })
    })
  },
  getMerInfo ({ commit }) {
    return new Promise((resolve, reject) => {
      __getMer().then(res => {
        if (res.code === STATE_OK) {
          let { data } = res
          if (data) {
            commit(types.SET_MER, data)
          }
          resolve(data)
        } else {
          reject(res.msg)
        }
      }).catch(err => {
        reject(err)
      })
    })
  },
  getProducts ({ commit }) {
    return new Promise((resolve, reject) => {
      __getGoodList().then(res => {
        resolve(res)
        let products = res.data
        if (products) {
          commit(types.SET_PRODUCTS, products)
        }
      }).catch(err => {
        reject(err)
      })
    })
  },
  getMerWallet ({ commit }) {
    __getWallet().then(res => {
      let wallet = res.data
      if (wallet) {
        commit(types.SET_WALLET, wallet)
      }
    })
  }
}

export default actions
