import { react, Component} from "react";
import {TopicItem, TopicWrapper} from "../style";
import { connect } from "react-redux";

class Topic extends Component{
    render() {
        const {list} = this.props
        return(
            <TopicWrapper>
                {
                    list.map((item)=>{
                        return(
                            <TopicItem key={item.get('id')}>
                                <img className='topic-pic' src={item.get('imgUrl')}/>
                                {item.get('title')}
                            </TopicItem>
                        )
                    })
                }
            </TopicWrapper>
        )
    }
}
const mapState = (state)=>{
    return {
        list: state.getIn(['home','topicList'])
    }
}
export default connect(mapState,null)(Topic)