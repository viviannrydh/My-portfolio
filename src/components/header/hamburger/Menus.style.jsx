import styled from 'styled-components';

export const MenuWrapper = styled.div`
    width:30%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    background-color:skyblue;
    @media (min-width:770px){
      display:none;
    }
`
export const MenuItem = styled.div`
    display:flex;
    flex-direction:column;
    text-align:center;
`