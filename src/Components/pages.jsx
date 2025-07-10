import React,{useState} from 'react'
import {getAuth,createUserWithEmailAndPassword,GoogleAuthProvider,
    signInWithPopup
} from 'firebase/auth'
import {app} from '../firebase'
const SignUpPage=()=>
{
    const googleProvider= new GoogleAuthProvider();
    const auth=getAuth(app);
    const [email,setEmail]=useState("");
    const [passwd,setPasswd]=useState("");
    const signupWithGoogle=()=>
    {
        signInWithPopup(auth,googleProvider);
    }
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
            <br/>
            <button onClick={signupWithGoogle}>Sign In with Google</button>
            <button onClick={createUser}>SignUp</button>
        </div>
    )
}
export default SignUpPage;