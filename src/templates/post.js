import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import styled from 'react-emotion'
import get from 'lodash/get'
import Img from 'gatsby-image'

import { rhythm, scale } from '../utils/typography'

import BackButton from '../components/BackButton'
import { Animation } from '../components/CSS'
import Card from '../components/Card'

export default class PostTemplate extends React.Component {
  render() {
    const post = this.props.data.prismicPost
    const { previous, next } = this.props.pageContext

    return (
      <div>
          <Card
            cover={post.data.cover}
            color={post.data.color}
            title={post.data.title.text}
            id={post.slugs[0]}
            fullwidth
          />
        <Animation
          duration=".25s"
          easing="ease-out"
          from="opacity: 0; transform: translateY(50%)"
          to="opacity: 1; transform: translateY(0)"
        >
          <Whitebox>
            <Animation
              duration=".3s"
              easing="ease-in-out"
              delay=".1s"
              from="opacity: 0"
              to="opacity: 1"
            >
              <Story
                dangerouslySetInnerHTML={{ __html: post.data.story.html }}
              />
            </Animation>
          </Whitebox>
        </Animation>
        <BackButton link={"/" + post.data.category.slug}>back</BackButton>
      </div>
    )
  }
}

export const pageQuery = graphql`
  query PostQuery($id: String!) {
    prismicPost(id: { eq: $id }) {
      id
      slugs
      data {
        title {
          text
        }
        category {
          id
          slug
        }
        client
        story {
          html
        }
        color
        cover {
          url
          alt
          localFile {
            childImageSharp {
              sizes {
                base64
                aspectRatio
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
                originalImg
                originalName
                presentationWidth
                presentationHeight
              }
            }
          }
        }
      }
    }
  }
`

const Whitebox = styled.article`
  background-color: white;
  padding: ${rhythm(1)};
  color: black;

  *::selection {
    background: transparent;
    color: rgba(0, 0, 0, 0.5);
  }
`

const Title = styled.h1`
  padding: ${rhythm(1)} 0;
`

const Story = styled.div`
  em {
    font-size: ${rhythm(0.75)};
    line-height: ${rhythm(1)};
  }
`
