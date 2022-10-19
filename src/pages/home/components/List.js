import {react, Component} from "react";
import {ListItem, ListInfo,LoadMore} from "../style";
import {connect} from "react-redux";
import * as actionCreators from "../store/actionCreator"

class List extends Component {

    render() {
        const {list,getMoreList,page} = this.props
        return (
            <div>
                {
                    list.map(item => {
                        return (
                            <ListItem key={item.get('id')}>
                                <img className='pic' src={item.get('imgUrl')}/>
                                <ListInfo>
                                    <span className='title'>{item.get('title')}</span>
                                    <p className='desc'>
                                        {item.get('desc')}
                                    </p>
                                </ListInfo>
                            </ListItem>
                        )
                    })
                }
                <LoadMore onClick={()=> getMoreList(page)}>加载更多</LoadMore>
            </div>
        )
    }
}

const mapState = (state) => {
    return {
        list: state.getIn(['home', 'articleList']),
        page: state.getIn(['home', 'articlePage']),
    }
}

const mapDispatch = (dispatch)=>{
    return {
        getMoreList(page){
            dispatch(actionCreators.getMoreData(page))
        }
    }
}

export default connect(mapState,mapDispatch)(List)