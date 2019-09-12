import {
	BASE_URL
} from './config'
import store from '@/store'

const $http = {
	config: {
		baseUrl: BASE_URL,
		header: {
			'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
			// 'Content-Type':'application/json;charset=UTF-8',
		},
		data: {},
		method: "GET",
		dataType: "json",
		/* 如设为json，会对返回的数据做一次 JSON.parse */
		responseType: "text",
		success() {},
		fail() {},
		complete() {}
	},
	interceptor: { /* 拦截器 */
		request: null,
		response: null
	},
	request(options) {
		uni.showLoading({
			title: "加载中...."
		})
		if (!options) {
			options = {}
		}
		options.baseUrl = options.baseUrl || this.config.baseUrl
		options.dataType = options.dataType || this.config.dataType
		options.url = options.baseUrl + options.url
		options.data = options.data || {}
		options.method = options.method || this.config.method
		options.header = options.header || this.config.header

		let token = store.getters.token
		if (store.getters.token) {
			options.header = Object.assign({}, options.header, {
				'Cookie': `token=${token}`
			})
		}

		return new Promise((resolve, reject) => {
			let _config = options
			options.success = (response) => {
				if (response.data.code === '401' || response.data.code === 'expiredCredentials') {
					uni.showToast({
						title: '登陆失效,即将前往登陆!',
						icon: 'none'
					});
					setTimeout(() => {
						uni.redirectTo({
							url: '/pages/login/login'
						})
					}, 1200);

				}
				uni.hideLoading();
				resolve(response.data)
			}
			options.fail = (response) => {
				reject(response.data)
				uni.hideLoading();
			}
			if (this.interceptor.request) {
				this.interceptor.request(_config)
			}
			uni.request(_config);
		});
	},
	get(url, data, options = {}) {
		options.url = url
		options.data = data
		options.method = 'GET'
		return this.request(options)
	},
	put(url, data, options = {}) {
		options.url = url
		options.data = data
		options.method = 'PUT'
		// console.log(options)
		return this.request(options)
	},
	delete(url, data, options = {}) {
		options.url = url
		options.data = data
		options.method = 'DELETE'
		return this.request(options)
	},
	post(url, data, options = {}) {
		options.url = url
		options.data = data
		options.method = 'POST'
		return this.request(options)
	},
	uploadFile(options = {}) {
		options.url = this.config.baseUrl + options.url
		options.header = options.header || this.config.header
		let token = store.getters.token
		if (store.getters.token) {
			options.header = Object.assign({}, options.header, {
				'Cookie': `token=${token}`
			})
		}
		console.log(options)
		return new Promise((resolve, reject) => {
			options.success = function(result) {
				resolve(JSON.parse(result.data))
			}
			options.fail = function(err) {
				reject(err)
			}
			uni.uploadFile(options)
		})
	}
}

export default $http
