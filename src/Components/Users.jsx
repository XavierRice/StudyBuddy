import { useState, useEffect } from 'react'
import { Card, Accordion, AccordionItem } from 'react-bootstrap';
import { Link } from "react-router-dom"

const API = import.meta.env.VITE_BASE_URL;

function Users() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(`${API}/user`)
            .then((response) => {
                return response.json()
            })
            .then((responseJSON) => {
                setUsers(responseJSON)
            })
            .catch((error) => console.error(error))
    }, [])

    return (
        <div className='Users'>
            <Accordion>
                {users.map((user) => {
                    return (

                        <Accordion.Item eventKey={user.id.toString()}>
                            <Accordion.Header>{user.username}</Accordion.Header>
                            <Accordion.Body>
                                {user.name}
                                <br/>
                                {user.membership ? "🌟" : "BECOME A MEMEBER"}
                                <br/>
                                <Link to={`/users/${user.id}`}>✅</Link>
                            </Accordion.Body>
                        </Accordion.Item>
                    )
                })
                }
            </Accordion>
        </div>
    );

}

export default Users;




