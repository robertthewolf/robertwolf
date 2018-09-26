import React from 'react'
import styled from 'styled-components'

import { rhythm } from '../utils/typography'

class Contact extends React.Component {
  render() {
    return (
        <Text>
            Robert Wolf<br/>
            <a href="mailto:work@robertwolf.cz">work@robertwolf.cz</a><br/>
            <a href="tel:+16692041724">+1(669)204-1724</a><br/>
        </Text>
    )
  }
}

export default Contact

const Text = styled.p`
font-weight: 600;
padding: ${rhythm(3 / 4)};


@media screen and (max-width: 500px) {
    text-align: right;
}

a {
    color: rgba(255,255,255,.9);
    font-weight: 200;
}
`