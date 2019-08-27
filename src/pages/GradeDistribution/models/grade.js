import { queryScoreDistribute } from '../../../../mock/server';

export default {
  namespace: 'grade',
  state: {
    gradeData: [],
    loading: true
  },

  effects: {
    *queryGradeData({ payload }, { call, put }) {
      const res = yield call(queryScoreDistribute, payload)
      yield put({
        type: 'saveGradeData',
        payload: res.data
      })
    }
  },

  reducers: {
    saveGradeData(state, actions) {
      return {
        ...state,
        gradeData: actions.payload,
        loading: false
      }
    }
  }
}