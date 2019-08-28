import { queryStudentDistribute } from '../../../../mock/server';

export default {
  namespace: 'student',
  state: {
    studentData: [],
    loading: true
  },

  effects: {
    *queryStudentScore({ payload }, { call, put }) {
      const res = yield call(queryStudentDistribute, payload)
      yield put({
        type: 'saveStudentScore',
        payload: res.data
      })
    }
  },

  reducers: {
    saveStudentScore(state, actions) {
      return {
        ...state,
        studentData: actions.payload,
        loading: false
      }
    }
  }
}