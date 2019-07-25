import React from 'react';

import Button from './Button'
import { rhythm } from '../utils/typography'

export default () => {
    return (
        <div css={`
        padding: ${rhythm(1)};
        max-width: 600px;
        margin: ${rhythm(3)} auto;


        color: #dddddd;
        text-align: center;
        `}>
            <h2 css={`color: #eeeeee;`}>Are you interested?</h2>
            <p>I am currently looking for a student job, starting August 2019. Let me know how can I help you.</p>
            <Button to="mailto:work@robertwolf.cz">
                Let's talk
            </Button>
        </div>
    );
};
