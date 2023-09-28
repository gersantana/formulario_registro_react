import { useState } from "react";
import Card from "react-bootstrap/Card";
import SocialButtons from "../SocialButtons/SocialButtons";
import Formaulario from "../Formaulario/Formulario";
import Alerts from "../Alerts/Alerts";

const Registro = () => {
	const [msg, setMsg] = useState("");
	const [error, setError] = useState(false);
	const [exito, setExito] = useState(false);

	return (
		<>
    
			<Card className="  text-center rounded-5">
				<Card.Body className="d-flex flex-column mb-4 mt-4">
					<h1>
						<strong >Crea una Cuenta</strong>
					</h1>
					<SocialButtons/>
					<h6 style={{fontWeight:900}}className="mt-3 mb-3">O usa tu email para registrarte</h6>
					<Formaulario setMsg={setMsg} setError={setError} setExito={setExito} />
					{error && <Alerts color={"danger"} msg={msg} />}
					{exito && <Alerts color={"success"} msg={msg} />}
				</Card.Body>
			</Card>
 
		</>
	);
};
export default Registro;
