import { queryListData } from '../../../../mock/server';

export default {
  namespace: 'list',
  state: {
    listData: []
  },

  effects: {
    *queryList({ payload }, { call, put }) {
      const res = yield call(queryListData, payload)
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