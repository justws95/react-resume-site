import React, {useState} from 'react';
import fileDownload from 'js-file-download'
import EmailValidator from 'email-validator';
import { Button, Divider, Form, Grid, Segment, Message, Container, Transition } from 'semantic-ui-react';

import PageHeader from './PageHeader';

import '../css/Contact.css';


function Contact() {
    const [emailInput, setEmail] = useState("");
    const [phoneInput, setPhone] = useState("");
    const [validEmail, validateEmail] = useState(true);
    const [validPhone, validatePhone] = useState(true);
    const [triggerSubmitErrorShake, setShake] = useState(false);

    let checkPhoneNumber = (inputNumber) => {
        return inputNumber.toString().length >= 10;
    }
    
    return (
        <React.Fragment>
            <PageHeader title="Contact" />
            <Container fluid textAlign='justified'>
                <Segment className='contact-segment' raised size='massive' fluid>
                    <Grid columns={2} relaxed='very' stackable  textAlign='justified'>
                    <Grid.Column>
                        <h2>Get In Touch</h2>
                        <h5>Leave me a message at one of my contact methods below and I will respond as soon as possible!</h5>
                        <h4>Email: justws95@gmail.com</h4>
                        <h4>Phone: +1 (321) 258 - 7206</h4>
                        <br />
                        <br />
                        <Button 
                            icon='cloud download' 
                            content='Download My Resume'
                            fluid
                            size='big'
                            className='contact-page-button'
                            onClick={e => {
                                const fileURL = 'http://localhost:5000/downloads?document=resume';

                                //FIXME: PDF will 'download' but will not open (data corrupted?)
                                fetch(fileURL, {
                                    method: 'GET',
                                    mode: 'cors',
                                    headers: {
                                    'Content-Type': 'application/pdf',
                                    },
                                })
                                .then((res) => {
                                    fileDownload(res.data, 'Justin-Sumner-Resume.pdf')
                                })
                            }}
                        />
                    </Grid.Column>
                        <Grid.Column verticalAlign='middle'>
                            <h2>Send A Message</h2>
                            <h5>Enter your message below and I will get back to you promptly!</h5>
                            <Form sucess>
                                <Form.Group widths='equal'>
                                    <Form.Input
                                        icon='user'
                                        iconPosition='left'
                                        label='Name'
                                        placeholder='Name'
                                        required
                                    />
                                    <Form.Input
                                        icon='envelope'
                                        iconPosition='left'
                                        label='Email'
                                        placeholder='Email Address'
                                        required
                                        value={emailInput}
                                        onChange={e => {
                                            setEmail(e.target.value);
                                            validateEmail(EmailValidator.validate(e.target.value));
                                        }}
                                        error={validEmail ? false : {
                                                content: 'Please enter a valid email address.',
                                                pointing: 'below'
                                            }
                                        }
                                    />
                                </Form.Group>
                                <Form.Group widths='equal'>
                                    <Form.Input
                                        icon='phone'
                                        iconPosition='left'
                                        label='Phone'
                                        placeholder='Phone Number'
                                        value={phoneInput}
                                        onChange={e => {
                                            setPhone(e.target.value);
                                            validatePhone(e.target.value);
                                            validatePhone(checkPhoneNumber(e.target.value));
                                        }}
                                        error={validPhone ? false : {
                                            content: 'Please enter a valid phone number. If outside the United States, please enter prefix with country code.',
                                            pointing: 'below',
                                        }}
                                    />
                                    <Form.Input
                                        icon='clipboard'
                                        iconPosition='left'
                                        label='Subject'
                                        placeholder='Subject'
                                    />
                                </Form.Group>
                                <Form.TextArea 
                                    label='Message' 
                                    placeholder='Enter your message here...'
                                    fluid
                                />
                                <Message
                                    success
                                    header='Message Sent'
                                    content="Thank you for reaching out! I will get back to you as quicly as possible"
                                />
                                {/*
                                <Transition
                                    animation='shake'
                                    duration='500'
                                    visible={triggerSubmitErrorShake}
                                    >*/}
                                <Form.Button 
                                    content='Submit'
                                    fluid
                                    className='contact-page-button'
                                    size='big'
                                    onClick={e => {
                                        if (!(validEmail) || !(validPhone)) {
                                            this.color = 'red';
                                            setShake(true);
                                            setShake(false);
                                            this.color = 'green';
                                        }
                                    }}
                                />
                                {/*</Transition>*/}
                            </Form>
                        </Grid.Column>
                    </Grid>
                    <Divider vertical>Or</Divider>
                </Segment>
            </Container>
        </React.Fragment>
    );
}

export default Contact;
