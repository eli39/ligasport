import React, { Component } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import Panels from '../components/dashboard/Panels';

class DashboardPage extends Component {

	constructor(props) {
		super(props);
  }

	render() {
		return (
      <div>
      <Breadcrumb />
        <section className="content container-fluid">
          <Panels />
        </section>
      </div>
		);
	}

}

export default DashboardPage;
