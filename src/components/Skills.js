import React from 'react';
//import './Skills.css';

function Skills() {
    let skills = ['C', 'C++', 'Python', 'JavaScript', 'Algorithms and Data Structures',
            'Data Analytics', 'Git'];

    return(
        <div className="condiv skills">
            <h1 className="subtopic">My Skills</h1>
            <ul>
                {skills.map((value) => {
                    return <li>{value}</li>
                })}
            </ul>
        </div>
    );
}

export default Skills;
