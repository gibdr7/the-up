import '../resume.scss'
import 'react-vertical-timeline-component/style.min.css'

import { FaSchool, FaStar, FaSuitcase } from 'react-icons/fa'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'

import React from 'react'
import moment from 'moment'

const jobs = [
  {
    company: 'Lab49',
    start: 'Oct 2019',
    end: 'Present',
    duration: null,
    title: 'Development Consultant',
    description: 'I do stuff.',
    type: 'job',
  },
  {
    company: 'ION Group',
    start: 'Jul 2018',
    end: ' Oct 2019',
    duration: null,
    title: 'Corporate Development | M&A Analyst',
    description: 'I do stuff.',
    type: 'job',
  },
  {
    company: 'Adobe',
    start: 'May 2016',
    end: 'Aug 2016',
    duration: '6 mos',
    title: 'Innovation Analyst',
    description: 'I do stuff.',
    type: 'job',
  },
  {
    company: 'Dealogic',
    start: 'Apr 2019',
    end: 'Oct 2019',
    duration: '6 mos',
    title: 'Associate Product Manager',
    description: 'I do stuff.',
    type: 'job',
  },
]

jobs.sort((first, second) => {
  return (
    new Date(moment(second.end, 'mmm yyyy')) -
    new Date(moment(first.end, 'mmm yyyy'))
  )
})

const Projects = () => {
  return (
    <VerticalTimeline className="line-color">
      {jobs &&
        jobs.map((job, i) => (
          <VerticalTimelineElement
            key={job}
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#2d545e', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #2d545e' }}
            date={job.start + ' - ' + job.end}
            iconStyle={{ background: '#2d545e', color: '#fff' }}
            icon={job.type === 'job' ? <FaSuitcase /> : <FaSchool />}
          >
            <h3 className="vertical-timeline-element-title">{job.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">
              {job.company}
            </h4>
            <h4 className="vertical-timeline-element-subtitle">
              another element
            </h4>
            <p>{job.description}</p>
          </VerticalTimelineElement>
        ))}
      <VerticalTimelineElement
        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
        icon={<FaStar />}
      />
    </VerticalTimeline>
  )
}

export default Projects
