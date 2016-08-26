
// ------------------------------------
// Constants
// ------------------------------------
export const DOCK_TOGGLE_CHANGE = 'DOCK_TOGGLE_CHANGE'

// ------------------------------------
// Actions
// ------------------------------------
export function setToggle(value = false) {
    return {
        type: DOCK_TOGGLE_CHANGE,
        dock_isopen: value
    }
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const HEADER_ACTION_HANDLERS = {
    [DOCK_TOGGLE_CHANGE]: (state, action) => (state=state?false:true)
}


// ------------------------------------
// Reducer
// ------------------------------------
const initialState = false
export default function headerReducer (state = initialState, action) {
    const handler = HEADER_ACTION_HANDLERS[action.type]

    return handler ? handler(state, action) : state
}

