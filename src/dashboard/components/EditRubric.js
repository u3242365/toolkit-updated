import React from "react";

import './EditRubric.css'
import { useState, useEffect} from "react";
import { searchParticularRubric } from "../../action/auth";
import { ToastContainer,toast } from "react-toastify";
import SubcriteriaTables from "./SubcriteriaTables";
import CriteriaTable from "./CriteriaTable";

const EditRubric = () => {
    const [loading, setLoading] = useState(false);

  const [classLevel,setClassLevel] = useState(()=>{
    return "";
  }); 
  const [subject,setSubject] = useState(()=>{
    return "";
  }); 
  const [assessment,setAssessment] = useState(()=>{
    return "";
  }); 

//   for dynamic dropdown purpose
  const [assessmentTypes, setAssessmentType] = useState([]);

//   to update rubric data based on current query
const [rubricData,setrubricData] = useState(()=>{
    return {};
})

const [isEnglishWLS, setIsEnglishWLS] = useState(false);

// function to handle the subject change in the dropdown
  const handleSubjectChange = (e) =>{
    const selectedSubject = e.target.value;
    setSubject(selectedSubject);
      // update assessment type based on subject
    const assessmentTypeforSubject = getAssessmentTypes(selectedSubject);
    setAssessmentType(assessmentTypeforSubject);
  }

// function to handle search rubric button

const handleSearchRubric = async() =>{
    setLoading(true);
    const query = {"classLevel":classLevel,"subject":subject,"assessment":assessment}

    try{
        const response = await searchParticularRubric(query);
        console.log("response",response.data.data);
        setrubricData(response.data.data)
        setIsEnglishWLS((subject === 'English') && (assessment === 'Writing' || assessment === "Listening and Speaking"));
        

    }catch(err){
        console.log("Getting error retrieving specific rubric")
        toast.error("No rubric found for this assessment. Choose your search key appropriately");

    }finally{
        setLoading(false);
        setClassLevel("");
        setSubject("")
        setAssessment("")
    }
}


  const getAssessmentTypes = (selectedSubject)=>{
    const assessmentTypes = {
      English:["Reading","Writing","Listening and Speaking"],
      ICT:["Project Work","Classwork","Homework","Critical Thinking"],
      Mathematics:["Classwork","Homework","Project Work","Group Presentation"],
      Social_Studies:["Homework","Classwork","Classroom Participation", "Project Work"],
      Science:["Classwork","Project Work","Presentation","Homework","Scrapbook"]
    }
    return assessmentTypes[selectedSubject] || [];
  }

  console.log("This is current class, subject and assessment",classLevel,subject,assessment)
  console.log("the rbric data is",rubricData);

// check if subject is English and assessment is Writing
console.log("is english with wrirint?",isEnglishWLS);

  return (
    <main className="editrubric-main-container">
      <div className="editrubric-header">
        <div className="main-title">
          <p className="font-weight-bold">EXPORT RUBRIC BY ASSESSMENT</p>
        </div>
      </div>
      <hr />
      <div className="editrubric-body-container">
        <p>Search for Rubric by Class Level, Subject and Assessment type</p>
        <hr className="inner-hr"/>
      <div className="form-row">
        <div className="label-container">
          <label htmlFor="field1">Class Level</label>
          <select id="field1" className="select-container" value={classLevel} onChange={(e)=>setClassLevel(e.target.value)}>
            <option value="">Select class level from here</option>
            <option value="Class IV">Class IV</option>
            <option value="Class V">Class V</option>
            <option value="Class VI">Class VI</option>
          </select>
        </div>
        <div className="label-container">
          <label htmlFor="field2">Subject</label>
          <select id="field2" className="select-container" onChange={handleSubjectChange} value={subject}>
            <option value="">Select subject from here</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Social_Studies">Social Studies</option>
            <option value="Science">Science</option>
            <option value="English">English</option>
            <option value="ICT">ICT</option>


          </select>
        </div>
        <div className="label-container">
          <label htmlFor="field3">Assessment Type</label>
          <select id="field3" className="select-container" value={assessment} onChange={(e) => setAssessment(e.target.value)}>
            <option value="option1">Select Assessment type from here</option>
            {assessmentTypes.length>0 && assessmentTypes.map((type) =>(
              <option key = {type} value={type}>{type}</option>

            ) )}
          </select>
        </div>
      </div>
   

      <div className="submit-row">
        <button className="search-rubric" onClick={handleSearchRubric}>Search Rubric</button>
      </div>

      </div>

      <div className="result-container">
        <p>Rubric Result</p>
        <hr className="inner-hr"/>

        {isEnglishWLS ? <SubcriteriaTables rubricData={rubricData}/>:<CriteriaTable rubricData={rubricData} />}

      </div>
      <ToastContainer/>
      

    </main>
  );
};

export default EditRubric;