import { queryImageData } from '../../../../mock/server';

export default {
  namespace: 'list',
  state: {
    listData: []
  },

  effects: {
    *queryImageData({ payload }, { call, put }) {
      const res = yield call(queryImageData, payload)
      yield put({
        type: 'saveList',
        payload: res.data
      })
    }
  },

  reducers: {
    saveList(state, actions) {
      return {
        ...state,
        listData: actions.payload
      }
    }
  }
}