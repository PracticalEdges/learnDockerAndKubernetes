import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import "./modify-user.css";
import { set } from "lodash";

function ModifyUser(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("")
    const [gender, setGender] = useState("");
    const [bio, setBio] = useState("");

    const REACT_APP_API_URL = process.env.REACT_APP_BACKEND_URL;

    useEffect(() => {
        fetch(REACT_APP_API_URL + "/user/get/" + props.id.toString())
            .then((res) => res.json())
            .then((data) => {
                setName(data.name);
                setEmail(data.email);
                setPhone(data.phone);
                setGender(data.gender);
                setBio(data.bio);
            }).catch((error) => {
                console.error("Error fetching user", error);
            });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.id])

    const ModifyUser = (e) => {
        e.preventDefault();
        fetch(REACT_APP_API_URL + "/user/update/" + props.id.toString(), {
            method: "PUT",
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

    if (props.isNotVisible) return null

    return (
        <>
            <form className="mod-user-form" onSubmit={ModifyUser}>
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
                            defaultChecked={gender === 'male' ? true : false}
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
                            defaultChecked={gender === 'female' ? true : false}
                            onClick={
                                (e) => {
                                    setGender(e.target.value);
                                }
                            }
                        />
                        Female
                    </label>
                </div>

                <button type="submit">Modify User</button>
            </form>
        </>
    )
}

ModifyUser.propTypes = {
    isNotVisible: PropTypes.bool,
    id: PropTypes.number,
}

export default ModifyUser;