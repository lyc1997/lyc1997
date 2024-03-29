import {fromJS} from 'immutable'
import {CHANGE_HOME_DATA, ADD_ARTICLE_LIST, TOGGLE_SCROLL_TOP} from "./constants";

const defaultState = fromJS({
    topicList: [],
    recommendList: [],
    articleList: [],
    writerList: [],
    articlePage: 1,
    showScroll: false
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_HOME_DATA:
            return state.merge({
                topicList: fromJS(action.topicList),
                recommendList: fromJS(action.recommendList),
                articleList: fromJS(action.articleList),
                writerList: fromJS(action.writerList)
            });
        case ADD_ARTICLE_LIST:
            return state.merge({
                articlePage: action.nextPage,
                articleList: state.get('articleList').concat(action.list)
            });
        case TOGGLE_SCROLL_TOP:
            return state.set('showScroll', action.show)
        default:
            return state;

    }
}