import React,{ Component } from 'react';
class Panels extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="row">
        <div className="col-lg-3 col-xs-6">
            <div className="small-box bg-purple">
                <div className="inner">
                    <h3> 1 </h3>
                    <p> Ligas </p>
                </div>
                <div className="icon">
                    <i className="fa fa-diamond"/>
                </div>
                <a href="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"/></a>
            </div>
        </div>
        <div className="col-lg-3 col-xs-6">
            <div className="small-box bg-green">
                <div className="inner">
                    <h3> 3 </h3>
                    <p> Categorias </p>
                </div>
                <div className="icon">
                    <i className="fa fa-futbol-o"/>
                </div>
                <a href="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"/></a>
            </div>
        </div>
        <div className="col-lg-3 col-xs-6">
            <div className="small-box bg-red">
                <div className="inner">
                    <h3> 9 </h3>
                    <p> Equipos </p>
                </div>
                <div className="icon">
                    <i className="fa fa-shield"/>
                </div>
                <a href="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"/></a>
            </div>
        </div>
        <div className="col-lg-3 col-xs-6">
            <div className="small-box bg-orange">
                <div className="inner">
                    <h3> 9 </h3>
                    <p> Usuarios </p>
                </div>
                <div className="icon">
                    <i className="fa fa-users"/>
                </div>
                <a href="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"/></a>
            </div>
        </div>
      </div>
    );
  }
}
export default Panels;
