import React,{ Component } from 'react';

class ConfigurationComponent extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <aside className="control-sidebar control-sidebar-dark">

          <ul className="nav nav-tabs nav-justified control-sidebar-tabs">
              <li className="active"><a href="#control-sidebar-home-tab" data-toggle="tab"><i className="fa fa-id-card"/></a></li>
              <li><a href="#control-sidebar-settings-tab" data-toggle="tab"><i className="fa fa-gear"/></a></li>
          </ul>

          <div className="tab-content">

            <div className="tab-pane active" id="control-sidebar-home-tab">

              <h3 className="control-sidebar-heading"> Datos pesonales </h3>

              <ul className="control-sidebar-menu">
                <li>
                  <a href="javascript:;">
                    <i className="menu-icon fa fa-diamond bg-green"/>
                    <div className="menu-info">
                      <h4 className="control-sidebar-subheading"> Liga </h4>
                      <p>Liga</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:;">
                    <i className="menu-icon fa fa-shield bg-green"/>
                    <div className="menu-info">
                      <h4 className="control-sidebar-subheading"> Equipo </h4>
                      <p>Equipo</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:;">
                    <i className="menu-icon fa fa-area-chart bg-green"/>
                    <div className="menu-info">
                      <h4 className="control-sidebar-subheading"> Categoria </h4>
                      <p>Categoria</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:;">
                    <i className="menu-icon fa fa-user bg-green"/>
                    <div className="menu-info">
                      <h4 className="control-sidebar-subheading"> Nombre </h4>
                      <p>Nombre completo</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:;">
                    <i className="menu-icon fa fa-envelope bg-green"/>
                    <div className="menu-info">
                      <h4 className="control-sidebar-subheading"> Correo </h4>
                      <p>Correo</p>
                    </div>
                  </a>
                </li>
              </ul>

            </div>

            <div className="tab-pane" id="control-sidebar-settings-tab">
              <form method="post">

                <h3 className="control-sidebar-heading"> Configuración </h3>

                <div className="form-group">
                  <label className="control-sidebar-subheading">
                    Equipo
                  </label>
                  <p>
                    Equipo
                  </p>
                </div>

                <div className="form-group">
                  <label className="control-sidebar-subheading">
                    Usuario
                  </label>
                  <p>
                    Usuario
                  </p>
                </div>

              </form>
            </div>

          </div>

        </aside>
    );
  }
}

export default ConfigurationComponent;
