import React,{useState} from 'react'
import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth'
import {app} from '../firebase'
const SignUpPage=()=>
{
    const auth=getAuth(app);
    const [email,setEmail]=useState("");
    const [passwd,setPasswd]=useState("");
    const createUser=()=>
    {
        createUserWithEmailAndPassword(
            auth,
            email,
            passwd
        ).then((value)=>alert('success'));
    }
    return(
        <div className="signup-page">
            <label>Email</label>
            <input  onChange={(e)=>setEmail(e.target.value)} value={email} type="email" required placeholder="Enter your email"/>
            <label>Password</label>
            <input  onChange={(e)=>setPasswd(e.target.value)} value={passwd}  type="Password" required placeholder="Enter your password"/>
            <button onClick={createUser}>SignUp</button>
        </div>
    )
}
export default SignUpPage;