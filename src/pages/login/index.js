import React,{PureComponent} from "react";
import {Button, Input, LoginBox, LoginWrapper} from "./style";
import {connect} from "react-redux";
import {login} from "./store/actionCreator";
import {redirect, NavLink, Navigate, withRouter} from "react-router-dom";

class Login extends PureComponent{
    render() {
        const { login, loginFlag } = this.props
        if(!loginFlag){
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder="用户名" ref={(input)=>{ this.userName = input}}></Input>
                        <Input placeholder="密码" type='password' ref={(input)=>{ this.password = input}}></Input>
                        <Button onClick={ ()=> login(this.userName,this.password) }>登录</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        }else{
            return  (<NavLink end to='/' />)
        }
    }
}
const mapState = (state)=>({
    loginFlag: state.getIn(['login', 'login'])
})
const mapDispatch = (dispatch)=> ({
    login: (userNameEle, passwordEle)=>{
        dispatch(login(userNameEle.value,passwordEle.value))
    }
})
export default connect(mapState, mapDispatch)(Login)