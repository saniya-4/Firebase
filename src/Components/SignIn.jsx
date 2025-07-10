import React,{useState} from "react"
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import {app} from '../firebase'
const auth=getAuth(app);
const SignInPage=()=>
{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const signInUser=()=>
        {
            signInWithEmailAndPassword(
                auth,
                email,
                password
            ).then(()=>console.log('signIn success')
        ).catch((err)=>console.log(err));
        }
    return(
        
        <div className="signIn-page">
            <h1>SignIn page</h1>
            <label>Enter Your email</label>
            <input type="email" 
            value={email}
             placeholder="Enter your Email"
              onChange={(e)=>setEmail(e.target.value)}/>
              <label>Enter Your Password</label>
              <input type="password" value={password} placeholder="Enter your password"
              onChange={(e)=>setPassword(e.target.value)}/>
              <button onClick={signInUser}>Sign Me In</button>
        </div>
    )
}
export default SignInPage;