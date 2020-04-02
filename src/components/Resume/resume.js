import React from 'react'

import './resume.scss'

import { StaticQuery, graphql } from 'gatsby'
import SocialContainer from '../SocialContainer/socialContainer'
import Projects from './helpers/projects'

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
  <Projects/>
  // <div>test</div>
)
  // <StaticQuery
  //   query={graphql`
  //     query resumeQuery {
  //       site {
  //         siteMetadata {
  //           author
  //           title
  //         }
  //       }
  //     }
  //   `}
  //   render={data => (
      // <div>
      //   <h1>Hello I'm Drew with cool background and down arrow (smooth scrolling)</h1>
      //   <h1>Picture of me</h1>
      //   <h1>Bio description (linkedin), bold/underline/link some things</h1>
      //   <div className="social">
      //     <SocialContainer/>
      //   </div>
      //   <h1>What I do (4 boxes with my key capabilities)</h1>
      //   <a href='https://onepagelove.com/peter-toth'>like this</a>
      //   <div>
      //     <h1>{data.site.siteMetadata.title}</h1>
      //     {skills.map(skill => (
      //       <div>
      //         <label>{skill.name}</label>
      //         <div id={`${skill.name}-bar`} className="skill__bar">
      //           <div className="skill__level"></div>
      //         </div>
      //       </div>
      //     ))}
      //   </div>
      //   <div>
      //     <h1>Experience</h1>
      //     <Experiences/>
      //     {jobs &&
      //       jobs.map(job => (
      //         <article
      //           key={job.begin.month + job.begin.year}
      //           className="timeline__item"
      //         >
      //           <div className="inner">
      //             <span className="timeline__date">
      //               <span className="timeline__month">{job.begin.month}</span>
      //               <span className="timeline__year">{job.begin.year}</span>
      //             </span>
      //             <h2 className="timeline__title">
      //               {job.occupation} at {job.company} <br />
      //               <small className="timeline__title--small">
      //                 ({job.duration || 'present'})
      //               </small>
      //             </h2>
      //             <p>{job.description}</p>
      //           </div>
      //         </article>
      //       ))}
      //   </div>
      // </div>
//     )}
//   />
// )

export default Resume;
