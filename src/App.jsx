import { useState } from 'react'
import {puppyList} from './data.js'
import './App.css'


function App() {


const [puppies, setPuppies] = useState(puppyList);
const [featPupId, setFeatPupId] = useState(null);

console.log("puppyList: ", puppyList);

return (
  <div className="App">
    {
      const featuredPup = puppies.find((pup)=> pup.id === featPupId)
      puppies.map((puppy) => {
           return (
            <p onClick={()=>{}} key={puppy.id}>{puppy.name}</p>
           );
         })}
         {()=>{console.log("puppy id: ", puppy.id)}}
         {featuPupID && <p>{ featPupId }</p>}
  </div>
);
}
onClick={()=>{ setFeatPupId(puppy.id)}};

{featPupId && (
  <div>
    <h2>{featuredPup.name}</h2>
    <ul>
      <li>Age: {featuredPup.age}</li>
      <li>Email: {featuredPup.email}</li>
    </ul>
  </div>
)}

export default App
