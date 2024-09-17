import { useState } from "react";
import "../styles/work.css"

export default function Work(){
  const [jobs, editJobs]=useState([{id: crypto.randomUUID(), company:"", role:"", responsibility:"", date:"", submitted:false}]);
  let copyjobs = [];
  jobs.forEach(place => copyjobs.push(place))

  function Job({jobObject}){
    const [company, setCompany]= useState(jobObject.company);
    const [role, setRole]=useState(jobObject.role);
    const [responsibility, setResponsibility]=useState(jobObject.responsibility);
    const [date, setDate]=useState(jobObject.date);
    const id = jobObject.id;
    let copyIndex = null;
    for (let i=0; i<jobs.length; i++) {
      if (jobs[i].id === id){
        copyIndex = jobs[i]
      }
    }
    copyIndex.company = company;
    copyIndex.role = role;
    copyIndex.responsibility = responsibility;
    copyIndex.date = date;

    function Submit(){
      if (jobObject.submitted === false){
        const jobInfo = {id, company, role, responsibility, date, submitted: true}
        editJobs([...jobs.map(workplace => {
          if (workplace.id !== id){
            return workplace
          } else{
            return jobInfo
          }})])
      } else if (jobObject.submitted === true){
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
    
    if (jobObject.submitted === false) {
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
    )} else if (jobObject.submitted === true){
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
    editJobs([...copyjobs, {id:crypto.randomUUID(), company:"", role:"", responsibility:"", date:"", submitted:false}])
  }

  return(
    <div className="work">
    <h1>Work</h1>
    {jobs.map(workplace => <Job key={workplace.id} jobObject={workplace}/>)}
    <button className="add" onClick={Add}>+</button>
    </div>
  )
}