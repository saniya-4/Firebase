import { getDatabase ,ref,set} from 'firebase/database';
import {app} from './firebase'
import './App.css';
//user/saniya is the name of the root where we have to put the data
const db=getDatabase(app);
function App() {
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
      <h1>My firebase app</h1>
      <button className="button" onClick={putData}>Put data</button>
    </div>
  );
}

export default App;
