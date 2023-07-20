import axios from "axios";
import {CHANGE_HOME_DATA,ADD_ARTICLE_LIST,TOGGLE_SCROLL_TOP} from "./constants";
import { fromJS } from 'immutable'

const changeInfoAction = (result)=>{
    const action = {
        type: CHANGE_HOME_DATA,
        topicList:result.topicList,
        articleList:result.articleList,
        recommendList:result.recommendList,
        writerList:result.writerList
    }
    return action
}

const addHomeList = (list,nextPage)=>{
    const action = {
        type: ADD_ARTICLE_LIST,
        list:fromJS(list),
        nextPage
    }
    return action
}

export const getInfo = ()=>{
    return (dispatch)=>{
        axios.get('/api/home.json').then(res=>{
            const result = res.data.data
            dispatch(changeInfoAction(result))
        }).catch(()=>{
            console.log('error')
        })
    }
}

export const getMoreData = (page)=>{
    return (dispatch)=>{
        axios.get('/api/homeList.json?page='+page).then(res=>{
            const list = res.data.data
            dispatch(addHomeList(list,page+1))
        }).catch(()=>{
            console.log('error')
        })
    }
}
export const toggleTopShow = (show)=>({
    type: TOGGLE_SCROLL_TOP,
    show
})