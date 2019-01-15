import React, {Component} from 'react';
import axios from 'axios';
import PageBase from '../components/PageBase';
import Auth from '../modules/Auth';

class RegisterRolePage extends Component {

  constructor(props) {
    super(props)
    this.state = {
        name: ''
    }
  }

  onFieldChanged(field, e) {
		const updateObject = {}
		updateObject[field] = e.target.value
		this.setState(updateObject)
	}

  onCreateRole() {
    const data = this.state;
    axios.post('http://localhost:9000/api/role', data, {
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
                <h3 className="box-title"> Registrar nuevo rol </h3>
              </div>

              <form className="form-horizontal">
                <div className="box-body">

                  <div className="form-group">
                    <label className="col-sm-2 control-label"> Nombre </label>
                    <div className="col-sm-10">
                      <input onChange={this.onFieldChanged.bind(this,'name')} type="text" className="form-control" id="inputNombre" placeholder="Nombre"/>
                    </div>
                  </div>

                </div>

                <div className="box-footer">
                  <button type="button" className="btn btn-warning"> Cancelar </button>
                  <button onClick={this.onCreateRole.bind(this)} type="button" className="btn btn-success pull-right"> Registrar </button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </PageBase>
    );
  }
}

export default RegisterRolePage;
