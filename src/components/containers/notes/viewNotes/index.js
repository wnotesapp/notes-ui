import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { getNotes } from '../../../../data/notes';

class ViewNotesContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: []
    };
  }

  componentDidMount() {
    getNotes().then(data => {
      this.setState({ notes: data });
    });
  }

  render() {
    const { notes } = this.state;

    if (Array.isArray(notes)) {
      return (
        <div>
          <ul>
            {notes.map((n, i) => {
              return (
                <li><Link to={'/notes/' + n._id}>{n.title}</Link></li>
              )
            })}
          </ul>
        </div>
      );
    }
  }
}

export default ViewNotesContainer;
