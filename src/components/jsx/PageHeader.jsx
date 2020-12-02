import React from 'react';
import { Header, Divider } from 'semantic-ui-react';

import '../css/PageHeader.css';

function PageHeader(props) {
    return (
        <React.Fragment>
            <Header 
                as='h1'
                dividing 
                className={"content-window-page-header"}
                content={props.title}
            /> 
            <Divider hidden />
        </React.Fragment>
    );
}


export default PageHeader;
