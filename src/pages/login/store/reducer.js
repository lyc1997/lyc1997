import {fromJS} from 'immutable'
import {LOGIN, LOGOUT} from "./constants";

const defaultState = fromJS({
    login: false
})
export default (state = defaultState, action) => {
    switch (action.type) {
        case LOGIN:
            return state.set('login', action.value)
        case LOGOUT:
            return state.set('login', action.value)
        default:
            return state;

    }
}