import router from 'umi/router';

export default {
  namespace: 'login',
  state: {
    isLogin: false,
    userName: '', // User name length must be six
  },

  subscriptions: {
    setup({ history, dispatch, select }) {
      debugger
      // const state = select(state => state)
      // if (!state.login.isLogin) {
        let isLogin = localStorage.getItem('isLogin')
        // isLogin !null false
        isLogin = isLogin !== null && isLogin !== false ? true : false
        dispatch({
          type: 'saveLoginState',
          payload: isLogin
        })
      // }
    }
  },

  effects: {
    *saveLoginMsg({ payload }, { call, put }) {
      yield put({
        type: 'saveLoginMsgs',
        payload: payload
      })
      router.push('information/TheoryLearningStatistics')
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
      debugger
      return {
        ...state,
        isLogin: actions.payload
      }
    }
  }
}