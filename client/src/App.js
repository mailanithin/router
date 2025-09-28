
import { useState } from 'react';
import './App.css';

function App() {

let [profile,setProfile]=useState([]);

  let gettingDataFromServer = async ()=>{
    let reqOptions = {
      method:"GET",
    }

    let JSONData = await fetch("http://localhost:8585/heroes",reqOptions);

    let JSOData = await JSONData.json();

   setProfile(JSOData)
  }
  return (
    <div className="App">
      <button type='button' onClick={()=>{
         gettingDataFromServer();
      }}>click here</button>
      {profile.map((ele,i)=>{
        return <div key={i}>
          <h1 >{ele}</h1>
        </div>
      })}
    </div>
  );
}

export default App;
