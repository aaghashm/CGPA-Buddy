import React, { useState,useEffect } from "react";
import { Select } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./QuickCGPACalculator.css";
import CustomAlert from "../components/CustomAlert";
import departments from "../departments";

const QuickCGPACalculator = () => {
  const [semester, setSemester] = useState("1");
  const [department, setDepartment] = useState("CSE & ALLIED BRANCHES");
  const [grades, setGrades] = useState({});
  const [alertIsOpen, setAlertIsOpen] = useState(false); // State for controlling CustomAlert
  const [alertHeader, setAlertHeader] = useState(""); // State for alert header
  const [alertText, setAlertText] = useState(""); 
  const [selectedSubject, setSelectedSubject] = useState(null); // State for tracking selected subject
  // Define subjects, credits, and departments


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
      alertMessage += `Arrear Subject Names:\n ${failedSubjects.join(",\n ")}\n`;
    }
  
    openAlert("Here you go!", alertMessage);
  };
  

  return (

    <div className="quick-cgpa-calculator">
      <Header
        titleWord1="QUICK"
        titleWord2="CGPA"
        titleWord3="CALCULATOR"
        image="Quick Calculate.png"
      />
       <CustomAlert isOpen={alertIsOpen} onClose={() => setAlertIsOpen(false)} header={alertHeader} alertText={alertText} />
      <div className="semester-selection-frame">
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
            <div className="subname" onClick={() => handleClickSubject(subjectData)} >{subjectData.subject}</div></div>
            <div className="group-select-container">
              <Select
              iconSize={28}
                className="group-select"
                w="179px"
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
                <option value={999}>0 (U) -- Arrear</option>
              </Select>
            </div>
          </div>
        ))}
      </div>
      <div className="analuse-button-wrapper">
        <div className="analuse-button7" onClick={calculateCGPA}>
          <b className="calculate-now">CALCULATE NOW</b>
          <img className="analuse-button-child3" alt="" src="/arrow-1.svg" />
        </div>
      </div>
    </form>
  )}
</section>


      <Footer />
    </div>
  );
};


export default QuickCGPACalculator;
