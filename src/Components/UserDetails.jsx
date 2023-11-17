import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom"
import { Card, ListGroup } from "react-bootstrap";

const API = import.meta.env.VITE_BASE_URL;


function UserDetails() {

    const [user, setUser] = useState([]);
    const { id } = useParams();
    let navigate = useNavigate()

    useEffect(() => {
        fetch(`${API}/user/${id}/notes`)
            .then((res) => res.json())
            .then((resJson) => setUser(resJson))
            .catch((error) => console.error(error))
    }, [id])

    const deleteUser = () => {
        fetch(`${API}/user/${id}`, {
            method: "DELETE",
        })
            .then(() => navigate(`/users`))
            .catch((error) => console.error(error));
    };

    const handleDelete = () => {
        deleteUser()
    }

   

    return (
        <Card style={{ width: '18rem' }}>
            {user && (
        <>
          <Card.Img variant="top" src={user.profilepic} />
          <Card.Body>
            <Card.Title>{user.name}</Card.Title>
            <Card.Text>{user.membership ? '🌟' : 'Become a member today'}</Card.Text>
          </Card.Body>
          <ListGroup variant="flush">
            {user.allNotes && user.allNotes.map((note) => (
              <ListGroup.Item key={note.note_id}>
                <strong>{note.subject_name}</strong>: {note.title}
              </ListGroup.Item>
            ))}
          </ListGroup>
          <Card.Body>
            <Link to={`/users`}>
              <button>Back</button>
            </Link>
            <Link to={`/users/${id}/edit`}>
              <button>Edit</button>
            </Link>
          </Card.Body>
        </>
      )}
        </Card>
    )
};


export default UserDetails;