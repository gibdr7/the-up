import React from 'react';

import './style.scss';

const Navbar = () => (
  <div className="hero-head is-hidden-mobile">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"></link>
		<nav className="navbar gradientBg">
			<div className="container is-fluid">
				<a className="navbar-item" href="/">
          <h1 className="title is-1 is-uppercase has-text-white-ter no-hover">The up</h1>
        </a>
        <a href="/" role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
				<div id="navbarMenuHeroA" className="navbar-menu">
					<div className="navbar-end">
						<span className="navbar-item">
              <div className="dropdown is-hoverable is-right">
                <div className="dropdown-trigger">
                  <a href="/money-management" className="navbarLink has-text-white" aria-haspopup="true" aria-controls="dropdown-menu">
                    <span className="icon no-padding">
                      <i className="fas fa-dollar-sign"></i>
                    </span>
                    <span>Money Management</span>
                  </a>
                </div>
                <div className="dropdown-menu" id="dropdown-menu" role="menu">
                  <div className="dropdown-content">
                    <a href="/money-management/budgeting" className="dropdown-item">
                      Budgeting
                    </a>
                    <a href="/money-management/investing" className="dropdown-item">
                      Investing
                    </a>
                    <a href="/money-management/calculators" activeclassname="is-active" className="dropdown-item is-active">
                      Calculators
                    </a>
                    <hr className="dropdown-divider"></hr>
                    <a href="/" className="dropdown-item">
                      With a divider
                    </a>
                  </div>
                </div>
              </div>
						</span>
						<span className="navbar-item">
              <div className="dropdown is-hoverable is-right">
                <div className="dropdown-trigger">
                  <a href="/jobs" className="navbarLink has-text-white" aria-haspopup="true" aria-controls="dropdown-menu">
                    <span className="icon no-padding">
                      <i className="fas fa-suitcase"></i>
                    </span>
                    <span>Jobs</span>
                  </a>
                </div>
                <div className="dropdown-menu" id="dropdown-menu" role="menu">
                  <div className="dropdown-content">
                    <a href="/jobs/" className="dropdown-item">
                      Strategy
                    </a>
                    <a href="/jobs/industry-charts" className="dropdown-item">
                      Industry Charts
                    </a>
                  </div>
                </div>
              </div>
						</span>
            <div>
              <div className="navVR">&nbsp;</div>
            </div>
						<span className="navbar-item">
              <div className="dropdown is-hoverable is-right">
                <div className="dropdown-trigger">
                  <a href="/misc" className="navbarLink has-text-white" aria-haspopup="true" aria-controls="dropdown-menu">
                    <span className="icon no-padding">
                      <i className="fas fa-ellipsis-h"></i>
                    </span>
                    <span>Misc</span>
                  </a>
                </div>
                <div className="dropdown-menu" id="dropdown-menu" role="menu">
                  <div className="dropdown-content">
                    <a href="/misc/more-calculators" className="dropdown-item">
                      More Calculators
                    </a>
                    <a href="/misc/" className="dropdown-item">
                      ...
                    </a>
                  </div>
                </div>
              </div>
						</span>
					</div>
				</div>
			</div>
		</nav>
	</div>
);

export default Navbar;
