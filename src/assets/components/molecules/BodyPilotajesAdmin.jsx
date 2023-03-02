// import styled from "styled-components";
// import GroupText from "../molecules/GroupText";
// import HerramientasAdmin from "../molecules/HerramientasAdmin";
// import ListEnlaces from "../organism/ListEnlaces";


const BodyPilotajesAdmin = () => {
  return (
    <>
      <StyledWrapperContainer>
        <StyledWrapperContainerLeft>
         <HerramientasAdmin></HerramientasAdmin>
         <GroupText></GroupText>
         
        </StyledWrapperContainerLeft>

        <StyledWrapperContainerRight>
          <h1>Contenedor izquierdo</h1>
        </StyledWrapperContainerRight>
        </StyledWrapperContainer>
      
    </>
  );
};

const StyledWrapperContainerLeft = styled.div`
  width: 50%;
  height: 100%;
  /* border: 2px solid green; */
  flex-direction:column;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;


//         <StyledWrapperContainerRight>
//           <h1>Hola</h1>
//         </StyledWrapperContainerRight>
//         </StyledWrapperContainer>
//   );
// };




