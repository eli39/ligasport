import React from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';
import moment from 'moment';
//import { GET_BY_ID_USER } from '../api/Uri';

import Header from '../components/Header';
import LeftDrawer from '../components/LeftDrawer';
import Footer from '../components/Footer';
import Configuration from '../components/Configuration';
import Control from '../components/Control';
import Auth from '../modules/Auth';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      lastname:'',
      avatar: [],
      created:'',
      leagues: []
    };
  }

  componentDidMount() {

    const token = Auth.getToken();
    const id = Auth.getId();
    const _this = this;

    axios.get('http://localhost:9000/api/users/'+id, {
      headers: {
        "Authorization": token
      }
    })
    .then(function(data) {
      const created = moment(data.data.created).format('ll');
      const base_64_flag = 'data:image/jpeg;base64,';
      let image_string = _this.arrayBufferToBase64(data.data.avatar.data);
      _this.setState({
        avatar: base_64_flag + image_string,
        name: data.data.name,
        lastname: data.data.lastname,
        created: created
      });
    })
    .catch(function(err) {
      return err;
    });

    axios.get('http://localhost:9000/api/league/admin/'+id, {
      headers: {
        "Authorization": token
      }
    })
    .then(function(data) {
      _this.setState({
        leagues: data.data.leagues
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
    return (
      <div>
        <Header
          name={this.state.name}
          lastname={this.state.lastname}
          avatar={this.state.avatar}
          created={this.state.created}
        />
        <LeftDrawer
          name={this.state.name}
          avatar={this.state.avatar}
          leagues={this.state.leagues}
        />
        <div className="content-wrapper">
            {this.props.children}
        </div>
        <Footer />
        <Configuration />
        <Control />
      </div>
    );
  }
}
App.propTypes = {
  children: PropTypes.element,
};
export default App;
