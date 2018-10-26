import React from 'react'
import styled from 'react-emotion'
import Link from 'gatsby-link'

import { rhythm, scale } from '../utils/typography'

import HireMe from './HireMe'

export default () => {
  return (
    <Background>
      <Card className="experience card">
        <Time>JUN 2016</Time>
        <Heading>Web Design & Development</Heading>
        <Company>freelancer</Company>
        <Description>
          I've created websites for small business. I’ve build websites from
          scratch, using Wordpress and using React, which helps me build fast
          and modern websites like this one.
        </Description>
      </Card>
      <Card className="education card">
        <Time>AUG 2017</Time>
        <Heading>Mulimedia Design and Communication</Heading>
        <Company>@Business Academy Aarhus, Denmark</Company>
        <Description>
          Over two semesters year, I have completed 7 teamwork and 2 individual
          projects. I’ve learned how to lead a team through the UX design
          process and agile development method.
        </Description>
      </Card>
      <Card className="experience card">
        <Time>MAY 2018</Time>
        <Heading>Front-end Developer</Heading>
        <Company>@PIXIU s.r.o., Czech Republic</Company>
        <Description>
          I've created websites for small business. I’ve build websites from
          scratch, using Wordpress and using React, which helps me build fast
          and modern websites like this one.
        </Description>
      </Card>
      <Card className="education card">
        <Time>AUG 2018</Time>
        <Heading>Graphic Design (exchange)</Heading>
        <Company>@Mission College of Silicon Valley, CA</Company>
        <Description>
          Over two semesters year, I have completed 7 teamwork and 2 individual
          projects. I’ve learned how to lead a team through the UX design
          process and agile development method.
        </Description>
      </Card>

      <div
        css={`
        background: linear-gradient(30deg, #FDA629 0%, #FD66F1 51.38%, #4B0C49 100%);
        border-radius: ${rhythm(0.46)};
        padding: 4px;
        margin: auto;

        @media screen and (max-width: ${breakpointRow}px) {
          width: calc(100% - 4rem);
          margin: ${rhythm(1)} auto;
        }
      `}
      >
        <Card className="internship card">
          <Time>FEB2019</Time>
          <Heading>UX/UI Intern</Heading>
          <Company>@Your Amazing Company</Company>
          <Description>
            Over two semesters year, I have completed 7 teamwork and 2
            individual projects. I’ve learned how to lead a team through the UX
            design process and agile development method.
          </Description>
          <HireMe className="hireMe" color="black" />
        </Card>
      </div>
    </Background>
  )
}

const breakpointRow = 600

const borderRadius = rhythm(0.33)

const Background = styled.article`
  margin-top: ${rhythm(7)};

  display: flex;
  flex-flow: column nowrap;

  @media screen and (min-width: ${breakpointRow}px) {
    flex-flow: column-reverse wrap;
    height: 100vh;
    min-height: 600px;
    padding: ${rhythm(2)};
  }
`

const Card = styled.section`
  width: calc(100% - 4rem);
  margin: ${rhythm(1)} 0;
  padding: ${rhythm(0.75)};
  position: relative;

  &.education {
    background-color: #494949;
  }

  &.experience {
    background-color: #ebebeb;
    color: black;
  }

  &.internship {
    background: white;
    color: black;
    margin: 0;
    width: 100%;
    border-radius: ${borderRadius};
  }

  @media screen and (max-width: ${breakpointRow}px) {
    &.education {
      border-radius: 0 ${borderRadius} ${borderRadius} 0;

      time {
        right: -4rem;
        width: 3rem;
      }
    }

    &.experience {
      border-radius: ${borderRadius} 0 0 ${borderRadius};
      align-self: flex-end;

      time {
        left: -4rem;
        width: 3rem;
        color: white;
        text-align: right;
      }
    }

    &.internship {
      align-self: center;

      time {
        top: -3rem;
        left: ${rhythm(0.75)};
        color: white;
      }

      a {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: ${rhythm(0.75)};
      }
    }
  }

  @media screen and (min-width: ${breakpointRow}px) {
    min-height: calc(50vh - ${rhythm(4)});
    width: 25vw;
    border-radius: ${borderRadius};

    &.education {
      margin-left: 5vw;
    }

    &.internship {
    }
  }
`

const Time = styled.time`
  position: absolute;
  top: 0;
  right: 0;
  font-weight: 200;
  margin: ${rhythm(0.75)} 0.5rem;

  @media screen and (min-width: ${breakpointRow}px) {
    top: -${rhythm(2)};
    left: ${rhythm(0.5)};
    color: white;
    opacity: 0.7;
  }
`

const Heading = styled.h4`
  margin: 0;
  line-height: 1.5em;
`

const Company = styled.p`
  font-size: 0.875rem;
  margin: 0;
  font-weight: 200;
`

const Description = styled.p`
  @media screen and (max-width: 600px) {
    display: none;
  }

  margin-top ${rhythm(1)};
`
