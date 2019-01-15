import React, {Component} from 'react';
import PageBase from '../components/PageBase';
import Auth from '../modules/Auth';
import axios from 'axios';
import moment from 'moment';

class RolePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      _id : '',
      name: '',
      status: '',
      created: '',
      modified: '',
			roles: []
		};
  }

  onFieldChanged(field, e) {
		const updateObject = {}
		updateObject[field] = e.target.value
		this.setState(updateObject)
	}

  componentDidMount() {
    const token = Auth.getToken();
    const self = this;
    axios.get('http://localhost:9000/api/role', {
      headers: {
        "Authorization": token
      }
    })
    .then(function(data) {
      self.setState({ roles : data.data });
    })
    .catch(function(err) {
      return err;
    });
  }

  handleDetailClick(_id) {
    const token = Auth.getToken();
    const self = this;
    axios.get('http://localhost:9000/api/role/'+_id, {
      headers: {
        "Authorization": token
      }
    })
    .then(function(data) {
      self.setState({
        _id : data.data._id,
        name: data.data.name,
        status: data.data.status,
        created: data.data.created,
        modified: data.data.modified
      });
    })
    .catch(function(err) {
      return err;
    });
  }

  handleUpdateRoleButtonClick() {
    const token = Auth.getToken();
    const self = this
    const data = this.state;
    axios.patch('http://localhost:9000/api/role/'+this.state._id, data, {
      headers: {
        "Authorization": token
      }
    })
    .then((data) => {

    })
    .catch((err) => {

    })
  }

  handleDeleteRoleButtonClick() {
    const token = Auth.getToken();
    const self = this;
    axios.delete('http://localhost:9000/api/role/'+this.state._id, {
      headers: {
        "Authorization": token
      }
    })
    .then((data) => {

    })
    .catch((err) => {

    });
  }

  render() {

    console.log(this.state)

    const activated = 1;
    const desactivated = 0;
    parseInt(activated);
    parseInt(desactivated);

    const self = this;

    return (
      <PageBase>

        <div className="row">

          <div className="col-xs-12">
            <div className="box box-success">

              <div className="box-header">
                <h3 className="box-title"> Roles </h3>
                <div className="box-tools">
                  <div className="input-group input-group-sm" style={{width: '150px'}}>
                    <input type="text" name="table_search" className="form-control pull-right" placeholder="Buscar" />
                    <div className="input-group-btn">
                      <button type="button" className="btn btn-success"><i className="fa fa-search"/></button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="box-body table-responsive no-padding">
                <table className="table table-hover">
                  <tbody>
                    <tr>
                      <th className="hide-element">ID</th>
                      <th>Rol</th>
                      <th>Creacion</th>
                      <th>Modificacion</th>
                      <th>Estado</th>
                      <th>Detalle</th>
                      <th>Actualizar</th>
                      <th>Eliminar</th>
                    </tr>
                    {
                      self.state.roles.roles && self.state.roles.roles.map(function(i,id) {
                        return (
                          <tr key={id} id={id} >
                            <td className="hide-element">{i._id}</td>
                            <td>{i.name}</td>
                            <td>{moment(i.created).format('LLL')}</td>
                            <td>{moment(i.modified).format('LLL')}</td>
                            { i.status == '1'
                              ? <td><span className="label label-success"> <i className="fa fa-check-circle"/> </span></td>
                              : <td><span className="label label-danger"> <i className="fa fa-times-circle"/> </span></td>
                            }
                            <td><button onClick={() => self.handleDetailClick(i._id)} type="button" className="btn btn-info btn-xs" data-toggle="modal" data-target="#modal-info"> Detalle </button></td>
                            <td><button onClick={() => self.handleDetailClick(i._id)} type="button" className="btn btn-primary btn-xs" data-toggle="modal" data-target="#modal-primary"> Actualizar </button></td>
                            <td><button onClick={() => self.handleDetailClick(i._id)} type="button" className="btn btn-danger btn-xs" data-toggle="modal" data-target="#modal-danger"> Eliminar </button></td>
                          </tr>
                        );
                      })
                    }
                  </tbody>
                </table>

              </div>
            </div>
          </div>

          <div className="modal modal-info fade in" id="modal-info">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span></button>
                  <h4 className="modal-title"> Detalle del rol </h4>
                </div>
                <div className="modal-body">
                  <h3 className="profile-username text-center"> {this.state.name} </h3>
                  <p className="text-muted text-center"/>
                  <dl className="dl-horizontal">
                    <dt> Id del sistema: </dt>
                    <dd> {this.state._id} </dd>
                    <dt> Nombre: </dt>
                    <dd> {this.state.name} </dd>
                    <dt> Creacion: </dt>
                    <dd> {moment(this.state.created).format('LLL')} </dd>
                    <dt> Modificacion: </dt>
                    <dd> {moment(this.state.modified).format('LLL')} </dd>
                    <dt> Estado: </dt>
                    { this.state.status == '1'
                      ? <dd><span className="label label-success"> <i className="fa fa-check-circle"/> </span></dd>
                      : <dd><span className="label label-danger"> <i className="fa fa-times-circle"/> </span></dd>
                    }
                  </dl>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-outline" data-dismiss="modal"> Cerrar </button>
                </div>
              </div>
            </div>
          </div>

          <div className="modal modal-primary fade in" id="modal-primary">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span></button>
                  <h4 className="modal-title"> Actualizar rol </h4>
                </div>
                <div className="modal-body">
                  <form className="form-horizontal">
                    <div className="box-body">
                      <div className="form-group">
                        <label className="col-sm-2 control-label"> Nombre </label>
                        <div className="col-sm-10">
                          <input onChange={this.onFieldChanged.bind(this,'name')} type="text" className="form-control" defaultValue={this.state.name} placeholder="Nombre"/>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="col-sm-2 control-label"> Estado </label>
                        <div className="col-sm-10">
                          { this.state.status == '1'
                            ?
                            <div className="form-group">
                              <div className="radio">
                                <label>
                                <input onClick={this.onFieldChanged.bind(this,'status')} type="radio" name="optionsRadios" defaultValue={activated} defaultChecked={true}/>
                                Activado
                                </label>
                              </div>
                              <div className="radio">
                                <label>
                                <input onClick={this.onFieldChanged.bind(this,'status')} type="radio" name="optionsRadios" defaultValue={desactivated}/>
                                Desactivado
                                </label>
                              </div>
                            </div>
                            :
                            <div className="form-group">
                              <div className="radio">
                                <label>
                                <input onClick={this.onFieldChanged.bind(this,'status')} type="radio" name="optionsRadios" defaultValue={activated}/>
                                Activado
                                </label>
                              </div>
                              <div className="radio">
                                <label>
                                <input onClick={this.onFieldChanged.bind(this,'status')} type="radio" name="optionsRadios" defaultValue={desactivated} defaultChecked={true}/>
                                Desactivado
                                </label>
                              </div>
                            </div>
                          }
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-outline pull-left" data-dismiss="modal"> Cancelar </button>
                  <button onClick={this.handleUpdateRoleButtonClick.bind(this)} type="button" className="btn btn-outline" data-dismiss="modal"> Actualizar </button>
                </div>
              </div>
            </div>
          </div>

          <div className="modal modal-danger fade in" id="modal-danger">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span></button>
                  <h4 className="modal-title"> Eliminar rol </h4>
                </div>
                <div className="modal-body">
                  <h3 className="profile-username text-center"> {this.state.name} </h3>
                  <p className="text-muted text-center"/>
                  <dl className="dl-horizontal">
                    <dt> Id del sistema: </dt>
                    <dd> {this.state._id} </dd>
                    <dt> Nombre: </dt>
                    <dd> {this.state.name} </dd>
                    <dt> Creacion: </dt>
                    <dd> {moment(this.state.created).format('LLL')} </dd>
                    <dt> Modificacion: </dt>
                    <dd> {moment(this.state.modified).format('LLL')} </dd>
                    <dt> Estado: </dt>
                    { this.state.status == '1'
                      ? <dd><span className="label label-success"> <i className="fa fa-check-circle"/> </span></dd>
                      : <dd><span className="label label-danger"> <i className="fa fa-times-circle"/> </span></dd>
                    }
                  </dl>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-outline pull-left" data-dismiss="modal">Cancelar</button>
                  <button onClick={this.handleDeleteRoleButtonClick.bind(this)} type="button" className="btn btn-outline" data-dismiss="modal"> Confirmar </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </PageBase>
    );
  }
}

export default RolePage;
