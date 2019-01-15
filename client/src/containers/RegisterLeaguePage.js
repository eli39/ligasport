import React, {Component} from 'react';
import axios from 'axios';
import PageBase from '../components/PageBase';
import Auth from '../modules/Auth';
class RegisterLeaguePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
        image: [],
        name: ''
    }
  }
  handleImageChange(e) {
    let file = e.target.files[0]
    this.setState({
      image: file
    })
  }
  handleNameChange(e) {
    let name = e.target.value
    this.setState({
      name: name
    })
  }
  handleLevelChange(e) {
    let level = e.target.value
    this.setState({
      id_level: level
    })
  }
  onCreateLeague() {
    const id_admin = Auth.getId();
    const formData = new FormData();
    formData.append('image', this.state.image);
    formData.append('name', this.state.name);
    formData.append('id_admin', id_admin);
    formData.append('id_level', this.state.id_level);
    axios.post('http://localhost:9000/api/league', formData, {
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
                <h3 className="box-title"> Registrar nueva liga </h3>
              </div>
              <form className="form-horizontal">
                <div className="box-body">
                  <div className="form-group">
                    <label className="col-sm-2 control-label"> Logo </label>
                    <div className="col-sm-10">
                      <input onChange={this.handleImageChange.bind(this)} type="file" id="exampleInputFile"/>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-2 control-label"> Nombre </label>
                    <div className="col-sm-10">
                      <input onChange={this.handleNameChange.bind(this)} type="text" className="form-control" id="inputNombre" placeholder="Nombre"/>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-2 control-label"> Nivel </label>
                    <div className="col-sm-10">
                      <select onChange={this.handleLevelChange.bind(this)} className="form-control">
                        <option value='0'>Seleccionar...</option>
                        <option value='1'>Profesional</option>
                        <option value='2'>SemiProfesional</option>
                        <option value='3'>Amateur</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="box-footer">
                  <button type="button" className="btn btn-warning"> Cancelar </button>
                  <button onClick={this.onCreateLeague.bind(this)} type="button" className="btn btn-success pull-right"> Registrar </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </PageBase>
    );
  }
}
export default RegisterLeaguePage;
