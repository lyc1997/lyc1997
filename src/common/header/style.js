import styled from 'styled-components'
import logoPic from '../../statics/1.png'

export const HeaderWrapper = styled.div`
    // min-width: 768px;
    // max-width: 1440px;
    position: relative;
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
`;
export const Logo = styled.a.attrs({
    href:'/'
})`;
    position:absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100px;
    height: 56px;
    background: url(${logoPic});
    background-size: contain;
`;
export const Nav = styled.div`
    width: 960px;
    height: 100%;
    margin: 0 auto;
    padding-right: 70px;
    box-sizing: border-box;
`;
export const NavItem = styled.div`
    line-height: 56px;
    font-size: 17px;
    color: #333;
    padding: 0 15px;
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
    }
    &.active {
        color: #ea6f5a
    }
`;
export const NavSearch = styled.input.attrs({
    placeholder:'搜索'
})`
    width: 160px;
    height: 38px;
    border: none;
    outline: none;
    padding:0 35px 0 20px;
    margin-top: 9px;
    border-radius: 19px;
    background:#eee;
    font-size:14px;
    margin-left: 20px;
    color: #777;
    &::placeholder {
        color: #999;
    }
    &.focused{
        width: 240px
    }
    &.slide-enter {
        transition: all .2s ease-out;
    }
    &.slide-enter-active {
        width:240px 
    }
    &.slide-exit {
        transition: all .2s ease-out;
    }
    &.slide-exit-active {
        width:160px 
    }
`;
export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
`;
export const Button = styled.div`
    float: right;
    line-height: 38px;
    margin: 9px 20px 0 0px;
    border: 1px solid rgba(236,97,73,.7);
    border-radius: 19px;
    padding: 0 20px;
    color: #ea6f5a;
    background-color: transparent;
    font-size:14px;
    &.reg {
        color: #ec6149;
    }
    &.writting {
        color: #fff;
        background: #ec6149
    }
`;
export const SearchWrapper = styled.div`
   float: left;
   position: relative;
   .zoom{
        position: absolute;
        right: 5px;
        bottom: 5px;
        width: 30px;
        line-height: 30px;
        border-radius: 15px;
        text-align: center;
        &.focused{
            background: #777;
            color: #fff;
        }
   }
`;
export const SearchInfo = styled.div`
  background: #fff;
   position: absolute;
   left: 0;
   top: 56px;
   width: 300px;
   padding: 0 20px;
   box-shadow: 0 0 8px rgba(0, 0, 0, .2);
`;
export const SearchInfoTitle = styled.div`
    margin: 20px 0 15px 0;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`;
export const SearchInfoSwitch = styled.div`
    float:right;
    font-size:13px;
    cursor: pointer;
    .spin{
        display: inline-block;
        font-size: 12px;
        margin-right: 2px;
        transition: all .2s ease-in;
        transform-origin: center center;
    }
`;
export const SearchInfoItem = styled.a`
    padding: 0 5px;
    font-size: 12px;
    line-height: 20px;
    border: 1px solid #ddd;
    color: #787878;
    border-radius: 3px;
    display: block;
    float: left;
    margin-right: 10px;
    margin-bottom: 10px;
`;
export const SearchInfoList = styled.div`
    float:right;
    font-size:13px;
    overflow: hidden;
`;
