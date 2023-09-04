import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderListStyled = styled.ul`
padding: 20px 20px 20px 40px;
display: flex;
gap: 20px;
border-bottom: 1px solid rgba(0, 0, 0, 0.2); 
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`


export const LinkStyle = styled(Link)`
text-decoration: none;
color: black;
font-size: 20px;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
&:hover,
:focus{
    color: red;
    transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);
}
`
