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
        "3":[
          { subject: "Universal Human Values", credit: 3 },
          { subject: "Engineeringn Thermodynamics", credit: 3 },
          { subject: "Industrial Metallurgy", credit: 3 },
          { subject: "Manufacturing Technology II", credit: 3 },
          { subject: "Strength of Materials", credit: 4 },
          { subject: "Manufacturing Technology II Laboratory", credit: 1.5 },
          { subject: "OPEN ELECTIVE: Data Structures", credit: 3 },
          { subject: "Tamils and Technology", credit: 1 }
        ],
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

  export default departments;