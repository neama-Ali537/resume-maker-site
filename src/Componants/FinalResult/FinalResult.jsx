import React, { useContext } from 'react'
import { dataContext } from '../DataContext/DataContext';

export default function FinalResult() {
    const {cvData} =useContext(dataContext);
  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-9">
                <h1>Final Result</h1>
                <h3>Personal Information</h3>
                <p>First Name: {cvData.firstName}</p> 
                <p>Last Name: {cvData.lastName}</p>
                <p>Email: {cvData.email}</p>
                <p>Phone Number: {cvData.phoneNumber}</p>
                <p>Address: {cvData.address}</p>
                <p>City: {cvData.city}</p>
                <h3>Summary</h3>
                <p>{cvData.summary}</p>
                <h3>Experience</h3>
                {cvData.experience.map((item,index)=>(
                    <div key={index}>
                        <p>Job Title: {item.jobTitle}</p>
                        <p>Employer: {item.employer}</p>
                        <p>City: {item.city}</p>
                        <p>Start Date: {item.startDate}</p>
                        <p>End Date: {item.endDate}</p>
                        <p>Job Description: {item.jobDescription}</p>
                    </div>

                ))}
                <h3>Education</h3>
                {cvData.education.map((item,index)=>(
                    <div key={index}>
                        <p>Degree: {item.degree}</p>
                        <p>Institution: {item.institution}</p>
                        <p>City: {item.city}</p>
                        <p>Start Date: {item.startDate}</p>
                        <p>End Date: {item.endDate}</p>
                        <p>Description: {item.description}</p>
                    </div>

                ))}
                <h3>Skills</h3>
                <p>{cvData.skills}</p>
            </div>
        </div>
    </div>
  )
}
