import React, { useState, useCallback } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import M from 'materialize-css';
function Signup() {
    const history = useHistory();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    
    
    let signup = useCallback(()=>{
        if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))) {
            M.toast({ html: "Invalid Email", classes: "#d50000 red accent-4" })
            return
        }
        fetch("https://userloginauthenticationsystem.herokuapp.com/auth/signup", {
            method: "post",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                name,
                password,
                email,
                
            })

        }).then(res => res.json())
            .then(e => {
                if (e.error) {
                    M.toast({ html: e.error, classes: "#ab47bc purple lighten-1" })
                }
                else {
                    M.toast({ html: e.message, classes: "#388e3c green darken-2" })
                    history.push('/signin')
                }
            }).catch(err => {
                console.log(err)
            })
    },[email,history,name,password])

   
    

    let sendData = () => {
        
        signup()
       
}

    return (
        <div className="layout__login">
            <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                    <h2 className="layout__loginH2">User Login System</h2>
                    <input type="text" className="login__font" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                    <input type="text" className="login__font" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                    <input type="password" className="login__font" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                    
                    <div className="btn__login">
                        <button className="btn waves-effect waves-light #212121 grey darken-4 " type="submit" name="action" onClick={() => sendData()}>SignUp

                </button> </div>
                    <h6 className="layout__h6"><Link to="/signin" >Already have an account?</Link></h6>

                </div>
            </div>
        </div>
    )
}


export default Signup
