import React from 'react'
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import { rhythm } from '../utils/typography'

export default class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <Container>
          <Line />
        </Container>
      </div>
    )
  }
}


const Container = styled.div`
width: 100vw;
height: 3px;
position: relative;
`

const Line = styled.div`
background: linear-gradient(90deg, #ffffff, #fd9a28, #5c051e, #fd6efc);
animation: shine 5s ease-in-out alternate infinite;
background-size: 800% 800%;
width: 100%;
height: 100%;


@keyframes shine { 
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
}
`