import react,{Component} from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { HeaderWrapper, Logo, Nav,NavItem,NavSearch, Addition, Button,SearchWrapper,SearchInfo,SearchInfoTitle,SearchInfoSwitch,SearchInfoItem,SearchInfoList } from './style'
import { actionCreators } from './store'

class Header extends Component{
    getListArea = () => {
        const { focused, mouseIn, totalPage,list ,page, handleChangePage, handleMouseEnter, handleMouseLeave} = this.props
        const newList = list.toJS();
        const pageList = [];
        if( newList.length ){
            for(let i = (page-1) * 15;i < page * 15;i++){
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }
       
        if(focused || mouseIn){
            return(
                <SearchInfo 
                    onMouseEnter = {handleMouseEnter}
                    onMouseLeave = {handleMouseLeave}
                    >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick = {()=> handleChangePage(page,totalPage,this.spinIcon)}>
                            <span ref={(icon)=>{this.spinIcon = icon}} className="iconfont spin">&#xe606;</span>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        { pageList }
                    </SearchInfoList>
                 </SearchInfo>
            )
        }
    }
    render() {
        const { list, focused, handleInputFocus, handleInputBlur} = this.props
        return (
            <HeaderWrapper>
                <Logo></Logo>
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载APP</NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <NavItem className='right'>
                    <span className="iconfont">&#xe636;</span>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames='slide'
                        >
                            <NavSearch 
                            className={focused?'focused':''}
                            onFocus={handleInputFocus}
                            onBlur={()=>{handleInputBlur(list)}}
                            ></NavSearch>
                        </CSSTransition>
                        <span className={focused?'focused iconfont zoom':'iconfont zoom'}>&#xe637;</span>
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className='writting'>
                    <span className="iconfont">&#xe600;</span>
                        写文章
                    </Button>
                    <Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}


const mapDispatchToProps = (dispatch)=>{
    return {
        handleInputBlur(list) {
            (list.size === 0) && dispatch(actionCreators.getList())
            dispatch(actionCreators.onBlurAction())
        },
        handleInputFocus() {
            dispatch(actionCreators.onFocusAction())
        },
        handleMouseEnter() {
            dispatch(actionCreators.onMouseEnter())
        },
        handleMouseLeave() {
            dispatch(actionCreators.onMouseLeave())
        },
        handleChangePage(page,totalPage,spin) {
            let originAngle = spin.style.transform.replace(/[^0-9]/ig,'') 
            if(originAngle){
                originAngle = parseInt(originAngle,10);
            }else{
                originAngle = 0
            }
           
            spin.style.transform = 'rotate('+(originAngle+360)+'deg)'
            if(page >= totalPage){
                dispatch(actionCreators.changePage(1))
            }else{
                dispatch(actionCreators.changePage(page+1))
            }
        }
    }
}
const mapStateToProps = (state)=>{
    return{
        focused: state.getIn(['header','focused']),
        // state.get('header').get('focused')
        list: state.getIn(['header','list']),
        page: state.getIn(['header','page']),
        totalPage: state.getIn(['header','totalPage']),
        mouseIn: state.getIn(['header','mouseIn']),
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header)