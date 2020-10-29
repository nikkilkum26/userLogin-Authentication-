import React, {  useContext } from 'react';
import './Profile.css';
import { UserContext } from '../../App'


function Profile() {

    const { state } = useContext(UserContext);

    
    return (
        <div className="layout__profile">
            <div className="profile__disp">
               
                <div>
                    <h4 style={{fontWeight:"600"}}>{state?state.name:"Loading..."}</h4>
                    <h5 style={{color:"blue"}}>{state?state.email:"Loading..."}</h5>
                    
                </div>
       

            </div>
            <div>
            <p> Simple user Login Authentication system using Mern stack </p>
        </div>
        </div>

    )
}

export default Profile
