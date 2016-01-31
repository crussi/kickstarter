import React from 'react';

export default class extends React.Component {

  render() {
    return (
      <div className="box box-solid">
        <div className="box-body no-padding">
          <ul className="nav nav-pills nav-stacked">
            <li><a href="/available-calendars"><i className="fa "></i>Available calendars</a></li>
            <li><a href="/colors/add"><i className="fa "></i>Link new calendar</a></li>
          </ul>
        </div>
      </div>
    );
  }
}
