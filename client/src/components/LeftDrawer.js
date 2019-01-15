import React,{ Component } from 'react';
import { Link } from 'react-router';

class LeftDrawer extends Component {

  constructor(props) {
      super(props);
      this.state = {
        name: '',
        avatar: ''
      };
  }

  render() {

    return (
      <aside className="main-sidebar">
        <section className="sidebar">
          <div className="user-panel">
            <div className="pull-left image">
              <img src={this.props.avatar} className="img-circle" alt="User Image"/>
            </div>
            <div className="pull-left info">
              <p> {this.props.name} </p>
              <a href="#"><i className="fa fa-circle text-success"/> En línea</a>
            </div>
          </div>

          <ul className="sidebar-menu" data-widget="tree">

            <form action="#" method="get" className="sidebar-form">
              <select className="form-control">
                <option> Liga ... </option>
                {this.props.leagues.map((value, index) => (
                  <option key={index}>{value.name}</option>
                ))}
              </select>

            </form>

            <li className="header">
              LIGA
            </li>

            <li className="treeview">
              <a href="#">
                <i className="fa fa-users"/>
                <span> Roles </span>
                <span className="pull-right-container"><i className="fa fa-angle-left pull-right"/></span>
              </a>
              <ul className="treeview-menu">
                <li><Link to={'/dashboard/role'}> <i className="fa fa-cog"/> Gestión </Link></li>
                <li><Link to={'/dashboard/role/register'}> <i className="fa fa-plus"/> Rol </Link></li>
              </ul>
            </li>

            <li className="treeview">
              <a href="#">
                <i className="fa fa-users"/>
                <span> Usuarios </span>
                <span className="pull-right-container"><i className="fa fa-angle-left pull-right"/></span>
              </a>
              <ul className="treeview-menu">
                <li><Link to={'/dashboard/user'}> <i className="fa fa-cog"/> Gestión </Link></li>
                <li><Link to={'/dashboard/user/register'}> <i className="fa fa-plus"/> Usuario </Link></li>
              </ul>
            </li>

            <li className="treeview">
              <a href="#">
                <i className="fa fa-futbol-o"/>
                <span> Ligas </span>
                <span className="pull-right-container"><i className="fa fa-angle-left pull-right"/></span>
              </a>
              <ul className="treeview-menu">
                <li><Link to={'/dashboard/league'}> <i className="fa fa-cog"/> Gestión </Link></li>
                <li><Link to={'/dashboard/league/register'}> <i className="fa fa-plus"/> Liga </Link></li>
              </ul>
            </li>


          </ul>
        </section>
      </aside>
    );
  }
}

export default LeftDrawer;
