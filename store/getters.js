export default {
  user: state => state.user,
  mer: state => state.mer,
  wallet: state => state.wallet,
  token: state => state.token,
  bankList: state => state.bankList,
  merOpenTime: state => state.merOpenTime,
  wallet:state=>state.wallet,
  products: state => {
    return state.products ? state.products : {}
  },
  userRoles: state => { // 客户角色列表
    if (state.user && state.user.roles) {
      return state.user.roles.split(',')
    } else {
      return []
    }
  }
}