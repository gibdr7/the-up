import './resume.scss'

import { StaticQuery, graphql } from 'gatsby'

import Projects from './helpers/projects'
import React from 'react'
import SocialContainer from '../SocialContainer/socialContainer'

const skills = [
  {
    name: 'React',
    level: 40,
  },
  {
    name: 'CSS',
    level: 40,
  },
  {
    name: 'Javascript',
    level: 45,
  },
  {
    name: 'Python',
    level: 60,
  },
  {
    name: 'SQL',
    level: 60,
  },
  {
    name: 'Git',
    level: 40,
  },
]

const Resume = () => (
  <StaticQuery
    query={graphql`
      query resumeQuery {
        site {
          siteMetadata {
            author
            title
          }
        }
      }
    `}
    render={data => (
      <div>
        <h1>
          Hello I'm Drew with cool background and down arrow (smooth scrolling)
        </h1>
        <h1>Picture of me</h1>
        <h1>Bio description (linkedin), bold/underline/link some things</h1>
        <div className="social">
          <SocialContainer />
        </div>
        <h1>What I do (4 boxes with my key capabilities)</h1>
        <a href="https://onepagelove.com/peter-toth">like this</a>
        <div>
          <h1>{data.site.siteMetadata.title}</h1>
          {skills.map((skill, i) => (
            <div key={skill}>
              <label>{skill.name}</label>
              <div id={`${skill.name}-bar`} className="skill__bar">
                <div className="skill__level"></div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <h1>Experience</h1>
          <Projects />
        </div>
      </div>
    )}
  />
)

export default Resume
