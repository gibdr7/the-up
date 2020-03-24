import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const ContactComponent = () => (
    <StaticQuery
    query={graphql`
        query contactQuery {
            site {
                siteMetadata {
                    description
                    email
                    phone
                }
            }
        }
    `}
    render={data => (
        <div>
            <form method="post" action="#">
            <div>
                <label>
                Name
                <input type="text" name="name" id="name" />
                </label>
            </div>
            <div>
                <label>
                Email
                <input type="email" name="email" id="email" />
                </label>
            </div>
            <div>
                <label>
                Subject
                <input type="text" name="subject" id="subject" />
                </label>
            </div>
            <div>
                <label>
                Message
                <textarea name="message" id="message" rows="5" />
                </label>
            </div>
            <div>
                <button type="submit">Send</button>
                <input type="reset" value="Clear" />
            </div>
            </form>
            <div>
            <ul>
                {data.site.siteMetadata.email && (
                <li>
                    <a href={'mailto:' + data.site.siteMetadata.email}>{data.site.siteMetadata.email}</a>
                </li>
                )}
                {data.site.siteMetadata.phone && (
                <li>
                    <a href={'tel:' + data.site.siteMetadata.phone}>{data.site.siteMetadata.phone}</a>
                </li>
                )}
            </ul>
            </div>
        </div>
    )}
    />
)

export default ContactComponent