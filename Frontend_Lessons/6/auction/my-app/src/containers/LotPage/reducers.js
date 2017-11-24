import { 
    GET_LOTS_START,
    GET_LOTS_SUCCESS,
    GET_LOTS_FAILED
} from "./actions";

function userReducer(state, {type, payload}) {

    if(type === GET_LOTS_START) {
        return {
            ...state,
            pending: true,
        }
    }

    if(type === GET_LOTS_SUCCESS) {
        return {
            ...state,
            pending: false,
            data: payload
        }
    }

    if(type === GET_LOTS_FAILED) {
        return {
            ...state,
            pending: false,
            error: payload
        }
    }

  return {
        data: null,
        pending: false,
        error: null
}
}

export default userReducer