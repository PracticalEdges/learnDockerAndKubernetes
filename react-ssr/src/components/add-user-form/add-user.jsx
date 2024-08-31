import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import "./add-user.css";

function AddUser(props){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("")
    const [gender, setGender] = useState("");
    const [bio, setBio] = useState("");

    const REACT_APP_API_URL = process.env.REACT_APP_BACKEND_URL;

    const addUser = (e) => {
        e.preventDefault();
        fetch(REACT_APP_API_URL + "/user/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                email: email,
                phone: phone,
                gender: gender,
                bio: bio,
            }),
        })
    };

    if(props.isNotVisible) return null

    return (
        <>
            <form className="add-user-form"  onSubmit={addUser}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
                <input
                    type="text"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => {
                        setPhone(e.target.value);
                    }}
                />
                <input
                    type="text"
                    placeholder="bio"
                    value={bio}
                    onChange={(e) => {
                        setBio(e.target.value);
                    }}
                />
                <p>Choose a Gender</p>
                <div>
                    <label className="label-radio">
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            onClick={
                                (e) => {
                                    setGender(e.target.value);
                                }
                            }
                        />
                        Male
                    </label>
                    

                    <label className="label-radio">
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            onClick={
                                (e) => {
                                    setGender(e.target.value);
                                }
                            }
                        />
                        Female
                    </label>
                </div>

                <button type="submit">Add User</button>
            </form>
        </>
    )
}

AddUser.propTypes = {
    isNotVisible: PropTypes.bool,
}

export default AddUser;