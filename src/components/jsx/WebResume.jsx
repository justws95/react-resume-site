import React, { useEffect } from 'react';
import { Divider, Header, Icon, Container } from 'semantic-ui-react';

import PageHeader from './PageHeader';

import '../css/WebResume.css';


const WebResume = () => {

    useEffect(() => {
        document.title = "Resume";
    });

    return (
        <React.Fragment>
            <PageHeader title="Resume" />
            <div className='web-resume-container'>
                <Header as='h2' className='resume-page-sub-header'>
                    <Icon name='briefcase' />
                    <Header.Content>Professional Experience</Header.Content>
                </Header>
                <Divider hidden />
                <Container className='resume-page-entry' textAlign='justified'>
                    <Header as='h3'>
                        <Header.Content content={"Electrical Engineering/Computer Science Co-Op"} />
                        <Header.Subheader>
                            <b>Siemens Healthineers</b> | <i>February, 2020 - Present</i>
                        </Header.Subheader>
                    </Header>
                    <p>
                        Assisting engineering and scientific staff in performing research and development for Positron 
                        Emission Tomography as a member of the Molecular Imaging group. Our team leads R&D efforts on 
                        developing the next generation of radiation detectors that will be used in medical imaging 
                        systems. In this role I have worked on various, diverse projects in order to support the goals 
                        of R&D. Some examples of projects I have worked on included researching and prototyping computer
                        vision techniques for manufacturing processes, the development of a web application to control a
                        new hardware prototype remotely, and writing embedded code to test hardware prototypes.
                    </p>
                </Container>
                <Divider hidden />
                <Container className='resume-page-entry' textAlign='justified'>
                    <Header as='h3'>
                        <Header.Content content={"Manufacturing Analyst Co-Op"} />
                        <Header.Subheader>
                            <b>Nissan North America, Inc.</b> | <i>May, 2018 - July, 2019</i>
                        </Header.Subheader>
                    </Header>
                    <p>
                        Supported the development and management of regional strategy for digital transformation within 
                        U.S. and Mexican manufacturing operations. Implemented and supported the adoption of key 
                        initiatives with a focus on technologies pertaining to data analysis and artificial intelligence. 
                        Examples of projects I worked on include developing dashboards in Tableau to tie together disparate 
                        data sources and developing a computer vision model using the TensorFlow Object Detection API to 
                        demonstrate AI powered object detection. 
                    </p>
                </Container>
                <Divider hidden />
                <Header as='h2' className='resume-page-sub-header'>
                    <Icon name='graduation cap' />
                    <Header.Content>Education</Header.Content>
                </Header>
                <Divider hidden />
                <Container className='resume-page-entry' textAlign='justified'>
                    <Header as='h3'>
                        <Header.Content content={"Bachelor of Science in Computer Science"} />
                        <Header.Subheader>
                            <b>University of Tennessee, Knoxville</b> | <i>Graduating May, 2021</i>
                        </Header.Subheader>
                    </Header>
                    <p>
                        Pursuing a Bachelors degree in the field of Computer Science with concentrations in Artificial 
                        Intelligence, Theory, and Scientific Computing. I will be graduating this coming May.
                    </p>
                </Container>
                <Divider hidden />
                <Container className='resume-page-entry' textAlign='justified'>
                    <Header as='h3'>
                        <Header.Content content={"Associate of Science"} />
                        <Header.Subheader>
                            <b>Pellissippi State Community College</b> | <i>Graduated December, 2016</i>
                        </Header.Subheader>
                    </Header>
                    <p>
                        Completed my Associate of Sciences degree in General Studies with concentrations and elective
                        choices taken in plan to transfer for my Bachelors Degree in Computer Science.
                    </p>
                </Container>
                {/*
                <Divider hidden />
                <Header as='h2' className='resume-page-sub-header'>
                    <Icon name='osi' color='black' />
                    <Header.Content>Open Source Contributions</Header.Content>
                </Header>
                <Divider hidden />
                <Container className='resume-page-entry' textAlign='justified'>
                    <Header as='h3'>
                        <Header.Content content={"Bruno - The C++ Build System Architect"} />
                        <Header.Subheader>
                            <b>Senior Design Project at the University of Tennessee</b> | <i>August, 2020 - Present</i>
                        </Header.Subheader>
                    </Header>
                    <p>
                        As a part of my senior design capstone project, we were given the option to work on a project 
                        of our choosing. I came up of the idea of creating a Visual Studio Code extension to help 
                        automate the process of creating build system files, such as Makefiles, for C++ projects as 
                        well as provide a Graphical user Interface to help visualize code dependancies. We will be 
                        publishing our extension under the MIT license for other developers to extend or modify and give
                        back to the community that has given so much to us!
                    </p>
                </Container>
            </div>
            <Divider hidden />
            <Divider hidden />
            */}
            </div>
            <Divider hidden />
            <Divider hidden />
        </React.Fragment>
    );
}

export default WebResume;
