import React from 'react';

import './style.scss';

const Navbar = () => (
  <div className="hero-head is-hidden-mobile">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"></link>
		<nav className="navbar gradientBg">
			<div className="container is-fluid">
				<a class="navbar-item" href="/">
          <h1 className="title is-1 is-uppercase has-text-white-ter no-hover">The up</h1>
        </a>
        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
				<div id="navbarMenuHeroA" className="navbar-menu">
					<div className="navbar-end">
						<span className="navbar-item">
              <div class="dropdown is-hoverable is-right">
                <div class="dropdown-trigger">
                  <a href="/money-management" class="navbarLink has-text-white" aria-haspopup="true" aria-controls="dropdown-menu">
                    <span class="icon no-padding">
                      <i class="fas fa-dollar-sign"></i>
                    </span>
                    <span>Money Management</span>
                  </a>
                </div>
                <div class="dropdown-menu" id="dropdown-menu" role="menu">
                  <div class="dropdown-content">
                    <a href="/money-management/budgeting" class="dropdown-item">
                      Budgeting
                    </a>
                    <a href="/money-management/investing" class="dropdown-item">
                      Investing
                    </a>
                    <a href="/money-management/calculators" activeClassName="is-active" class="dropdown-item is-active">
                      Calculators
                    </a>
                    <hr class="dropdown-divider"></hr>
                    <a href="/" class="dropdown-item">
                      With a divider
                    </a>
                  </div>
                </div>
              </div>
						</span>
						<span className="navbar-item">
              <div class="dropdown is-hoverable is-right">
                <div class="dropdown-trigger">
                  <a href="/jobs" class="navbarLink has-text-white" aria-haspopup="true" aria-controls="dropdown-menu">
                    <span class="icon no-padding">
                      <i class="fas fa-suitcase"></i>
                    </span>
                    <span>Jobs</span>
                  </a>
                </div>
                <div class="dropdown-menu" id="dropdown-menu" role="menu">
                  <div class="dropdown-content">
                    <a href="/jobs/" class="dropdown-item">
                      Strategy
                    </a>
                    <a href="/jobs/industry-charts" class="dropdown-item">
                      Industry Charts
                    </a>
                  </div>
                </div>
              </div>
						</span>
            <div>
              <div class="navVR">&nbsp;</div>
            </div>
						<span className="navbar-item">
              <div class="dropdown is-hoverable is-right">
                <div class="dropdown-trigger">
                  <a href="/misc" class="navbarLink has-text-white" aria-haspopup="true" aria-controls="dropdown-menu">
                    <span class="icon no-padding">
                      <i class="fas fa-ellipsis-h"></i>
                    </span>
                    <span>Misc</span>
                  </a>
                </div>
                <div class="dropdown-menu" id="dropdown-menu" role="menu">
                  <div class="dropdown-content">
                    <a href="/misc/more-calculators" class="dropdown-item">
                      More Calculators
                    </a>
                    <a href="/misc/" class="dropdown-item">
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
