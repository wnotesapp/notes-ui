import React, { Component } from 'react';
import { getNote, updateNote } from '../../../../data/notes';

class NoteDetailsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: '',
      id: '',
      title: '',
      showEdit: false,
      note: {}
    };

    this.editNoteHandler = this.editNoteHandler.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.saveNoteHandler = this.saveNoteHandler.bind(this);
  }

  componentDidMount() {
    const { match } = this.props;

    if (match) {
      const { params } = match;
      this.setState({ id: params.id });
      getNote(params.id).then(data => {
        this.setState({ note: data });
      });
    }
  }

  editNoteHandler() {
    this.setState({ showEdit : true });
  }

  handleContentChange(event) {
    this.setState({content: event.target.value});
  }

  handleTitleChange(event) {
    this.setState({title: event.target.value});
  }

  saveNoteHandler(event) {
    const { content, id, title } = this.state;
    updateNote({ content, title}, id);
    alert('updated note');
    event.preventDefault();
  }

  render() {
    const { note, showEdit } = this.state;
    return (
      <div>
        {showEdit ? (
          <div>
            <div>
              Title: <input type="text" name="title" onChange={this.handleTitleChange}/>
            </div>
            <div>
              Content: <input type="text" name="content" onChange={this.handleContentChange}/>
            </div>
          </div>
        ) : (
          <div>
            <div>
              <label>{note.title}</label>
            </div>
            <div>
              <label>{note.content}</label>
            </div>
          </div>
        )}
        <div>
          <button onClick={this.editNoteHandler}>Edit Note</button>
        </div>
        <div>
          <button onClick={this.saveNoteHandler}>Save Note</button>
        </div>
      </div>
    );
  }
}

export default NoteDetailsContainer;
