import React, { useState,useEffect } from "react";
import { Select } from "@chakra-ui/react";
import HEADERMOB from "../components/HeaderMob";
import FOOTERFRAME from "../components/FooterFrame";
import "./QuickCGPAMob.css";
import CustomAlert from "../../components/CustomAlert";

const QuickCGPAMob = () => {
  const [semester, setSemester] = useState("1");
  const [department, setDepartment] = useState("CSE & ALLIED BRANCHES");
  const [grades, setGrades] = useState({});
  const [alertIsOpen, setAlertIsOpen] = useState(false); // State for controlling CustomAlert
  const [alertHeader, setAlertHeader] = useState(""); // State for alert header
  const [alertText, setAlertText] = useState(""); 
  const [selectedSubject, setSelectedSubject] = useState(null);
  // Define subjects, credits, and departments
  const departments = {
    "CSE & ALLIED BRANCHES": {
      semesters: {
        "1": [
          { subject: "Physical Sciences", credit: 4 },
          { subject: "Physical Sciences Laboratory", credit: 1.5 },
          { subject: "Agile Product Development", credit: 3 },
          { subject: "Programming for Problem Solving(c++)", credit: 4 },
          { subject: "Designing web Applications using HTML,CSS...", credit: 3 },
          { subject: "Digital Logic and Design", credit: 4 },
          { subject: "Discrete Mathematics", credit: 4 }
        ],
        "2": [
          { subject: "Computer Organisation and Architecture", credit: 3 },
          { subject: "PC Hardware and Trouble Shooting Laboratory", credit: 1.5 },
          { subject: "Applied Linear Algebra", credit: 4 },
          { subject: "Technical English", credit: 3 },
          { subject: "Spoken English Laboratory", credit: 1.5 },
          { subject: "Data Structures and Algorithms", credit: 4 },
          { subject: "Managing Data using RDBMS", credit: 4 },
          { subject: "Java Fundamentals", credit: 3 },
          { subject: "Heritage of Tamils", credit: 1 }
        ],
        
        "3": [
          { subject: "Universal Human Values", credit: 3 },
          { subject: "Operating Systems", credit: 4 },
          { subject: "Probability and Statistics", credit: 4 },
          { subject: "Design and Analysis of Algorithms", credit: 3 },
          { subject: "Advanced Java Programming", credit: 3 },
          { subject: "Front End Development using React", credit: 3 },
          { subject: "Tamils and Technology", credit: 1 }
       ],
        // Define other semesters here
      }
    },
    ECE: {
      semesters: {
        "1": [
         { subject: "Technical English", credit: 3 },
          { subject: "Linear Algebra and Calculus", credit: 4 },
          { subject: "Spoken English Laboratory", credit: 1.5 },
          { subject: "Workshop and Manufacturing Practices Laboratory", credit: 1.5 },
          { subject: "Agile Product Development and Developer Tools", credit: 3 },
          { subject: "Programming for Problem Solving", credit: 4 },
          { subject: "Designing web Applications using HTML,CSS...", credit: 3 },
        ],
        "2": [
        { subject: "Circuit Theory and Electronic Devices", credit: 3 },
          { subject: "Statistics and Complex Analysis", credit: 4 },
          { subject: "Physical Sciences", credit: 4 },
          { subject: "Physical Sciences Laboratory", credit: 1.5 },
          { subject: "Circuit Theory Laboratory", credit: 1.5 },
          { subject: "Managing Data using RDBMS", credit: 4 },
          { subject: "Java Fundamentals", credit: 3 },
          { subject: "Data Structures and Algorithms", credit: 4 }
        ],
        "3":[],
        // Define other semesters here
      }
    },
    EEE: {
      semesters: {
        "1": [
          { subject: "Technical English", credit: 3 },
           { subject: "Transform Calculus", credit: 4 },
           { subject: "Spoken English Laboratory", credit: 1.5 },
           { subject: "Engineering Graphics Laboratory", credit: 1.5 },
           { subject: "Agile Product Development and Developer Tools", credit: 3 },
           { subject: "Programming for Problem Solving", credit: 4 },
           { subject: "Designing web Applications using HTML,CSS...", credit: 3 },
         ],
        "2": [
          { subject: "Probability and Numerical Methods", credit: 4 },
          { subject: "Workshop and Manufacturing Practices", credit: 2 },
          { subject: "Physical Sciences", credit: 4},
          { subject: "Physical Sciences Laboratory", credit: 1.5 },
          { subject: "Data Structures and Algorithms", credit: 4 },
          { subject: "RDBMS", credit: 4 },
          { subject: "Java Fundamentals", credit: 3 },
          { subject: "Heritage of Tamils", credit: 1 }
        ],
        /*
        "3":[
          { subject: "Universal Human Values", credit: 3 },
          { subject: "Electromagnetic Fields", credit: 4 },
          { subject: "Circuits and Devices", credit: 4},
          { subject: "DC Machines and Transformers", credit: 3 },
          { subject: "Tamils and Technology", credit: 1 },
          { subject: "Circuits and Devices Laboratory", credit: 1.5 },
          { subject: "DC Machines and Transformers Laboratory", credit: 1.5 },
        ],
        // Define other semesters here
        */
      }
    },
    MECHANICAL: {
      semesters: {
        "1": [
          { subject: "Basic Electrical and Electronics Engineering", credit: 4 },
          { subject: "Technical English", credit: 3 },
          { subject: "Spoken English Laboratory", credit: 1.5 },
          { subject: "Matrices, Differential Equations and Fourier Series", credit: 4 },
          { subject: "Engineering Drawing", credit: 4 },
          { subject: "Problem Solving Using C++", credit: 4 },
        ],
        "2": [
          { subject: "Calculas,Laplace Transforms and Statistics", credit: 4 },
          { subject: "Engineering Mechanics", credit: 4 },
          { subject: "Manufacturing Technology - I (with lab)", credit: 4 },
          { subject: "Physical Sciences", credit: 4 },
          { subject: "Physical Sciences Laboratory", credit: 1.5 },
          { subject: "Java Programming", credit: 4 },
          { subject: "Heritage of Tamils", credit: 1 },
        ],
        "3":[],
        // Define other semesters here
      }
    },
    CIVIL: {
      semesters: {
        "1": [
        /*  { subject: "Computer Organisation and Architecture", credit: 3 },
          { subject: "PC Hardware and Trouble Shooting", credit: 3 },
          { subject: "Applied Linear Algebra", credit: 3 },
          { subject: "Spoken English Laboratory", credit: 1 },
          { subject: "Data Structures and Algorithms", credit: 4 },
          { subject: "RDBMS", credit: 3 },
          { subject: "Java Fundamentals", credit: 3 },
          { subject: "Heritage of Tamils", credit: 3 }
        */],
        "2": [
        /*  { subject: "Computer Organisation and Architecture", credit: 3 },
          { subject: "PC Hardware and Trouble Shooting", credit: 3 },
          { subject: "Applied Linear Algebra", credit: 3 },
          { subject: "Spoken English Laboratory", credit: 1 },
          { subject: "Data Structures and Algorithms", credit: 4 },
          { subject: "RDBMS", credit: 3 },
          { subject: "Java Fundamentals", credit: 3 },
          { subject: "Heritage of Tamils", credit: 3 }
        */],
        "3":[],
        // Define other semesters here
      }
    }
  };

  const handleSemesterChange = (e) => {
    setSemester(e.target.value);
  };

  const handleClickSubject = (subjectData) => {
    setSelectedSubject(subjectData);
    // Construct alert message
    const alertMessage = `Name: ${subjectData.subject}\nCredits: ${subjectData.credit}\nDepartment: ${department}\nSemester: ${semester}`;
    openAlert("Subject Details", alertMessage);
  };

  const handleDepartmentChange = (e) => {
    setDepartment(e.target.value);
  };

  useEffect(() => {
    // Reset grades when semester or department changes
    setGrades({});
  }, [semester, department]);

  const handleGradeChange = (subject, grade) => {
    setGrades((prevGrades) => ({
      ...prevGrades,
      [subject]: grade
    }));
  };
  const openAlert = (header, text) => {
    setAlertHeader(header);
    setAlertText(text);
    setAlertIsOpen(true);
  };

  const closeAlert = () => {
    setAlertIsOpen(false);
  };
  const calculateCGPA = () => {
    event.preventDefault();
    const subjects = departments[department].semesters[semester];
    let totalCredits = 0;
    let totalGradePoints = 0;
    let failedSubjects = [];
  
    for (const subjectData of subjects) {
      const { subject, credit } = subjectData;
      const grade = grades[subject];
  
      if (grade === undefined || grade === -1) {
        console.error(`Grade for ${subject} not provided.`);
        openAlert("OOPS!",`Please choose a grade for ${subject}.`);
        return;
      }
  
      if (grade>100) {
        failedSubjects.push(subject);
        continue; // Skip failed subjects from calculation
      }
  
      totalCredits += credit;
      totalGradePoints += credit * grade;
    }
  
    if (totalCredits === 0) {
      openAlert("OOPS!","No subjects found for calculation.");
      return;
    }
  
    const cgpa = totalGradePoints / totalCredits;
    const failedCount = failedSubjects.length;
    let alertMessage = `CGPA: ${cgpa.toFixed(2)}\n`;
    
    if (failedCount > 0) {
      alertMessage += `No of Arrears: ${failedCount}\n`;
      alertMessage += `Arrear Subject Names: ${failedSubjects.join(", ")}\n`;
    }
  
    openAlert("Here you go!", alertMessage);
  };
  

  return (
    <div className="quick-cgpa-calculator">
      <HEADERMOB
        word1="QUICK"
        word2=" CGPA"
        word3="CALCULATOR"
        image="Quick Calculate.png"
      />
 <CustomAlert isOpen={alertIsOpen} onClose={() => setAlertIsOpen(false)} header={alertHeader} alertText={alertText} />
        <div className="depsem">
       <div className="department-selection-frame">
          <h3 className="semester">Semester</h3>
          <Select
            className="select-semester"
            backgroundColor="#F2F4F7"
            value={semester}
            onChange={handleSemesterChange}
          >
            {Object.keys(departments[department].semesters).map((sem) => (
              <option key={sem} value={sem}>
                {sem}
              </option>
            ))}
          </Select>
        </div>
        <div className="semester-selection-frame">
          <h3 className="department">Department</h3>
          <Select
            className="select-department"
            backgroundColor="#F2F4F7"
            value={department}
            onChange={handleDepartmentChange}
          >
            {Object.keys(departments).map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </Select>
        </div>
        </div>
      <section className="form-body-wrapper">
      {(!departments[department].semesters[semester] || departments[department].semesters[semester].length === 0) ? (
        <form className="form-body">
            <b className="form-title">Data Is Unavailable</b>
            <div className="subname">Kindly contact aaghashm@gmail.com</div>
        </form>
      ) : (
    <form className="form-body">
      <div className="form-container" />
      <div className="subjects-list">
        <b className="form-title">Enter Grades for Respective Subjects</b>
        {departments[department].semesters[semester].map((subjectData, index) => (
                    <div key={index} className={`subject ${selectedSubject === subjectData ? 'selected' : ''}`} >

            <div className="subject-item" />
            <div className="subcover">
                        <div className="subname" onClick={() => handleClickSubject(subjectData)}>{subjectData.subject}</div></div>
                                                <div className="group-select-container">
                                                <Select
                                                    className="group-select"
                                                    w="100px" 
                                                    backgroundColor="#F2F4F7"
                                                    onChange={(e) => handleGradeChange(subjectData.subject, parseInt(e.target.value))}
                                                    required
                                                    value={grades[subjectData.subject] || -1} 
                                                >
                                                    <option value= {-1} disabled>
                                                    --Select Grade--
                                                    </option>
                                                    <option value={10}>10 (O)</option>
                                                    <option value={9}>9 (A+)</option>
                                                    <option value={8}>8 (A)</option>
                                                    <option value={7}>7 (B+)</option>
                                                    <option value={6}>6 (B)</option>
                                                    <option value={5}>5 (C+)</option>
                                                    <option value={4}>4 (C)</option>
                                                    <option value={999}>0 (U) --Arrear</option>
                                                </Select>
                                                
                                                </div>
                    </div>
                 
        ))}
      </div>
      <button className="CALCULATE-NOW-BUTTON1" onClick={calculateCGPA} >
            <div className="ANALYZE-NOW-BUTTON-FRAME">
              <b className="QCB-BODY">CALCULATE NOW</b>
            </div>
            <img
              className="CALCULATE-NOW-BUTTON-CHILD"
              alt=""
              src="/arrow-1.svg"
            />
          </button>
    </form>
  )}
</section>


      <FOOTERFRAME />
    </div>
  );
};


export default QuickCGPAMob;
