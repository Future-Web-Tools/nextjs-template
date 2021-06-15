import initialState from './state'

const reducers = (state = initialState, payload) => {
  return { ...state, ...payload }
}

export default reducers
