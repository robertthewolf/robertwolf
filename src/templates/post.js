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
import CTA from '../components/CTA'
import Next from '../components/Next'
import Headroom from '../components/Headroom'

export default class PostTemplate extends React.Component {
  render() {
    const post = this.props.data.prismicPost
    const { previous, next } = this.props.pageContext

    return (
      <div>
        <Headroom link={'/' + post.data.category.slug} />
        <Plx
          parallaxData={[
            {
              start: 0,
              end: 300,
              properties: [
                {
                  startValue: 1,
                  endValue: -1,
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
              color: #838383;
              padding-bottom: ${rhythm(2)};
              margin-top: ${rhythm(2)};

              *::selection {
                background: transparent;
                color: #FDA629;
              }

              @media screen and (min-width: 800px) {
                // margin: 0 ${rhythm(2)};
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
                  // background: linear-gradient(
                  //   180deg,
                  //   #ebebeb 0%,
                  //   rgba(244, 244, 244, 0) 100%
                  // );
                  padding: ${rhythm(1)};
                `}
              />
              {post.data.body &&
                post.data.body.map(slice => {
                  if (slice.slice_type === 'section') {
                    return <Section key={slice.id} data={slice} />
                  } else if (slice.slice_type === 'gallery')
                    return <Gallery key={slice.id} data={slice} />
                })}
              <CTA />
            </Animation>
          </article>
        </Animation>
        <div
          css={`
            display: flex;
            @media screen and (min-width: 600px) {
              width: 80vw;
              margin: 0 auto ${rhythm(1)};
            }
          `}
        >
          <BackButton link={'/' + post.data.category.slug}>back</BackButton>
          {this.props.data.allPrismicPost.edges
            .filter(edge => edge.node.id === post.id)
            .map(edge => {

              const next =
                edge.next !== null
                  ? edge.next
                  : this.props.data.allPrismicPost.edges[0].node // first node
              const slug = next.slugs[0]
              const category = this.props.data.allPrismicCategory.edges.filter(
                cat => cat.node.prismicId === next.data.category.id
              )[0].node.slugs[0]

              return (
                <Next key={slug} name={slug} link={`/${category}/${slug}`} />
              )
            })}
        </div>
      </div>
    )
  }
}

export const pageQuery = graphql`
  query PostQuery($id: String!) {
    allPrismicPost {
      edges {
        node {
          id
          slugs
          data {
            category {
              id
            }
          }
        }
        next {
          id
          slugs
          data {
            category {
              id
            }
          }
        }
      }
    }
    allPrismicCategory {
      edges {
        node {
          prismicId
          slugs
        }
      }
    }

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
            id
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
            id
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
