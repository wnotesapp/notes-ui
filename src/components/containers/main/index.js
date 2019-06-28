import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import AddNoteContainer from '../notes/addNote';
import ViewNotesContainer from '../notes/viewNotes';
import '../../../styles/main.css';

const MainContainer = () => {
  return (
    <div>
      <div className="main-tab">
        <NavLink className="main-tablink" to='/list'>View Notes</NavLink>
        <NavLink className="main-tablink" to='/add-note'>Add Note</NavLink>
      </div>

      <Route path='/'/>
      <Route path='/list' component={ViewNotesContainer}/>
      <Route path='/add-note' component={AddNoteContainer}/>
    </div>
  );
};

export default MainContainer;
