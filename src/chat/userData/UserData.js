import './UserData.css'
import React from "react";

function UserData() {
    return (

        <div className="userData">
            <img src="img2.jpg" style={{width: "17%", borderRadius: "50%", clipPath: "circle()"}}/>
            <span className="position-absolute top-50 start-50 translate-middle">itay shwartz</span>

            <button id="addConversation" type="button" className="btn btn-outline-light">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="bi bi-person-plus-fill" viewBox="0 0 16 16">
                    <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                    <path fillRule="evenodd"
                          d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                </svg>


            </button>
        </div>
    );
}

export default UserData