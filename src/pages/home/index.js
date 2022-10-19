import { react, Component} from "react";
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import {HomeLeft, HomeRight, HomeWrapper} from "./style";
import axios from "axios";
import {connect} from "react-redux";
import {getInfo} from "./store/actionCreator";

class Home extends Component{
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' src='https://upload.jianshu.io/admin_banners/web_images/5055/348f9e194f4062a17f587e2963b7feb0b0a5a982.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'/>
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
            </HomeWrapper>
        )
    }
    componentDidMount() {
        this.props.changeHomeData()
    }
}

const mapDispatch = (dispatch=>({
    changeHomeData(){
        dispatch(getInfo())
    }
}))

export default connect(null,mapDispatch)(Home)