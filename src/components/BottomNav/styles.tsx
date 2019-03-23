import styled from 'styled-components';

interface Props {
    selectedColor: string;
}

export const BottomNavWrapper = styled.nav<Props>`
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-align:center;
    -ms-flex-align:center;
    align-items:center;
    -webkit-box-pack:center;
    -ms-flex-pack:center;
    justify-content:center;
    position:fixed;
    bottom:0;
    left:0;
    right:0;
    box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);
    border-top:1px solid #e0e0e0;
    background-color:#fff;
    z-index:1;
    -webkit-tap-highlight-color:transparent;

    .bottom-nav__action{
        padding:8px 12px;
        min-width:56px;
        max-width:144px;
        -webkit-box-flex:1;
        -ms-flex:1 1 auto;
        flex:1 1 auto;
        color:#757575;
        text-decoration:none
    }
    .bottom-nav__action:not(:last-child){
        margin-right:12px
    }
    .bottom-nav__action--active{
        padding-top:6px;
        color: ${props => props && props.selectedColor? props.selectedColor : '#f44336'};
    }
    .bottom-nav__icon{
        display:block;
        width:1em;
        height:1em;
        margin-left:auto;
        margin-right:auto;
        margin-bottom:4px;
        font-size:24px
    }
    .bottom-nav__icon path,.bottom-nav__icon polygon,.bottom-nav__icon rect{
        fill:currentColor
    }
    .bottom-nav__icon circle{
        stroke:currentColor;
        stroke-width:1
    }
    .bottom-nav__label{
        font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Droid Sans,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;
        line-height:1;
        text-align:center;
        white-space:nowrap;
        display:block;
        font-size:12px
    }
    .bottom-nav__action--active .bottom-nav__label{
        font-size:14px
    }
    .no-labels-nav{
        display:-webkit-box;
        display:-ms-flexbox;
        display:flex;
        -webkit-box-align:center;
        -ms-flex-align:center;
        align-items:center;
        -webkit-box-pack:center;
        -ms-flex-pack:center;
        justify-content:center;
        position:fixed;
        bottom:0;
        left:0;
        right:0;
        box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);
        border-top:1px solid #e0e0e0;
        background-color:#009688;
        z-index:1;
        -webkit-tap-highlight-color:transparent
    }
    .no-labels-nav__action{
        padding:16px 12px;
        min-width:32px;
        max-width:72px;
        -webkit-box-flex:1;
        -ms-flex:1 1 auto;
        flex:1 1 auto;
        color:#e0e0e0;
        text-decoration:none
    }
    .no-labels-nav__action:not(:last-child){
        margin-right:12px
    }
    .no-labels-nav__action--active{
        padding-top:6px;
        color:#fff;
        padding-bottom:8px;
        min-width:56px;
        max-width:144px
    }
    .no-labels-nav__icon{
        display:block;
        width:1em;
        height:1em;
        margin-left:auto;
        margin-right:auto;
        font-size:24px
    }
    .no-labels-nav__icon path,.no-labels-nav__icon polygon,.no-labels-nav__icon rect{
        fill:currentColor
    }
    .no-labels-nav__icon circle{
        stroke:currentColor;
        stroke-width:1
    }
    .no-labels-nav__action--active .no-labels-nav__icon{
        margin-bottom:4px
    }
    .no-labels-nav__label{
        font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Droid Sans,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;
        line-height:1;
        text-align:center;
        white-space:nowrap;
        display:none
    }
    .no-labels-nav__action--active .no-labels-nav__label{
        font-size:14px;
        display:block
    }

`;