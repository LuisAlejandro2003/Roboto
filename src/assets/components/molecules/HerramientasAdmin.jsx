import styled from 'styled-components';
import OpcionesNavAdmin from './OpcionesNavAdmin';

const StyledWrapperContainerGray = styled.div`
 padding:1.5%;
  width: 52%;
  height: 100%;
  border-radius:10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #EAE8E8;
`;

const ContainerLabel = styled.div`
  display: flex;
  width: 100%;
  height: 33%;
  justify-content: space-around;
  align-items: center;
  border: 2px solid goldenrod;
  padding-bottom:3%;
  
`;

const HerramientasAdmin = () => {
    return ( 
        <>
        <ContainerLabel>
        <OpcionesNavAdmin msn="Herramienta respecto al sistema de referenciaaaa" estilo={true} ></OpcionesNavAdmin>
        </ContainerLabel>
        <StyledWrapperContainerGray>
        <OpcionesNavAdmin estilo={true} pequenio={true}  msn="[X, Y, Z] mm |  Rot[Z,Y', Z' ']deg - Adept/Comau/Kawasaki"></OpcionesNavAdmin>
        </StyledWrapperContainerGray>
        </>
     );
}
 
export default HerramientasAdmin;