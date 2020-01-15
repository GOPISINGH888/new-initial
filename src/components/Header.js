/* eslint global-require: 0 */

import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Section = styled.section`
  padding: 1rem 1.5rem;
  font-family: ${props => props.theme.primaryFontFamily};

  .navbar {
    background-color: transparent;
  }
  .navbar-brand {
    margin-right: 20px;
    .navbar-item is-size-6img {
      max-height: 3.75rem;
    }
  }
  .navbar-menu {
    @media screen and (max-width: 600px) {
      position: absolute;
      width: 100%;
      transition: 0.6s;
    }
  }
  .navbar-itemis-size-6 {
    font-weight: 700;
    font-size: 1.2rem;
    :hover {
      color: ${props => props.theme.darkAccent};
    }
  }
  .navbar-burger {
    background-color: #1c1323;
    color: #fff;
    opacity: 0.6;
    border-radius: 4px;
  }
  .logo {
    margin-right: 12rem;
  }
  .icon {
    margin-right: 1rem;
  }
`;

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
    };
  }

  handleMobileMenu() {
    const { isActive } = this.state;

    this.setState({
      isActive: !isActive,
    });
  }

  render() {
    const { isActive } = this.state;

    return (
      <Section className="section">
        <div className="container">
          <nav
            className="navbar"
            role="navigation"
            aria-label="main navigation"
          >
            <div className="navbar-brand">
              <Link className="logo " to="/">
                <img src="/images/logotransport.png" alt="site logo" />
              </Link>
              <a
                href="#"
                role="button"
                className={
                  isActive
                    ? 'navbar-burger burger mobile is-active'
                    : 'navbar-burger burger mobile'
                }
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
                onClick={() => this.handleMobileMenu()}
              >
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </a>
            </div>
            <div className={isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
              <div className="navbar-start">
                <div className="navbar-item is-size-6  has-dropdown is-hoverable ">
                  <a className="navbar-link ">Home</a>

                  <div className="navbar-dropdown">
                    <a className="navbar-item is-size-6 ">About</a>
                    <a className="navbar-item is-size-6 ">Jobs</a>
                  </div>
                </div>
                <div className="navbar-item is-size-6  has-dropdown is-hoverable">
                  <a className="navbar-link">About</a>

                  <div className="navbar-dropdown">
                    <a className="navbar-item is-size-6 ">About</a>
                    <a className="navbar-item is-size-6 ">Jobs</a>
                  </div>
                </div>
                <div className="navbar-item is-size-6  has-dropdown is-hoverable">
                  <a className="navbar-link">Services</a>

                  <div className="navbar-dropdown">
                    <a className="navbar-item is-size-6 ">About</a>
                    <a className="navbar-item is-size-6 ">Jobs</a>
                  </div>
                </div>
                <div className="navbar-item is-size-6  has-dropdown is-hoverable">
                  <a className="navbar-link">Otherpage</a>

                  <div className="navbar-dropdown">
                    <a className="navbar-item is-size-6 ">About</a>
                    <a className="navbar-item is-size-6 ">Jobs</a>
                  </div>
                </div>
                <div className="navbar-item is-size-6  has-dropdown is-hoverable">
                  <a className="navbar-link">Blog</a>

                  <div className="navbar-dropdown">
                    <a className="navbar-item is-size-6 ">About</a>
                    <a className="navbar-item is-size-6 ">Jobs</a>
                  </div>
                </div>
                <div className="navbar-item is-size-6  has-dropdown is-hoverable">
                  <a className="navbar-link">Contact</a>

                  <div className="navbar-dropdown">
                    <a className="navbar-item is-size-6 ">About</a>
                    <a className="navbar-item is-size-6 ">Jobs</a>
                  </div>
                </div>
              </div>
              <div className="navbar-end is-hidden-touch">
                <div className="navbar-item">
                  <i className="fas fa-user icon"></i>
                  <i className="fas fa-search icon"></i>
                  <i className="fas fa-shopping-bag icon"></i>
                  <li class="select-language">
                    <select name="#" id="#">
                      <option selected="" value="End">
                        ENG
                      </option>
                      <option value="ARA">ARA</option>
                      <option value="CHI">CHI</option>
                    </select>
                  </li>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </Section>
    );
  }
}
