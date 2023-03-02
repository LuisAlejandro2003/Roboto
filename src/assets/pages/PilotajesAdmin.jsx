import Navbar from "../components/organism/Navbar";
import styles from "../../assets/components/styles/PilotajesAdmin.css"
import BodyPilotajesAdmin from "../components/organism/BodyPilotajesAdmin";

import ListEnlaces from "../components/organism/ListaEnlaces";

const PilotajesAdmin = () => {
    return (
        <>
         <Navbar></Navbar>
         <BodyPilotajesAdmin></BodyPilotajesAdmin>

 
         <ListEnlaces></ListEnlaces>

        </>
      
     );
}
export default PilotajesAdmin;