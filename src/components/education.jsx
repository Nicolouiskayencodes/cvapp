import { useState } from "react";
import "../styles/education.css"

export default function Education(){
  const [schools, editSchools]=useState([{id: crypto.randomUUID(), school:"", study: "", date:"", submitted:false}]);
  let copyschools = [];
  schools.forEach(place=>copyschools.push(place));


  function School({schoolObject}){
 

    const [school, setSchool]=useState(schoolObject.school)
    const [study, setStudy]=useState(schoolObject.study);
    const [date, setDate]=useState(schoolObject.date);
    const id = schoolObject.id;
    let copyIndex = null;
    for (let i=0; i<schools.length; i++) {
      if (schools[i].id === id){
        copyIndex = schools[i]
      }
    }
    copyIndex.school = school;
    copyIndex.study = study;
    copyIndex.date = date;

    function Submit(){
      if (schoolObject.submitted === false){
        const schoolInfo = {id, school, study, date, submitted: true}
        editSchools([...schools.map(place => {
          if (place.id !== id){
            return place
          } else{
            return schoolInfo
          }})])
      } else if (schoolObject.submitted === true){
        const schoolInfo = {id, school, study, date, submitted: false}
        editSchools([...schools.map(place => {
          if (place.id !== id){
            return place
          } else{
            return schoolInfo
          }})])
      }
    }
    function Delete(){
      editSchools([...schools.filter(place => place.id !== id)])
    }
    if (schoolObject.submitted ===false) {return(
      <div className="education-form">
      <br/>
      <label>
        School:
        {" "}
      <input
      type="text"
      value={school}
      onChange={(event) => setSchool(event.target.value)}
    />
      </label>
      <label>
        Field of Study:
        {" "}
        <input
      type="text"
      value={study}
      onChange={(event) => setStudy(event.target.value)}
    />
      </label>
      <label>
        Dates Attended:
        {" "}
        <input
      type="text"
      value={date}
      onChange={(event) => setDate(event.target.value)}
    />
      </label>
      <button className="submit" onClick={Submit}>Submit</button>
      </div>
    )} else if (schoolObject.submitted === true){
      return(
        <div className="education-submit">
        <br/>
        <h1>School: {school}</h1>
        <h1>Field of Study: {study}</h1>
        <h1>Dates Attended: {date}</h1>
        <div>
          <button className="submit" onClick={Submit}>Edit</button>
          <button className="submit" onClick={Delete}>Delete</button>
        </div>
        </div>
      )
    }
  }

  function Add() {
    editSchools([...copyschools, {id: crypto.randomUUID(), school:"", study: "", date:"", submitted:false}])
  }

  return(
    <div className="education">
    <h1>Eduction</h1>
    {schools.map(place => <School key={place.id} schoolObject={place}/>)}
    <button className="add" onClick={Add}>+</button>
    </div>
  )
}