
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate, useMatch } from 'react-router-dom';
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
    fetch(`${API}/user/${id}/notes`), {
      method: "POST",
      body: JSON.stringify(newNote),
      headers: {
        "Content-Type": "application/json",
      },
    }
      .then((response) => response.json())
      .then((responseJSON) => {
        setNote([responseJSON, ...note]);
      })
      .catch((error) => console.error("catch", error));

  }


  const deleteNote = () => {
    fetch(`${API}/user/${id}/notes/${note_id}`, {
      method: "DELETE",
    })
      .then(() => navigate(`/user/${id}`))
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
      {/* {<note className="videos"></note> && (
        <VideoContent urls={note.videos} />
      )} */}
      <p>{note.content}</p>
      <br />
      {viewEdit ? (
        <NoteEditForm
          noteDetails={note}
          toggleView={toggleView}
          handleAdd={handleAdd}
        />
      ) : <button onClick={toggleView}>
        {viewEdit ? "Cancel" : "Edit this Note"}
      </button>}
      <button onClick={handleDelete}>Delete Note</button>
    </div>
  )



}

export default NoteDetails;