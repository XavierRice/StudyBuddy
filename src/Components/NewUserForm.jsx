import { useState } from 'react'
import { useNavigate } from 'react-router'
import { Button, Form } from "react-bootstrap";

const API = import.meta.env.VITE_BASE_URL;


function UserNewForm() {
  const navigate = useNavigate();
  const [user, setUser] = useState({

    username: "",
    name: "",
    email: "",
    password: "",
    membership: false,
    profilepic: ""
  })

  const addUser = () => {
    fetch(`${API}/user`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        navigate(`/users`);
      })
      .catch((error) => console.error("catch", error));
  };

  const handleTextChange = (event) => {
    setUser({ ...user, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setUser({ ...user, membership: !user.membership });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addUser();
  };

  return (

    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>User Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Online Name"
          id="username"
          value={user.username}
          onChange={handleTextChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Name"
          id="name"
          value={user.name}
          onChange={handleTextChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="guest@youremail.com"
          id="email"
          value={user.email}
          onChange={handleTextChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Profile Pic</Form.Label>
        <Form.Control
          type="text"
          placeholder="add your link"
          id="profilepic"
          value={user.profilepic}
          onChange={handleTextChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>password</Form.Label>
        <Form.Control
          type="text"
          id="password"
          value={user.password}
          onChange={handleTextChange}
        />
      </Form.Group>
      <Form.Group >
        <Form.Label style={{ color: 'gold' }}>Membership</Form.Label>
        <Form.Check
          type="switch"
          id="membership"
          checked={user.membership}
          onChange={handleCheckboxChange}
        />
      </Form.Group>
      <br></br>
      <br></br>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

  )

}

export default UserNewForm;