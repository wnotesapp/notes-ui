import React, { Component } from 'react';
import { addNote } from '../../../../data/notes';

class AddNoteContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: '',
      title: ''
    };

    this.addNoteHandler = this.addNoteHandler.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
  }

  addNoteHandler(event) {
    const { content, title } = this.state;
    addNote({ content, title });
    alert('note added');
    window.navigator.reload();
    event.preventDefault();
  }

  handleContentChange(event) {
    this.setState({content: event.target.value});
  }

  handleTitleChange(event) {
    this.setState({title: event.target.value});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addNoteHandler}>
          <div>
            <label>Title:</label><input type="text" id="note-title" name="title" onChange={this.handleTitleChange}/>
          </div>
          <div>
            <label>Content:</label><input type="text" id="note-content" name="content"
                                          onChange={this.handleContentChange}/>
          </div>
          <div>
            <input type="submit" value="Add Note"/>
          </div>
        </form>
      </div>
    );
  }
}

export default AddNoteContainer;
