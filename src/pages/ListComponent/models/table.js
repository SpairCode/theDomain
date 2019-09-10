import { queryTableData } from '../../../../mock/server';

export default {
  namespace: 'table',
  state: {
    tableData: [],
    loading: true
  },

  effects: {
    *queryTableDatas({ pauload }, { call, put }) {
      const res = yield call(queryTableData)
      yield put({
        type: 'saveTableData',
        payload: res.data
      })
    }
  },

  reducers: {
    saveTableData(state, actions) {
      return {
        ...state,
        tableData: actions.payload,
        loading: false
      }
    }
  }
}
