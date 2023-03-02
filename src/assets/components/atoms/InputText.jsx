import styled ,{css} from 'styled-components';

const StyledInputText = styled.input`
/* width: 100px;
height: 26px;
border-color:#F19DA9 ;
border-radius:10px; */
box-sizing: border-box;
border: 1px solid #F19DA9;
border-radius: 8px;
font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 8px;
line-height: 19px;
/* identical to box height */
/* C4 */

color: #F19DA9;
`;
function InputText({msn}) {
    return ( 
        <StyledInputText placeholder={msn}></StyledInputText>
     );
}

export default InputText;