export const ActionTypes = {
  CHANGEVIEW: 'CHANGEVIEW',
  PROFILEVIEW: 'PROFILEVIEW',
  DROPDOWN: 'DROPDOWN',
  EDITPROFILE: 'EDITPROFILE',
  EDITDROPDOWN: 'EDITDROPDOWN',
  EDITNAME: 'EDITNAME',
  EDITLOCATION: 'EDITLOCATION',
  EDITNUMBER: 'EDITNUMBER',
  SUMMARY: 'SUMMARY',
  LIGHTDARK: 'LIGHTDARK',
  CHATDISPLAY: 'CHATDISPLAY',
}

export const setChatView = () => ({
  type: ActionTypes.CHANGEVIEW,
})
export const setProfileView = () => ({
  type: ActionTypes.PROFILEVIEW,
})
export const setDropDown = () => ({
  type: ActionTypes.DROPDOWN,
})
export const setEditProfile = () => ({
  type: ActionTypes.EDITPROFILE,
})
export const setEditDropDown = () => ({
  type: ActionTypes.EDITDROPDOWN,
})
export const setEditName = () => ({
  type: ActionTypes.EDITNAME,
})
export const setEditLocation = () => ({
  type: ActionTypes.EDITLOCATION,
})
export const setEditNumber = () => ({
  type: ActionTypes.EDITNUMBER,
})
export const setSummary = () => ({
  type: ActionTypes.SUMMARY,
})
export const setLightDark = () => ({
  type: ActionTypes.LIGHTDARK,
})
export const setChatDisplay = () => ({
  type: ActionTypes.CHATDISPLAY,
})

const initialState = {
  chatView: true,
  profileView: false,
  dropDown: false,
  editProfile: false,
  editDropDown: false,
  editName: true,
  editNumber: false,
  summary: false,
  brightness: false,
  editLocation:false,
  chatDisplay: false
}

const DashboardReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.CHANGEVIEW:
      return {
        ...state,
        chatView: true,
        profileView: false,
        editProfile: false,
        editLocation: false,
        chatDisplay: false,
      }
    case ActionTypes.PROFILEVIEW:
      return {
        ...state,
        chatView: false,
        profileView: true,
        editProfile: false,
      }
    case ActionTypes.DROPDOWN:
      return {
        ...state,
        dropDown: !state.dropDown,
      }
    case ActionTypes.EDITPROFILE:
      return {
        ...state,
        chatView: false,
        profileView: false,
        editProfile: true,
      }
    case ActionTypes.EDITDROPDOWN:
      return {
        ...state,
        editDropDown: !state.editDropDown,
      }
    case ActionTypes.EDITLOCATION:
      return {
        ...state,
        editLocation: !state.editLocation,
      }
    case ActionTypes.EDITNAME:
      return {
        ...state,
        editName: !state.editName,
      }
    case ActionTypes.EDITNUMBER:
      return {
        ...state,
        editNumber: !state.editNumber,
      }
    case ActionTypes.SUMMARY:
      return {
        ...state,
        summary: !state.summary,
      }
    case ActionTypes.LIGHTDARK:
      return {
        ...state,
        brightness: !state.brightness,
      }
    case ActionTypes.CHATDISPLAY:
      return {
        ...state,
        chatDisplay: true,
        chatView: false,
        profileView: false,
        editProfile: false,
        editLocation: false,
      }
    default:
      return state
  }
}
export default DashboardReducer
