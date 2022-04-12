import './Contact.css'
import users from "../../DB/DB";

function Contact(props) {
    let p;
    if(props.img ===""  ){
        return (
            <div className="contact">
                <div style={{width:"70px", height:"70px"}}></div>
                <div className="position-absolute top-50 start-50 translate-middle">{props.name}</div>
            </div>
        );

    }else {
        p = props.img
        var pic = require("../../DB/profilePictures/".concat("",p));
        return (
            <div className="contact">
                <div style={{backgroundImage: `url(${pic})`, backgroundSize:"cover", width:"70px", height:"70px", borderRadius:"50%", clipPath: "circle()", backgroundPosition: "center center"}}></div>
                <span className="position-absolute top-50 start-50 translate-middle">{props.name}</span>
            </div>
        );

    }



}
export default Contact