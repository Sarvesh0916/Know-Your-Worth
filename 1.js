// console.log("Hello World");
let com1 = document.getElementById("com1");
let job1 = document.getElementById("job1");
let add1 = document.getElementById("add1");
let ln1 = document.getElementById("ln1");
let sr1 = document.getElementById("sr1");
// let cards = document.querySelectorAll(".cards")[0];

let com2 = document.getElementById("com2");
let job2 = document.getElementById("job2");
let add2 = document.getElementById("add2");
let ln2 = document.getElementById("ln2");
let sr2 = document.getElementById("sr2");
// let cards = document.querySelectorAll(".cards")[0];

let com3 = document.getElementById("com3");
let job3 = document.getElementById("job3");
let add3 = document.getElementById("add3");
let ln3= document.getElementById("ln3");
let sr3 = document.getElementById("sr3");
// let cards = document.querySelectorAll(".cards")[0];

let com4 = document.getElementById("com4");
let job4 = document.getElementById("job4");
let add4 = document.getElementById("add4");
let ln4 = document.getElementById("ln4");
let sr4 = document.getElementById("sr4");
// let cards = document.querySelectorAll(".cards")[0];

let com5 = document.getElementById("com5");
let job5 = document.getElementById("job5");
let add5 = document.getElementById("add5");
let ln5 = document.getElementById("ln5");
let sr5 = document.getElementById("sr5");
// let cards = document.querySelectorAll(".cards")[0];

let com6 = document.getElementById("com6");
let job6 = document.getElementById("job6");
let add6 = document.getElementById("add6");
let ln6 = document.getElementById("ln6");
let sr6 = document.getElementById("sr6");
// let cards = document.querySelectorAll(".cards")[0];

