import styled  from 'styled-components';

const StyledSmallLabel = styled.label`
font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 19px;
text-align: center;
color: #000000;

`;
function SmallLabel({msn}) {
    return ( 
        <StyledSmallLabel>{msn}</StyledSmallLabel>
     );
}

export default SmallLabel;