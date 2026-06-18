const job_requirements = {

    "Data Scientist":[
        "python",
        "machine learning",
        "data analysis",
        "statistics",
        "sql"
    ],

    "Software Engineer":[
        "java",
        "c++",
        "python",
        "algorithms"
    ],

    "Web Developer":[
        "html",
        "css",
        "javascript",
        "react",
        "node.js"
    ],

    "Data Analyst":[
        "sql",
        "excel",
        "statistics",
        "data visualization"
    ],

    "Frontend Developer":[
        "html",
        "css",
        "javascript",
        "react"
    ],

    "Backend Developer":[
        "python",
        "node.js",
        "sql",
        "api development"
    ],

    "Full Stack Developer":[
        "html",
        "css",
        "javascript",
        "python",
        "react",
        "sql"
    ],

    "Cybersecurity Analyst":[
        "cybersecurity",
        "network security",
        "threat analysis",
        "incident response"
    ],

    "Machine Learning Engineer":[
        "python",
        "machine learning",
        "deep learning",
        "data analysis"
    ],

    "Data Engineer":[
        "python",
        "sql",
        "data engineering",
        "data pipelines"
    ]
};

const courseRecommendations = {

    "python":"Python Programming",
    "machine learning":"Machine Learning",
    "data analysis":"Data Analysis",
    "statistics":"Statistics",
    "sql":"SQL Course",
    "java":"Java Programming",
    "c++":"C++ Programming",
    "algorithms":"Data Structures & Algorithms",
    "html":"HTML5",
    "css":"CSS3",
    "javascript":"JavaScript",
    "react":"React JS",
    "node.js":"Node JS",
    "excel":"Microsoft Excel",
    "data visualization":"Power BI",
    "api development":"REST API Development",
    "cybersecurity":"Cybersecurity Fundamentals",
    "network security":"Network Security",
    "threat analysis":"Threat Analysis",
    "incident response":"Incident Response",
    "deep learning":"Deep Learning",
    "data engineering":"Data Engineering",
    "data pipelines":"Data Pipelines"
};

const courseLinks = {

    "python":"https://www.coursera.org/learn/python",
    "machine learning":"https://www.coursera.org/learn/machine-learning",
    "data analysis":"https://www.coursera.org/professional-certificates/google-data-analytics",
    "statistics":"https://www.khanacademy.org/math/statistics-probability",
    "sql":"https://www.w3schools.com/sql/",
    "java":"https://www.udemy.com/course/java-the-complete-java-developer-course/",
    "c++":"https://www.learncpp.com/",
    "algorithms":"https://www.geeksforgeeks.org/dsa/",
    "html":"https://www.w3schools.com/html/",
    "css":"https://www.w3schools.com/css/",
    "javascript":"https://javascript.info/",
    "react":"https://react.dev/learn",
    "node.js":"https://nodejs.org/en/learn",
    "excel":"https://support.microsoft.com/excel",
    "data visualization":"https://learn.microsoft.com/en-us/power-bi/",
    "cybersecurity":"https://www.coursera.org/google-certificates/cybersecurity-certificate"
};

const companies = {

    "Data Scientist":[
        "Google",
        "Microsoft",
        "Amazon",
        "Infosys",
        "TCS"
    ],

    "Software Engineer":[
        "Google",
        "Amazon",
        "Microsoft",
        "Accenture",
        "Infosys"
    ],

    "Web Developer":[
        "Zoho",
        "Amazon",
        "TCS",
        "Infosys",
        "Cognizant"
    ],

    "Data Analyst":[
        "Deloitte",
        "EY",
        "KPMG",
        "Google",
        "Amazon"
    ],

    "Frontend Developer":[
        "Adobe",
        "Google",
        "Microsoft",
        "Zoho",
        "Infosys"
    ],

    "Backend Developer":[
        "Amazon",
        "Google",
        "Microsoft",
        "TCS",
        "Accenture"
    ],

    "Full Stack Developer":[
        "Amazon",
        "Google",
        "Zoho",
        "Infosys",
        "TCS"
    ],

    "Cybersecurity Analyst":[
        "Cisco",
        "IBM",
        "Microsoft",
        "Palo Alto",
        "TCS"
    ],

    "Machine Learning Engineer":[
        "Google",
        "OpenAI",
        "Microsoft",
        "Amazon",
        "NVIDIA"
    ],

    "Data Engineer":[
        "Google",
        "Amazon",
        "Microsoft",
        "Infosys",
        "TCS"
    ]
};

function matchSkills() {

    let userSkills =
        document.getElementById("skills")
        .value
        .toLowerCase()
        .split(",")
        .map(skill => skill.trim());

    let selectedJob =
        document.getElementById("jobRole").value;

    let requiredSkills =
        job_requirements[selectedJob];

    let matched = [];
    let missing = [];

    requiredSkills.forEach(skill => {

        if(userSkills.includes(skill)){
            matched.push(skill);
        }
        else{
            missing.push(skill);
        }

    });

    let percentage =
        ((matched.length / requiredSkills.length) * 100).toFixed(0);

    let coursesHTML = "";

    missing.forEach(skill => {

        let course =
            courseRecommendations[skill] || skill;

        let link =
            courseLinks[skill] || "#";

        coursesHTML += `
        <li>
            <a href="${link}" target="_blank">
                ${course}
            </a>
        </li>`;
    });

    let companyHTML = "";

    if(companies[selectedJob]){

        companyHTML =
        companies[selectedJob]
        .map(company => `<li>${company}</li>`)
        .join("");

    }

    document.getElementById("result").innerHTML = `

        <h2>Skill Matching Result</h2>

        <p><strong>Selected Job:</strong>
        ${selectedJob}</p>

        <p><strong>Match Percentage:</strong>
        ${percentage}%</p>

        <p><strong>Matched Skills:</strong><br>
        ${matched.join(", ") || "None"}</p>

        <p><strong>Missing Skills:</strong><br>
        ${missing.join(", ") || "None"}</p>

        <h3>Recommended Courses</h3>

        <ul>
        ${coursesHTML || "<li>You are Job Ready!</li>"}
        </ul>

        <h3>Top Companies Hiring</h3>

        <ul>
        ${companyHTML}
        </ul>
    `;
}

function login(){

    let username =
        document.getElementById("username").value;

    let password =
        document.getElementById("password").value;

    if(username === "admin" &&
       password === "admin123")
    {
        alert("Login Successful!");

        window.location.href = "index.html";
    }
    else
    {
        document.getElementById("message").innerHTML =
        "Invalid Username or Password";
    }
}