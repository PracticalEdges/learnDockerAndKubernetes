import "./table.css";
import React from "react";
import PropTypes from "prop-types";

function Table(props) {
	const [selectedUserId, setSelectedUserId] = React.useState(null);

	const handelRowClick = (user) => {
		setSelectedUserId(user.id);
		props.setSelectedUser(user);
	};

	return (
		<>
			<div className="table-holder">
				<table className="table">
					<tbody>
					<tr>
						<th>Name</th>
						<th>Email</th>
						<th>Age</th>
						<th>Gender</th>
						<th>Bio</th>
					</tr>
					{props.users.length >= 1 && props.users.map((user) => {
						return (
							<tr
								key={user.id}
								onClick={() => {
									handelRowClick(user);
								}}
								className={
									user.id === selectedUserId ? "selected" : ""
								}
							>
								<td>{user.firstName}</td>
								<td>{user.email}</td>
								<td>{user.age}</td>
								<td>{user.bio}</td>
							</tr>
						);
					})}
					</tbody>
				</table>
			</div>
		</>
	);
}

Table.propTypes = {
	users: PropTypes.array,
	selectedUser: PropTypes.object || null,
	setSelectedUser: PropTypes.func,
};

export default Table;
