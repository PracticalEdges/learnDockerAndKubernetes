import "./home.css";
import Table from "../../components/table/table";
import { useState, useEffect } from "react";
import AddUser from "../../components/add-user-form/add-user";
import ModifyUser from "../../components/modify-user-form/modify-user";

function Home() {
	const [selectedUser, setSelectedUser] = useState({id: 1});
	const [users, setUsers] = useState([]);
	const [isNotVisibleAddUser, setIsNotVisibleAddUser] = useState(true);
	const [isNotVisibleModifyUser, setIsNotVisibleModifyUser] = useState(true);
	const REACT_APP_API_URL = process.env.REACT_APP_BACKEND_URL;

	useEffect(() => {
		fetch(REACT_APP_API_URL + "/user/getAll")
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setUsers(data);
				setSelectedUser(data[0]);
			});
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<div className="btn-container">
				<button className="btn-user-add" onClick={() => {
					setIsNotVisibleAddUser(!isNotVisibleAddUser);
					setIsNotVisibleModifyUser(true);
				}}>
					Add Users
				</button>
				<button className="btn-user-modify" onClick={() => {
					setIsNotVisibleModifyUser(!isNotVisibleModifyUser);
					setIsNotVisibleAddUser(true);
				}}>
					Modify Users
				</button>
			</div>
			<AddUser isNotVisible={isNotVisibleAddUser} />
			<ModifyUser isNotVisible={isNotVisibleModifyUser} id={selectedUser.id}/>
			<Table
				users={users}
				selectedUser={selectedUser}
				setSelectedUser={setSelectedUser}
			/>
		</>
	);
}

export default Home;
