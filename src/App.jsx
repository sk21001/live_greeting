import { useState } from "react"
import Greeting from "./Greeting"
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  
  const [name,setName]=useState('')
  const [submittedName,setSubmittedName]=useState('')

  const handleSubmit=()=>{
     if (name.trim() === "") {
      alert("username cannot be empty")
    return
  }
    setSubmittedName(name)
    setName('')
  }

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 vw-100 ">
    <div className="h-75 w-75 bg-dark rounded-4 d-flex flex-column justify-content-center align-items-center">
    <div className=" d-flex gap-2" >
          <input className="form-control" type="Text" placeholder="Enter your name" value={name} onChange={(e)=>{setName(e.target.value)}} ></input>
          <button className="btn btn-primary rounded-2" onClick={handleSubmit} >Submit</button>
    </div>
   
    {submittedName && <Greeting name={submittedName} />}
    { submittedName && <button className="btn btn-danger" onClick={()=>setSubmittedName('')} >Clear</button>}  
     </div>
    </div>
  )
}

export default App