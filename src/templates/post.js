import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import styled from 'react-emotion'
import Img from 'gatsby-image'
import Plx from 'react-plx'

import { rhythm, scale } from '../utils/typography'

import BackButton from '../components/BackButton'
import { Animation } from '../components/CSS'
import Card from '../components/Card'
import Section from '../components/Section'
import Gallery from '../components/Gallery'

export default class PostTemplate extends React.Component {
  render() {
    const post = this.props.data.prismicPost
    const { previous, next } = this.props.pageContext

    return (
      <div>
        <Plx
          parallaxData={[
            {
              start: 0,
              end: 300,
              properties: [
                {
                  startValue: 1,
                  endValue: 0,
                  property: 'opacity',
                },
                {
                  startValue: 0,
                  endValue: 150,
                  property: 'translateY',
                },
              ],
            },
          ]}
        >
          <Card
            cover={post.data.cover}
            color={post.data.color}
            title={post.data.title.text}
            id={post.slugs[0]}
            fullwidth
          />
        </Plx>
        <Animation
          duration=".25s"
          easing="ease-out"
          from="opacity: 0; transform: translateY(50%)"
          to="opacity: 1; transform: translateY(0)"
        >
          <article
            css={`
              background-color: white;
              color: black;
              padding-bottom: ${rhythm(2)};

              *::selection {
                background: rgba(0, 0, 0, 0.1);
                color: rgba(0, 0, 0, 0.8);
              }

              @media screen and (min-width: 800px) {
                margin: 0 ${rhythm(2)};
              }
            `}
          >
            <Animation
              duration=".3s"
              easing="ease-in-out"
              delay=".1s"
              from="opacity: 0"
              to="opacity: 1"
            >
              <div
                css={`
                  background: linear-gradient(
                    180deg,
                    #ebebeb 0%,
                    rgba(244, 244, 244, 0) 100%
                  );
                  padding: ${rhythm(1)};
                `}
              />
              {post.data.body.map(slice => {
                if (slice.slice_type === 'section') {
                  return <Section data={slice} />
                } else if (slice.slice_type === 'gallery')
                  return <Gallery data={slice} />
              })}
            </Animation>
          </article>
        </Animation>
        <BackButton link={'/' + post.data.category.slug}>back</BackButton>
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

        body {
          ... on PrismicPostBodySection {
            slice_type
            primary {
              heading {
                text
              }
              text {
                html
              }
            }
          }
          ... on PrismicPostBodyGallery {
            slice_type
            items {
              image {
                alt
                copyright
                url
                localFile {
                  id
                  childImageSharp {
                    id
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
              caption {
                text
              }
            }
          }
          __typename
        }
      }
    }
  }
`

const Title = styled.h1`
  padding: ${rhythm(1)} 0;
`
