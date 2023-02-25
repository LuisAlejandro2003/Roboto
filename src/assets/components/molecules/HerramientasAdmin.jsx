import styled from 'styled-components';
import SmallLabel from '../atoms/SmallLabel';
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

const HerramientasAdmin = () => {
    return ( 
        <>
        <OpcionesNavAdmin msn="Salir" estilo={true} pequeno={false} ></OpcionesNavAdmin>
        <StyledWrapperContainerGray>
        <OpcionesNavAdmin estilo={true}  msn="[X, Y, Z] mm |  Rot[Z,Y', Z' ']deg - Adept/Comau/Kawasaki"></OpcionesNavAdmin>
        </StyledWrapperContainerGray>
        </>
     );
}
 
export default HerramientasAdmin;