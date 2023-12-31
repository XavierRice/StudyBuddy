
import { useState, useEffect } from 'react';
import { useParams, useNavigate, } from 'react-router-dom';
import VideoContent from './VideoContent';
import NoteEditForm from './NoteEditForm';


const API = import.meta.env.VITE_BASE_URL;

function NoteDetails() {

  const [viewEdit, setViewEdit] = useState(false)
  const [note, setNote] = useState({})
  const { id, note_id } = useParams();
  let navigate = useNavigate();

  const toggleView = () => {
    setViewEdit(!viewEdit)
  }

  useEffect(() => {
    fetch(`${API}/user/${id}/notes/${note_id}`)
      .then((response) => response.json())
      .then((responseJson) => setNote(responseJson.note))
      .catch((error) => console.error(error))
  }, [note_id])

  const handleAdd = (newNote) => {
    fetch(`${API}/user/${id}/notes`, {
      method: "POST",
      body: JSON.stringify(newNote),
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response)=> {
      if (!response.ok){
        throw new Error('Network is not ok')
      }
      return response.json()
    })
    .then((responseJson) =>{
      setNote(responseJson)
      navigate(`/users/${id}`)
    })
    .catch((error)=> console.error("error:", error))
  }

  const handleEdit = (note) => {
    fetch(`${API}/user/${id}/notes/${note_id}`, {
      method: "PUT",
      body: JSON.stringify(note),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network is not ok');
        }
        return response.json();
      })
      .then((responseJson) => {
        setNote(responseJson);
        toggleView(); // Hide the edit form after successful update
      })
      .catch((error) => console.error("error:", error));
  };
  


  const deleteNote = () => {
    fetch(`${API}/user/${id}/notes/${note_id}`, {
      method: "DELETE",
    })
      .then(() => navigate(`/users`))
      .catch((error) => console.error(error));
  };

  const handleDelete = () => {
    const confirmed = window.confirm("Are you sure you want to delete this note")
    if (confirmed) {
      deleteNote()
    }
  };

  return (
    <div key={note.id}>
      <h2>Notes</h2>
      <h3>{note.subject_name}:</h3>
      <h4>Title: {note.title}</h4>
      { note.videos && (
        <VideoContent urls={note.videos} />
      )}
      <br/>
      <br/>
      <br/>
      <div style={{
      width: '735px',
      height: '200px',
      border: '2px solid #000',
      padding: `1em`, 
    }}>
        {note.content}
      </div>
      <br />
      {viewEdit ? (
        <NoteEditForm
          noteDetails={note}
          toggleView={toggleView}
          handleEdit={handleEdit}
          id={id}
        />
      ) : <button onClick={toggleView}>
        {viewEdit ? "Cancel" : "Edit this Note"}
      </button>}
      <br></br>
      <br></br>
      <button onClick={handleDelete}>Delete Note</button>
    </div>
  )



}

export default NoteDetails;