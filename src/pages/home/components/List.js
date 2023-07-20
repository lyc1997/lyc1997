import {react, PureComponent} from "react";
import {ListItem, ListInfo,LoadMore} from "../style";
import {connect} from "react-redux";
import * as actionCreators from "../store/actionCreator"
import {Link} from "react-router-dom";

class List extends PureComponent {
    render() {
        const {list,getMoreList,page} = this.props
        return (
            <div>
                {
                    list.map((item, index) => {
                        return (
                            // <Link to={{
                            //     pathname: '/detail',
                            //     search: "?sort=name",
                            //     hash: "#the-hash",
                            //     state: {
                            //         id: 1
                            //     }
                            // }}  key={index}>
                            // <Link to={{ pathname: '/detail', state: { id: item.get('imgUrl') }}}  key={index}>?
                            <Link to={ '/detail/' + item.get('id') }  key={index}>
                                <ListItem>
                                    <img className='pic' src={item.get('imgUrl')}/>
                                    <ListInfo>
                                        <span className='title'>{item.get('title')}</span>
                                        <p className='desc'>
                                            {item.get('desc')}
                                        </p>
                                    </ListInfo>
                                </ListItem>
                            </Link>
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