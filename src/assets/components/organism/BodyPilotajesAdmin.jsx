import styled from "styled-components";
import GroupText from "../molecules/GroupText";
import HerramientasAdmin from "../molecules/HerramientasAdmin";
const StyledWrapperContainerLeft = styled.div`
  width: 50%;
  height: 100%;
 
  flex-direction:column;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledWrapperContainerRight = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const StyledWrapperContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top:10%
`;

const BodyPilotajesAdmin = () => {
  return (
      <StyledWrapperContainer>
  
        <StyledWrapperContainerLeft>
         <HerramientasAdmin></HerramientasAdmin>
         <GroupText></GroupText>
        </StyledWrapperContainerLeft>

        <StyledWrapperContainerRight>
          <h1>Holaa</h1>
        </StyledWrapperContainerRight>
        </StyledWrapperContainer>
  );
};

export default BodyPilotajesAdmin;
