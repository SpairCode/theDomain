import router from 'umi/router';

export default {
  namespace: 'login',
  state: {
    isLogin: false,
    userName: '', // User name length must be six
  },

  subscriptions: {
    history({ history }) {
      console.log('history:', history)
    }
  },

  effects: {
    *saveLoginMsg({ payload }, { call, put }) {
      yield put({
        type: 'saveLoginMsgs',
        payload: payload
      })
      router.push('information/TheoryLearningStatistics')
    },
    *verifyUse({ payload },{  select, call, put }) {
        const state = yield select(state => state)
        if (!state.login.isLogin) {
          let isLogin = localStorage.getItem('isLogin')
          // isLogin !null false
          isLogin = isLogin !== null && isLogin !== false ? true : false
          yield put({
            type: 'saveLoginState',
            payload: isLogin
          })
        }
    }
  },

  reducers: {
    saveLoginMsgs(state, actions) {
      return {
        ...state,
        userName: actions.payload.username,
        isLogin: true
      }
    },
    saveLoginState(state, actions) {
      return {
        ...state,
        isLogin: actions.payload
      }
    }
  }
}