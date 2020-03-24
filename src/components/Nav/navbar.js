import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import './style.scss'

const NavbarLinks = {
  'Money Management': [
    'dollar-sign',
    ['Budgeting', 'Investing', 'Calculators'],
  ],
  Jobs: ['suitcase', ['Interviews', 'Strategy', 'Industry Charts']],
  Misc: ['ellipsis-h', ['More Calculators']],
}

const Navbar = () => (
  <StaticQuery
    query={graphql`
      query navbarQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className="hero-head is-hidden-mobile">
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        ></link>
        <nav className="navbar colorGradient">
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item" href="/">
                <h1 className="title is-size-3 is-uppercase has-text-white-ter no-hover">
                  {data.site.siteMetadata.title}
                </h1>
              </a>
              <label
                role="button"
                className="navbar-burger burger"
                aria-label="menu"
                aria-expanded="false"
                htmlFor="nav-toggle-state"
              >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </label>
            </div>
            <input type="checkbox" id="nav-toggle-state" />
            <div id="navbarMenuHeroA" className="navbar-menu">
              <div className="navbar-end">
                {Object.keys(NavbarLinks).map(navItem => (
                  <span className="navbar-item">
                    <div className="dropdown is-hoverable is-right">
                      <div className="dropdown-trigger">
                        <a
                          href={
                            '/' +
                            navItem
                              .toLowerCase()
                              .replace(/[^\w\d\s]+/g, '')
                              .replace(/\s+/g, '-')
                          }
                          className="navbarLink has-text-white"
                          aria-haspopup="true"
                          aria-controls="dropdown-menu"
                        >
                          <span className="icon no-padding">
                            <i className={"fas fa-"+NavbarLinks[navItem][0]}></i>
                          </span>
                          <span>{navItem}</span>
                        </a>
                      </div>
                      <div className="dropdown-menu" role="menu">
                        <div className="dropdown-content">
                          {NavbarLinks[navItem][1].map(dropdownItem => (
                            <a
                              href={
                                '/' +
                                navItem
                                  .toLowerCase()
                                  .replace(/[^\w\d\s]+/g, '')
                                  .replace(/\s+/g, '-') +
                                '/' +
                                dropdownItem
                                  .toLowerCase()
                                  .replace(/[^\w\d\s]+/g, '')
                                  .replace(/\s+/g, '-')
                              }
                              className="dropdown-item"
                            >
                              {dropdownItem}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </div>
    )}
  />
)

export default Navbar
