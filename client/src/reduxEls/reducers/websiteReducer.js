import { CREATE_WEBSITE, READ_WEBSITES, EDIT_WEBSITE, CLOSE_EDITING_WEBSITE, UPDATE_WEBSITE, DELETE_WEBSITE } from '../actions/type'

const initialState = {
  list: [],
  item: {}
}

const websiteReducer = (sState = initialState, action) => {
  switch (action.type) {
    case READ_WEBSITES:
      return { ...sState, list: action.payload }
    case CREATE_WEBSITE:
      return { ...sState, list: [action.payload, ...sState.list] }
    case EDIT_WEBSITE:
      return { ...sState, item: action.payload }
    case CLOSE_EDITING_WEBSITE:
      return { ...sState, item: {} }
    case UPDATE_WEBSITE:
      const website = action.payload
      var clone = { ...sState }
      clone.list[website.index] = website
      clone.item = {}
      return clone
    case DELETE_WEBSITE:
      // const index = action.payload
      // var clone2 = { ...sState }
      // clone2.list.splice(index, 1)
      // console.log(clone2)
      return {
        ...sState, list: sState.list.filter((item, index) => {
          return index !== action.payload
        })
      }
    default:
      return sState
  }
}

export default websiteReducer