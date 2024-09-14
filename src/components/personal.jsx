import { useState } from "react";
import "../styles/personal.css"

export default function Personal(){
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [submit, toggleSubmit] = useState(false)
  
    function Submit(){
      toggleSubmit(true)
    }
    function Edit() {
      toggleSubmit(false)
    }
    
      if (!submit)return (
      <div className="personal-form">
     <label >
      Name:
      {" "}
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
     </label>
     <label >
      Email:
      {" "}
      <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
     </label>
     <label >
      Phone Number:
      {" "}
      <input
          type="tel"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
     </label>
     <button className="submit" onClick={Submit}>Submit</button>
     </div>
     )
    if (submit) return(
      <div className="personal-submit">
      <h1>Name: {name}</h1>
      <h1>Email: {email}</h1>
      <h1>Phone Number: {phone}</h1>
      <button className="submit" onClick={Edit}>Edit</button>
      </div>
    )
    
}