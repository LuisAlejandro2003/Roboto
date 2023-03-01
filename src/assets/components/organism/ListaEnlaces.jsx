import styled from 'styled-components';
import Label from "../atoms/Label";

const StyledWrapperContainerGray = styled.div`
 padding:1.5%;
  width: 35%;
  height: 100%;
  border-radius:10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #EAE8E8;
`;


const StyledWrapperContainer = styled.div`
  width: 50%;
  height: 100%;
  flex-direction:column;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 2px solid red;
`;

const ListEnlaces = () => {
    return ( 

   <StyledWrapperContainer>
     <Label msn="Lista de enlaces cinematicos" estilo={true}></Label>
     <StyledWrapperContainerGray></StyledWrapperContainerGray>
     </StyledWrapperContainer>
     );
}
 
export default ListEnlaces;