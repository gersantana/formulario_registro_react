import Card from 'react-bootstrap/Card';
import { FaFacebook, FaGithub, FaHeart, FaLinkedin, FaLinkedinIn } from "react-icons/fa";
import Iconos from '../icons/iconos';

const Registro = () => {
    return (
        <>
        <Card style={{ width: '30rem' }}>
        <Card.Body>
        <h1><strong>Crea una Cuenta</strong></h1>
        <Card.Text>
        <Iconos/>
        <br></br>
         O usa tu email para registrarte
        </Card.Text>
      </Card.Body>
    </Card>
    </>
    )
}
export  default Registro