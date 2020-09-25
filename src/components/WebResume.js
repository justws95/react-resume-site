import React from 'react';
//import './WebResume.css';


function ResumeItem(props) {
    return (
        <div class="widecard">
            <div class="compdet">
                <h3>{props.title}</h3>
                <h4 class="secondtext">{props.where}</h4>
                <h4 class="secondtext">{props.from} - {props.to}</h4>
            </div>
    </div>
    );
}


function WebResume() {
    return (
        <div className="condiv">
            <h1 className="subtopic">Web Resume</h1>
            <br></br>
            <h3>Professional Experiance</h3>
            <ResumeItem 
                title="Electrical Engineering/Computer Science Co-Op" 
                where="Siemens Healthineers" 
                from="February 2020" 
                to="Present"/>
            <ResumeItem 
                title="manufacturing Analytics Co-Op" 
                where="Nissan North America, Inc." 
                from="May 2018" 
                to="July 2019"/>
            <br></br>
            <h3>Education</h3>
            <ResumeItem 
                title="Bachelor of Science in Computer Science" 
                where="University of Tennessee, Knoxville" 
                from="August 2016" 
                to="Present"/>
            <ResumeItem 
                title="Associate of Science" 
                where="Pellissippi State Community College" 
                from="August 2015" 
                to="December 2016"/>
        </div>
    )
}


export default WebResume;