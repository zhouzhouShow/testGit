// export const BASE_URL = process.env.NODE_ENV === 'development' ? 'http://tzu3ij.natappfree.cc' :'http://wostar.chlvip.cn/wostar'

let isDev = process.env.NODE_ENV === 'development';

// export const DO_MAIN = isDev ? 'https://wostar.chlvip.cn' :'https://wostar.chlvip.cn'

// export const DO_MAIN = isDev ? 'https://wostar.chlvip.cn' : 'https://m.wostars.cn'

export const DO_MAIN = isDev ? 'https://m.wostars.cn' : 'https://m.wostars.cn'

export const BASE_URL = DO_MAIN+'/api'

export const WEB_URL = DO_MAIN + '/mob'

export const STATE_OK = 'ok'

export const handlerImgUrl = function (url) {
  if (!url) {
    return ''
  }
  if (/^(http|https|wxfile:\/\/)/.test(url)) {
    return url
  } else {
    return DO_MAIN + url
  }
}

export const hasRoles = function (userRoles, role) {
  for (let item of userRoles) {
    if (item === role) {
      return true
    }
  }
  return false
}

export const GOOD_TYPE = {
  COMMON_GOODS: 'COMMON_GOODS', // 普通商品
  BASE_SERVICE: 'BASE_SERVICE', // 基础服务
  MEMBER: 'MEMBER', // 套餐,
  FREE_COLLAR:'FREE_COLLAR' ,//免费领,
  ACTIVITY_MEMBER:'ACTIVITY_MEMBER',  //活动套餐
}

export const CHECK_STATE = {
  AUDITING: 'AUDITING',
  PASS: 'PASS',
  REJECT: 'REJECT'
}

export const ROLES = {
  BOSS: {
    code: 'MER.BOSS',
    name: '拥有者'
  },
  MANAGER: {
    code: 'MER.MANAGER',
    name: '店长'
  },
  CLERK: {
    code: 'MER.CLERK',
    name: '店员'
  }
}
export const REPLIED_STATE = {
  NOREPLIED: {
    value: '未回复'
  },
  REPLIED: {
    value: '已回复'
  }
}
export const withdrawStatus = {
  AUDITING: 'AUDITING', // 待审核
  REJECT: 'REJECT', // 审核未通过
  UNDERWAY: 'UNDERWAY', // 转款中
  SUCCEED: 'SUCCEED', // 已到账
  FAILED: 'FAILED' // 提现失败
}

export const MER_TYPEID = 8
export const QUESTIONID = 14 // 问题主分类
export const GOODSBASEID = 2
export const PACKAGEID = 7   // 套餐sysClassId
export const QUESTION_ID = 14   //问题主类型

export const FREE_ID = 6 // 免费领sysClassId
export const BASE_SERVICE_ID=5 //基础服务sysClassId

export const MAP_KEY = '05bf82c846e16128e5dc371467095ea1'

export const VERIFICATION_KEY = 'VERIFICATION_KEY'   // 核销key

