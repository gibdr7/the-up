import React from 'react'
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
} from 'react-icons/fa'

import Layout from '../components/layout'

import './resume.scss'

import { StaticQuery, graphql } from 'gatsby'

const skills = [
  {
    name: 'HTML',
    level: 70,
  },
  {
    name: 'CSS',
    level: 60,
  },
  {
    name: 'Javascript',
    level: 50,
  },
  {
    name: 'NodeJs',
    level: 40,
  },
  {
    name: 'React',
    level: 60,
  },
  {
    name: 'Git',
    level: 70,
  },
]

const jobs = [
  {
    company: 'Lendico',
    begin: {
      month: 'apr',
      year: '2018',
    },
    duration: null,
    occupation: 'Frontend developer',
    description:
      'I integrate the Frontend team responsible for developing and maintaining the online lending platform.',
  },
  {
    company: 'Anapro',
    begin: {
      month: 'dec',
      year: '2016',
    },
    duration: '1 yr e 5 mos',
    occupation: 'Fullstack developer',
    description:
      'Development and maintenance, corrective and preventive, of web applications for the real estate market.',
  },
  {
    company: 'Anapro',
    begin: {
      month: 'set',
      year: '2012',
    },
    duration: '4 yrs e 3 mos',
    occupation: 'Support Technician',
    description:
      'Responsible for the implementation and parameterization of the system, training and customer support. Acting also in person in real estate launches guaranteeing the success and good use of the tool.',
  },
]

const Resume = () => (
  <StaticQuery
    query={graphql`
      query resumeQuery {
        site {
          siteMetadata {
            description
            author
            title
            linkedin
            github
            facebook
            instagram
          }
        }
      }
    `}
    render={data => (
      <Layout title="Resume">
        <h1>Picture of me</h1>
        <h1>Bio description (linkedin)</h1>
        <div className="social">
          <a href="/instagram">
            <FaInstagram className="social-icon" size="32" />
          </a>
          )}
          {data.site.siteMetadata.github && (
            <a href={data.site.siteMetadata.github}>
              <FaGithub className="social-icon" size="32" />
            </a>
          )}
          {data.site.siteMetadata.facebook && (
            <a href={data.site.siteMetadata.facebook}>
              <FaFacebook className="social-icon" size="32" />
            </a>
          )}
          {data.site.siteMetadata.linkedin && (
            <a href={data.site.siteMetadata.linkedin}>
              <FaLinkedin className="social-icon" size="32" />
            </a>
          )}
          {data.site.siteMetadata.email && (
            <a href={`mailto:${data.site.siteMetadata.email}`}>
              <FaEnvelope className="social-icon" size="32" />
            </a>
          )}
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
