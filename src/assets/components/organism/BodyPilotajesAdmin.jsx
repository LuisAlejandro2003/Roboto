import styled from "styled-components";
import GroupText from "../molecules/GroupText";
import HerramientasAdmin from "../molecules/HerramientasAdmin";
import ListEnlaces from "./ListaEnlaces";



const BodyPilotajesAdmin = () => {
  return (
      <StyledWrapperContainer>
  
        <StyledWrapperContainerLeft>
         <HerramientasAdmin></HerramientasAdmin>
         <GroupText></GroupText>
        <ListEnlaces></ListEnlaces>
        </StyledWrapperContainerLeft>

        <StyledWrapperContainerRight>
          <h1>Holaa como estas</h1>
        </StyledWrapperContainerRight>
        </StyledWrapperContainer>
  );
};


const StyledWrapperContainerLeft = styled.div`
  width: 50%;
  height: 100%;
  border: 2px solid blue;
  flex-direction:column;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledWrapperContainerRight = styled.div`
  width: 50%;
  height: 100%;
  border: 2px solid green;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const StyledWrapperContainer = styled.div`
  width: 100%;
  height: 100%;
border: 5px solid red;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top:10%
`;

export default BodyPilotajesAdmin;

