import * as actionTypes from './actionType'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    focused: false,
    list: [],
    page: 1,
    total: 1,
    mouseIn: false,
})

export default (state=defaultState,action)=>{
    // immutable对象的set方法,会结合之前的immutable对象的值
    // 和设置的值,返回一个全新的对象
    // if(action.type === actionTypes.SEARCH_FOCUS){
    //     return state.set('focused',true)
    // }
    // if(action.type === actionTypes.SEARCH_BLUR){
    //     return state.set('focused',false)
    // }
    // if(action.type === actionTypes.CHANGE_LIST){
    //     console.info(action)
    //     return state.set('list', action.data)
    // }
    switch(action.type){
        case  actionTypes.SEARCH_FOCUS:
            return state.set('focused',true);
        case  actionTypes.SEARCH_BLUR:
            return state.set('focused',false);
        case  actionTypes.MOUSE_ENTER:
            return state.set('mouseIn',true);
        case  actionTypes.MOUSE_LEAVE:
                return state.set('mouseIn',false);
        case  actionTypes.CHANGE_PAGE:
                return state.set('page',action.page);
        case  actionTypes.CHANGE_LIST:
                return state.merge({
                    list:  action.data,
                    totalPage: action.totalPage
                });
        default:
            return state
    }
}