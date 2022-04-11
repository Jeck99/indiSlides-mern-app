import styled from 'styled-components';

export const Box = styled.div`
position: fixed;
bottom: 0;
width: 100%;
background: var(--dark-theme);
height: 5vh;
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: baseline;
@media (max-width: 600px) {
    box-sizing: border-box;
    justify-content: space-around;
    align-items: center;
}
@media (min-width: 600px) {

}
`;

export const FooterLink = styled.a`
text-decoration: none;
&:hover {
	color: green;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
color: #fff;
font-weight: bold;
`;
