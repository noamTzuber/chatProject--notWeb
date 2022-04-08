import './Contact.css'

function Contact({name}) {
    return (

        <div className="contact">
            <img src={require("../../DB/profilePictures/hermione.jpg")} style={{width:"5%" , borderRadius: "50%", clipPath: "circle()" ,}}></img>
            <span className="position-absolute top-50 start-50 translate-middle">{name}</span>
        </div>
    );
}
export default Contact