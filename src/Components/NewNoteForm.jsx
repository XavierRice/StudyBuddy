import {useState, useEffect} from 'react'
import { useParams, useNavigate} from 'react-router'
import { Form, Button } from 'react-bootstrap'

const API = import.meta.env.VITE_BASE_URL;

function NewNote(){
const { id } = useParams()
const navigate = useNavigate();

    const [note, setNote] = useState({
        user_id: id,
        subject_name:  "",
        title: "",
        videos: "",
        content: "",
        is_favorite: false,
      });
    
    const handleTextChange = (event) => {
        setNote({ ...note, [event.target.id]: event.target.value });
      };
      
    const handleFavorite = (event) => {
        setNote({ ...note, is_favorite: event.target.checked });
      };


      const AddNote = (note) => {
        fetch(`${API}/user/${id}/notes`, {
          method: "POST",
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
          })
          .catch((error) => console.error("error:", error));
      };
      
      
      const onSubmit = (event) => {
        event.preventDefault();
        AddNote(note);
        navigate(`/users/${id}`)
      }

return (
    <Form onSubmit={onSubmit}>
    <Form.Group className="mb-3">
      <Form.Label>subject_name</Form.Label>
      <Form.Control
        type="text"
        placeholder="Name of Topic"
        id="subject_name"
        value={note.subject_name}
        onChange={handleTextChange}
      />
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label>title</Form.Label>
      <Form.Control
        type="text"
        placeholder="Title of notes"
        id="title"
        value={note.title}
        onChange={handleTextChange}
      />
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label>Content</Form.Label>
      <Form.Control
      style={{
        width: '735px',
        height: '200px',
        border: '2px solid #000',
        padding: `1em`, 
      }}
        type="text"
        placeholder="Content"
        id="content"
        value={note.content}
        onChange={handleTextChange}
      />
      <Form.Group className="mb-3">
      <Form.Label>Videos</Form.Label>
      <Form.Control
        type="text"
        placeholder="http://youtube.."
        id="videos"
        value={note.videos}
        onChange={handleTextChange}
      />
    </Form.Group>
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label style={{ color: 'gold' }}>Favorite</Form.Label>
      <Form.Check
        type="switch"
        id="is_favorite"
        checked={note.is_favorite}
        onChange={handleFavorite}
      />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
)

}

export default NewNote;