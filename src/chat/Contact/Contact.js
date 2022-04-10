import './Contact.css'
import users from "../../DB/DB";

function Contact(props) {
    return (

        <div className="contact">
            <img src={require("../../DB/profilePictures/".concat('',"harry.jpg"))} style={{width:"5%" , borderRadius: "50%", clipPath: "circle()" ,}}></img>
            <span className="position-absolute top-50 start-50 translate-middle">{props.name}</span>
        </div>
    );
}
export default Contact