import Navbar from "../components/organism/Navbar";
import styles from "../../assets/components/styles/PilotajesAdmin.css"
import BodyPilotajesAdmin from "../components/organism/BodyPilotajesAdmin";
import Fotter from "../components/organism/Fotter";
const PilotajesAdmin = () => {
    return (
        <>
         <Navbar></Navbar>
         <BodyPilotajesAdmin></BodyPilotajesAdmin>
         <Fotter></Fotter>
        </>
      
     );
}
 
export default PilotajesAdmin;