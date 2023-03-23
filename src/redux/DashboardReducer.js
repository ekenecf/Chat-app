export const ActionTypes = {
    // FETCH_DATA_LOADING: 'FETCH_DATA_LOADING',
    // FETCH_DATA_ERROR: 'FETCH_DATA_ERROR',
    // FORGOTPASSWORD: 'FORGOTPASSWORD',
    CHANGEVIEW: 'CHANGEVIEW',
    PROFILEVIEW: 'PROFILEVIEW',
    DROPDOWN: 'DROPDOWN'
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

  const initialState = {
    chatView: false,
    profileView:false,
    dropDown: false,
  }

  const DashboardReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case ActionTypes.CHANGEVIEW:
        return {
          ...state,
          chatView: true,
          profileView:false
        }
      case ActionTypes.PROFILEVIEW:
        return {
          ...state,
          chatView: false,
          profileView:true

        }
      case ActionTypes.DROPDOWN:
        return {
          ...state,
          dropDown: !state.dropDown,

        }
      default:
        return state
    }
  }
  export default DashboardReducer
  