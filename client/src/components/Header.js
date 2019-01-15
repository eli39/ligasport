import React, { Component } from 'react';
//import PropTypes from 'prop-types';
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: '',
      name: '',
      lastname: '',
      created: ''
    };
  }
  render() {
    return (
      <header className="main-header">
        <a href="#" className="logo">
          <span className="logo-mini"><b>L</b>S</span>
          <span className="logo-lg"><b>Liga</b>Sport</span>
        </a>
        <nav className="navbar navbar-static-top" role="navigation">
          <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
            <span className="sr-only">Toggle navigation</span>
          </a>
          <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
              <li className="dropdown messages-menu">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  <i className="fa fa-envelope-o"/>
                  <span className="label label-warning">4</span>
                </a>
                <ul className="dropdown-menu">
                  <li className="header">You have 4 messages</li>
                  <li>
                    <ul className="menu">
                      <li>
                        <a href="#">
                          <div className="pull-left">
                            <img src={this.props.avatar}  className="img-circle" alt="User Image" />
                          </div>
                          <h4>
                            Support Team
                            <small><i className="fa fa-clock-o"/> 5 mins</small>
                          </h4>
                          <p>Why not buy a new awesome theme?</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="footer"><a href="#">See All Messages</a></li>
                </ul>
              </li>
              <li className="dropdown notifications-menu">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  <i className="fa fa-bell-o"/>
                  <span className="label label-warning">10</span>
                </a>
                <ul className="dropdown-menu">
                  <li className="header">You have 10 notifications</li>
                  <li>
                    <ul className="menu">
                      <li>
                        <a href="#">
                          <i className="fa fa-users text-aqua"/> 5 new members joined today
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="footer"><a href="#">View all</a></li>
                </ul>
              </li>
              <li className="dropdown user user-menu">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  <img src={this.props.avatar} className="user-image" alt="User Image" />
                  <span className="hidden-xs"> {this.props.name} </span>
                </a>
                <ul className="dropdown-menu">
                  <li className="user-header">
                    <img src={this.props.avatar}  className="img-circle" alt="User Image" />
                    <p>
                      {this.props.name} {this.props.lastname}
                      <small>Miembro desde {this.props.created} </small>
                    </p>
                  </li>
                  <li className="user-footer">
                    <div className="pull-left">
                      <a href="#" className="btn btn-default btn-flat"> Mi cuenta </a>
                    </div>
                    <div className="pull-right">
                      <a href="#" className="btn btn-default btn-flat"> Salir </a>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" data-toggle="control-sidebar"><i className="fa fa-gears"/></a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
/*
Header.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired
};
*/
export default Header;
