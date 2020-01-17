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
  }

  .navbar-menu {
    @media screen and (max-width: 600px) {
      position: absolute;
      width: 100%;
      transition: 0.6s;
    }
  }
  .navbar-item is-size-6 {
    font-weight: 700;
    font-size: 1.2rem;
  }
  .hover:hover {
    color: ${props => props.theme.darkAccent} !important;
    background-color: ${props => props.theme.darkShades} !important;
  }
  .navbar-burger {
    background-color: #1c1323;
    color: #fff;
    opacity: 0.6;
    border-radius: 4px;
  }
  .logo {
    margin-right: 9rem;
  }
  .icon {
    margin-right: 1rem;
  }
  p:hover {
    color: ${props => props.theme.darkAccent} !important;
    background: none !important;
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
                  <p className="navbar-link has-text-white-bis">HOME</p>

                  <div className="navbar-dropdown has-background-black">
                    <a className="hover navbar-item is-size-6 has-text-white-bis">
                      HOME VERSION 1
                    </a>
                    <a className="hover navbar-item is-size-6 has-text-white-bis">
                      HOME VERSION 2
                    </a>
                    <a className=" hover navbar-item is-size-6 has-text-white-bis">
                      HOME VERSION 3
                    </a>
                    <a className="hover navbar-item is-size-6 has-text-white-bis">
                      HOME VERSION 4
                    </a>
                  </div>
                </div>
                <div className="navbar-item is-size-6  has-dropdown is-hoverable">
                  <p className="navbar-link has-text-white-bis">ABOUT</p>

                  <div className="navbar-dropdown has-background-black">
                    <a className=" hover navbar-item is-size-6 has-text-white-bis">
                      ABOUT
                    </a>
                    <a className="hover navbar-item is-size-6 has-text-white-bis">
                      ABOUT PROFILE
                    </a>
                    <a className="hover navbar-item is-size-6 has-text-white-bis">
                      ABOUT HISTORY
                    </a>
                    <a className="hover navbar-item is-size-6 has-text-white-bis">
                      ABOUT REPORT
                    </a>
                    <a className="hover navbar-item is-size-6 has-text-white-bis">
                      ABOUT TEAM
                    </a>
                    <a className="hover navbar-item is-size-6 has-text-white-bis">
                      ABOUT SUPPORT
                    </a>
                  </div>
                </div>
                <div className="navbar-item is-size-6  has-dropdown is-hoverable">
                  <p className="navbar-link has-text-white-bis">SERVICE</p>

                  <div className="navbar-dropdown has-background-black">
                    <a className="hover navbar-item is-size-6 has-text-white-bis">
                      SERVICE VERSION 1
                    </a>
                    <a className="hover navbar-item is-size-6 has-text-white-bis">
                      SERVICE VERSION 2
                    </a>
                    <a className="hover navbar-item is-size-6 has-text-white-bis">
                      SERVICE VERSION 3
                    </a>
                    <a className="hover navbar-item is-size-6 has-text-white-bis">
                      SERVICE DETAILS
                    </a>
                  </div>
                </div>
                <div className="navbar-item is-size-6  has-dropdown is-hoverable">
                  <p className="navbar-link has-text-white-bis">OTHERPAGES</p>

                  <div className="navbar-dropdown has-background-black">
                    <a className="hover navbar-item is-size-6 has-text-white-bis">
                      404
                    </a>
                    <a className="hover navbar-item is-size-6 has-text-white-bis">
                      COMING SOON
                    </a>
                  </div>
                </div>
                <div className="navbar-item is-size-6  has-dropdown is-hoverable">
                  <p className="navbar-link has-text-white-bis">BLOG</p>

                  <div className="navbar-dropdown has-background-black">
                    <a className="hover navbar-item is-size-6 has-text-white-bis">
                      BLOG VERSION 1
                    </a>
                    <a className="hover navbar-item is-size-6 has-text-white-bis">
                      BLOG VERSION 2
                    </a>
                    <a className="hover navbar-item is-size-6 has-text-white-bis">
                      SINGLE BLOG
                    </a>
                  </div>
                </div>
                <div className="navbar-item is-size-6  has-dropdown is-hoverable">
                  <p className="navbar-link has-text-white-bis">CONTACT</p>

                  <div className="navbar-dropdown has-background-black">
                    <a className="hover navbar-item is-size-6 has-text-white-bis">
                      CONTACT VERSION 1
                    </a>
                    <a className="hover navbar-item is-size-6 has-text-white-bis">
                      CONTACT VERSION 2
                    </a>
                  </div>
                </div>
              </div>
              <div className="navbar-end is-hidden-touch">
                <div className="navbar-item has-text-white-bis">
                  <i className="fas fa-user icon" />
                  <i className="fas fa-search icon" />
                  <i className="fas fa-shopping-bag icon" />
                  <li className="select-language">
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
