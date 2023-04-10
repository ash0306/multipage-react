import React from 'react'
import './ResumeComponent.css'
import HeaderComponent from '../HeaderComponent/HeaderComponent'

function ResumeComponent() {
  return (
    <React.Fragment>
        <div className='resume-container'>
        <HeaderComponent/>
        <div className='sidebar'>
            <img className='profile-img' src='ash.JPG' alt='profile'/>
            <h3>Personal Details:</h3>
            <ul className='personal'>
                <li>Name: Aswathi S</li>
                <li>Date of Birth: 3/6/2002</li>
                <li>Gender: Female</li>
                <li>Department: CSE</li>
                <li>Languages Known: English, Tamil, Malayalam, German</li>
                <li>LinkedIn: <a href="www.linkedin.com/in/aswathi-1118a0242">www.linkedin.com/in/aswathi-1118a0242</a></li>
                <li>Mobile No: 9445685159</li>
                <li>E-mail ID: aswathi259@gmail.com</li>
            </ul>
            <hr/>
            <h3>Technical Skills:</h3>
            <ul className='technical'>
                <li><strong>Programming Languages:</strong></li>
                <li>C,C++,Java,Python,HTML,CSS and Javascript</li>
                <li>Problem Solving</li>
                <li>Critical Thinking</li>
            </ul>
            <hr/>
            <h3>Soft Skills:</h3>
            <ul className='soft'>
                <li>Communication</li>
                <li>Team spirit</li>
                <li>Time management</li>
                <li>Creative Thinking</li>
            </ul>
        </div>
        <div className='main-content'>
            <h1>ASWATHI S</h1>
            <p>A highly motivated and organized person currently pursuing my Bachelor of Engineering in Computer Science and Engineering. Eager to apply my creative thinking and problem-solving skills to the problem at hand. Always ready to learn and improve my current skill set.</p>
            <hr/>
            <h3>Education Information:</h3>
            <ul>
                <li><p><strong>BE - Saveetha Engineering College</strong></p></li>
                <p>   Currently pursuing my BE in Computer Science and Engineering. CGPA-9.4</p>
                <li><p><strong>HSC - Vidyodaya Matriculation Academy</strong></p></li>
                <p>   Completed my HSC in the Computer Science stream. Percentage-83%</p>
                <li><p><strong>SSLC - Vidyodaya Matriculation Academy</strong></p></li>
                <p>   Completed my SSLC in the Computer Science stream. Percentage-93.2%</p>
            </ul>
            <hr/>
            <h3>Certifications:</h3>
            <ul>
                <li>Completed the "Engineering Virtual Program" by Goldman Sachs via Forage</li>
                <li>Completed the "Developer & Technology Virtual Program" by Accenture Nordics via Forage</li>
                <li>Completed the "Machine Learning Pipelines with Azure ML" via Coursera Project Network</li>
                <li>Completed the "Machine Learning Onramp" course by MathWorks</li>
                <li>Completed the "Developer and Technology Virtual Experience Program" by Accenture UK via Forage</li>
                <li>Completed the "Amazon Translate: Translate documents with batch translation" course via Coursera Project Network</li>
                <li>Completed the "Custom Prediction Routine on Google AI Platform" course via Coursera Project Network</li>
                <li>Completed the "Introduction to Ethical Hacking" course by Great Learning</li>
                <li>Completed a 12-week NPTEL course on "Social Networks" by IIT Ropar </li>
                <li>Completed and earned badges for "Introduction to Programming in Kotlin" vis Google Developer Platform</li>
            </ul>
            <hr/>
            <h3>Achievements and Extra-Curriculars:</h3>
            <ul>
                <li>Won first place in the intra-college competition "Capre Logicana" held by the Math club</li>
                <li>Participated in intra-college competition "Deadly Red" held by Math Club</li>
                <li>Participated in the "The Lost Code" event held as a part of DRESTEIN 2022</li>
                <li>Member of the college women's basketball team</li>
            </ul>
        </div>
        </div>
    </React.Fragment>
  )
}

export default ResumeComponent