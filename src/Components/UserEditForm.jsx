import { useState, useEffect } from "react";
import { useNavigate, useParams} from "react-router-dom";
import { Form, Button } from "react-bootstrap"

const API = import.meta.env.VITE_BASE_URL;


const UserEditFrom = () => {
 const { id } = useParams();
 const navigate = useNavigate();

 const [userError, setUserError] = useState(false);
 const [nameError, setNameError] = useState(false);
 const [emailError, setEmailError] = useState(false);
 const [passwordError, setPasswordError] = useState(false);
 const [picError, setPicError] = useState(false);

 const [user, setUser] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
    membership: false,
    profilepic: ""
 })

 useEffect( () => {
    const fetchedUser = async () => {
        try {
         const res = await fetch(`${API}/user/${id}`)
         if(!res.ok){
            throw new Error("failed to fetch user data")
         }
         const resJson = await res.json()
                    setUser(resJson)
                    
        } catch (error) {
            console.error(error)
        }
    };
    fetchedUser()
}, [id])


useEffect(()=> {
 if(!user.name){
    setNameError(true)
 }else{
    setNameError(false)
 }
if(!user.email){
    setEmailError(true)
}else{
    setEmailError(false)
}
if(!user.password){
    setPasswordError(true)
}else{
    setPasswordError(false)
}
if(!user.profilepic){
    setPicError(true)
}else{
    setPicError(false)
}
if(!user.username){
    setUserError(true)
}else{
    setUserError(false)
}
})

const handleTextChange = (event) => {
    setUser({ ...user, [event.target.id]: event.target.value });
  };

const handleCheckboxChange = () => {
    setUser({ ...user, membership: !user.membership });
  };

  const updateUser = async () => {
    try {
        const  res =  await fetch(`${API}/user/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
        if (!res.ok) {
            console.log("something up with the Fetch")
        }
        await res.json()
        console.log("it's goood")
        navigate(`/users/${id}`)
    } catch (error) {
        console.error(error)
    }
};

const handleSubmit = (event) => {
    event.preventDefault();
    updateUser();
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
       {nameError && <div className='error-message'>You Must Enter a User Name</div>}
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
      {userError && <div className='error-message'>You Must Enter a Real Name</div>}
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
      {emailError && <div className='error-message'>You Must Enter a Email</div>}
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
      {picError && <div className='error-message'>You Must Enter a pic link</div>}
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label>password</Form.Label>
      <Form.Control
        type="text"
        id="password"
        value={user.password}
        onChange={handleTextChange}
      />
      {passwordError && <div className='error-message'>You Must Enter a Password</div>}
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label style={{ color: 'gold' }} >Membership</Form.Label>
      <Form.Check
        type="checkbox"
        id="membership"
        value={user.membership}
        onChange={handleCheckboxChange}
      />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>

)


}

export default UserEditFrom;