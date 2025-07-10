import { getDatabase ,ref,set} from 'firebase/database';
import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth'
import SignUpPage from './Components/pages';
import SignInPage from './Components/SignIn'
import {app} from './firebase'
import './App.css';
//user/saniya is the name of the root where we have to put the data
const db=getDatabase(app);
const auth=getAuth(app);
function App() {
  const signUp=()=>
  {
    createUserWithEmailAndPassword(auth,'saniyagarg@gmail.com','saniya123').then((value)=>console.log(value));
  }
  const putData=()=>
  {
    set(ref(db,'users/saniya' ),{
      id:1,
      name:"saniya",
      age:19,
    })
  }
  return (
    <div className="App">
      <SignUpPage/>
      <SignInPage/>
    </div>
  );
}

export default App;
