import React, {Component} from 'react';
import PageBase from '../components/PageBase';
import Auth from '../modules/Auth';
import axios from 'axios';
import moment from 'moment';

class UserPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      _id: '',
      avatar: [],
      name: '',
      lastname: '',
      email: '',
      age: '',
      gender: '',
      phone: '',
      created: '',
      modified: '',
      status: '',
			users: []
		};
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {

    setInterval( () => {
      this.setState({
        curTime : new Date().toLocaleString()
      })
    },1000);

    const token = Auth.getToken();
    const self = this;

    axios.get('http://localhost:9000/api/users', {
      headers: {
        "Authorization": token
      }
    })
    .then(function(data) {
      self.setState({ users : data.data });
    })
    .catch(function(err) {
      return err;
    });
  }

  handleClick(_id) {
    const token = Auth.getToken();
    const self = this;
    axios.get('http://localhost:9000/api/users/'+_id, {
      headers: {
        "Authorization": token
      }
    })
    .then(function(data) {
      const base_64_flag = 'data:image/jpeg;base64,';
      let image_string = self.arrayBufferToBase64(data.data.avatar.data);
      self.setState({
        _id : data.data._id,
        avatar: base_64_flag + image_string,
        name: data.data.name,
        lastname: data.data.lastname,
        email: data.data.email,
        age: data.data.age,
        gender: data.data.gender,
        phone: data.data.phone,
        status: data.data.status,
        created: data.data.created,
        modified: data.data.modified
      });
    })
    .catch(function(err) {
      return err;
    });
  }

  arrayBufferToBase64(buffer) {
    let binary = '';
    let bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    return window.btoa(binary);
  }


  render() {
    const self = this;
    return (
      <PageBase>
        <div className="row">
          <div className="col-xs-12">
            <div className="box box-success">
              <div className="box-header">
                <h3 className="box-title"> Usuarios </h3>
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
                      <th>Nombre</th>
                      <th>Email</th>
                      <th>Edad</th>
                      <th>Genero</th>
                      <th>Celular</th>
                      <th>Estado</th>
                      <th>Detalle</th>
                      <th>Gestion</th>
                      <th>Eliminar</th>
                    </tr>
                    {
                      self.state.users.users && self.state.users.users.map(function(i,id) {
                        return (
                          <tr key={id} id={id} >
                            <td className="hide-element">{i._id}</td>
                            <td>{i.name} {i.lastname}</td>
                            <td>{i.email}</td>
                            <td>{i.age} años </td>
                            <td>{i.gender}</td>
                            <td>{i.phone}</td>
                            { i.status == '1'
                              ? <td><span className="label label-success"> <i className="fa fa-user"/> </span></td>
                              : ( i.status == '2'
                                ? <td><span className="label label-warning"> <i className="fa fa-user"/> </span></td>
                                : ( i.status == '3'
                                  ? <td><span className="label label-danger"> <i className="fa fa-user"/> </span></td>
                                  : <td><span className="label label-default"> <i className="fa fa-user"/> </span></td>
                                )
                              )
                            }
                            <td><button onClick={() => self.handleClick(i._id)} type="button" className="btn btn-block btn-info btn-xs" data-toggle="modal" data-target="#modal-info"> <i className="fa fa-eye"/> </button></td>
                            <td><button type="button" className="btn btn-block btn-primary btn-xs"> <i className="fa fa-pencil"/> </button></td>
                            <td><button type="button" className="btn btn-block btn-danger btn-xs"> <i className="fa fa-trash"/> </button></td>
                          </tr>
                        );
                      })
                    }
                  </tbody>
                </table>

                <div className="modal modal-info fade" id="modal-info">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span></button>
                        <h4 className="modal-title"> Detalle del usuario </h4>
                      </div>

                      <div className="modal-body">

                        <img className="profile-user-img img-responsive img-circle" src={this.state.avatar} alt="User profile picture"/>
                        <h3 className="profile-username text-center">{this.state.name} {this.state.lastname}</h3>
                        <p className="text-muted text-center"> Admistrador </p>
                        <dl className="dl-horizontal">
                          <dt> Id del sistema: </dt>
                          <dd> {this.state._id} </dd>
                          <dt> Nombre: </dt>
                          <dd> {this.state.name} </dd>
                          <dt> Apellidos: </dt>
                          <dd> {this.state.lastname} </dd>
                          <dt> Email: </dt>
                          <dd> {this.state.email} </dd>
                          <dt> Edad: </dt>
                          <dd> {this.state.age} </dd>
                          <dt> Genero: </dt>
                          <dd> {this.state.gender} </dd>
                          <dt> Celular: </dt>
                          <dd> {this.state.phone} </dd>
                          <dt> Creacion: </dt>
                          <dd> {moment(this.state.created).format('LLL')} </dd>
                          <dt> Modificacion: </dt>
                          <dd> {moment(this.state.modified).format('LLL')} </dd>
                          <dt> Estado: </dt>
                          { this.state.status == '1'
                            ? <dd><span className="label label-success"> Activado </span></dd>
                            : ( this.state.status == '2'
                              ? <dd><span className="label label-warning"> Suspendido </span></dd>
                              : ( this.state.status == '3'
                                ? <dd><span className="label label-danger"> Vetado </span></dd>
                                : <dd><span className="label label-default"> Desactivado </span></dd>
                              )
                            )
                          }
                        </dl>
                      </div>

                      <div className="modal-footer">
                        <button type="button" className="btn btn-outline" data-dismiss="modal"> Cerrar </button>
                      </div>

                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </PageBase>
    );
  }
}

export default UserPage;
