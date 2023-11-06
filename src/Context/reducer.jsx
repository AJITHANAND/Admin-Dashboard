const initialState = {
  isOpen: false
}

export default function sidebarReducer(state = initialState, action) {
  switch(action.type) {
    case 'TOGGLE_SIDEBAR':
      return {
        ...state,
        isOpen: !state.isOpen
      }
    default:
      return state
  }
}