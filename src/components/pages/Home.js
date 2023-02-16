import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUser();
    }, []);


    const loadUser = async () => {
        const result = await axios.get("http://localhost:3003/users");
        console.log(result);
        setUsers(result.data)
    }

    return (
        <div className="container">
            <div className="py-4">
                <h1>Home</h1>

                <table class="table border shadow">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>

                        {users.map((user, index) => (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link class="btn btn-primary mr-2">View</Link>
                                    <Link class="btn btn-outline-primary mr-2">Edit</Link>
                                    <Link class="btn btn-danger">Delete</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>


            </div>
        </div>
    )
}

export default Home;
