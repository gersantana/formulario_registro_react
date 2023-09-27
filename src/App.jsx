import { useState } from "react";

import "./App.css";
import Formaulario from "./components/Formaulario/Formulario";
import Alerts from "./components/Alerts/Alerts";

const App = () => {
    const [msg, setMsg] = useState("")
    const [error, setError] = useState(false)
    const [exito, setExito] = useState(false)

	return (
		<div>
			<Formaulario setMsg={setMsg} setError={setError} setExito={setExito} />
		{error &&	<Alerts color={"danger"} msg={msg}/>}
    {exito &&	<Alerts color={"success"} msg={msg}/>}
    {/* <Alerts msg={msg} color={exito ? "success" : error ? "danger"  : ""} /> */}

		</div>
	);
};

export default App;
