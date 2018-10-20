import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import styled from 'react-emotion'
import Img from 'gatsby-image'

import { rhythm, scale } from '../utils/typography'

import BackButton from '../components/BackButton'
import Contact from '../components/Contact'
import Cover from '../components/Cover'
import Tagline from '../components/Tagline'
import Card from '../components/Card'
import Next from '../components/Next'

export default class PostTemplate extends React.Component {
  render() {
    const category = this.props.data.prismicCategory

    return (
      <div>
        <Contact />
        <Tagline>{category.data.tagline.text}</Tagline>
        <Cover src={category.data.icon.url} size="50% 50%" />

        {this.props.data.allPrismicPost.edges
          .filter(edge => edge.node.data.category.id === category.prismicId)
          .map(edge => (
            <Link
              to={`/${category.slugs[0]}/${edge.node.slugs[0]}`}
              key={edge.node.id}
            >
              <Card
                cover={edge.node.data.cover}
                color={edge.node.data.color}
                title={edge.node.data.title.text}
                id={edge.node.slugs[0]}
              />
            </Link>
          ))}

        <div
          style={{
            display: 'flex',
          }}
        >
          <BackButton />
          {this.props.data.allPrismicCategory.edges
            .filter(edge => edge.node.id === category.id)
            .map(edge => {
              const slug =
                edge.next !== null
                  ? edge.next.slugs[0]
                  : this.props.data.allPrismicCategory.edges[0].node.slugs[0] // first node
              return <Next key={slug} name={slug} link={'/' + slug} />
            })}
        </div>
      </div>
    )
  }
}

export const pageQuery = graphql`
  query CategoryQuery($id: String!) {
    prismicCategory(id: { eq: $id }) {
      id
      prismicId
      slugs
      data {
        name {
          text
        }
        tagline {
          text
        }
        icon {
          alt
          url
        }
      }
    }

    allPrismicCategory {
      edges {
        node {
          id
          slugs
        }
        next {
          id
          slugs
        }
      }
    }

    allPrismicPost {
      edges {
        node {
          id
          slugs
          data {
            category {
              id
            }
            title {
              html
              text
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
    }
  }
`

const Title = styled.h1`
  padding: ${rhythm(1)} 0;
`
