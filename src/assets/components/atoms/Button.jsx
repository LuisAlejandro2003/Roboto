
import styled, {css} from "styled-components";

const StyledButton=styled.button`
width: 100px;
height: 26px;
background: #D74A4A;
border-radius:20px;
`;

const Button = (type,name) => {
    return ( 
        <>
        <StyledButton type={type}>{name}</StyledButton>
        </>
     );
}
 

export default Button;