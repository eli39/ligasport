import React, {Component} from 'react';
import axios from 'axios';
import PageBase from '../components/PageBase';
import Auth from '../modules/Auth';

class RegisterUserPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      avatar: [],
      name: '',
      lastname: '',
      email: '',
      password: '',
      age: '',
      gender: '',
      phone: ''
    }
  }

  handleUserImageChange(e) {
    let file = e.target.files[0]
    this.setState({
      avatar: file
    })
  }
  handleUserNameChange(e) {
    let name = e.target.value
    this.setState({
      name: name
    })
  }
  handleUserLastnameChange(e) {
    let lastname = e.target.value
    this.setState({
      lastname: lastname
    })
  }
  handleUserEmailChange(e) {
    let email = e.target.value
    this.setState({
      email: email
    })
  }
  handleUserPasswordChange(e) {
    let password = e.target.value
    this.setState({
      password: password
    })
  }
  handleUserAgeChange(e) {
    let age = e.target.value
    this.setState({
      age: age
    })
  }
  handleUserGenderChange(e) {
    let gender = e.target.value
    this.setState({
      gender: gender
    })
  }
  handleUserPhoneChange(e) {
    let phone = e.target.value
    this.setState({
      phone: phone
    })
  }

  onCreateUserButtonClick() {
    const formDataUser = new FormData();
    formDataUser.append('avatar', this.state.avatar);
    formDataUser.append('name', this.state.name);
    formDataUser.append('lastname', this.state.lastname);
    formDataUser.append('email', this.state.email);
    formDataUser.append('password', this.state.password);
    formDataUser.append('age', this.state.age);
    formDataUser.append('gender', this.state.gender);
    formDataUser.append('phone', this.state.phone);
    axios.post('http://localhost:9000/api/users', formDataUser, {
      headers: {'Accept': 'application/json'}
    })
    .then((data) => {
      console.log(JSON.stringify(data))
    })
    .catch((err) => {
      console.log(JSON.stringify(err))
    })
  }
  render() {
    console.log(this.state)
    return (
      <PageBase>
        <div className="row">
          <div className="col-md-6">
            <div className="box box-success">
              <div className="box-header with-border">
                <h3 className="box-title"> Registrar nuevo usuario </h3>
              </div>
              <form className="form-horizontal">
                <div className="box-body">
                  <div className="form-group">
                    <label className="col-sm-2 control-label"> Foto </label>
                    <div className="col-sm-10">
                      <input onChange={this.handleUserImageChange.bind(this)} type="file" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-2 control-label"> Nombre </label>
                    <div className="col-sm-10">
                      <input onChange={this.handleUserNameChange.bind(this)} type="text" className="form-control" placeholder="Nombre" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-2 control-label"> Apellidos </label>
                    <div className="col-sm-10">
                      <input onChange={this.handleUserLastnameChange.bind(this)} type="text" className="form-control"  placeholder="Nombre" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-2 control-label"> Email </label>
                    <div className="col-sm-10">
                      <input onChange={this.handleUserEmailChange.bind(this)} type="email" className="form-control" placeholder="Email" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-2 control-label"> Contraseña </label>
                    <div className="col-sm-10">
                      <input onChange={this.handleUserPasswordChange.bind(this)} type="password" className="form-control" placeholder="Password" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-2 control-label"> Edad </label>
                    <div className="col-sm-10">
                      <input onChange={this.handleUserAgeChange.bind(this)} type="text" className="form-control"  placeholder="Edad" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-2 control-label"> Genero </label>
                    <div className="col-sm-10">
                      <input onChange={this.handleUserGenderChange.bind(this)} type="text" className="form-control"  placeholder="Genero" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-2 control-label"> Telefono </label>
                    <div className="col-sm-10">
                      <input onChange={this.handleUserPhoneChange.bind(this)} type="text" className="form-control"  placeholder="Telefono" />
                    </div>
                  </div>
                </div>
                <div className="box-footer">
                  <button type="button" className="btn btn-warning"> Cancelar </button>
                  <button onClick={this.onCreateUserButtonClick.bind(this)}  type="button" className="btn btn-success pull-right"> Registrar </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </PageBase>
    );
  }
}
export default RegisterUserPage;
