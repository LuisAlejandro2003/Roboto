import styled ,{css} from 'styled-components';

const StyledLabel = styled.label`
font-family: 'Open Sans';
font-style: normal;
font-weight: 400;

line-height: 33px;

margin-left:10px;
color: ${props => props.estilo ? '#000' : '#fff'};
font-size: ${props => props.pequeno ? '14px' : '24px'};
`;
function Label({msn, estilo , pequeno}) {
    return ( 
        <StyledLabel estilo={estilo} pequeno={pequeno}>{msn}</StyledLabel>
     );
}

export default Label;