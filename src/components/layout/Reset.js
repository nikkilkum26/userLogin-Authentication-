import React, {useState} from 'react';

import './Login.css';
import {useHistory} from 'react-router-dom';
import M from 'materialize-css';


function Reset() {

    const history =useHistory();
    const [email,setEmail]= useState("");

    let sendData=()=>{
        if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))){
           M.toast({html: "Invalid Email",classes:"#d50000 red accent-4"})
           return 
        }
        fetch("http://localhost:5000/auth/resetpassword",{   
        method:"post",
        headers:{
            "Content-type":"application/json"
        },
        body: JSON.stringify({
            email
     
        })

    }).then(res=>res.json())
    .then(e=>{
        
        if(e.error){
            M.toast({html: e.error,classes:"#ab47bc purple lighten-1"})
        }
        else{
           
            M.toast({html: e.message ,classes:"#388e3c green darken-2"})
            history.push('/signin')
        }
    }).catch(err=>{
        console.log(err)
    })
    }
    return (
        <div className="layout__login">
            <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                    <h2 className="layout__loginH2">Reset password</h2>
                    <input type="text" className="login__font" placeholder="Email" value= {email} onChange={e=> setEmail(e.target.value)} />
                    <div className="btn__login">
                    <button className="btn waves-effect waves-light #212121 grey darken-4 " type="submit" name="action"  onClick={()=>sendData()}>Reset password
    
                    </button> </div>
                </div>
            </div>
        </div>
    )
}

export default Reset
