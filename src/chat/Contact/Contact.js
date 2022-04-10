import './Contact.css'
import users from "../../DB/DB";

function Contact(props) {
    let p;
    if(props.img ===""  ){
        p = "default.jpg"
    }else {
        p = props.img
    }
    return (

        <div className="contact">
            <img src={require("../../DB/profilePictures/".concat('',p))} style={{width:"5%" , borderRadius: "50%", clipPath: "circle()" ,}} alt=""></img>

            <span className="position-absolute top-50 start-50 translate-middle">{props.name}</span>
        </div>
    );
}
export default Contact