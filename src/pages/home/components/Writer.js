import {react, PureComponent} from "react";
import {WriterWrapper, WriterTitle, WriterList, WriterItem} from "../style";
import {SearchInfoSwitch} from "../../../common/header/style";
import {connect} from "react-redux";

class Writer extends PureComponent {
    render() {
        const {list, handleChangePage} = this.props
        return (
            <WriterWrapper>
                <WriterTitle>
                    <span>推荐作者</span>
                    <SearchInfoSwitch onClick={() => handleChangePage( this.spinIcon)}>
                        <span ref={(icon) => {
                            this.spinIcon = icon
                        }} className="iconfont spin">&#xe606;</span>
                        换一批
                    </SearchInfoSwitch>
                </WriterTitle>
                <WriterList>
                    {
                        list.map(item=>{
                            return(
                                <WriterItem key={item.get('id')}>
                                    <img className='imgPic' src={item.get('imgUrl')}/>
                                    <span className='followP'>+关注</span>
                                    <span className='writer'>{item.get('writer')}</span>
                                    <p className='desc'>{item.get('desc')}</p>
                                </WriterItem>
                            )
                        })
                    }
                </WriterList>
            </WriterWrapper>
        )
    }
}

const mapState = (state) => {
    return {
        list: state.getIn(['home', 'writerList'])
    }
}
const mapDispatch = (disPatch) => {
    return {
        handleChangePage(spin){
            let originAngle = spin.style.transform.replace(/[^0-9]/ig,'')
            console.info('1')
            if(originAngle){
                originAngle = parseInt(originAngle)
            }else{
                originAngle = 0
            }
            spin.style.transform = 'rotate('+ (originAngle + 360) +'deg)'
        }
    }
}


export default connect(mapState, mapDispatch)(Writer)