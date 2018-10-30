import React from 'react';
import Headroom from 'react-headroom'


import BackButton from './BackButton'

export default props => {
    return (
        <Headroom>
          <div
            css={`
              @media screen and (min-width: 600px) {
                padding-left: 10vw;
                left: 10vw;
              }
            `}
          >
            <BackButton link={props.link} />
          </div>
        </Headroom>
    );
};