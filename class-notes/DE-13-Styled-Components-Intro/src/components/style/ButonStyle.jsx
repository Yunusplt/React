import styled from 'styled-components';

const ButtonS = styled.button`
border: none;
background: ${({ozlem})=> ozlem ? "lightblue" : "orange"};
color: blue;
font-size: 16px;
font-weight: 600;
padding: 1rem 1.5rem;
border-radius: 8px;
cursor: pointer;
&:hover {
    transform: scale(0.95);
}
`;

// export const DomatesButon = styled.button ``
export const DomatesButon = styled(ButtonS) `
color: ${({yunus})=> yunus ? "yellow" : "green"};
background-color: aquamarine;
border: 3px solid red;
width: 300px;
`

export default ButtonS;
