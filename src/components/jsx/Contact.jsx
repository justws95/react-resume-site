import React, {useState} from 'react';
import EmailValidator from 'email-validator';
import ReCAPTCHA from 'react-google-recaptcha';
import { 
    Form,
    Message,
    Button,
    Container,
    Divider, 
    Confirm, 
    Header,
    Transition,
    Grid
} from 'semantic-ui-react';

import PageHeader from './PageHeader';

import '../css/Contact.css';


async function sendEmail(data) {
    const postURL = 'https://js-resume-site-api.herokuapp.com/contact?type=email';

    const response = await fetch(postURL, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data)
    });

    return response.json();
}


// TODO: Fix the submit button 'shake' when input is invalid.
const Contact = () => {
    /* Hooks for form input and validation */
    const [nameInput, setName] = useState("");
    const [emailInput, setEmail] = useState("");
    const [phoneInput, setPhone] = useState("");
    const [subjectInput, setSubject] = useState("");
    const [emailBodyInput, setBody] = useState("");

    const [validName, validateName] = useState(false);
    const [validEmail, validateEmail] = useState(false);
    const [validPhone, validatePhone] = useState(true);
    const [validMessage, validateMessage] = useState(false);
    const [validSubject, validateSubject] = useState(false);

    
    const [nameTypingStarted, setNameStarted] = useState(false);
    const [emailTypingStarted, setEmailStarted] = useState(false);
    const [messageTypingStarted, setMessageStarted] = useState(false);
    const [subjectTypingStarted, setSubjectStarted] = useState(false);

    // Other component state hooks
    const [contactFormMessageSent, setEmailSentStatus] = useState(false);
    const [confirmMessageOpen, displayConfirmMessage] = useState(false);
    const [pendingEmail, setPending] = useState(false);
    const [triggerSubmitErrorShake, setShake] = useState(false);

  
    let testMessageReady = () => {
        return (
            validName && validEmail && validPhone && validMessage && validSubject
        );
    }

    
    return (
        <React.Fragment>
            <PageHeader title="Contact" />
            <Divider hidden />
            <Divider hidden />
            <Divider hidden />
            <Container textAlign='justified' className='contact-page-contact-window'>
                <Header as='h2'>
                    Send A Message
                    <Header.Subheader>
                        Enter a message below and I will get back to you promptly!
                    </Header.Subheader>
                </Header>
                <Divider hidden />
                <Form sucess>
                    <Form.Group widths='equal'>
                        <Form.Input
                            icon='user'
                            iconPosition='left'
                            label='Name'
                            placeholder='Name'
                            required
                            onChange={e => {
                                setName(e.target.value);

                                if (!(nameTypingStarted)) {
                                    setNameStarted(true);
                                }

                                validateName(e.target.value.length >= 1);
                            }}
                            error={(nameTypingStarted && !(validName)) ? {
                                    content: 'Please enter your name here.'
                                }: false 
                            }
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

                                if (!(emailTypingStarted)) {
                                    setEmailStarted(true);
                                }

                                validateEmail(EmailValidator.validate(e.target.value));
                            }}
                            error={(emailTypingStarted && !(validEmail)) ? {
                                    content: 'Please enter a valid message subject.'
                                }: false 
                            } 
                        />
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Input
                            icon='clipboard'
                            iconPosition='left'
                            label='Subject'
                            placeholder='Subject'
                            required
                            onChange={e => {
                                setSubject(e.target.value);

                                if(!(subjectTypingStarted)) {
                                    setSubjectStarted(true);
                                }

                                validateSubject(e.target.value.length >=1);
                            }}
                            error={(subjectTypingStarted && !(validSubject)) ? {
                                    content: 'Please enter a valid message subject.'
                                }: false 
                            }
                        />
                        <Form.Input
                            icon='phone'
                            iconPosition='left'
                            label='Phone'
                            placeholder='Phone Number'
                            value={phoneInput}
                            onChange={e => {
                                setPhone(e.target.value);
                                validatePhone(e.target.value.length >= 10 || e.target.value.length < 1);
                            }}
                            error={validPhone ? false : {
                                    content: 'Please enter a valid phone number.'
                                }
                            }
                        />
                    </Form.Group>
                    <Form.TextArea 
                        label='Message' 
                        placeholder='Enter your message here...'
                        fluid
                        required
                        onChange={e => {
                            setBody(e.target.value);

                            if (!(messageTypingStarted)) {
                                setMessageStarted(true);
                            }

                            validateMessage(e.target.value.length >= 1);
                        }}
                        error={(messageTypingStarted && !(validMessage)) ?  {
                                content: 'Please enter your message here.'
                            }: false
                        }
                    />
                    <Message
                        success
                        color='blue'
                        visible={contactFormMessageSent}
                        header='Message Sent'
                    >
                        Thank you for reaching out! I really appreciate you taking time out of your day to visit my website 
                        and send me a message. I will respond to your email as soon as possible!
                    </Message>
                    <Confirm
                        content="Ready to send message?"
                        cancelButton="Not Yet"
                        confirmButton="Send"
                        open={confirmMessageOpen}
                        onCancel={() => {
                            displayConfirmMessage(false);
                        }}
                        onConfirm={async () => {
                            let messageData = {
                                "contact-email": emailInput.toString(),
                                "contact-name": nameInput.toString(),
                                "contact-phone": phoneInput.toString(),
                                "contact-subject": subjectInput.toString(),
                                "contact-body": emailBodyInput.toString()
                            };

                            displayConfirmMessage(false);
                            setPending(true);

                            let msgStatus = await sendEmail(messageData);
                            
                            console.log("Message status returned was: ", msgStatus);
                        
                            setEmailSentStatus(true);
                            setPending(false);
                        }}
                    />
                    <Grid centered stackable>
                        <Grid.Row verticalAlign='middle' columns={3} centered>
                            <Grid.Column width={4}>
                                <ReCAPTCHA
                                    sitekey="6LeUb_4ZAAAAAKPAWCS1uUZx_1Vaf3n3N3SIxhj2"
                                    onChange={val => {
                                        console.log("Captcha value: ", val);
                                    }}
                                />
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Divider hidden />
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Transition
                                    animation='shake'
                                    duration={500}
                                    visible={true}
                                >
                                    <Button 
                                        fluid
                                        content={contactFormMessageSent ? 'Message Sent!' : 'Send Message'}
                                        className='contact-page-button'
                                        size='big'
                                        loading={pendingEmail}
                                        onClick={() => {
                                            if (!(testMessageReady())) {
                                                setShake(true);
                                                setShake(false);
                                            }
                                            else {
                                                displayConfirmMessage(true);
                                            }
                                        }}
                                    />
                                </Transition>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Form>
                <Divider hidden />
            </Container>
        </React.Fragment>
    );
}

export default Contact;
