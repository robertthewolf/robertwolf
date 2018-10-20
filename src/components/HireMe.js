import React from 'react';
import Link from 'gatsby-link';

import { rhythm } from '../utils/typography'

export default props => {
    const color = props.color ? props.color : 'white'
    return (
        <Link to="" style={{
            padding: rhythm(.5),
            border: `2px solid ${color}`,
            borderRadius: rhythm(.33),
            display: 'inline-block',
            color: color,
            fontWeight: 600,
            lineHeight: '1em'
        }}>
            Hire Me
        </Link>
    );
};