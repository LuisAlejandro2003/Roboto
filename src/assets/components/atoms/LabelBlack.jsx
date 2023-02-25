import styled from 'styled-components';

const StyledLabelBlack = styled.label`
font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 33px;
margin-left:10px;
color: #000;
`;

function LabelBlack({msn}) {
    return ( 
        <StyledLabelBlack>{msn}</StyledLabelBlack>
     );
}

export default LabelBlack;