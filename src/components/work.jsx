import { useState } from "react";
import "../styles/work.css"

export default function Work(){
  const [jobs, editJobs]=useState([{id: crypto.randomUUID(), company:"", role:"", responsibility:"", date:"", submitted:false}]);

  function Job({id, companyprop, roleprop, responseprop, dateprop, submitted}){
    const [company, setCompany]= useState(companyprop);
    const [role, setRole]=useState(roleprop);
    const [responsibility, setResponsibility]=useState(responseprop);
    const [date, setDate]=useState(dateprop);

    function Submit(){
      if (submitted === false){
        const jobInfo = {id, company, role, responsibility, date, submitted: true}
        console.log(jobInfo)
        editJobs([...jobs.map(workplace => {
          if (workplace.id !== id){
            return workplace
          } else{
            return jobInfo
          }})])
      } else if (submitted === true){
        const schoolInfo = {id, company, role, responsibility, date, submitted: false}
        editJobs([...jobs.map(workplace => {
          if (workplace.id !== id){
            return workplace
          } else{
            return schoolInfo
          }})])
      }
    }
    function Delete(){
      editJobs([...jobs.filter(workplace => workplace.id !== id)])
    }
    
    if (submitted === false) {
      return(
        <div className="work-form">
        <br/>
        <label>
          Company Name:
          {" "}
          <input
          type="text"
          value={company}
          onChange={(event) => setCompany(event.target.value)}
          />
        </label>
        <label>
          Position Title:
          {" "}
          <input
          type="text"
          value={role}
          onChange={(event) => setRole(event.target.value)}
          />
        </label>
        <label>
          Responsibilities:
          {" "}
          <input
          type="text"
          value={responsibility}
          onChange={(event) => setResponsibility(event.target.value)}
          />
        </label>
        <label>
          Dates Worked:
          {" "}
          <input
          type="text"
          value={date}
          onChange={(event) => setDate(event.target.value)}
          />
        </label>
        <button className="submit" onClick={Submit}>Submit</button>
        </div>
    )} else if (submitted === true){
      return(
        <div className="work-submit">
        <br/>
        <h1>Company Name: {company}</h1>
        <h1>Position Title: {role}</h1>
        <h1>Responsibilities: {responsibility}</h1>
        <h1>Dates Attended: {date}</h1>
        <div>
          <button className="submit" onClick={Submit}>Edit</button>
          <button className="submit" onClick={Delete}>Delete</button>
        </div>
        </div>
    )}
  }

  function Add() {
    editJobs([...jobs, {id:crypto.randomUUID(), company:"", role:"", responsibility:"", date:"", submitted:false}])
  }

  return(
    <div className="work">
    <h1>Work</h1>
    {jobs.map(workplace => <Job key={workplace.id} id={workplace.id} companyprop={workplace.company} roleprop={workplace.role} responseprop={workplace.responsibility} dateprop={workplace.date} submitted={workplace.submitted}/>)}
    <button className="add" onClick={Add}>+</button>
    </div>
  )
}