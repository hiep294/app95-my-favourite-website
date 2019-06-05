import websiteReducer from './websiteReducer'

const rootReducer = (bState = {}, action) => ({
  websiteState: websiteReducer(bState.websiteState, action)
})

export default rootReducer