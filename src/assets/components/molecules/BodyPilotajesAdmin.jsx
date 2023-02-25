import styled from "styled-components";
import InputText from "../atoms/InputText";
import SmallLabel from "../atoms/SmallLabel";
import GroupText from "./GroupText";
import HerramientasAdmin from "./HerramientasAdmin";

import OpcionesNavAdmin from "./OpcionesNavAdmin";
const StyledWrapperContainerLeft = styled.div`
  width: 50%;
  height: 100%;
  /* border: 2px solid green; */
  flex-direction:column;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledWrapperContainerRight = styled.div`
  width: 50%;
  height: 100%;
  /* border: 2px solid blue; */
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const StyledWrapperContainer = styled.div`
  width: 100%;
  height: 100%;
  /* border: 2px solid yellow; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top:10%
`;

const BodyPilotajesAdmin = () => {
  return (
    <>
      <div>Pilotajes</div>
      <StyledWrapperContainer>
    
        <StyledWrapperContainerLeft>
         <HerramientasAdmin></HerramientasAdmin>
         <GroupText></GroupText>
        </StyledWrapperContainerLeft>

        <StyledWrapperContainerRight>
          <h1>Holaa</h1>
        </StyledWrapperContainerRight>
        </StyledWrapperContainer>
      
    </>
  );
};

export default BodyPilotajesAdmin;
