import { response } from 'express';
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate, useMatch } from 'react-router-dom';

const API = import.meta.env.VITE_BASE_URL;

function NoteDetails(){
const [note, setNote] = useState({})
const { id, note_id} = useParams();
let navigate = useNavigate();


useEffect(()=>{
    fetch(`${API}/user/${id}/notes/${note_id}`)
    .then((response) => response.json())
    .then((responseJson) => setNote(responseJson))
    .catch((error) => console.error(error))
}, [note_id])


const deleteNote = () => {
    fetch(`${API}/user/${id}/notes/${note_id}`, {
        method: "DELETE",
      })
        .then(() => navigate(`/user/${id}`))
        .catch((error) => console.error(error));
};

const handleDelete = () => {
    const confirmed = window.confirm("Are you sure you want to delete this note")
  if(confirmed){
      deleteNote()
  }
};

return (
    <></>
)



}