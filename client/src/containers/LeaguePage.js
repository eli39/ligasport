import React, {Component} from 'react';
import PageBase from '../components/PageBase';
import axios from 'axios';
import Auth from '../modules/Auth';

class LeaguePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      leagues: []
		};
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {

    const token = Auth.getToken();
    const id = Auth.getId();
    const self = this;

    axios.get('http://localhost:9000/api/league/admin/'+id,  {
      headers: {
        "Authorization": token
      }
    })
    .then(function(data) {
      self.setState({
        leagues: data.data
      });
    })
    .catch(function(err) {
      return err;
    });
  }

  handleClick(_id) {
    const token = Auth.getToken();
    const self = this;
    alert(_id);
  }

  render() {
    const self = this;
    return (
      <PageBase>
        <div className="row">
          <div className="col-xs-12">
            <div className="box box-success">
              <div className="box-header">
                <h3 className="box-title"> Ligas deportivas </h3>
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
                      <th>Level</th>
                      <th>Creacion</th>
                      <th>Modificacion</th>
                      <th>Estatus</th>
                      <th>Detalle</th>
                    </tr>
                    {
                      self.state.leagues.leagues && self.state.leagues.leagues.map(function(i,id) {
                        return (
                          <tr key={id} id={id} >
                            <td className="hide-element">{i._id}</td>
                            <td>{i.name}</td>
                            <td>{i.id_level}</td>
                            <td>{i.created}</td>
                            <td>{i.modified}</td>
                            <td>{i.status}</td>
                            <td><button onClick={() => self.handleClick(i._id)} type="button" className="btn btn-block btn-info btn-xs" data-toggle="modal" data-target="#modal-info"> <i className="fa fa-eye"/> </button></td>
                          </tr>
                        );
                      })
                    }
                  </tbody>

                </table>

              </div>
            </div>
          </div>
        </div>
      </PageBase>
    );
  }
}

export default LeaguePage;
