import axios from "axios";
import { fromJS } from 'immutable'
import {LOGIN, LOGOUT} from "./constants";

const changeLogin = ()=>({
    type: LOGIN,
    value: true
})

export const login = (userName, password)=>{
    return (dispatch)=>{
        axios.get(`/api/login.json?username=${userName}&password=${password}`).then(res=>{
            if(res.data.data.data){
                dispatch(changeLogin())
            }
        })
    }
}
export const logout = ()=>({
    type: LOGOUT,
    value: false
})