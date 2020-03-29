import React from 'react'

import Layout from '../components/layout'

import './resume.scss'

import { StaticQuery, graphql } from 'gatsby'
import SocialContainer from '../components/SocialContainer/socialContainer'

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

const jobs = [
  {
    company: 'Lab49',
    begin: {
      month: 'oct',
      year: '2019',
    },
    duration: null,
    occupation: 'Development Consultant',
    description:
      'I do stuff.',
  },
  {
    company: 'ION Group',
    begin: {
      month: 'jul',
      year: '2018',
    },
    duration: null,
    occupation: 'Corporate Development | M&A Analyst',
    description:
      'I do stuff.',
  },
  {
    company: 'Adobe',
    begin: {
      month: 'may',
      year: '2016',
    },
    duration: '6 mos',
    occupation: 'Innovation Analyst',
    description:
      'I do stuff.',
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
      <Layout title="Resume">
        <h1>Picture of me</h1>
        <h1>Bio description (linkedin)</h1>
        <div className="social">
          <SocialContainer/>
        </div>
        <div>
          <h1>{data.site.siteMetadata.title}</h1>
          {skills.map(skill => (
            <div>
              <label>{skill.name}</label>
              <div id={`${skill.name}-bar`} className="skill__bar">
                <div className="skill__level"></div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <h1>Experience</h1>
          {jobs &&
            jobs.map(job => (
              <article
                key={job.begin.month + job.begin.year}
                className="timeline__item"
              >
                <div className="inner">
                  <span className="timeline__date">
                    <span className="timeline__month">{job.begin.month}</span>
                    <span className="timeline__year">{job.begin.year}</span>
                  </span>
                  <h2 className="timeline__title">
                    {job.occupation} at {job.company} <br />
                    <small className="timeline__title--small">
                      ({job.duration || 'present'})
                    </small>
                  </h2>
                  <p>{job.description}</p>
                </div>
              </article>
            ))}
        </div>
      </Layout>
    )}
  />
)

export default Resume
