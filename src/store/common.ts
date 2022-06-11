import {defineStore} from "pinia";

const useCommonData = defineStore({
  id: 'common',
  persist: {
    enabled: true
  },
  state: () => {
    return {
      userInfo: {name: 'xie'},
      counter: 0
    }
  },
  getters: {
    getUserInfo: state => state.userInfo,
    getCounter: state => state.counter
  },
  actions: {
    setUserInfo(userInfo: Store.UserInfo) {
      Object.assign(this.userInfo, userInfo)
    },
    addCounter() {
      this.counter++
    }
  }
})


export default useCommonData





