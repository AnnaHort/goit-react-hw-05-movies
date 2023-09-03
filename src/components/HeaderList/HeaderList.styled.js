import styled from 'styled-components'

export const HeaderListStyled = styled.ul`
padding: 20px 20px 60px 40px;
display: flex;
gap: 20px;
`


export const LinkElementStyle = styled.a`
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
