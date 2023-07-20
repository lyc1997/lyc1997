import styled from "styled-components";

export const HomeWrapper = styled.div`
  overflow: hidden;
    width: 960px;
    margin: 0 auto;
`
export const HomeLeft = styled.div`
    float: left;
    margin-left: 15px;
    padding-top: 30px;
    width: 625px;
    .banner-img{
      width: 625px;
      height: 270px;
    }
`
export const HomeRight = styled.div`
    width: 280px;
    float: right;
`
export const TopicWrapper = styled.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    margin-left: -10px;
    border-bottom: 1px solid #dcdcdc;
`
export const TopicItem = styled.div`
    float: left;
    height: 32px;
    line-height: 32px;
    background: #F7F7F7;
    margin-left: 16px;
    font-size: 14px;
    color: #000;
    padding-right: 10px;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    margin-bottom: 18px;
    .topic-pic{
        display: block;
        float: left;
        width: 32px;
        height: 32px;
        margin-right: 10px;
    }
`
export const ListItem = styled.div`
    padding: 20px 0;
    overflow: hidden;
    border-bottom: 1px solid #dcdcdc;
    .pic{
        display: block;
        width: 125px;
        height: 100px;
        float: right;
        border-radius: 10px;
    }
`
export const ListInfo = styled.div`
    width: 500px;
    float: left;
    .title{
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
      color: #333333;
    }
    .desc {
        line-height: 24px;
        font-size: 13px;
        color: #999;
    }
`
export const RecommendWrapper = styled.div`
    margin: 30px 0;
    width: 280px;
  
`
export const RecommendItem = styled.div`
    width:280px;
    height: 50px;
    margin-bottom: 5px;
    background: url(${(props)=> props.imgUrl});
    background-size: contain;
`
export const WriterWrapper = styled.div`
    width: 278px;
    //border: 1px solid #dcdcdc;
    font-size: 14px;
    color: #969696;
    border-radius: 3px;
    height: 300px;
    //line-height: 300px;
    //text-align: center;
  
`
export const WriterTitle = styled.div`
`
export const WriterList = styled.div`
    margin-top: 10px;
`
export const WriterItem = styled.div`
    padding-bottom: 10px;
    .followP{
        float: right;
        margin-top: 5px;
        padding: 0;
        font-size: 13px;
        color: #42c02e;
    }
    .imgPic{
        margin-right: 10px;
        float: left;
        width: 48px;
        height: 48px;
        border: 1px solid #ddd;
        border-radius: 50%;
    }
    .desc{
        margin: 2px 0 10px 0;
        font-size: 12px;
        color: #969696;
        height: 20px;
        line-height: 20px;
    }
    .writer{
        padding-top: 5px;
        margin-right: 60px;
        font-size: 14px;
        display: block;
        color: #333;
        height: 25px;
        line-height: 25px;
    }
`
export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    margin: 30px 0;
    background: #a5a5a5;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    cursor: pointer;
`
export const BackTop = styled.div`
    position: fixed;
    right: 100px;
    bottom: 100px;
    width: 50px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    border: 1px solid #ccc;
    cursor: pointer;
`