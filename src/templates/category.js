import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import styled from 'react-emotion'
import { rhythm, scale } from '../utils/typography'
import { Trail, config } from 'react-spring'

import BackButton from '../components/BackButton'
import Contact from '../components/Contact'
import Cover from '../components/Cover'
import Tagline from '../components/Tagline'
import Card from '../components/Card'
import Next from '../components/Next'

import DragScroll from 'react-dragscroll'

export default class PostTemplate extends React.Component {
  render() {
    const category = this.props.data.prismicCategory

    const posts = this.props.data.allPrismicPost.edges.filter(
      edge => edge.node.data.category.id === category.prismicId
    )

    return (
      <div>
        <Contact />
        <Tagline>{category.data.tagline.text}</Tagline>
        <Cover src={category.data.icon.url} size="50% 50%" />
        <DragScroll
          css={`
            @media screen and (min-width: 600px) {
              display: flex;
              justify-content: center;
            }
          `}
        >
          <Trail
            from={{ transform: 'scaleY(0.5)' }}
            to={{ transform: 'scaleY(1)' }}
            keys={posts.map(post => post.node.id)}
            config={{mass: 1000, tension: 200, friction: 50, delay: 50}}
          >
            {posts.map(post => styles => (
              <div style={styles}>
                <Link
                  to={`/${category.slugs[0]}/${post.node.slugs[0]}`}
                  key={post.node.id}
                >
                  <Card
                    cover={post.node.data.cover}
                    color={post.node.data.color}
                    title={post.node.data.title.text}
                    id={post.node.slugs[0]}
                  />
                </Link>
              </div>
            ))}
          </Trail>
        </DragScroll>

        <div
          css={`
          display: flex;
          @media screen and (min-width: 600px) {
            width: 80vw;
            margin: 0 auto;
          }
          `}
        >
          <BackButton link="/" />
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
