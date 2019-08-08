import { queryRoute } from './../../mock/route'

export default {
  name: 'routes',
  state: {
    menu: []
  },

  effects: {
    *fetch({ payload },{ call, put }) {
      const res = yield call(queryRoute)
      yield put ({
        type: 'save',
        payload: {
          res: res,
          payload: payload
        }
      })
    }
  },

  reducers: {
    save (state, action) {
      let menus = action.payload.payload
      menus[0].children = []
      for (let index in action.payload.res.children) {
        menus[0].children.push(action.payload.res.children[index])
      }
      console.log(menus)
      return {
        ...state,
        menu: menus
      }
    }
  }
}