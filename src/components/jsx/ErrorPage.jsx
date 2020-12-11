import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Container, Button, Image, Header } from 'semantic-ui-react';

import '../css/ErrorPage.css';

import youAreLost from '../../assets/images/youre-lost.png';


const ErrorPage = () => {
    return (
        <Grid 
            as={Container} 
            divided='vertically' 
            verticalAlign='center'
            className='error-page-404-content-grid'
        >
            <Grid.Row columns={2}>
                <Grid.Column textAlign='center'>
                    <Header as="h1" className="error-page-404-header" content={"404"} />
                    <p>
                        You made a wrong turn somewhere.
                        Click below to return to the homepage.
                    </p>
                    <Button 
                        as={Link} 
                        to={'/'} 
                        content={"Homepage"} 
                        className='error-page-button' 
                        size='big'
                        fluid
                    />
                </Grid.Column>
                <Grid.Column>
                    <Image src={youAreLost} size='medium' />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
}

export default ErrorPage;
