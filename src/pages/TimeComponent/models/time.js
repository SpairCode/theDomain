import { queryTime } from '../../../../mock/server';

export default {
  namespace: 'time',
  state: {
    time: Number,
    alltime: Number,
    loading: true,
  },

  effects: {
    *queryTime({ payload }, { call, put }) {
      const res = yield call(queryTime)
      yield put({
        type: 'saveTime',
        payload: {
          time: res.data.time,
          alltime: res.data.alltime
        }
      })
    }
  },

  reducers: {
    saveTime(state, actions) {
      return {
        ...state,
        time: actions.payload.time,
        alltime: actions.payload.alltime,
        loading: false
      }
    },
    loading(state, loading) {
      return {
        ...state,
        loading: true
      }
    }
  }
}