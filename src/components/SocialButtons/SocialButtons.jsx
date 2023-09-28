import { FaFacebook, FaGithub, FaLinkedin} from "react-icons/fa";

const SocialButtons = () => {
	return (
		<div className=" d-flex justify-content-center gap-4 mt-1 mb-1">
			<FaFacebook style={{ color: "black", fontSize: "50px" }} />
			<FaGithub style={{ color: "black", fontSize: "50px" }} />
			<FaLinkedin style={{ color: "black", fontSize: "50px" }} />
		</div>
	);
};
export default SocialButtons;
