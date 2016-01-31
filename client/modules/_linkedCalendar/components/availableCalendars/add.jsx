import React from 'react';
import Sidebar from './_sidebar.jsx';

// import Container from '../../containers/colors/add.jsx';
import dataComposer from '../../composers/availableCalendars/add.jsx';
import Component from './_form.jsx';
const Container = dataComposer(Component);

export default class extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9">
          <Container />
        </div>
      </div>
    );
  }
}
