import config from '../config';
import { get, post, put } from './request';

function addNote(data) {
  const url = config.apiUrl + config.notesPath;
  return post(data, url);
}

function getNote(id) {
  const url = config.apiUrl + config.notesPath + '/' + id;
  return get(url);
}

function getNotes() {
  const url = config.apiUrl + config.notesPath;
  return get(url);
}

function updateNote(data, id) {
  const url = config.apiUrl + config.notesPath + '/' + id;
  return put(data, url);
}

export { addNote, getNote, getNotes, updateNote };
