import { CREATE_WEBSITE, READ_WEBSITES, EDIT_WEBSITE, CLOSE_EDITING_WEBSITE, UPDATE_WEBSITE, DELETE_WEBSITE } from '../actions/type'

export const readWebsites = (websites) => ({
  type: READ_WEBSITES,
  payload: websites
})

export const createWebsite = (website) => ({
  type: CREATE_WEBSITE,
  payload: website
})

export const editWebsite = (website) => ({
  type: EDIT_WEBSITE,
  payload: website
})

export const closeEditingWebsite = () => ({
  type: CLOSE_EDITING_WEBSITE
})

export const updateWebsite = (website) => ({
  type: UPDATE_WEBSITE,
  payload: website
})

export const deleteWebsite = (index) => ({
  type: DELETE_WEBSITE,
  payload: index
})