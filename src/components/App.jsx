import React, { Component } from 'react';
import GroupList from './GroupList.jsx';

export default class App extends Component {
  render() {
    return (
      <div>
        <div
          className="input-group col-4 offset-4">
          <input type="text"
            placeholder="group name here..."
            className="form-control" />
          <div className="input-group-append">
            <button className="btn btn-btn-btn-outline-dark">
              {'Submit!'}
            </button>
          </div>
        </div>
        <GroupList groupName="" ref={e => this.groupList = e} />
      </div>
    )
  }
}
