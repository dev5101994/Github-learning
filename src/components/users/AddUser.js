import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
    let Navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""

    });

    const { name, username, email, phone, website } = user; //Destruction

    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    };

    const onSubmit = async e => {

        e.preventDefault();
        await axios.post("http://localhost:3003/users", user);
        Navigate("/")
    };
    return (
        <>
            <h1 >Add A User</h1>
            <br></br>
            <form onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <input type="text"
                        className="form-control form-control-lg "
                        placeholder="Enter your name"
                        name="name"
                        value={name}
                        onChange={e => onInputChange(e)}
                    />
                </div>
                <br></br>
                <div className="form-group">
                    <input type="text"
                        className="form-control form-control-lg "
                        placeholder="Enter your username"
                        name="username"
                        value={username}
                        onChange={e => onInputChange(e)}
                    />
                </div>
                <br></br>
                <div className="form-group">
                    <input type="text"
                        className="form-control form-control-lg "
                        placeholder="Enter your email"
                        name="email"
                        value={email}
                        onChange={e => onInputChange(e)}
                    />
                </div>
                <br></br>
                <div className="form-group">
                    <input type="text"
                        className="form-control form-control-lg "
                        placeholder="Enter your phone number"
                        name="phone"
                        value={phone}
                        onChange={e => onInputChange(e)}
                    />
                </div>
                <br></br>
                <div className="form-group">
                    <input type="text"
                        className="form-control form-control-lg "
                        placeholder="Enter your website name"
                        name="website"
                        value={website}
                        onChange={e => onInputChange(e)}
                    />
                </div>
            </form>
            <br></br>

            <button className="btn btn-primary btn-block">Add User</button>

        </>
    )
}

export default AddUser
