import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ListStyle = styled.ul`
padding: 0 20px 20px 40px;
`

export const ListElementStyle = styled.li`
list-style: circle;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
&:hover,
:focus{
    color: red;
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
}
`
export const LinkElement = styled(Link)`
color: black;
text-decoration: none;
&:hover,
:focus{
    color: red;
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
}
`