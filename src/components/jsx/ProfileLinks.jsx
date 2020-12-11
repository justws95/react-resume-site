import React from 'react';

import '../css/ProfileLinks.css';


const ProfileLinks = () => {

    return (
        <div class="profile-links">
            <a href="https://github.com/justws95" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-github" />
            </a>
            <a href="https://www.linkedin.com/in/justin-sumner/" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-linkedin-in" />
            </a>
            <a href="https://stackoverflow.com/users/7817406/justin" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-stack-overflow" />
            </a>
            {/*
            <a href="https://medium.com/@justws95" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-medium" />
            </a>
            */}
        </div>  
    );
}

export default ProfileLinks;
