import './App.css';
import React from 'react'
function App() {
 // const students=['Raj','Sid','Marry','Alex']
const students=[
  {name:"raj",email:"raj@test.com", contact:123},
  {name:"sid",email:"sid@test.com", contact:234},
  {name:"marry",email:"marryj@test.com", contact:456},
  {name:"alex",email:"alex@test.com", contact:567},
]
  return(
    <div className="App">
    <h1> List with Bootstrap Table</h1>
    <table border="1">
    {
      students.map((data)=>
      <tr>
        <td>{data.name}</td>
        <td>{data.email}</td>
        <td>{data.contact}</td>
      </tr>
      )
    }
    </table>
        
     </div>
    );
  } 
export default App; 