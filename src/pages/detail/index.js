import react, {useEffect} from "react";
import {Content, DetailWrapper, Header} from "./style";
import {connect} from "react-redux";
import * as actionCreator from './store/actionCreator'
import {useParams} from "react-router-dom";

function Detail(props) {
    const { title, content, getDetail } = props;
    const { id } = useParams();
    useEffect(() => {
        getDetail(id)
    }, []);

    return (
        <DetailWrapper>
            <Header>{title}</Header>
            <Content dangerouslySetInnerHTML={{ __html: content }} />
        </DetailWrapper>
    )
}

// class Detail extends Component{
//     render() {
//         console.log(this.props)
//         return (
//             <DetailWrapper>
//                 <Header>{this.props.title}</Header>
//                 <Content dangerouslySetInnerHTML={{__html: this.props.content}}>
//                 </Content>
//             </DetailWrapper>
//         )
//     }
//     componentDidMount() {
//         this.props.getDetail()
//     }
// }
const mapState = (state)=>({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
})
const mapDispatch = (dispatch => ({
   getDetail: (id)=> {
       dispatch(actionCreator.getDetail(id))
   }
}))
export default connect(mapState, mapDispatch)(Detail)