let com7 = document.getElementById("com7");
let job7 = document.getElementById("job7");
let add7 = document.getElementById("add7");
let ln7 = document.getElementById("ln7");
let sr7 = document.getElementById("sr7");
// let cards = document.querySelectorAll(".cards")[0];
// console.log(cards);
function search(){
    // cards.style.display = 'block';
    let option = document.querySelector("select").value;
    if(option === "Web Developer"){
        removeClass();


        job1.innerText = "Web Developer";
        com1.innerText = "Goldsikka Limited";
        add1.innerText = "Hyderabad, Telangana, India";
        sr1.innerText = "HTML5 , CSS , JS,React Js,Bootstrap,Front-end development, Python, Java ";
        ln1.innerText="View on Linkedin"

        job2.innerText = "Web Developer";
        com2.innerText = "Milestone Inc.";
        add2.innerText = "Bengaluru, Karnataka, India";
        sr2.innerText = "HTML5 , CSS , JS,React Js,Bootstrap,Front-end development, Python, Core Java, PHP, C";

        job3.innerText = "Web Developer";
        com3.innerText = "Puffy";
        add3.innerText = "Chandigarh, India";
        sr3.innerText = "HTML5 , CSS , JS,React Js,Bootstrap,Front-end development, JQuery, MySQL ";

        job4.innerText = "Web Developer";
        com4.innerText = "Kairos Konnect";
        add4.innerText = "Chandigarh, India";
        sr4.innerText = "HTML5 , CSS , JS, React Js, Bootstrap, Front-end development, Python, SQL, Mongo-DB";

        job5.innerText = "Web Developer";
        com5.innerText = "FactSet";
        add5.innerText = "Hyderabad, Telangana, India";
        sr5.innerText = "HTML5 , CSS , JS,React Js,Bootstrap,Front-end development, AngularJS, JQuery ";

        job6.innerText = "Web Developer";
        com6.innerText = "Saas Labs";
        add6.innerText = "Bengaluru, Karnataka, India";
        sr6.innerText = "HTML5 , CSS , JS,React Js,Bootstrap,Front-end development, SQL";

        job7.innerText = "Web Developer";
        com7.innerText = "TransPerfect";
        add7.innerText = "Channai, Tamil Nadu, India";
        sr7.innerText = "HTML5 , CSS , JS,React Js,Bootstrap,Front-end development, NodeJS, AngularJS ";
    }


    else if(option === "Software Developer"){
        removeClass();


        job1.innerText = "Software Developer";
        com1.innerText = "Queppelin";
        add1.innerText = "Gurgaon, India";
        sr1.innerText = "JavaScript, ReactJS, CSS, HTML5, BootStrap, Python, NodeJS, Java";

        job2.innerText = "Software Developer";
        com2.innerText = "GMR Group";
        add2.innerText = "Greater Hyderabad Area";
        sr2.innerText = "Python, C, English, MS Excel, SQL, Networking, Problem Solver, Java";

        job3.innerText = "Software Developer";
        com3.innerText = "Esmito";
        add3.innerText = "Mumbai, Maharashtra, India";
        sr3.innerText = "C, Embedded C, Embedded Systems, C++, Linux, Python, Micro-Controllers, Real-Time Operating Systems";

        job4.innerText = "Software Developer";
        com4.innerText = "Tata COnsultancy Services";
        add4.innerText = "Hyderabad, Telangana, India";
        sr4.innerText = "C#, SQL, ASP.NET, JavaScript, .NET Framework, ASP.NET MVC, MS SQL Server, CSS, HTML";

        job5.innerText = "Software Developer";
        com5.innerText = "Infosys";
        add5.innerText = "Mohali district, Punjab, India";
        sr5.innerText = "C#, SQL, ASP.NET, JavaScript, .NET Framework, ASP.NET MVC, MS SQL Server, CSS, HTML";

        job6.innerText = "Software Developer";
        com6.innerText = "Virtusa";
        add6.innerText = "Chennai, Tamil Nadu, India";
        sr6.innerText = "ServiceNow, IT Service Management, ServiceNow Administration, JavaScript, HTML, CMDB, MS Excel, C++, ITIL";

        job7.innerText = "Software Developer";
        com7.innerText = "Clarivate";
        add7.innerText = "Bengaluru, Karnataka, India";
        sr7.innerText = "Java, SQL, Core Java, C, JavaScript, Python, SpringBoot, C++, HTML, Micro-Services";
    }


    else if(option === "Information Security Analyst"){
        removeClass();


        job1.innerText = "Information Security Analyst";
        com1.innerText = "Agoda";
        add1.innerText = "Lucknow, Uttar Pradesh, India";
        sr1.innerText = "Penetration Tester, Application Security, C, CyberSecurity, Burp Suite, Test Automation, OWASP";

        job2.innerText = "Information Security Analyst";
        com2.innerText = "Accenture";
        add2.innerText = "Hyderabad, Telangana, India";
        sr2.innerText = "Leadership, Vendor Management, English, MS Excel, Management, IT Service Management, IT Strategy, IT Operation";

        job3.innerText = "Information Security Analyst";
        com3.innerText = "Momentive";
        add3.innerText = "Bengaluru, Karnataka, India";
        sr3.innerText = "SAP FICO, SAP FI, SAP ERP, SAP Implementation, MS Excel, Accounting, SAP Products, SAP HANA, Finance";

        job4.innerText = "Information Security Analyst";
        com4.innerText = "Noventiq";
        add4.innerText = "Bengaluru, Karnataka, India";
        sr4.innerText = "CyberSecurity, SIEM, Malware Analysis, Incident Response, Information Security, EDR, IBM QRadar, Splunk, IPS";

        job5.innerText = "Information Security Analyst";
        com5.innerText = "Altus Group";
        add5.innerText = "Hyderabad, Telangana, India";
        sr5.innerText = "Security Information and Event Management, CyberSecurity, IBM QRadar, Splunk, Information Security, Network Security";

        job6.innerText = "Information Security Analyst";
        com6.innerText = "NetSkope";
        add6.innerText = "Bengaluru, Karnataka, India";
        sr6.innerText = "Security Information and Event Management, CyberSecurity, Information Security, Network Security, Ethical Hacking, C";

        job7.innerText = "Information Security Analyst";
        com7.innerText = "EY";
        add7.innerText = "Bengaluru, Karnataka, India";
        sr7.innerText = "SQL, TRIRIGA, Python, Tableau, Technical Support, Manual Testing, Hadoop, Design, Functional Testing"; 
    }


    else if(option === "Computer Systems Analyst"){
        removeClass();


         job1.innerText = "Computer System Analyst";
        com1.innerText = "Woltus Kluwer";
        add1.innerText = "Chennai, Tamil Nadu, India";
        sr1.innerText = "Active Directory, Microsoft Azure, Windows Server, System Administration, Technical Support, Amazon Web Services,DNS,VMware";

        job2.innerText = "Computer System Analyst";
        com2.innerText = "Mahindra Group";
        add2.innerText = "Agra, Uttar Pradesh, India";
        sr2.innerText = "Manual Testing, Software Testing, Core Java ,Java,SQL ,Jira, Software Testing Life Cycle, Functional Testing ";

        job3.innerText = "Computer System Analyst";
        com3.innerText = "Pivotree";
        add3.innerText = "Noida, Uttar Pradesh, India";
        sr3.innerText = "Jakarta EE, SQL, ATG Search, Oracle Database,Sales, Servlets, MySQL, Jenkins, Marketing Campaign Management";

        job4.innerText = "Computer System Analyst";
        com4.innerText = "GMR Group";
        add4.innerText = "Greater Hyderabad, India";
        sr4.innerText = "Python, C, English, MS Excel, SQL, HTML, Java, Networking, Communication, Problem Solving";

        job5.innerText = "Computer System Analyst";
        com5.innerText = "LTI Mindtree";
        add5.innerText = "Gurgaon, Haryana, India";
        sr5.innerText = "Python, SQL, Hive, Apache Spark, BMC Control-M, Tableau, Amazon S3, Microsoft Power BI, Data Structures";

        job6.innerText = "Computer System Analyst";
        com6.innerText = "NTT";
        add6.innerText = "Hyderabad, Telangana, India";
        sr6.innerText = "MS Excel, SAP ERP, SAP MM, Python, Communication, Problem Solving, AutoCAD, SQL, SAP Implementation, HTML ";

        job7.innerText = "Computer System Analyst";
        com7.innerText = "Mahindra Group";
        add7.innerText = "Chennai, Tamil Nadu, India";
        sr7.innerText = "Active Directory, Microsoft Azure, Windows Server, System Administration, Technical Support, Amazon Web Services,DNS,VMware";
    }


    else if(option === "Data Scientist"){
        removeClass();


        job1.innerText = "Data Scientist";
        com1.innerText = "Eastvantage";
        add1.innerText = "Bengaluru, Karnataka, India";
        sr1.innerText = "Python, Machine Learning, SQL, Data Science, Data Analysis, MS Excel, Data Visualization, Deep Learning, NLP, Tableau";

        job2.innerText = "Data Scientist";
        com2.innerText = "Aryng";
        add2.innerText = "Gurugram, Haryana, India";
        sr2.innerText = "Python, Machine Learning, SQL, Data Science, Data Analysis, MS Excel, Data Visualization, Deep Learning, NLP, Data Analytics";

        job3.innerText = "Data Scientist";
        com3.innerText = "Cardinal Health";
        add3.innerText = "Bengaluru, Karnataka, India";
        sr3.innerText = "Python, Machine Learning, SQL, Data Science, Data Analysis, MS Excel, Data Visualization, R Programming, Analytical Skills, Data Analytics, Artificial Intelligence";

        job4.innerText = "Data Scientist";
        com4.innerText = "Uplers";
        add4.innerText = "Bengaluru, Karnataka, India";
        sr4.innerText = "Python, Machine Learning, SQL, Data Science, Data Analysis, MS Excel, Data Visualization, Deep Learning, Analytical Skills, Data Analytics";

        job5.innerText = "Data Scientist";
        com5.innerText = "S&P Global";
        add5.innerText = "Ahmedabad, Gujarat, India";
        sr5.innerText = "Python, Machine Learning, SQL, Data Science, Data Analysis, MS Excel, Data Visualization, Deep Learning, Analytical Skills, Data Analytics";

        job6.innerText = "Data Scientist";
        com6.innerText = "ZF Group";
        add6.innerText = "Chennail, Tamil Nadu, India";
        sr6.innerText = "Python, Machine Learning, SQL, Data Science, Data Analysis, MS Excel, Data Visualization, Deep Learning, Analytical Skills, Data Analytics,Tensor Flow ";

        job7.innerText = "Data Scientist";
        com7.innerText = "Genpact";
        add7.innerText = "Bengaluru, Karnataka, India";
        sr7.innerText = "Machine Learning, Python, MS Excel, SQL, Deep Learning, Data Analysis, Natural Language Processing, Statistics, R Programming";
    }
}

function removeClass(){
    var card1=document.getElementById("card1");
    var card2=document.getElementById("card2");
    var card3=document.getElementById("card3");
    var card4=document.getElementById("card4");
    var card5=document.getElementById("card5");
    var card6=document.getElementById("card6");
    var card7=document.getElementById("card7");
    var buttonClass = document.getElementById("buttonClass");

    buttonClass.classList.remove("none");
    card1.classList.remove("none");
    card2.classList.remove("none");
    card3.classList.remove("none");
    card4.classList.remove("none");
    card5.classList.remove("none");
    card6.classList.remove("none");
    card7.classList.remove("none");

    // card1.scrollIntoView();

}