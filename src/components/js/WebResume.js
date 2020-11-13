import React from 'react';
import { Divider, Header, Icon, Segment, Container } from 'semantic-ui-react';

import PageHeader from './PageHeader';

import '../css/WebResume.css';


function WebResume(){
    return (
        <React.Fragment>
            <PageHeader title="Resume" />
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
                    Assiting engineering and scientific staff in performing research and development for Positron 
                    Emission Tomography detectors as a member of the Molecular Imaging group. Our team leads R&D 
                    efforts on developing the next generation of radiation detectors that will be used in medical
                    imaging systems. In this role I have worked on various pojects and applications as was needed
                    to assist team efforts. Soome examples of projects I have worked on included researching computer 
                    vision techniques for defect detection, the development of a web application to control physical
                    systems, and writing embedded systems code for test hardware.
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
                    Supported digital transformation efforts within North American manufacturing operations as a member
                    of the Manufacturing Strategy & Planning Office.
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
                        <b>University of Tennessee, Knoxville</b> | <i>August, 2016 - May, 2021</i>
                    </Header.Subheader>
                </Header>
                <p>
                    Pursuing a Bachelors degree in the field of Computer Science with concentrations in Artificial Intelligence,
                    Theory, and Scientific Computing. I will be graduating this coming May.
                </p>
            </Container>
            <Divider hidden />
            <Container className='resume-page-entry' textAlign='justified'>
                <Header as='h3'>
                    <Header.Content content={"Associate of Science"} />
                    <Header.Subheader>
                        <b>Pellissippi State Community College</b> | <i>August, 2015 - May, 2016</i>
                    </Header.Subheader>
                </Header>
                <p>
                    Completed my Associate of Sciences degree in General Studies with concentrations and elective choices taken 
                    in plan to transfer for my Bachelors in Computer Science.
                </p>
            </Container>
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
                    As a part of my senior design capstone project, we were given the option to work on a project of our choosing.
                    I came up of the idea of creating a Visual Studio Code extension to automate the process of creating build 
                    system files, such as Makefiles, for C++ projects. We are hoping to publish our extension under the MIT license
                    for other developers to extend or modify and give back to the community that has given so much to us!
                </p>
            </Container>
            <Divider hidden />
            <Divider hidden />
        </React.Fragment>
    );
}

export default WebResume;
