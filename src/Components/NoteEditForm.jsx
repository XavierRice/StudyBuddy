import { useState} from "react";
import { Button, Form } from "react-bootstrap";

function NoteEditForm({ noteDetails, toggleView, handleEdit, id }) {

  const [note, setNote] = useState({
    user_id: id,
    subject_name: noteDetails.subject_name || "",
    title: noteDetails.title || "",
    videos: noteDetails.videos || "",
    content: noteDetails.content || "",
    is_favorite: noteDetails.is_favorite|| false,
  });


const handleTextChange = (event) => {
  setNote({ ...note, [event.target.id]: event.target.value });
};

const handleFavorite = (event) => {
  setNote({ ...note, is_favorite: event.target.checked });
};


const onSubmit = (event) => {
  event.preventDefault();
  handleEdit(note);
  toggleView();
  setNote({
    user_id: id,
    subject_name: "",
    title: "",
    Videos: [],
    content: "",
    is_favorite: false,
  });
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
      </Form.Group>
      <Form.Group >
        <Form.Label>Favorite</Form.Label>
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
  );
};



export default NoteEditForm;