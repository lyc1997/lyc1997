import { react, PureComponent} from "react";
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import {HomeLeft, HomeRight, HomeWrapper} from "./style";
import {connect} from "react-redux";
import {getInfo, toggleTopShow} from "./store/actionCreator";
import {BackTop} from "./style";

/*
* 使用immutable管理数据时使用pureComponent可以提高性能，更新store中某数据时，不使用该数据的页面可以不刷新
* */
class Home extends PureComponent{
    handleScrollTop(){
        let scrollTop = document.documentElement.scrollTop
        let num = (scrollTop/80).toFixed()
        console.log(scrollTop)
        const timer = setInterval(()=>{
            scrollTop -= num
            if(scrollTop <= 0){
                console.log('清除')
                clearInterval(timer)
            }
            window.scrollTo(0,scrollTop)
        },10)
    }
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
                {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null}
            </HomeWrapper>
        )
    }
    componentDidMount() {
        this.props.changeHomeData()
        this.bindEvent()
    }
    bindEvent(){
        window.addEventListener('scroll',this.props.changeScroll)
    }
    componentWillUnmount() {
        window.removeEventListener('scroll',this.props.changeScroll)
    }
}
const mapState = (state=>({
    showScroll: state.getIn(['home', 'showScroll'])
}))

const mapDispatch = (dispatch=>({
    changeHomeData(){
        dispatch(getInfo())
    },
    changeScroll(){
        if(document.documentElement.scrollTop > 400){
            dispatch(toggleTopShow(true))
        }else{
            dispatch(toggleTopShow(false))
        }
    }
}))

export default connect(mapState,mapDispatch)(Home)