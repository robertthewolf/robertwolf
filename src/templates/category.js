import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import styled from 'react-emotion'
import { rhythm } from '../utils/typography'
import posed from 'react-pose'

const Parent = posed.div({
  open: {
    x: '0%',
    delayChildren: 100,
    staggerChildren: 150,
  },
  closed: { x: '100%', delay: 0 },
})

const Child = posed.div({
  open: { y: 0, opacity: 1 },
  closed: { y: 20, opacity: 0 },
})

import BackButton from '../components/BackButton'
import Contact from '../components/Contact'
import Cover from '../components/Cover'
import Tagline from '../components/Tagline'
import Card from '../components/Card'
import Next from '../components/Next'
import Headroom from '../components/Headroom'

export default class PostTemplate extends React.Component {
  state = { isOpen: false }

  componentDidMount() {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    const category = this.props.data.prismicCategory

    const posts = this.props.data.allPrismicPost.edges.filter(
      edge => edge.node.data.category.id === category.prismicId
    )

    return (
      <div>
        <Headroom link="/" />
        <Contact />
        <Tagline>{category.data.tagline.text}</Tagline>
        <Cover image={category.data.icon.url} size="50% 50%" />
        <Parent
          pose={this.state.isOpen ? 'open' : 'closed'}
          css={`
            @media screen and (min-width: 600px) {
              display: grid;
              grid-template-columns: 1fr 0.5fr 1fr;
              grid-auto-flow: row dense;

              > *:nth-of-type(1) {
                grid-column: 1 / 3;
              }

              > *:nth-of-type(3) {
                grid-column: 2 / 4;
              }
            }
            @media screen and (min-width: 1000px) {
              margin: 0 10vw;
            }
          `}
        >
          {posts.map(post => (
            <Child key={post.node.id}>
              <Link to={`/${category.slugs[0]}/${post.node.slugs[0]}`}>
                <Card
                  cover={post.node.data.cover}
                  color={post.node.data.color}
                  title={post.node.data.title.text}
                  id={post.node.slugs[0]}
                />
              </Link>
            </Child>
          ))}
        </Parent>

        <div
          css={`
            display: flex;
            @media screen and (min-width: 600px) {
              width: 80vw;
              margin: 0 auto ${rhythm(1)};
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

    allPrismicCategory(
      sort: {fields: [data___name___text], order: ASC},
    ) {
      edges {
        node {
          id
          slugs
          data {
            name {
              text
            }
          }
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
