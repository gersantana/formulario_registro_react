import { useState } from "react";

const Formaulario = () => {
	return (
		<form >
            <div>
			<input type="text" placeholder="User Name"  name="" id="" />
            </div>
            <div>
                <input type="mail" placeholder="Enter E-mail"  />
            </div>
            <div>
                <input type="passsword" placeholder="Enter password"  name="" id="" />
            </div>
            <div>
                <input type="password" placeholder="Repeat password"  name="" id="" />
            </div>
            <div>
                <button  type="submit">Registrar</button>
            </div>
		</form>
	);
};

export default Formaulario;


// className="btn btn-primary mt-4 "