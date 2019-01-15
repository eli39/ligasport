import React,{ Component } from 'react';
class Breadcrumb extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="content-header">
        <h1>
          Breadcrumb
          <small> Breadcrumb </small>
        </h1>
        <ol className="breadcrumb">
          <li>
            <a>
              <i className="fa fa-dashboard"/>
                Breadcrumb
            </a>
          </li>
          <li className="active"> Breadcrumb </li>
        </ol>
      </section>
    );
  }
}
export default Breadcrumb;
