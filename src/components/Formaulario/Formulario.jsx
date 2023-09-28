import { useState } from "react";
import PropTypes from "prop-types";

const Formaulario = ({setMsg,setError,setExito}) => {

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")

    // const [error, setError] = useState(false)
    // const [msg, setMsg] = useState("")
    // const [exito, setExito] = useState(false)
    // const [pas, setPas] = useState(false)

    const manejarEnvio = (e) => {
        e.preventDefault()
        if (nombre.trim() === "" || email.trim()=== "" || password.trim()  === "" || password2.trim() === "") {
            setError(true)
            setExito(false)
            setMsg(`Todos los campos son necesarios.`)
            return
        }
        else if (password.trim() !== password2.trim()){
            setError(true)
            setExito(false)
            setMsg(`Las contraseñas no coinciden.`)
            return
        }
        else{
            setError(false)
            setExito(true)
            setMsg(`Formulario enviado.`)
            setNombre("")
            setEmail("")
            setPassword("")
            setPassword2("")
        }
    }

    return (
        <div className=" w-100 d-inline-block">
            <form onSubmit={manejarEnvio} className="d-flex flex-column gap-3">
                <div className="">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="User Name"
                        value={nombre}
                        onChange={(e)=>setNombre(e.target.value)}
                        id="" />
                </div>
                <div>
                    <input
                        className="form-control"
                        type="mail"
                        placeholder="Enter E-mail"
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                        />
                </div>
                <div>
                    <input
                        className="form-control"
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        id="" />
                </div>
                <div>
                    <input
                        className="form-control"
                        type="password"
                        placeholder="Repeat password"
                        value={password2}
                        onChange={(e)=>setPassword2(e.target.value)}
                        name=""
                        id="" />
                </div>
                <div>
                    <button
                        className="btn btn-success mt-3 w-100"
                        type="submit">
                        Registrar
                    </button>
                    
                </div>
            </form>
     
        </div>
    );
};

Formaulario.propTypes = {
    setMsg: PropTypes.string.isRequired ,
    setError: PropTypes.string.isRequired,
    setExito: PropTypes.string.isRequired
}

export default Formaulario;
