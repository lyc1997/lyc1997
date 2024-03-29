import axios from "axios";
import * as constants from "./constants";
import {useLocation} from "react-router-dom";

const changeDetail = (title, content) => ({
    type: constants.CHANGE_DETAIL,
    title,
    content
})

export const getDetail = (id) => {
    console.log(id)
    return (dispatch)=>{
        axios.get('/api/detail.json?id=' + id).then(res => {
            const data = res.data.data
            dispatch(changeDetail(data.title, data.content))
        })
    }
}