import * as actionTypes from "./actionType"
import axios from 'axios'
import { fromJS } from 'immutable'

const changeList = (data)=>{
    return {
        type: actionTypes.CHANGE_LIST,
        data: fromJS(data),
        totalPage: Math.ceil(data.length/15)
    }
}

export const onFocusAction = ()=>{
    return {
        type: actionTypes.SEARCH_FOCUS
    }
}
export const onBlurAction = ()=>{
    return {
        type: actionTypes.SEARCH_BLUR
    }
}
export const getList = ()=>{
    return (dispatch)=>{
        axios.get('/api/headerList.json').then((res)=>{
            const data = res.data.data
            dispatch(changeList(data))
        }).catch(()=>{
            console.log('error')
        })
    }
}
export const onMouseEnter = ()=>{
    return {
        type: actionTypes.MOUSE_ENTER
    }
}
export const onMouseLeave = ()=>{
    return {
        type: actionTypes.MOUSE_LEAVE
    }
}
export const changePage = (page)=>{
    return {
        type: actionTypes.CHANGE_PAGE,
        page
    }
}