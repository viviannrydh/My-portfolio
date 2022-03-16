import styled from 'styled-components';

export const MenuWrapper = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    color:whitesmoke;
    margin-top:10%;
    line-height:2rem;
    margin-left:0%;
    @media (min-width:770px){
      display:none;
    }
    @media(max-width:548px){
      margin-left:-20%;
      font-size:0.8rem;
    }
    @media(max-width:355px){
      margin-left:-20%;
      font-size:0.7rem;
    }
`

export const HeaderLinkA = styled.a`
    margin-bottom:10px;
    border-bottom:1px solid skyblue;
    text-decoration:none;
    color:whitesmoke;


`