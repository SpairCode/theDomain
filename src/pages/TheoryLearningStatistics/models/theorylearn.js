import { queryTheoryLearning } from '../../../../mock/server';

export default {
  namespace: 'theorylearn',
  state: {
    dataBox: [],
    loading: true
  },

  effects: {
    *fetch({ payload }, { select, call, put }) {
      const res = yield call(queryTheoryLearning)
      yield put ({
        type: 'saveData',
        payload: res
      })
    }
  },

  reducers: {
    saveData(state, actions) {
      return {
        ...state,
        dataBox: actions.payload.list,
        loading: false
      }
    }
  }
}