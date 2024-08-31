import "./home.css";
import Table from "../../components/table/table";
import { useState, useEffect } from "react";

function Home() {
	const [selectedUser, setSelectedUser] = useState(null);
	const [users, setUsers] = useState([]);
	const REACT_APP_API_URL = process.env.REACT_APP_BACKEND_URL;

	useEffect(() => {
		fetch(REACT_APP_API_URL + "/user/getAll")
			.then((res) => res.json())
			.then((data) => {
				setUsers(data);
			});
	}, [REACT_APP_API_URL, users]);

	return (
		<>
			<div className="btn-container">
				<button className="btn-user-add" onClick={() => {}}>
					Add Users
				</button>
				<button className="btn-user-modify" onClick={() => {}}>
					Modify Users
				</button>
			</div>
			<Table
				users={users}
				selectedUser={selectedUser}
				setSelectedUser={setSelectedUser}
			/>
		</>
	);
}

export default Home;
