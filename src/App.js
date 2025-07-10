import { getDatabase ,ref,set} from 'firebase/database';
import {getAuth,createUserWithEmailAndPassword,onAuthStateChanged,signOut} from 'firebase/auth'
import {useEffect,useState} from "react";
import SignUpPage from './Components/pages';
import SignInPage from './Components/SignIn'
import {app} from './firebase'
import './App.css';
//user/saniya is the name of the root where we have to put the data
const db=getDatabase(app);
const auth=getAuth(app);
function App() {
  const [user,setUser]=useState(null);
  useEffect(() => {
    
    onAuthStateChanged(auth, (user) => {
      if(user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);
  if(user===null)
  {
    return (
    <div className="App">
      <SignUpPage/>
      <SignInPage/>
    </div>
  );
  }
  const signUp = () => {
    createUserWithEmailAndPassword(auth, 'saniyagarg@gmail.com', 'saniya123')
      .then((userCredential) => {
        const user = userCredential.user;
        // Write user data to database
        set(ref(db, 'users/' + user.uid), {
          email: user.email,
          // add other fields as needed
        });
        console.log('User signed up and data written to database');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const putData=()=>
  {
    set(ref(db,'users/saniya' ),{
      id:1,
      name:"saniya",
      age:19,
    })
  }
  return(
    <div className="App">
      <h1>Hello {user.email}</h1>
      <button onClick={()=>signOut(auth)}>SignOut</button>
    </div>

  )
  
}

export default App;
