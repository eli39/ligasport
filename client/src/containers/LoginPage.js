import React, { Component } from 'react';
import { Link } from 'react-router';
import Auth from '../modules/Auth';
import { POST_AUTH } from '../api/Uri';
import logo from '../images/balon.png';
import axios from 'axios';

class LoginPage extends Component {

	constructor(props) {
		super(props);
    this.state = {
			password: '',
			email: '',
      id_user: '',
			label_password_err: '',
			label_email_err: '',
      msg_err: '',
			btn_login_disabled: true
		};
  }

	handlePasswordUpdated(e) {
		const password = e.target.value;
		const label_password_err = password.length > 0 ? null : 'Campo requerido.';
		const btn_login_disabled = label_password_err != null || this.state.label_email_err != null;
		this.setState({
			password: e.target.value,
			label_password_err: label_password_err,
			btn_login_disabled: btn_login_disabled
		});
	}

	handleEmailUpdated(e) {
		const email = e.target.value;
		const label_email_err = email.length > 0 ? null : 'Campo requerido.';
		const btn_login_disabled = label_email_err != null || this.state.label_password_err != null;
		this.setState({
			email: email,
			label_email_err: label_email_err,
			btn_login_disabled: btn_login_disabled
		});
	}

	handleLoginClick(e) {

		e.preventDefault();

		const login_data = { email: this.state.email, password: this.state.password };

    axios.post(POST_AUTH, login_data, {
			headers: {'Accept': 'application/json'}
		})
    .then((data) => {

			let token = data.data.token_rsa;
			let id = data.data.id_user;
			Auth.authenticateUser(token,id);

			setTimeout(function() {
				window.location.href = 'http://localhost:3000/dashboard';
			}, 1000);

		})
		.catch((err) => {
      return err;
    });

	}

	render() {
		return (
			<div className="login-box">

				<div className="login-logo">
					<img height="100"	width="100"	src={logo} />
				</div>
				<div className="login-box-body">
					<p className="login-box-msg"> Iniciar Sesión </p>
					<form>
						<div className="form-group has-feedback">
							<input type="email" value={this.state.email} onChange={this.handleEmailUpdated.bind(this)} className="form-control" placeholder="Email" />
							<span className="fa fa-envelope form-control-feedback"/>
							{this.state.label_email_err}
						</div>
						<div className="form-group has-feedback">
							<input type="password" value={this.state.password} onChange={this.handlePasswordUpdated.bind(this)} className="form-control" placeholder="Password"/>
							<span className="fa fa-lock form-control-feedback"/>
							{this.state.label_password_err}
						</div>
						<div className="row">
							<div className="col-xs-6">
								<Link to={'/register'} className="btn btn-info btn-block btn-flat"> Crear cuenta </Link>
							</div>
							<div className="col-xs-6">
								<button type="button" className="btn btn-success btn-block btn-flat" onClick={this.handleLoginClick.bind(this)} disabled={this.state.btn_login_disabled}> Iniciar sesión </button>
							</div>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default LoginPage;
