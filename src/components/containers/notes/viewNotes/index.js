import React, { Component } from 'react';
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
                <li>{n.content}</li>
              )
            })}
          </ul>
        </div>
      );
    }
  }
}

export default ViewNotesContainer;
