import React,{ Component } from 'react';
class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <footer className="main-footer">
          <div className="pull-right hidden-xs">
            v1.0.0
          </div>
          <strong>
            Copyright &copy;
            2019
            <a href="#"> LigaSport </a>
          </strong>
          Todos los derechos reservados.
        </footer>
      </div>
    );
  }
}
export default Footer;
