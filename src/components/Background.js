import React from 'react'
import styled from 'react-emotion'
import Link from 'gatsby-link'

import { rhythm, scale } from '../utils/typography'

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

      <Card className="internship card">
        <Time>FEB2019</Time>
        <Heading>UX/UI Intern</Heading>
        <Company>@Your Amazing Company</Company>
        <Description>
          Over two semesters year, I have completed 7 teamwork and 2 individual
          projects. I’ve learned how to lead a team through the UX design
          process and agile development method.
        </Description>
      </Card>
    </Background>
  )
}

const Background = styled.article`
  padding-top: ${rhythm(2)};

  display: flex;
  flex-flow: column nowrap;
`

const Card = styled.section`
  width: calc(100% - 4rem);
  margin-top: ${rhythm(1)};
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
    // background-image: url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' viewBox='0 0 329 98' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='4' y='4' width='321' height='90' rx='5' fill='white'/%3E%3Crect x='2' y='2' width='325' height='94' rx='7' stroke='url(%23paint0_linear)' stroke-opacity='0.7' stroke-width='4'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear' x1='325' y1='103.5' x2='295.287' y2='-44.153' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FDA629'/%3E%3Cstop offset='0.513812' stop-color='%23FD66F1'/%3E%3Cstop offset='1' stop-color='%234B0C49'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A");
    background-color: white;
    color: black;
    border-radius: 0.5rem;
    background-size: 100% 100%;
    padding: calc(${rhythm(0.75)} + 4px);
  }

  @media screen and (max-width: 600px) {
    &.education {
      border-radius: 0 0.5rem 0.5rem 0;

      time {
        right: -4rem;
        width: 3rem;
      }
    }

    &.experience {
      border-radius: 0.5rem 0 0 0.5rem;
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
    }
  }
`

const Time = styled.time`
  position: absolute;
  top: 0;
  right: 0;
  font-weight: 200;
  margin: ${rhythm(0.75)} 0.5rem;
`

const Heading = styled.h4`
  margin: 0;
  line-height: 1.5em;
`

const Company = styled.p`
  font-size: 0.875rem;
  margin: 0;
`

const Description = styled.p`
  @media screen and (max-width: 600px) {
    display: none;
  }
`
