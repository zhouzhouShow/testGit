// export const BASE_URL = process.env.NODE_ENV === 'development' ? 'http://tzu3ij.natappfree.cc' :'http://wostar.chlvip.cn/wostar'

let isDev = process.env.NODE_ENV === 'development';

export const DO_MAIN = isDev ? 'http://zb.p4t.cn' : 'https://m.wostars.cn'

export const BASE_URL = DO_MAIN

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



