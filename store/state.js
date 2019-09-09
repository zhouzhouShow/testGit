const state = {
	user: null,
	mer: null,
	merOpenTime: [
		'09:00-18:00',
		'09:00-22:00',
		'09:00-24:00',
		'00:00-24:00'
  ],
  token: null,
	bankList: [{
			code: 'ICBC',
			bankName: '中国工商银行'
		},
		{
			code: 'CMB',
			bankName: '招商银行'
		},
		{
			code: 'ABC',
			bankName: '中国农业银行'
		},
		{
			code: 'CCB',
			bankName: '中国建设银行'
		},
		{
			code: 'CMBC',
			bankName: '中国民生银行'
		},
		{
			code: 'SPDB',
			bankName: '浦发银行'
		},
		{
			code: 'GDB',
			bankName: '广发银行'
		},
		{
			code: 'HXB',
			bankName: '华夏银行'
		},
		{
			code: 'PSBC',
			bankName: '邮政银行'
		},
		{
			code: 'BOC',
			bankName: '中国银行'
		},
		{
			code: 'CEB',
			bankName: '光大银行'
		},
		{
			code: 'BEA',
			bankName: '东亚银行'
		},
		{
			code: 'COMM',
			bankName: '交通银行'
		},
		{
			code: 'CITIC',
			bankName: '中信银行'
		},
		{
			code: 'BJB',
			bankName: '北京银行'
		},
		{
			code: 'SPAB',
			bankName: '平安银行'
		}
  ],
  wallet: {},
  products: null
}

export default state
