'use strict';
import React from 'react';

export default class GroupList extends React.Component {
  async fetchGroups() {
    const groupList = await fetch(
      'https://api.rozklad.org.ua/v2/groups/?filter={%27limit%27:2,%27offset%27:5}')
      .then(d => d.json())
      .then(d => d.data)
    return groupList;
  }

  constructor(props) {
    super(props);
    this.state = {
      list: []
    }

    this.fetchGroups().then(data => {
      this.setState({
        list: data
      });
    });
  }

  componentDidMount() {
  }

  render() {
    return (
      <ul className="list-group">
        {this.state.list.map(val =>
          (<li className="list-group-item">
            {val['group_full_name']}
          </li>)
        )}
      </ul>
    )
  }
}
