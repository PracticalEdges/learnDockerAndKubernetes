import "./table.css";
import React from "react";
import PropTypes from "prop-types";

function Table(props) {
	return (
		<>
			<div className="table-holder">
				<table className="table">
					<tr>
						<th>Name</th>
						<th>Email</th>
						<th>Age</th>
						<th>Gender</th>
						<th>Bio</th>
					</tr>
					{props.users.map((user) => {
						return (
							<tr key={user.id} onClick={() => {
								props.setSelectedUser(user);
							}}>
								<td>{user.firstName}</td>
								<td>{user.email}</td>
								<td>{user.age}</td>
								<td>{user.bio}</td>
							</tr>
						);
					})}
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
