import React from 'react';

export default ({collection}) => (
  <div>
    <h3>Available Calendars</h3>
    <ul>
      {collection.map(record => (
        <li key={record._id}>
          {record.title}
        </li>
      ))}
    </ul>
  </div>
);
