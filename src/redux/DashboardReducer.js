export const ActionTypes = {
    // FETCH_DATA_LOADING: 'FETCH_DATA_LOADING',
    // FETCH_DATA_ERROR: 'FETCH_DATA_ERROR',
    // FORGOTPASSWORD: 'FORGOTPASSWORD',
    CHANGEVIEW: 'CHANGEVIEW',
    PROFILEVIEW: 'PROFILEVIEW'
  }

  export const setChatView = () => ({
    type: ActionTypes.CHANGEVIEW,
  })
  export const setProfileView = () => ({
    type: ActionTypes.PROFILEVIEW,
  })

  const initialState = {
    chatView: false,
    profileView:false
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
      default:
        return state
    }
  }
  export default DashboardReducer
  